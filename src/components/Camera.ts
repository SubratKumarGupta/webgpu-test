import { Euler, Quaternion, Vector3, Matrix4 } from "three";

export class GPUPerspectiveCamera {
  fov: number;
  aspect: number;
  near: number;
  far: number;
  position: Vector3;
  rotation: Euler;
  public projectionMatrix: Matrix4;
  public viewMatrix: Matrix4;
  public viewProjectionMatrix: Matrix4;

  constructor(fov: number, aspect: number, near: number, far: number) {
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.position = new Vector3(0, 0, 0);
    this.rotation = new Euler(0, 0, 0);

    this.projectionMatrix = new Matrix4();
    this.viewMatrix = new Matrix4();
    this.viewProjectionMatrix = new Matrix4();

    this.updateProjectionMatrix();
    this.updateViewMatrix();
  }

  setPosition(x: number, y: number, z: number): void {
    this.position.set(x, y, z);
    this.updateViewMatrix();
  }

  rotateY(angle: number): void {
    this.rotation.y += angle;
    this.updateViewMatrix();
  }
  lookAt(target: Vector3): void {
    // Create a temporary matrix using Three.js's lookAt method.
    // Note: Matrix4.lookAt produces a view matrix, so we invert it to obtain the world transform.
    const tempMatrix = new Matrix4();
    tempMatrix.lookAt(this.position, target, new Vector3(0, 1, 0));
    // tempMatrix.invert();
    // Extract the rotation from the computed world matrix
    this.rotation.setFromRotationMatrix(tempMatrix);
    this.updateViewMatrix();
  }
  updateViewMatrix(): void {
    // Compute the camera's world transformation matrix
    const cameraMatrix = new Matrix4();
    const quaternion = new Quaternion().setFromEuler(this.rotation);
    cameraMatrix.compose(this.position, quaternion, new Vector3(1, 1, 1));
    // The view matrix is the inverse of the camera's world matrix
    this.viewMatrix.copy(cameraMatrix).invert();
    this.updateViewProjectionMatrix();
  }

  updateProjectionMatrix(): void {
    // Convert fov from degrees to radians
    const fovRad = (this.fov * Math.PI) / 180;
    // Compute the dimensions of the near plane
    const top = this.near * Math.tan(fovRad / 2);
    const bottom = -top;
    const right = top * this.aspect;
    const left = -right;
    // Set the projection matrix using left, right, top, bottom, near, and far values
    this.projectionMatrix.makePerspective(
      left,
      right,
      top,
      bottom,
      this.near,
      this.far
    );
    this.updateViewProjectionMatrix();
  }

  updateViewProjectionMatrix(): void {
    this.viewProjectionMatrix.multiplyMatrices(
      this.projectionMatrix,
      this.viewMatrix
    );
  }

  getMatrix(): Matrix4 {
    return this.viewProjectionMatrix;
  }
}
