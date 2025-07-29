// Minimal 4x4 Matrix Math Functions (all matrices are in column-major order)
import { Vector3, PerspectiveCamera } from "three";
import { Loader } from "./GLTFLoader/loader.ts";
import { GPUPerspectiveCamera } from "./components/Camera.ts";
import { UniformTypeSize } from "./components/RendererUtils/UniformsManager.ts";
import { GPURenderer } from "./components/Renderer.ts";
import { GPUMesh } from "./components/Meshes.ts";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { ClusterLoader } from "./GLTFLoader/clusterLoder.ts";

const canvas = document.getElementById("webGPUCanvas") as HTMLCanvasElement;
const renderer = new GPURenderer(canvas);
await renderer.init();
const aspect = canvas.width / canvas.height;
const fov = 75;
const near = 0.1;
const far = 1000.0;

// Create projection and view matrices once (they remain constant)
const camera = new GPUPerspectiveCamera(fov, aspect, near, far);
const threeRefCamera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(30, 30, 0);
threeRefCamera.position.set(0, 5, 10);

camera.lookAt(new Vector3(0, 0, 0));
const scene = (await ClusterLoader("low_poly_forest.glb")).Scene;
console.log(scene, "ClusterLoader");

// const Meshes = (await Loader("low_poly_forest.glb")).Meshes;
// const ToRender: GPUMesh[] = [...Meshes];
// ToRender.forEach((mesh, i) => {
//   // mesh.scale.set(0.01, 0.01, 0.01);
//   // mesh.rotateX(Math.PI / 4);
//   // mesh.position.set(0, 0, 0);
//   // if (i === 0) {
//   // }
//   // if (i === 1) {
//   //   mesh.scale.set(0.1, 0.1, 0.1);
//   //   mesh.rotateX(Math.PI / 4);
//   //   mesh.position.set(0, 0, 0);
//   // }
//   // if (i === 2) {
//   //   mesh.scale.set(0.1, 0.1, 0.1);
//   //   mesh.rotateX(Math.PI / 4);
//   //   mesh.position.set(0, 0, 0);
//   // }
// });
const orbitControles = new OrbitControls(threeRefCamera, canvas);
// orbitControles.autoRotate = true;
renderer.initObjectsRender(scene, camera);

let angle = 0;
const radius = 30; // Distance from the center

let rotation = 0;
async function frame() {
  orbitControles.update();
  angle += Math.PI / 600; // Adjust speed of rotation
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  camera.position.copy(threeRefCamera.position); // Move the camera in a circular path
  camera.rotation.copy(threeRefCamera.rotation);
  camera.updateViewMatrix();
  // camera.lookAt(new Vector3(0, 10, 0)); // Keep looking at the center
  rotation = Math.PI / 60 / 10;
  // Model matrix: rotate around the Y axis

  // ToRender.forEach((mesh, i) => {
  //   // if (i === 1) {
  //   //   mesh.rotateY(rotation);
  //   // }
  //   // if (i === 2) {
  //   //   mesh.rotateZ(rotation);
  //   // }
  //   // if (i === 3) {
  //   //   mesh.rotateX(rotation);
  //   // }
  //   // mesh.rotateY(rotation);
  //   // mesh.rotateX(rotation);
  // });

  await renderer.render(camera);
  requestAnimationFrame(() => frame());

  // requestAnimationFrame(frame);
}
requestAnimationFrame(() => frame());

// requestAnimationFrame(await frame);
