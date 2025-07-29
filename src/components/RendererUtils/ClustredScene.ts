import { MeshletsBuffer } from "../../GLTFLoader/mehletStruct";

export type Transforms = {
  pos: [number, number, number];
  rot: [number, number, number, number];
  scale: [number, number, number];
};

export type ClusterMesh = {
  UID: number;
  name: string;
  worldTransforms: Transforms;
  Local: Transforms | null;
  geometries_ref: number[];
};

export type ClustredGeometry = {
  UID: number;
  clustredVertexBuffer: Float32Array;
  clustredTrianglesIndices: Uint16Array;
  meshletCount: number;
  meshletMetadataBuffer: MeshletsBuffer;
};

export function composeMat4x4(
  position: Transforms["pos"],
  quaternion: Transforms["rot"],
  scale: Transforms["scale"]
) {
  const te = [];

  const x = quaternion[0],
    y = quaternion[1],
    z = quaternion[2],
    w = quaternion[3];
  const x2 = x + x,
    y2 = y + y,
    z2 = z + z;
  const xx = x * x2,
    xy = x * y2,
    xz = x * z2;
  const yy = y * y2,
    yz = y * z2,
    zz = z * z2;
  const wx = w * x2,
    wy = w * y2,
    wz = w * z2;

  const sx = scale[0],
    sy = scale[1],
    sz = scale[2];

  te[0] = (1 - (yy + zz)) * sx;
  te[1] = (xy + wz) * sx;
  te[2] = (xz - wy) * sx;
  te[3] = 0;

  te[4] = (xy - wz) * sy;
  te[5] = (1 - (xx + zz)) * sy;
  te[6] = (yz + wx) * sy;
  te[7] = 0;

  te[8] = (xz + wy) * sz;
  te[9] = (yz - wx) * sz;
  te[10] = (1 - (xx + yy)) * sz;
  te[11] = 0;

  te[12] = position[0];
  te[13] = position[1];
  te[14] = position[2];
  te[15] = 1;

  return te;
}

export class ClustredScene {
  public meshes: ClusterMesh[] = [];
  public geometry: ClustredGeometry[] = [];

  constructor() {}
  public loadMesh(meshInfo: { worldTransforms: Transforms; name: string }) {
    const uid = this.meshes.length;
    this.meshes[uid] = {
      name: meshInfo.name,
      geometries_ref: [],
      Local: null,
      worldTransforms: meshInfo.worldTransforms,
      UID: uid,
    };
    return uid;
  }
  public addGeometrytoMesh(meshUID: number, geometryUID: number) {
    const mesh = this.meshes[meshUID];
    const geometry = this.meshes[geometryUID];

    if (!mesh) {
      throw Error(`mesh ${meshUID} with this uid does not exgist`);
    }
    if (!mesh) {
      throw Error(`geometry ${geometryUID} with this uid does not exgist`);
    }
    mesh.geometries_ref.push(geometry.UID);
  }
  public loadGeometry(
    geometryInfo: {
      clustredVertexBuffer: Float32Array;
      clustredTrianglesIndices: Uint16Array;
      meshletCount: number;
      meshletMetadataBuffer: MeshletsBuffer;
    },
    meshUID?: number
  ) {
    const uid = this.geometry.length;
    const geometry = {
      UID: uid,
      ...geometryInfo,
    };
    this.geometry[uid] = geometry;
    if (meshUID !== undefined) {
      this.addGeometrytoMesh(meshUID, uid);
    }
    return uid;
  }
}
