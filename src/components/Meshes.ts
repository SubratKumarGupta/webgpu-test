import { GPUBufferGeometry } from "./BufferGeometry";
import { Euler, Quaternion, Vector3, Matrix4 } from "three";

const _xAxis = new Vector3(1, 0, 0);
const _yAxis = new Vector3(0, 1, 0);
const _zAxis = new Vector3(0, 0, 1);

export class GPUMesh {
  public rotation: Euler;
  public position: Vector3;
  public scale: Vector3;
  public quaternion: Quaternion;
  public modelMatrix: Matrix4;
  public name: string;
  public worldMatrix: Matrix4;
  constructor(readonly geometry: GPUBufferGeometry) {
    this.position = new Vector3(0, 0, 0);
    this.scale = new Vector3(1, 1, 1);
    this.rotation = new Euler(0, 0, 0);
    this.quaternion = new Quaternion().setFromEuler(this.rotation);
    this.modelMatrix = new Matrix4();
    this.updateModelMatrixFromTransforms();
    this.name = "";
    this.worldMatrix = new Matrix4();
  }
  public setWorldMatrix(matrix4: Matrix4) {
    this.worldMatrix = matrix4;
  }
  public setTransform(vec3: Vector3) {
    this.position = vec3;
    this.updateModelMatrixFromTransforms();
  }
  public setName(name: string) {
    this.name = name;
  }
  public setRotationsFromEuler(vec3: Euler) {
    this.rotation = vec3;
    this.quaternion = new Quaternion().setFromEuler(this.rotation);
    this.updateModelMatrixFromTransforms();
  }
  public setRotationsFromQuaternion(quaternion: Quaternion) {
    this.quaternion = quaternion;
    this.rotation.setFromQuaternion(this.quaternion);
    this.updateModelMatrixFromTransforms();
  }
  public SetScale(vec3: Vector3) {
    this.scale = vec3;
    this.updateModelMatrixFromTransforms();
  }
  public updateModelMatrixFromTransforms() {
    return this.modelMatrix.compose(this.position, this.quaternion, this.scale);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  public rotateOnAxis(axis: Vector3, angle: number) {
    // rotate object on axis in object space
    // axis is assumed to be normalized

    const quaternion = new Quaternion().setFromAxisAngle(axis, angle);
    this.quaternion.multiply(quaternion);
    this.updateModelMatrixFromTransforms();
  }
  public rotateY(angle: number) {
    this.rotateOnAxis(_yAxis, angle);
  }
  public rotateX(angle: number) {
    this.rotateOnAxis(_xAxis, angle);
  }
  public rotateZ(angle: number) {
    this.rotateOnAxis(_zAxis, angle);
  }
}
