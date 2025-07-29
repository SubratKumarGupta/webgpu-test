import { GPURenderer } from "../Renderer";

export const UniformTypeSize = {
  i32: [4, 4],
  u32: [4, 4],
  f32: [4, 4],
  f16: [2, 2],
  "atomic<u32>": [4, 4],
  "atomic<i32>": [4, 4],
  "vec2<i32>": [8, 8],
  "vec2<u32>": [8, 8],
  "vec2<f32>": [8, 8],
  "vec2<f16>": [4, 4],
  "vec3<i32>": [12, 16],
  "vec3<u32>": [12, 16],
  "vec3<f32>": [12, 16],
  "vec3<f16>": [6, 8],
  "vec4<i32>": [16, 16],
  "vec4<u32>": [16, 16],
  "vec4<f32>": [16, 16],
  "vec4<f16>": [8, 8],
  "mat2x2<f32>": [16, 8],
  "mat2x2<f16>": [8, 4],
  "mat3x2<f32>": [24, 8],
  "mat3x2<f16>": [12, 4],
  "mat4x2<f32>": [32, 8],
  "mat4x2<f16>": [16, 4],
  "mat2x3<f32>": [32, 16],
  "mat2x3<f16>": [16, 8],
  "mat3x3<f32>": [48, 16],
  "mat3x3<f16>": [24, 8],
  "mat4x3<f32>": [64, 16],
  "mat4x3<f16>": [32, 8],
  "mat2x4<f32>": [32, 16],
  "mat2x4<f16>": [16, 8],
  "mat3x4<f32>": [48, 16],
  "mat3x4<f16>": [24, 8],
  "mat4x4<f32>": [64, 16],
  "mat4x4<f16>": [32, 8],
} as const;

// type,size,align
// i32	4	4
// u32	4	4
// f32	4	4
// f16	2	2
// atomic<u32>	4	4
// atomic<i32>	4	4
// vec2<i32>	8	8
// vec2<u32>	8	8
// vec2<f32>	8	8
// vec2<f16>	4	4
// vec3<i32>	12	16
// vec3<u32>	12	16
// vec3<f32>	12	16
// vec3<f16>	6	8
// vec4<i32>	16	16
// vec4<u32>	16	16
// vec4<f32>	16	16
// vec4<f16>	8	8
// mat2x2<f32>	16	8
// mat2x2<f16>	8	4
// mat3x2<f32>	24	8
// mat3x2<f16>	12	4
// mat4x2<f32>	32	8
// mat4x2<f16>	16	4
// mat2x3<f32>	32	16
// mat2x3<f16>	16	8
// mat3x3<f32>	48	16
// mat3x3<f16>	24	8
// mat4x3<f32>	64	16
// mat4x3<f16>	32	8
// mat2x4<f32>	32	16
// mat2x4<f16>	16	8
// mat3x4<f32>	48	16
// mat3x4<f16>	24	8
// mat4x4<f32>	64	16
// mat4x4<f16>	32	8

// Uniform buffer for the 4x4 matrix (16 floats = 64 bytes)

// export class Uniform {
//   constructor(readonly type: (keyof typeof UniformTypeSize)[])  {

//   }
//   private setFild(findName:string){

//   }
//   private allocateUniform(types: (keyof typeof UniformTypeSize)[]) {
//     let offset = 0;
//     const layout = types.map((t) => {
//       const [size, align] = UniformTypeSize[t];
//       // Align the current offset to the type's alignment requirement.
//       // This rounds up offset to the next multiple of align.
//       const alignedOffset = Math.ceil(offset / align) * align;
//       const node = { type: t, offset: alignedOffset, size, align };
//       // Increment offset for the next field.
//       offset = alignedOffset + size;
//       return node;
//     });

//     // The total size of the uniform block is the final offset value.
//     const totalSize = offset;
//     const uniformBufferSize = totalSize;
//     const uniformBuffer = this.device.createBuffer({
//       size: uniformBufferSize,
//       usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
//     });
//     this.uniforms.push({
//       uniformBuffer: uniformBuffer,
//       type: "",
//     });
//     return;
//   }
// }

type GPU_Uniform = {
  uniformBuffer: GPUBuffer;
  size: number;
  layout: {
    type: keyof typeof UniformTypeSize;
    offset: number;
    size: (typeof UniformTypeSize)[keyof typeof UniformTypeSize][0];
    align: (typeof UniformTypeSize)[keyof typeof UniformTypeSize][1];
  }[];
};

export class UniformManager {
  public uniforms: GPU_Uniform[] = [];
  private device: GPUDevice;
  constructor(readonly renderer: GPURenderer) {
    this.device = renderer.device;
  }
  public allocateUniform(types: (keyof typeof UniformTypeSize)[]) {
    let offset = 0;
    const layout = types.map((t) => {
      const [size, align] = UniformTypeSize[t];
      // Align the current offset to the type's alignment requirement.
      // This rounds up offset to the next multiple of align.
      const alignedOffset = Math.ceil(offset / align) * align;
      const node = { type: t, offset: alignedOffset, size, align };
      // Increment offset for the next field.
      offset = alignedOffset + size;
      return node;
    });

    // The total size of the uniform block is the final offset value.
    const totalSize = offset;
    const uniformBufferSize = totalSize;
    const uniformBuffer = this.device.createBuffer({
      label: "uniformADLHDJ",
      size: uniformBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    this.uniforms.push({
      size: totalSize,
      uniformBuffer: uniformBuffer,
      layout: layout,
    });
    return { uniformBuffer, index: this.uniforms.length - 1 };
  }
}
