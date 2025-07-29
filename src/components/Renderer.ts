import { ShaderManager } from "./RendererUtils/ShaderManager.ts";
import {
  GPU_Geometry,
  GeometryManager,
} from "./RendererUtils/GeometryManager.ts";
import {
  GPU_Pipeline,
  PipelineManager,
} from "./RendererUtils/PipelineManager.ts";
import { clusterFilterShaderString, shaderString } from "../ShaderUtils";
import { UniformManager } from "./RendererUtils/UniformsManager.ts";
import { GPUPerspectiveCamera } from "./Camera";
import { Matrix4 } from "three";
import { ClustredScene } from "./RendererUtils/ClustredScene.ts";
import { RenderViewsBuffer } from "../GLTFLoader/viewStruct.ts";
import { setFrustumPlanes } from "../GLTFLoader/Frustom.ts";
import { DrawIndexedIndirectArgsBuffer } from "../GLTFLoader/IndirectDrawStruct.ts";
import {
  GPU_ComputePipeline,
  createComputeCullingPipeline,
} from "./RendererUtils/computePipeline.ts";
import { MeshInstanceBuffer } from "../GLTFLoader/MeshInstanceStruct.ts";
import { MeshletsBuffer } from "../GLTFLoader/mehletStruct.ts";

function matrix4ToFloat32Array(matrix: Matrix4): Float32Array {
  return new Float32Array(matrix.elements);
}

type RenderObjects = {
  modelMatix: Matrix4;
  geometry: GPU_Geometry;
  pipeLine: GPU_Pipeline;
  bindings: {
    uniformbuffer: {
      uniformBuffer: GPUBuffer;
      index: number;
    };
    bindGroup: GPUBindGroup;
  }[];
};
export class GPURenderer {
  public canvas: HTMLCanvasElement;
  public device!: GPUDevice;
  public context!: GPUCanvasContext;

  public shaderManager!: ShaderManager;
  public geometryManager!: GeometryManager;
  public pipelineManager!: PipelineManager;
  public preferredFormat!: GPUTextureFormat;
  public RenderObjects!: RenderObjects[];
  public RenderPipeline!: GPU_Pipeline;
  public uniformManger!: UniformManager;
  public depthTexture: GPUTexture | null;
  public globelUniform: {
    renderViews: RenderViewsBuffer;
    uniformBuffer: GPUBuffer;
    bindGroup: GPUBindGroup;
    computebindGroup: GPUBindGroup;
  } | null = null;

  geoData:
    | {
        globalMeshletCount: number;
        GPUTriangleIndices: GPUBuffer;
        GPUVertexBuffer: GPUBuffer;
        CombinedMeshletMetadataBuffer: MeshletsBuffer;
        combinedMeshInstanceBuffer: MeshInstanceBuffer;
      }
    | undefined;
  public unifiedDrawBuffers:
    | {
        perInstanceBindGroupe: GPUBindGroup;
        instanceUniformBuffer: GPUBuffer;
        indirectBuffer: GPUBuffer;
        drawCountBuffer: GPUBuffer;
        clusterFiltiringBindGroup: GPUBindGroup;
      }
    | undefined;
  public clusterFilteringPipline!: GPU_ComputePipeline;
  public readbackDrawCountBuffer: GPUBuffer;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.depthTexture = null;
  }
  public async init() {
    if (!navigator.gpu) {
      throw new Error("WebGPU is not supported on this browser.");
    }

    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("Failed to get GPU adapter.");
    for (const key of adapter.features) {
      console.log(key);
    }
    if (!adapter.features.has("indirect-first-instance")) {
      throw new Error("indirect-first-instance feature is not available");
    }
    this.device = await adapter.requestDevice({
      requiredFeatures: ["indirect-first-instance"],
    });
    this.context = this.canvas.getContext("webgpu") as GPUCanvasContext;
    this.setSize();

    this.shaderManager = new ShaderManager(this);
    this.geometryManager = new GeometryManager(this);
    this.pipelineManager = new PipelineManager(this);
    this.uniformManger = new UniformManager(this);
    this.RenderObjects = [];

    this.preferredFormat = navigator.gpu.getPreferredCanvasFormat();
    this.context.configure({
      device: this.device,
      format: this.preferredFormat,
      alphaMode: "opaque",
    });

    this.RenderPipeline = this.pipelineManager.createPipeline({
      shaderCode: shaderString,
    });
    const depthStencil =
      this.RenderPipeline.Descriptor.pipelineInfo.depthStencil;
    this.depthTexture;
    if (depthStencil) {
      this.depthTexture = this.device.createTexture({
        size: [this.canvas.width, this.canvas.height, 1],
        format: depthStencil.format,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });
    }
    const clusterFilterCompute = createComputeCullingPipeline({
      shaderCode: clusterFilterShaderString,
      device: this.device,
    });
    this.clusterFilteringPipline = clusterFilterCompute;
  }
  public initObjectsRender(
    scene: ClustredScene,
    Dcamera: GPUPerspectiveCamera
  ) {
    this.geoData = this.geometryManager.CreateUnifiedClustedData(scene);
    console.log(this.geoData, "dhkbwbabh");
    const instanceUniformBuffer = this.device.createBuffer({
      label: "instanceUniformBuffer",
      size: this.geoData.combinedMeshInstanceBuffer.ArrayBuffer.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });

    const perInstanceBindGroupe = this.device.createBindGroup({
      label: "perInstanceBindGroupe",
      layout: this.RenderPipeline.bindGroupLayout[0],
      entries: [
        {
          binding: 0,
          resource: {
            offset: 0,
            buffer: instanceUniformBuffer,
            label: "perInstanceBindGroupe",
          },
        },
      ],
    });

    const pipeLine = this.RenderPipeline;
    const renderView = new RenderViewsBuffer(1);

    const GPU_uniform = this.device.createBuffer({
      label: "uniformRenderView",
      size: renderView.ArrayBuffer.byteLength,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    const debugRenderView = new RenderViewsBuffer(1);

    const DebugGPU_uniform = this.device.createBuffer({
      label: "uniformRenderView",
      size: debugRenderView.ArrayBuffer.byteLength,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    const ViewProjectionMatrix = matrix4ToFloat32Array(
      Dcamera.viewProjectionMatrix
    );
    const inv_ViewProjectionMatrix = matrix4ToFloat32Array(
      Dcamera.viewProjectionMatrix.invert()
    );

    debugRenderView.set(0, "viewProjection", ViewProjectionMatrix);
    debugRenderView.set(0, "inv_viewProjection", inv_ViewProjectionMatrix);
    setFrustumPlanes(ViewProjectionMatrix, debugRenderView, 0);
    this.device.queue.writeBuffer(
      DebugGPU_uniform,
      0,
      debugRenderView.ArrayBuffer,
      0,
      debugRenderView.ArrayBuffer.byteLength
    );

    const GlobelUniformbindGroup = this.device.createBindGroup({
      layout: pipeLine.bindGroupLayout[1],
      entries: [
        {
          binding: 0,
          resource: { buffer: DebugGPU_uniform },
        },
      ],
    });
    const ComputeGlobelUniformbindGroup = this.device.createBindGroup({
      layout: this.clusterFilteringPipline.bindGroupLayout[1],
      entries: [
        {
          binding: 0,
          resource: { buffer: GPU_uniform },
        },
      ],
    });
    this.globelUniform = {
      renderViews: renderView,
      uniformBuffer: GPU_uniform,
      bindGroup: GlobelUniformbindGroup,
      computebindGroup: ComputeGlobelUniformbindGroup,
    };

    const indirectBuffer = new DrawIndexedIndirectArgsBuffer(
      this.geoData.globalMeshletCount
    );

    // const indirectBindGroup = this.device.createBindGroup({
    //   layout: pipeLine.bindGroupLayout[1],
    //   entries: [
    //     {
    //       binding: 0,
    //       resource: { buffer: GPU_indirectBuffer },
    //     },
    //   ],
    // });

    for (let i = 0; i < this.geoData.globalMeshletCount; i++) {
      const index = i;
      // const IO = this.geoData.CombinedMeshletMetadataBuffer.get(
      //   index,
      //   "indexOffset"
      // );
      const VO = this.geoData.CombinedMeshletMetadataBuffer.get(
        index,
        "vertexOffset"
      );
      this.geoData.CombinedMeshletMetadataBuffer.set(
        index,
        "vertexOffset",
        VO / 3
      );
      // const IVC = this.geoData.CombinedMeshletMetadataBuffer.get(
      //   index,
      //   "vertexAndIndexCount"
      // );
      // const II = this.geoData.CombinedMeshletMetadataBuffer.get(
      //   index,
      //   "instanceIndex"
      // );
      // const indexCount = IVC >> 16; // Extract the upper 16 bits// indexCount

      // indirectBuffer.set(index, "indexCount", IVC),
      //   indirectBuffer.set(index, "instanceCount", 1);
      // indirectBuffer.set(index, "firstIndex", IO);
      indirectBuffer.set(index, "baseVertex", VO / 3);
      // indirectBuffer.set(index, "firstInstance", II);
    }
    const GPU_indirectBuffer = this.device.createBuffer({
      label: "indirect buffer",
      size: indirectBuffer.ArrayBuffer.byteLength,
      usage:
        GPUBufferUsage.INDIRECT |
        GPUBufferUsage.COPY_DST |
        GPUBufferUsage.STORAGE,
    });
    // this.device.queue.writeBuffer(
    //   GPU_indirectBuffer,
    //   0,
    //   indirectBuffer.ArrayBuffer,
    //   0,
    //   indirectBuffer.ArrayBuffer.byteLength
    // );

    const GPU_MeshletBuffer = this.device.createBuffer({
      label: "CombinedMeshletMetadataBuffer",
      size: this.geoData.CombinedMeshletMetadataBuffer.ArrayBuffer.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true,
    });
    new Uint8Array(GPU_MeshletBuffer.getMappedRange()).set(
      new Uint8Array(this.geoData.CombinedMeshletMetadataBuffer.ArrayBuffer)
    );
    GPU_MeshletBuffer.unmap();
    // this.device.queue.writeBuffer(
    //   GPU_MeshletBuffer,
    //   0,
    //   this.geoData.CombinedMeshletMetadataBuffer.ArrayBuffer,
    //   0,
    //   this.geoData.CombinedMeshletMetadataBuffer.ArrayBuffer.byteLength
    // );

    const drawCountBuffer = this.device.createBuffer({
      label: "draw count buffer",
      size: 4, // one atomic<u32>
      usage:
        GPUBufferUsage.STORAGE |
        GPUBufferUsage.COPY_DST |
        GPUBufferUsage.COPY_SRC,
    });

    const clusterFiltiringBindGroup = this.device.createBindGroup({
      layout: this.clusterFilteringPipline.pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: { buffer: GPU_MeshletBuffer },
        },
        {
          binding: 1,
          resource: { buffer: GPU_indirectBuffer },
        },
        {
          binding: 2,
          resource: { buffer: instanceUniformBuffer },
        },
        {
          binding: 3,
          resource: { buffer: drawCountBuffer },
        },
      ],
    });

    // Optional: zero-init draw count
    // this.device.queue.writeBuffer(drawCountBuffer, 0, new Uint32Array([0]));

    const readbackDrawCountBuffer = this.device.createBuffer({
      size: 4, // assuming uint32 count
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
    });

    // // 2. Copy the GPU write buffer into the CPU-readable buffer
    // commandEncoder.copyBufferToBuffer(
    //   this.unifiedDrawBuffers.drawCountBuffer, // source
    //   0,
    //   readbackDrawCountBuffer, // destination
    //   0,
    //   4
    //     this.readBackbuffer = commandEncoder.copyBufferToBuffer(
    //       this.unifiedDrawBuffers.drawCountBuffer,
    //       0,
    //       readbackDrawCountBuffer,
    //       0,
    //       4
    //     );
    this.readbackDrawCountBuffer = readbackDrawCountBuffer;

    this.unifiedDrawBuffers = {
      perInstanceBindGroupe,
      instanceUniformBuffer,
      indirectBuffer: GPU_indirectBuffer,
      drawCountBuffer,
      clusterFiltiringBindGroup,
    };
  }

  /**
   * if the values are not given then it will use defualt
   * @param width - this.canvas.clientWidth  is defualt
   * @param height - this.canvas.clientHeight is defualt
   */
  public setSize(width?: number, height?: number) {
    const dpr = window.devicePixelRatio || 1;

    if (width === undefined || height === undefined) {
      this.canvas.width = Math.floor(this.canvas.clientWidth * dpr);
      this.canvas.height = Math.floor(this.canvas.clientHeight * dpr);
    } else {
      this.canvas.width = Math.floor(width * dpr);
      this.canvas.height = Math.floor(height * dpr);
    }
  }

  public async render(camera: GPUPerspectiveCamera) {
    if (!this.globelUniform) return;
    if (!this.unifiedDrawBuffers) return;
    if (!this.geoData) return;
    const ViewProjectionMatrix = matrix4ToFloat32Array(
      camera.viewProjectionMatrix
    );
    const inv_ViewProjectionMatrix = matrix4ToFloat32Array(
      camera.viewProjectionMatrix.invert()
    );

    this.globelUniform.renderViews.set(
      0,
      "viewProjection",
      ViewProjectionMatrix
    );
    this.globelUniform.renderViews.set(
      0,
      "inv_viewProjection",
      inv_ViewProjectionMatrix
    );
    setFrustumPlanes(ViewProjectionMatrix, this.globelUniform.renderViews, 0);
    this.device.queue.writeBuffer(
      this.globelUniform.uniformBuffer,
      0,
      this.globelUniform.renderViews.ArrayBuffer,
      0,
      this.globelUniform.renderViews.ArrayBuffer.byteLength
    );

    for (let i = 0; i < this.geometryManager.meshGeometryArray.length; i++) {
      const index = i;
      const mesh = this.geometryManager.meshGeometryArray[index].mesh;
      const updatePrams = MeshInstanceBuffer.getUpdateTransformPramas(
        index,
        mesh.worldTransforms
      );

      // Update only the relevant portion of the transform buffer.
      this.device.queue.writeBuffer(
        this.unifiedDrawBuffers.instanceUniformBuffer,
        updatePrams.offset,
        updatePrams.buffer.buffer,
        updatePrams.buffer.byteOffset,
        updatePrams.buffer.byteLength
      );
    }

    // Begin rendering
    const commandEncoder = this.device.createCommandEncoder();

    // cluster filtering

    // ========================
    // === Compute Pass ===
    // ========================

    this.device.queue.writeBuffer(
      this.unifiedDrawBuffers.drawCountBuffer,
      0,
      new Uint32Array([0])
    );

    const computePass = commandEncoder.beginComputePass();
    computePass.setPipeline(this.clusterFilteringPipline.pipeline);
    computePass.setBindGroup(
      0,
      this.unifiedDrawBuffers.clusterFiltiringBindGroup
    );
    computePass.setBindGroup(1, this.globelUniform.computebindGroup);

    const workgroupSize = 256; // assuming @workgroup_size(64)
    const meshletCount = this.geoData.globalMeshletCount;
    const numWorkgroups = Math.ceil(meshletCount / workgroupSize);

    // computePass.dispatchWorkgroupsIndirect();

    computePass.dispatchWorkgroups(numWorkgroups, 1, 1);
    computePass.end();

    this.unifiedDrawBuffers.drawCountBuffer; // do a read-back from draw count buffer
    commandEncoder.copyBufferToBuffer(
      this.unifiedDrawBuffers.drawCountBuffer,
      0,
      this.readbackDrawCountBuffer,
      0,
      4
    );
    // console.log(commandEncoder.finish(), "vfbkhjdfkj");
    // this.device.queue.submit([commandEncoder.finish()]);

    await this.readbackDrawCountBuffer.mapAsync(GPUMapMode.READ);
    const copyArrayBuffer = this.readbackDrawCountBuffer.getMappedRange();
    const meshletDrawCount = new Uint32Array(copyArrayBuffer)[0];
    this.readbackDrawCountBuffer.unmap();

    //Raster
    const textureView = this.context.getCurrentTexture().createView();
    const depthTextureView = this.depthTexture!.createView();
    const renderPass = commandEncoder.beginRenderPass({
      colorAttachments: [
        {
          view: textureView,
          clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },
          loadOp: "clear",
          storeOp: "store",
        },
      ],
      depthStencilAttachment: {
        view: depthTextureView,
        depthClearValue: 1,
        depthLoadOp: "clear",
        depthStoreOp: "store",
      },
    });
    renderPass.setPipeline(this.RenderPipeline.pipeline);
    renderPass.setBindGroup(0, this.unifiedDrawBuffers.perInstanceBindGroupe);

    renderPass.setBindGroup(1, this.globelUniform.bindGroup);
    renderPass.setVertexBuffer(0, this.geoData.GPUVertexBuffer);
    renderPass.setIndexBuffer(this.geoData.GPUTriangleIndices, "uint16");

    // console.log("vsdajl", meshletDrawCount, this.geoData.globalMeshletCount);

    for (let i = 0; i < meshletDrawCount; i++) {
      // The offset for each command is i * commandSize bytes.
      renderPass.drawIndexedIndirect(
        this.unifiedDrawBuffers.indirectBuffer,
        i * 20
      );
    }

    renderPass.end();

    this.device.queue.submit([commandEncoder.finish()]);
  }
}
