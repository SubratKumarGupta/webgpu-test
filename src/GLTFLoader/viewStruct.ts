type LeafPaths<T, Prefix extends string = ""> = {
  [K in keyof T & (string | number)]: [T[K]] extends [OffsetAndType]
    ? `${Prefix}${K}` // If it's an OffsetAndType, stop recursing.
    : T[K] extends Record<string, any>
    ? LeafPaths<T[K], `${Prefix}${K}.`> // Otherwise, if it's an object, continue recursing.
    : `${Prefix}${K}`; // Otherwise, it's a leaf.
}[keyof T & (string | number)];

type wgslStructTypes = "Float32" | "Uint32" | "mat4x4<Float32>";
type OffsetAndType = { offset: number; type: wgslStructTypes };
type FieldPath = LeafPaths<typeof RenderViewsBuffer.FIELD_MAPPING>;
export class RenderViewsBuffer {
  public static readonly BYTE_SIZE = 224 as const;
  public ArrayBuffer: ArrayBuffer;
  private dataView: DataView;

  public static readonly FIELD_MAPPING = {
    viewProjection: { offset: 0, type: "mat4x4<Float32>" },
    inv_viewProjection: { offset: 64, type: "mat4x4<Float32>" },
    viewPlanes: {
      plane0: {
        A: { offset: 128, type: "Float32" },
        B: { offset: 132, type: "Float32" },
        C: { offset: 136, type: "Float32" },
        D: { offset: 140, type: "Float32" },
      },
      plane1: {
        A: { offset: 144, type: "Float32" },
        B: { offset: 148, type: "Float32" },
        C: { offset: 152, type: "Float32" },
        D: { offset: 156, type: "Float32" },
      },
      plane2: {
        A: { offset: 160, type: "Float32" },
        B: { offset: 164, type: "Float32" },
        C: { offset: 168, type: "Float32" },
        D: { offset: 172, type: "Float32" },
      },
      plane3: {
        A: { offset: 176, type: "Float32" },
        B: { offset: 180, type: "Float32" },
        C: { offset: 184, type: "Float32" },
        D: { offset: 188, type: "Float32" },
      },
      plane4: {
        A: { offset: 192, type: "Float32" },
        B: { offset: 196, type: "Float32" },
        C: { offset: 200, type: "Float32" },
        D: { offset: 204, type: "Float32" },
      },
      plane5: {
        A: { offset: 208, type: "Float32" },
        B: { offset: 212, type: "Float32" },
        C: { offset: 216, type: "Float32" },
        D: { offset: 220, type: "Float32" },
      },
    },
  } as const;

  constructor(size: number) {
    this.ArrayBuffer = new ArrayBuffer(size * RenderViewsBuffer.BYTE_SIZE);
    this.dataView = new DataView(this.ArrayBuffer);
  }

  private getFieldOffset(index: number, fieldPath: FieldPath): number {
    const fields = fieldPath.split(".");
    let field: any = RenderViewsBuffer.FIELD_MAPPING;
    for (const part of fields) {
      if (!(part in field)) {
        throw new Error(`Invalid field path: ${fieldPath}`);
      }
      field = field[part];
    }
    return index * RenderViewsBuffer.BYTE_SIZE + field.offset;
  }

  public get(
    meshletIndex: number,
    fieldPath: FieldPath
  ): number | Float32Array {
    const fields = fieldPath.split(".");
    let field: any = RenderViewsBuffer.FIELD_MAPPING;
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
      case "mat4x4<Float32>":
        return new Float32Array(
          this.ArrayBuffer.slice(byteOffset, byteOffset + 64)
        );

      default:
        throw new Error(`Unsupported type: ${field.type}`);
    }
  }

  public set(
    meshletIndex: number,
    fieldPath: FieldPath,
    value: number | Float32Array
  ): void {
    const fields = fieldPath.split(".");
    let field: any = RenderViewsBuffer.FIELD_MAPPING;
    for (const part of fields) {
      if (!(part in field)) {
        throw new Error(`Invalid field path: ${fieldPath}`);
      }
      field = field[part];
    }
    const byteOffset = this.getFieldOffset(meshletIndex, fieldPath);
    switch (field.type) {
      case "Float32":
        if (typeof value !== "number")
          throw new Error("Expected number for Float32");
        this.dataView.setFloat32(byteOffset, value, true);
        break;

      case "Uint32":
        if (typeof value !== "number")
          throw new Error("Expected number for Uint32");
        this.dataView.setUint32(byteOffset, value, true);
        break;

      case "mat4x4<Float32>":
        if (!(value instanceof Float32Array) || value.length !== 16) {
          throw new Error(
            "Expected Float32Array of length 16 for mat4x4<Float32>"
          );
        }
        new Float32Array(this.ArrayBuffer, byteOffset, 16).set(value);
        break;

      default:
        throw new Error(`Unsupported type: ${field.type}`);
    }
  }
  //   public getBufferSlice(index: number): ArrayBuffer {
  //     const byteOffset = index * ViewsBuffer.BYTE_SIZE;
  //     return this.ArrayBuffer.slice(
  //       byteOffset,
  //       byteOffset + ViewsBuffer.BYTE_SIZE
  //     );
  //   }

  //   public setBufferSlice(index: number, buffer: ArrayBuffer): void {
  //     if (buffer.byteLength !== ViewsBuffer.BYTE_SIZE) {
  //       throw new Error(
  //         `Buffer size mismatch: Expected ${ViewsBuffer.BYTE_SIZE} bytes, got ${buffer.byteLength} bytes.`
  //       );
  //     }
  //     const targetOffset = index * ViewsBuffer.BYTE_SIZE;
  //     new Uint8Array(this.ArrayBuffer).set(new Uint8Array(buffer), targetOffset);
  //   }
}
