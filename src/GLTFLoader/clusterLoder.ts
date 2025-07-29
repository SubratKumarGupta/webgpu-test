import { WebIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { Bounds, MeshletBuffers, MeshoptClusterizer } from "meshoptimizer";
import { ClustredScene } from "../components/RendererUtils/ClustredScene";
import { MeshletsBuffer } from "./mehletStruct";
import { RenderViewsBuffer } from "./viewStruct";

//

function CreateBoundsArray(Clusterbounds: Bounds[]): Float32Array {
  if (!Array.isArray(Clusterbounds)) {
    Clusterbounds = [Clusterbounds];
  }
  const meshletBounds = new Float32Array(Clusterbounds.length * 4);
  for (let i = 0; i < Clusterbounds.length; i++) {
    const index = i;
    const bound = Clusterbounds[index];

    meshletBounds[index * 4 + 0] = bound.centerX;
    meshletBounds[index * 4 + 1] = bound.centerY;
    meshletBounds[index * 4 + 2] = bound.centerZ;
    meshletBounds[index * 4 + 3] = bound.radius;
  }
  return meshletBounds;
}

export function extractMeshlet(
  meshlets: Uint32Array,
  vertices: Uint32Array,
  triangles: Uint8Array,
  index: number
) {
  const vertex_offset = meshlets[index * 8 + 0];
  const triangle_offset = meshlets[index * 8 + 1];
  const vertex_count = meshlets[index * 8 + 2];
  const triangle_count = meshlets[index * 8 + 3];

  return {
    vertices: vertices.subarray(vertex_offset, vertex_offset + vertex_count),
    triangles: triangles.subarray(
      triangle_offset,
      triangle_offset + triangle_count * 3
    ),
  };
}

// function extractMeshlet(buffers: MeshletBuffers, index: number) {
//   const vertex_offset = buffers.meshlets[index * 8 + 0];
//   const triangle_offset = buffers.meshlets[index * 8 + 1];
//   const vertex_count = buffers.meshlets[index * 8 + 2];
//   const triangle_count = buffers.meshlets[index * 8 + 3];

//   const centerX = buffers.meshlets[index * 8 + 4];
//   const centerY = buffers.meshlets[index * 8 + 5];
//   const centerZ = buffers.meshlets[index * 8 + 6];
//   const radius = buffers.meshlets[index * 8 + 7];

//   return {
//     vertices: buffers.vertices.subarray(
//       vertex_offset,
//       vertex_offset + vertex_count
//     ),
//     triangles: buffers.triangles.subarray(
//       triangle_offset,
//       triangle_offset + triangle_count * 3
//     ),
//     sphereiclBounds: {
//       centerX,
//       centerY,
//       centerZ,
//       radius,
//     },
//   };
// }

const io = new WebIO({ credentials: "include" });
io.registerExtensions(ALL_EXTENSIONS);
// Read and optimize geometry with clustering
export async function ClusterLoader(path: string) {
  const document = await io.read(path); // Load GLTF document
  const scene = new ClustredScene();
  document
    .getRoot()
    .listNodes()
    .forEach((node) => {
      const mesh = node.getMesh();
      if (!mesh) return;
      const name = mesh.getName();
      const translation = node.getWorldTranslation();
      const rotation = node.getWorldRotation();
      const scale = node.getWorldScale();
      const meshId = scene.loadMesh({
        name: name,
        worldTransforms: {
          pos: translation,
          rot: rotation,
          scale: scale,
        },
      });

      mesh.listPrimitives().forEach((primitive) => {
        const validOut = (() => {
          let indices = primitive.getIndices()?.getArray();
          const positions = primitive.getAttribute("POSITION")?.getArray();
          //   const positionsStride =
          //     primitive.getAttribute("POSITION").getComponentSize();
          //   console.log(
          //     positionsAcssor?.getByteLength(),
          //     positionsAcssor?.getElementSize(),
          //     positionsAcssor?.getComponentType(),
          //     positionsAcssor?.getComponentSize(),
          //     "ClusterLoader"
          //   );
          if (!indices || !positions) {
            console.error("no indices and or positions found");
            return;
          } // Skip if no index or position data
          if (
            !(indices instanceof Uint32Array) &&
            !(indices instanceof Uint16Array)
          ) {
            console.error(
              "un sapoorted indices type, can only be Uint32Array Uint16Array "
            );
            return;
          }

          if (indices instanceof Uint16Array) {
            indices = new Uint32Array(indices); // Convert to Uint32Array
          }

          if (!(positions instanceof Float32Array)) {
            console.error("un sapoorted positions type, can only be positions");
            return;
          }

          return { indices, positions };
        })();
        if (!validOut) return;
        const { indices /*Uint32Array*/, positions /* Float32Array*/ } =
          validOut;

        const maxClusterSize = 64; // Number of vertices per cluster
        const maxClusterTriangles = 124; // Number of triangles per cluster

        const stride = 3;
        // Prepare output buffers
        const meshletbuffer = MeshoptClusterizer.buildMeshlets(
          indices,
          positions,
          stride,
          maxClusterSize,
          maxClusterTriangles
        );

        let Clusterbounds = MeshoptClusterizer.computeMeshletBounds(
          meshletbuffer,
          positions,
          stride
        );
        if (!Array.isArray(Clusterbounds)) {
          Clusterbounds = [Clusterbounds];
        }
        function getpaddedIndexCount(uin8ByteLength: number) {
          const elementSize = Uint16Array.BYTES_PER_ELEMENT;
          const originalByteLength = uin8ByteLength * elementSize;
          const paddingBytes = originalByteLength % 4 ? 2 : 0;
          const paddedIndexCount =
            (originalByteLength + paddingBytes) / elementSize;
          return paddedIndexCount;
        }
        // Reset accumulators for offsets
        let totalVertexCount = 0;
        let totalIndexCount = 0;
        for (let i = 0; i < meshletbuffer.meshletCount; i++) {
          const meshlet = MeshoptClusterizer.extractMeshlet(meshletbuffer, i);
          totalVertexCount += meshlet.vertices.length * stride;
          totalIndexCount += getpaddedIndexCount(meshlet.triangles.length);
        }

        // Allocate one big buffer for positions and one for indices.
        const ClusterdGeometrieVertexPositions = new Float32Array(
          totalVertexCount
        );
        const ClusterdGeometrieIndices = new Uint16Array(totalIndexCount);

        // Create a MeshletsBuffer to store per-meshlet metadata (e.g., offsets, bounding spheres, counts)
        const meshletBuffer = new MeshletsBuffer(meshletbuffer.meshletCount);
        // If you plan to pack vertex and index data into one big buffer later,
        // these accumulators track where each meshlet’s data starts.
        let vertexOffsetAcc = 0;
        let indexOffsetAcc = 0;

        for (let index = 0; index < meshletbuffer.meshletCount; index++) {
          const meshlet = MeshoptClusterizer.extractMeshlet(
            meshletbuffer,
            index
          );

          for (let i = 0; i < meshlet.vertices.length; i++) {
            const vertexIndex = meshlet.vertices[i];
            // Copy the 3 components (adjust if you have more attributes)
            ClusterdGeometrieVertexPositions[vertexOffsetAcc + i * stride + 0] =
              positions[vertexIndex * stride + 0];
            ClusterdGeometrieVertexPositions[vertexOffsetAcc + i * stride + 1] =
              positions[vertexIndex * stride + 1];
            ClusterdGeometrieVertexPositions[vertexOffsetAcc + i * stride + 2] =
              positions[vertexIndex * stride + 2];
          }

          for (let i = 0; i < meshlet.triangles.length; i++) {
            ClusterdGeometrieIndices[indexOffsetAcc + i] = meshlet.triangles[i];
          }

          // --- Update meshlet metadata ---
          // Assume Clusterbounds[index] holds the bounding sphere info for the current meshlet.
          const bounds = Clusterbounds[index];
          console.log(bounds, "SDcdnjkcsaA");
          meshletBuffer.set(index, "boundingSphere.center_x", bounds.centerX);
          meshletBuffer.set(index, "boundingSphere.center_y", bounds.centerY);
          meshletBuffer.set(index, "boundingSphere.center_z", bounds.centerZ);
          meshletBuffer.set(index, "boundingSphere.radius", bounds.radius);

          const vertexCount = meshlet.vertices.length * stride;
          const indexCount = getpaddedIndexCount(meshlet.triangles.length);
          // Pack vertex and index counts into a single 32-bit integer

          const packedCounts = (indexCount << 16) | vertexCount;
          console.log(indexCount, vertexCount, "vertexAndIndexCount ORI");
          meshletBuffer.set(index, "vertexAndIndexCount", indexCount);

          console.log(vertexOffsetAcc, "indexOffset ORI");

          // Set the offsets before updating the accumulators.
          meshletBuffer.set(index, "vertexOffset", vertexOffsetAcc);
          meshletBuffer.set(index, "indexOffset", indexOffsetAcc);
          meshletBuffer.set(index, "instanceIndex", 0);

          // --- Update global offset accumulators ---
          vertexOffsetAcc += vertexCount;
          indexOffsetAcc += indexCount;

          {
          }
        }

        // const padding = (4 - (indexData.byteLength % 4)) % 4;
        // const paddedIndexData = new Uint8Array(indexData.byteLength + padding);

        // // Copy the original index data into the padded array
        // paddedIndexData.set(new Uint8Array(indexData.buffer));
        // const int16 = new Uint16Array(paddedIndexData);

        // const decodedvert = new Float32Array(vertices);
        // console.log(meshlet.vertices.length * 3, meshletVertexPositions.length);

        const GeoID = scene.loadGeometry(
          {
            clustredVertexBuffer: ClusterdGeometrieVertexPositions,
            clustredTrianglesIndices: ClusterdGeometrieIndices,
            meshletCount: meshletbuffer.meshletCount,
            meshletMetadataBuffer: meshletBuffer,
          },
          meshId
        );
        const geo = scene.geometry[GeoID];
        for (let i = 0; i < geo.meshletCount; i++) {
          console.log(
            geo.meshletMetadataBuffer.get(i, "vertexOffset"),
            "indexOffset COPY"
          );
        }
      });
    });

  console.log(scene, await io.writeJSON(document));

  return {
    Scene: scene,
    return: await io.writeJSON(document),
  };
}

// -----,-----,--
// -----,--
// 0 , 0
// 4 , null
// 8 , 4
