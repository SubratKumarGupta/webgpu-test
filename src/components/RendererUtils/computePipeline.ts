export type GPU_ComputePipeline = {
  pipeline: GPUComputePipeline;
  bindGroupLayout: GPUBindGroupLayout[];
  Descriptor: {
    pipelineInfo: GPUComputePipelineDescriptor;
    BindingGroups: GPUBindGroupLayoutDescriptor[];
  };
};

export function createComputeCullingPipeline({
  shaderCode,
  device,
}: {
  shaderCode: string;
  device: GPUDevice;
}): GPU_ComputePipeline {
  // --- Create Compute Pipeline for Frustum Culling ---
  // 1. Create a shader module from the provided compute shader code.
  const computeShaderModule = device.createShaderModule({
    code: shaderCode,
  });

  const globelBindGroupLayoutDec: GPUBindGroupLayoutDescriptor = {
    entries: [
      {
        // @group(0) @binding(0)
        // Meshlet buffer (read-only storage)
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "read-only-storage" },
      },
      {
        // @group(0) @binding(1)
        // Output draw commands (read-write storage)
        binding: 1,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" }, // read_write is implied for storage buffers
      },
      {
        // @group(0) @binding(2)
        // Instance buffer (read-only storage)
        binding: 2,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "read-only-storage" },
      },
      {
        // @group(0) @binding(3)
        // Draw counter (read-write storage, atomic operations are performed on storage buffers)
        binding: 3,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      },
    ],
  };
  const perFrameBindGroupLayoutDec: GPUBindGroupLayoutDescriptor = {
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
    ],
  };

  // 3. Create the bind group layout from the descriptor.
  const globelBindGroupLayout = device.createBindGroupLayout(
    globelBindGroupLayoutDec
  );
  const perframeBindGroupLayout = device.createBindGroupLayout(
    perFrameBindGroupLayoutDec
  );

  // 4. Create a pipeline layout that uses the above bind group layout.
  const computePipelineLayout = device.createPipelineLayout({
    bindGroupLayouts: [globelBindGroupLayout, perframeBindGroupLayout],
  });

  // 5. Define and create the compute pipeline.
  const computePipelineDescriptor: GPUComputePipelineDescriptor = {
    layout: computePipelineLayout,
    label: "computeCulling",
    compute: {
      module: computeShaderModule,
      entryPoint: "main",
    },
  };

  const computePipeline = device.createComputePipeline(
    computePipelineDescriptor
  );

  const gpuComputePipeline: GPU_ComputePipeline = {
    pipeline: computePipeline,
    bindGroupLayout: [globelBindGroupLayout, perframeBindGroupLayout],
    Descriptor: {
      pipelineInfo: computePipelineDescriptor,
      BindingGroups: [globelBindGroupLayoutDec, perFrameBindGroupLayoutDec],
    },
  };

  return gpuComputePipeline;
}
