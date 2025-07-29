import { WebIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { MeshoptClusterizer } from "meshoptimizer";
import { GPUBufferGeometry } from "../components/BufferGeometry";
import { GPUMesh } from "../components/Meshes";
import { Matrix4, Quaternion, Vector3 } from "three";

const io = new WebIO({ credentials: "include" });
io.registerExtensions(ALL_EXTENSIONS);
// Read.

export async function Loader(path: string) {
  const document = await io.read(path); // → Document
  const Meshes: GPUMesh[] = [];
  // const geos = document
  //   .getRoot()
  //   .listMeshes()
  //   .map((e) => {
  //     return e.listPrimitives().map((e) => {
  //       const indices = e.getIndices()?.getArray();
  //       const geometry = new GPUBufferGeometry(indices as Uint16Array);
  //       const mesh = new GPUMesh(geometry);

  //       console.log(e.getMode());
  //       const semantics = e.listSemantics();
  //       const attributes = e.listAttributes()!.map((e, i) => {
  //         geometry.addAttrubute(semantics[i], e.getArray() as Float32Array);
  //       });
  //       return geometry;
  //     });
  //   });
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
      const worldMatrix = node.getWorldMatrix();
      console.log(scale, translation, rotation, worldMatrix, "fdhj");
      mesh.listPrimitives().forEach((primitive) => {
        const indices = primitive.getIndices()?.getArray();
        const geometry = new GPUBufferGeometry(indices as Uint16Array);
        const mesh = new GPUMesh(geometry);

        mesh.setName(name),
          mesh.setRotationsFromQuaternion(new Quaternion(...rotation));
        mesh.setTransform(new Vector3(...translation));
        mesh.SetScale(new Vector3(...scale));
        mesh.setWorldMatrix(new Matrix4());
        const semantics = primitive.listSemantics();
        primitive.listAttributes()!.forEach((e, i) => {
          geometry.addAttrubute(semantics[i], e.getArray() as Float32Array);
        });
        Meshes.push(mesh);
      });
    });
  console.log(Meshes, await io.writeJSON(document));

  return {
    Meshes: Meshes,
    return: await io.writeJSON(document),
  };
}

// Write.
// const glb = await io.writeBinary(document); // Document → Uint8Array
