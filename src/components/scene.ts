import { GPUMesh } from "./Meshes";

class GPUScene {
  meshes: GPUMesh[];

  constructor() {
    this.meshes = [];
  }

  add(meshes: GPUMesh[]) {
    this.meshes.push(...meshes);
  }
}
