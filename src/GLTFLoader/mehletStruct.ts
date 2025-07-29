type LeafPaths<T, Prefix extends string = ""> = {
  [K in keyof T & (string | number)]: [T[K]] extends [OffsetAndType]
    ? `${Prefix}${K}` // If it's an OffsetAndType, stop recursing.
    : T[K] extends Record<string, any>
    ? LeafPaths<T[K], `${Prefix}${K}.`> // Otherwise, if it's an object, continue recursing.
    : `${Prefix}${K}`; // Otherwise, it's a leaf.
}[keyof T & (string | number)];

type wgslStructTypes = "Float32" | "Uint32";
type OffsetAndType = { offset: number; type: wgslStructTypes };
type FieldPath = LeafPaths<typeof MeshletsBuffer.FIELD_MAPPING>;
export class MeshletsBuffer {
  public static readonly BYTE_SIZE = 32 as const;
  public ArrayBuffer: ArrayBuffer;
  private dataView: DataView;

  public static readonly FIELD_MAPPING = {
    boundingSphere: {
      center_x: { offset: 0, type: "Float32" },
      center_y: { offset: 4, type: "Float32" },
      center_z: { offset: 8, type: "Float32" },
      radius: { offset: 12, type: "Float32" },
    },
    vertexAndIndexCount: { offset: 16, type: "Uint32" },
    vertexOffset: { offset: 20, type: "Uint32" },
    indexOffset: { offset: 24, type: "Uint32" },
    instanceIndex: { offset: 28, type: "Uint32" },
  } as const;

  constructor(size: number) {
    this.ArrayBuffer = new ArrayBuffer(size * MeshletsBuffer.BYTE_SIZE);
    this.dataView = new DataView(this.ArrayBuffer);
  }

  private getFieldOffset(index: number, fieldPath: FieldPath): number {
    const fields = fieldPath.split(".");
    let field: any = MeshletsBuffer.FIELD_MAPPING;
    for (const part of fields) {
      if (!(part in field)) {
        throw new Error(`Invalid field path: ${fieldPath}`);
      }
      field = field[part];
    }
    return index * MeshletsBuffer.BYTE_SIZE + field.offset;
  }

  public get(meshletIndex: number, fieldPath: FieldPath): number {
    const fields = fieldPath.split(".");
    let field: any = MeshletsBuffer.FIELD_MAPPING;
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
    let field: any = MeshletsBuffer.FIELD_MAPPING;
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
    const byteOffset = index * MeshletsBuffer.BYTE_SIZE;
    return this.ArrayBuffer.slice(
      byteOffset,
      byteOffset + MeshletsBuffer.BYTE_SIZE
    );
  }

  public setBufferSlice(index: number, buffer: ArrayBuffer): void {
    if (buffer.byteLength !== MeshletsBuffer.BYTE_SIZE) {
      throw new Error(
        `Buffer size mismatch: Expected ${MeshletsBuffer.BYTE_SIZE} bytes, got ${buffer.byteLength} bytes.`
      );
    }
    const targetOffset = index * MeshletsBuffer.BYTE_SIZE;
    new Uint8Array(this.ArrayBuffer).set(new Uint8Array(buffer), targetOffset);
  }
}
