import { Scene } from "@gltf-transform/core";
import { GPUMesh } from "../Meshes";
import { GPURenderer } from "../Renderer";
import { ClusterMesh, ClustredGeometry, ClustredScene } from "./ClustredScene";
import { extractMeshlet } from "../../GLTFLoader/clusterLoder";
import { MeshoptClusterizer } from "meshoptimizer";
import { MeshletsBuffer } from "../../GLTFLoader/mehletStruct";
import { MeshInstanceBuffer } from "../../GLTFLoader/MeshInstanceStruct";

export const VertexAttributeStride = {
  position: 3,
  normal: 3,
  TANGENT: 4,
  uv: 2,
  TEXCOORD_1: 2,
  color: 4,
  joints0: 4,
  weights0: 4,
  joints1: 4,
  weights1: 4,
  vIndex: 1,
  weight: 1,
  a_morphPositions_0: 3,
} as const;
export const VertexAttributeSize = {
  u32: 1,
  f32: 1,
  "vec2<f32>": 2,
  "vec3<f32>": 3,
  "vec4<f32>": 4,
  float32: 1,
  float32x2: 2,
  float32x3: 3,
  float32x4: 4,
} as const;

export type GPU_Geometry = {
  indexLen: number;
  vertexbuffer: GPUBuffer;
  indexBuffer: GPUBuffer;
};
export type GeometryInfo = {
  geometry: ClustredGeometry;
  mesh: ClusterMesh;
};

export class GeometryManager {
  public Geometries: GPU_Geometry[] = [];
  public meshGeometryArray: GeometryInfo[] = [];
  private device: GPUDevice;
  constructor(readonly renderer: GPURenderer) {
    this.device = renderer.device;
  }

  public CreateUnifiedClustedData(scene: ClustredScene) {
    [...scene.meshes].forEach((mesh) => {
      mesh.geometries_ref.forEach((geoID) => {
        const geometry = scene.geometry[geoID];
        if (!geometry) {
          throw Error("no geometry found");
        }
        console.log(geometry);
        this.meshGeometryArray.push({
          geometry: geometry,
          mesh: mesh,
        });
      });
    });

    //combine buffers
    // pass 0
    let meshletCount = 0;
    let triangleIndicesSize = 0;
    let vertexBufferSize = 0;
    for (let i = 0; i < this.meshGeometryArray.length; i++) {
      const geometry = this.meshGeometryArray[i].geometry;
      meshletCount += geometry.meshletCount;
      triangleIndicesSize += geometry.clustredTrianglesIndices.length;
      vertexBufferSize += geometry.clustredVertexBuffer.length;
    }

    // pass 1
    const CombinedTriangleIndices = new Uint16Array(triangleIndicesSize);
    const CombinedVertexBuffer = new Float32Array(vertexBufferSize);
    const CombinedMeshletMetadataBuffer = new MeshletsBuffer(meshletCount);
    const combinedMeshInstanceBuffer = new MeshInstanceBuffer(
      scene.meshes.length
    );

    let globalVertexAcc = 0; // in number of floats
    let globalIndexAcc = 0; // in number of indices
    let globalMeshletAcc = 0; // counter for meshlets
    for (let i = 0; i < this.meshGeometryArray.length; i++) {
      const index = i;
      const geometry = this.meshGeometryArray[index].geometry;
      const mesh = this.meshGeometryArray[index].mesh;

      combinedMeshInstanceBuffer.set(
        index,
        "mehletCount",
        geometry.meshletCount
      );
      combinedMeshInstanceBuffer.set(
        index,
        "baseMeshletIndex",
        globalMeshletAcc
      );
      console.log(index, geometry.meshletCount, globalMeshletAcc);

      // --- Copy vertex buffer ---
      CombinedVertexBuffer.set(geometry.clustredVertexBuffer, globalVertexAcc);
      // --- Copy triangle indices ---
      CombinedTriangleIndices.set(
        geometry.clustredTrianglesIndices,
        globalIndexAcc
      );

      for (
        let meshletIndex = 0;
        meshletIndex < geometry.meshletCount;
        meshletIndex++
      ) {
        CombinedMeshletMetadataBuffer.setBufferSlice(
          globalMeshletAcc,
          geometry.meshletMetadataBuffer.getBufferSlice(meshletIndex)
        );
        // Read original offsets from this geometry's meshlet metadata.
        // These offsets are relative to the geometry's own vertex and index buffers.
        const localVertexOffset = geometry.meshletMetadataBuffer.get(
          meshletIndex,
          "vertexOffset"
        );
        const localIndexOffset = geometry.meshletMetadataBuffer.get(
          meshletIndex,
          "indexOffset"
        );

        // The new offsets are the original offsets plus the current global accumulators.
        const combinedVertexOffset = globalVertexAcc + localVertexOffset;
        const combinedIndexOffset = globalIndexAcc + localIndexOffset;

        // Set the updated offsets into the combined meshlet metadata buffer.
        CombinedMeshletMetadataBuffer.set(
          globalMeshletAcc,
          "vertexOffset",
          combinedVertexOffset
        );
        CombinedMeshletMetadataBuffer.set(
          globalMeshletAcc,
          "indexOffset",
          combinedIndexOffset
        );

        // Copy any additional metadata fields as required.
        // For instance, instanceIndex might be set to 0 or updated as needed:
        CombinedMeshletMetadataBuffer.set(
          globalMeshletAcc,
          "instanceIndex",
          mesh.UID
        );

        globalMeshletAcc++; // Move to next meshlet slot in the combined buffer.
      }

      globalVertexAcc += geometry.clustredVertexBuffer.length;
      globalIndexAcc += geometry.clustredTrianglesIndices.length;
    }

    // const index = 2;
    // const IO = geo.meshletMetadataBuffer.get(index, "indexOffset");
    // const VO = geo.meshletMetadataBuffer.get(index, "vertexOffset");
    // const IVC = geo.meshletMetadataBuffer.get(index, "vertexAndIndexCount");
    // const indexCount = IVC >> 16; // Extract the upper 16 bits// indexCount
    // const vertexCount = IVC & 0xffff; // Extract the lower 16 bits // vertexCount

    // console.log(IO, VO, IVC, indexCount, vertexCount, "vertexAndIndexCount");

    // const { triangles, vertices } = extractMeshlet(
    //   geo.meshletOffsetsBuffer,
    //   geo.clustredVertexBuffer,
    //   geo.clustredTrianglesIndices,
    //   0
    // );
    const { indexBuffer, vertexbuffer } = this.allocateGeometry(
      CombinedVertexBuffer,
      CombinedTriangleIndices
    );
    return {
      globalMeshletCount: globalMeshletAcc,
      GPUTriangleIndices: indexBuffer,
      GPUVertexBuffer: vertexbuffer,
      CombinedMeshletMetadataBuffer,
      combinedMeshInstanceBuffer,
    };
    //  { triangles, vertices };
  }
  public allocateGeometry(vertices: Float32Array, indices: Uint16Array) {
    return {
      indexBuffer: this.allocateIndex(indices),
      vertexbuffer: this.allocateVertex(vertices),
      indexLen: indices.length,
    };
  }
  private allocateVertex(vertices: Float32Array) {
    const vertexBuffer = this.device.createBuffer({
      label: "buffervert",
      size: vertices.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true,
    });
    new Float32Array(vertexBuffer.getMappedRange()).set(vertices);
    vertexBuffer.unmap();
    return vertexBuffer;
  }
  private allocateIndex(indices: Uint16Array) {
    console.log(indices);
    const indexBuffer = this.device.createBuffer({
      label: "bufferindex",
      size: indices.byteLength,
      usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true,
    });
    new Uint16Array(indexBuffer.getMappedRange()).set(indices);
    indexBuffer.unmap();
    return indexBuffer;
  }
}
