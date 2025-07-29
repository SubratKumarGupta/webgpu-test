import { GPURenderer } from "../Renderer";

export type GPU_Pipeline = {
  pipeline: GPURenderPipeline;
  bindGroupLayout: GPUBindGroupLayout[];
  Descriptor: {
    pipelineInfo: GPURenderPipelineDescriptor;
    BindingGroups: GPUBindGroupLayoutDescriptor[];
  };
};

export class PipelineManager {
  private Pipelines: GPU_Pipeline[] = [];
  constructor(readonly renderer: GPURenderer) {}
  public createPipeline({ shaderCode }: { shaderCode: string }) {
    const shaderModule = this.renderer.device.createShaderModule({
      code: shaderCode,
    });
    const PerObjBindGroupLayoutDecs: GPUBindGroupLayoutDescriptor = {
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.VERTEX,
          buffer: { type: "read-only-storage" },
        },
      ],
    };
    const GlobelbindGroupLayoutDecs: GPUBindGroupLayoutDescriptor = {
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.VERTEX,
          buffer: { type: "uniform" },
        },
      ],
    };
    const preObjBindGroupLayout = this.renderer.device.createBindGroupLayout(
      PerObjBindGroupLayoutDecs
    );
    const GlobelBindGroupLayout = this.renderer.device.createBindGroupLayout(
      GlobelbindGroupLayoutDecs
    );
    const pipelineLayout = this.renderer.device.createPipelineLayout({
      bindGroupLayouts: [preObjBindGroupLayout, GlobelBindGroupLayout],
    });
    const pipelineDecs: GPURenderPipelineDescriptor = {
      layout: pipelineLayout,
      vertex: {
        module: shaderModule,
        entryPoint: "vert_main",
        buffers: [
          {
            arrayStride: 3 * 4, //6 * 4, // 6 floats per vertex
            attributes: [
              { shaderLocation: 0, offset: 0, format: "float32x3" },
              // { shaderLocation: 1, offset: 3 * 4, format: "float32x3" },
            ],
          },
        ],
      },
      fragment: {
        module: shaderModule,
        entryPoint: "frag_main",
        targets: [{ format: this.renderer.preferredFormat }],
      },
      primitive: {
        topology: "triangle-list",
        cullMode: "none",
      },
      depthStencil: {
        format: "depth24plus",
        depthWriteEnabled: true,
        depthCompare: "less",
      },
    };
    const pipeline = this.renderer.device.createRenderPipeline(pipelineDecs);
    const pipleine: GPU_Pipeline = {
      pipeline,
      bindGroupLayout: [preObjBindGroupLayout, GlobelBindGroupLayout],
      Descriptor: {
        BindingGroups: [PerObjBindGroupLayoutDecs, GlobelbindGroupLayoutDecs],
        pipelineInfo: pipelineDecs,
      },
    };
    this.Pipelines.push(pipleine);
    return pipleine;
  }
}
