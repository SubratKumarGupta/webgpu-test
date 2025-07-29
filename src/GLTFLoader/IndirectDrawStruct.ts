type LeafPaths<T, Prefix extends string = ""> = {
  [K in keyof T & (string | number)]: [T[K]] extends [OffsetAndType]
    ? `${Prefix}${K}` // If it's an OffsetAndType, stop recursing.
    : T[K] extends Record<string, any>
    ? LeafPaths<T[K], `${Prefix}${K}.`> // Otherwise, if it's an object, continue recursing.
    : `${Prefix}${K}`; // Otherwise, it's a leaf.
}[keyof T & (string | number)];

type wgslStructTypes = "Float32" | "Uint32";
type OffsetAndType = { offset: number; type: wgslStructTypes };
type FieldPath = LeafPaths<typeof DrawIndexedIndirectArgsBuffer.FIELD_MAPPING>;

// Resulting type:
// "a.b.c" | "a.b.d" | "a.e" | "f"

export class DrawIndexedIndirectArgsBuffer {
  public static readonly BYTE_SIZE = 20 as const;
  public ArrayBuffer: ArrayBuffer;
  private dataView: DataView;

  public static readonly FIELD_MAPPING = {
    indexCount: { offset: 0, type: "Uint32" },
    instanceCount: { offset: 4, type: "Uint32" },
    firstIndex: { offset: 8, type: "Uint32" },
    baseVertex: { offset: 12, type: "Uint32" },
    firstInstance: { offset: 16, type: "Uint32" },
  } as const;

  constructor(size: number) {
    this.ArrayBuffer = new ArrayBuffer(
      size * DrawIndexedIndirectArgsBuffer.BYTE_SIZE
    );
    this.dataView = new DataView(this.ArrayBuffer);
  }

  private getFieldOffset(index: number, fieldPath: FieldPath): number {
    const fields = fieldPath.split(".");
    let field: any = DrawIndexedIndirectArgsBuffer.FIELD_MAPPING;
    for (const part of fields) {
      if (!(part in field)) {
        throw new Error(`Invalid field path: ${fieldPath}`);
      }
      field = field[part];
    }
    return index * DrawIndexedIndirectArgsBuffer.BYTE_SIZE + field.offset;
  }

  public get(meshletIndex: number, fieldPath: FieldPath): number {
    const fields = fieldPath.split(".");
    let field: any = DrawIndexedIndirectArgsBuffer.FIELD_MAPPING;
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
    let field: any = DrawIndexedIndirectArgsBuffer.FIELD_MAPPING;
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
}
