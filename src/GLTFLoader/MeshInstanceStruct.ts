import { Transforms } from "../components/RendererUtils/ClustredScene";

type LeafPaths<T, Prefix extends string = ""> = {
  [K in keyof T & (string | number)]: [T[K]] extends [OffsetAndType]
    ? `${Prefix}${K}` // If it's an OffsetAndType, stop recursing.
    : T[K] extends Record<string, any>
    ? LeafPaths<T[K], `${Prefix}${K}.`> // Otherwise, if it's an object, continue recursing.
    : `${Prefix}${K}`; // Otherwise, it's a leaf.
}[keyof T & (string | number)];

type wgslStructTypes = "Float32" | "Uint32";
type OffsetAndType = { offset: number; type: wgslStructTypes };
type FieldPath = LeafPaths<typeof MeshInstanceBuffer.FIELD_MAPPING>;

// Resulting type:
// "a.b.c" | "a.b.d" | "a.e" | "f"

export class MeshInstanceBuffer {
  public static readonly BYTE_SIZE = 48 as const;
  public ArrayBuffer: ArrayBuffer;
  private dataView: DataView;

  public static readonly FIELD_MAPPING = {
    rotation: {
      r0: { offset: 0, type: "Float32" },
      r1: { offset: 4, type: "Float32" },
      r2: { offset: 8, type: "Float32" },
      r3: { offset: 12, type: "Float32" },
    },
    position: {
      x: { offset: 16, type: "Float32" },
      y: { offset: 20, type: "Float32" },
      z: { offset: 24, type: "Float32" },
    },
    scale: {
      x: { offset: 28, type: "Float32" },
      y: { offset: 32, type: "Float32" },
      z: { offset: 36, type: "Float32" },
    },
    mehletCount: { offset: 40, type: "Uint32" },
    baseMeshletIndex: { offset: 44, type: "Uint32" },
  } as const;

  constructor(size: number) {
    this.ArrayBuffer = new ArrayBuffer(size * MeshInstanceBuffer.BYTE_SIZE);
    this.dataView = new DataView(this.ArrayBuffer);
  }

  private getFieldOffset(index: number, fieldPath: FieldPath): number {
    const fields = fieldPath.split(".");
    let field: any = MeshInstanceBuffer.FIELD_MAPPING;
    for (const part of fields) {
      if (!(part in field)) {
        throw new Error(`Invalid field path: ${fieldPath}`);
      }
      field = field[part];
    }
    return index * MeshInstanceBuffer.BYTE_SIZE + field.offset;
  }
  static getUpdateTransformPramas(index: number, transforms: Transforms) {
    const buffer = new Float32Array([
      transforms.rot[0],
      transforms.rot[1],
      transforms.rot[2],
      transforms.rot[3],

      transforms.pos[0],
      transforms.pos[1],
      transforms.pos[2],

      transforms.scale[0],
      transforms.scale[1],
      transforms.scale[2],
    ]);
    return {
      buffer,
      offset: index * MeshInstanceBuffer.BYTE_SIZE, //field.offset offset is 0
    };
  }

  public get(meshletIndex: number, fieldPath: FieldPath): number {
    const fields = fieldPath.split(".");
    let field: any = MeshInstanceBuffer.FIELD_MAPPING;
    for (const part of fields) {
      if (!(part in field)) {
        throw new Error(`Invalid field path: ${fieldPath}`);
      }
      field = field[part];
    }
    const byteOffset = this.getFieldOffset(meshletIndex, fieldPath);
    switch (field.type) {
      case "Float32":
        return this.dataView.getFloat32(byteOffset, true);
      case "Uint32":
        return this.dataView.getUint32(byteOffset, true);
      default:
        throw new Error(`Unsupported type: ${field.type}`);
    }
  }

  public set(meshletIndex: number, fieldPath: FieldPath, value: number): void {
    const fields = fieldPath.split(".");
    let field: any = MeshInstanceBuffer.FIELD_MAPPING;
    for (const part of fields) {
      if (!(part in field)) {
        throw new Error(`Invalid field path: ${fieldPath}`);
      }
      field = field[part];
    }
    const byteOffset = this.getFieldOffset(meshletIndex, fieldPath);
    switch (field.type) {
      case "Float32":
        this.dataView.setFloat32(byteOffset, value, true);
        break;
      case "Uint32":
        this.dataView.setUint32(byteOffset, value, true);
        break;
      default:
        throw new Error(`Unsupported type: ${field.type}`);
    }
  }
  public getBufferSlice(index: number): ArrayBuffer {
    const byteOffset = index * MeshInstanceBuffer.BYTE_SIZE;
    return this.ArrayBuffer.slice(
      byteOffset,
      byteOffset + MeshInstanceBuffer.BYTE_SIZE
    );
  }

  public setBufferSlice(index: number, buffer: ArrayBuffer): void {
    if (buffer.byteLength !== MeshInstanceBuffer.BYTE_SIZE) {
      throw new Error(
        `Buffer size mismatch: Expected ${MeshInstanceBuffer.BYTE_SIZE} bytes, got ${buffer.byteLength} bytes.`
      );
    }
    const targetOffset = index * MeshInstanceBuffer.BYTE_SIZE;
    new Uint8Array(this.ArrayBuffer).set(new Uint8Array(buffer), targetOffset);
  }
}
