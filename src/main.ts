// Minimal 4x4 Matrix Math Functions (all matrices are in column-major order)
import { Matrix4, Vector3 } from "three";
import { Loader } from "./GLTFLoader/loader.ts";
import { shaderString } from "./ShaderUtils.ts";
import { GPUPerspectiveCamera } from "./components/Camera.ts";
import { UniformTypeSize } from "./components/RendererUtils/UniformsManager.ts";
function multiply(a: Float32Array, b: Float32Array): Float32Array {
  const out = new Float32Array(16);
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) {
        sum += a[i + k * 4] * b[k + j * 4];
      }
      out[i + j * 4] = sum;
    }
  }
  return out;
}

function matrix4ToFloat32Array(matrix: Matrix4): Float32Array {
  return new Float32Array(matrix.elements);
}

async function initWebGPU() {
  if (!navigator.gpu) {
    throw new Error("WebGPU is not supported on this browser.");
  }

  const canvas = document.getElementById("webGPUCanvas") as HTMLCanvasElement;
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter!.requestDevice();
  const context = canvas.getContext("webgpu") as GPUCanvasContext;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(canvas.clientWidth * dpr);
  canvas.height = Math.floor(canvas.clientHeight * dpr);

  // Configure the canvas context
  const format = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device,
    format,
    alphaMode: "opaque",
  });
  const mesh = (await Loader("low_poly_forest.glb")).Meshes[1];
  const geo = mesh.geometry;
  mesh.scale.set(0.05, 0.05, 0.05);
  mesh.rotateX(Math.PI / 4);
  mesh.position.set(0, 0, 0);
  // mesh.setRotationsFromEuler(new Euler(0, 0, 0));
  // --- Cube Geometry ---
  console.log(geo, "fks");
  // Each vertex: [x, y, z, r, g, b]
  // const vertices = new Float32Array([
  //   // Front face
  //   -1, -1, 1, 1, 0, 0, 1, -1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, -1, 1, 1, 1, 1, 0,
  //   // Back face
  //   -1, -1, -1, 1, 0, 1, 1, -1, -1, 0, 1, 1, 1, 1, -1, 1, 1, 1, -1, 1, -1, 0, 0,
  //   0,
  // ]);

  // // Cube indices (12 triangles, 2 per face)
  // const indices = new Uint16Array([
  //   // Front
  //   0, 1, 2, 0, 2, 3,
  //   // Right
  //   1, 5, 6, 1, 6, 2,
  //   // Back
  //   5, 4, 7, 5, 7, 6,
  //   // Left
  //   4, 0, 3, 4, 3, 7,
  //   // Top
  //   3, 2, 6, 3, 6, 7,
  //   // Bottom
  //   4, 5, 1, 4, 1, 0,
  // ]);

  // --- GPU Buffers ---
  // Vertex buffer
  const vertices = geo.Attrubute[1].data as Float32Array;
  const indices = geo.indices;
  const vertexBuffer = device.createBuffer({
    size: vertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true,
  });
  new Float32Array(vertexBuffer.getMappedRange()).set(vertices);
  vertexBuffer.unmap();

  // Index buffer
  const indexBuffer = device.createBuffer({
    size: indices.byteLength,
    usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true,
  });
  new Uint16Array(indexBuffer.getMappedRange()).set(indices);
  indexBuffer.unmap();

  // Uniform buffer for the 4x4 matrix (16 floats = 64 bytes)
  const uniformBufferSize = 64;
  const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const depthTexture = device.createTexture({
    size: [canvas.width, canvas.height, 1],
    format: "depth24plus",
    usage: GPUTextureUsage.RENDER_ATTACHMENT,
  });
  // --- Pipeline and Bind Group ---
  const bindGroupLayout = device.createBindGroupLayout({
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.VERTEX,
        buffer: { type: "uniform" },
      },
    ],
  });
  const pipelineLayout = device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  });
  console.log(pipelineLayout);
  const shaderModule = device.createShaderModule({ code: shaderString });
  const pipeline = device.createRenderPipeline({
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
      targets: [{ format }],
    },
    primitive: {
      topology: "triangle-list",
      cullMode: "back",
    },
    depthStencil: {
      format: "depth24plus",
      depthWriteEnabled: true,
      depthCompare: "less",
    },
  });

  const bindGroup = device.createBindGroup({
    layout: bindGroupLayout,
    entries: [
      {
        binding: 0,
        resource: { buffer: uniformBuffer },
      },
    ],
  });

  // --- Matrix Setup ---
  const aspect = canvas.width / canvas.height;
  const fov = Math.PI / 4;
  const near = 0.1;
  const far = 1000.0;

  // Create projection and view matrices once (they remain constant)
  const camera = new GPUPerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 20);

  camera.lookAt(new Vector3(0, 0, 0));

  // const projMatrix = matrix4ToFloat32Array(camera.projectionMatrix);
  // const viewMatrix = matrix4ToFloat32Array(camera.viewMatrix);
  const ViewProjectionMatrix = matrix4ToFloat32Array(
    camera.viewProjectionMatrix
  );
  // const viewMatrix = matrix4ToFloat32Array(camera.viewMatrix);

  const indirectBufferSize = 5 * 4; // 5 values (uint32) * 4 bytes each
  const indirectBuffer = device.createBuffer({
    size: indirectBufferSize,
    usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_DST,
    mappedAtCreation: true,
  });

  // Indirect draw parameters: [indexCount, instanceCount, firstIndex, baseVertex, firstInstance]
  const indirectData = new Uint32Array([
    indices.length, // Index count
    1, // Instance count
    0, // First index
    0, // Base vertex
    0, // First instance
  ]);

  new Uint32Array(indirectBuffer.getMappedRange()).set(indirectData);
  indirectBuffer.unmap();

  // --- Animation Loop ---
  let rotation = 0;
  function frame() {
    rotation = Math.PI / 60;
    // Model matrix: rotate around the Y axis
    mesh.rotateY(rotation);
    // mesh.rotateZ(rotation);
    // mesh.rotateX(rotation);

    const modelMatrix = matrix4ToFloat32Array(mesh.modelMatrix);

    const mvpMatrix = multiply(ViewProjectionMatrix, modelMatrix);

    // Update uniform buffer with the new matrix
    device.queue.writeBuffer(
      uniformBuffer,
      0,
      mvpMatrix.buffer,
      mvpMatrix.byteOffset,
      mvpMatrix.byteLength
    );

    // Begin rendering
    const commandEncoder = device.createCommandEncoder();
    const textureView = context.getCurrentTexture().createView();

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
        view: depthTexture.createView(),
        depthClearValue: 1,
        depthLoadOp: "clear",
        depthStoreOp: "store",
      },
    });
    renderPass.setPipeline(pipeline);
    renderPass.setBindGroup(0, bindGroup);
    renderPass.setVertexBuffer(0, vertexBuffer);
    renderPass.setIndexBuffer(indexBuffer, "uint16");
    renderPass.drawIndexedIndirect(indirectBuffer, 0);

    renderPass.end();

    device.queue.submit([commandEncoder.finish()]);

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

initWebGPU().catch((err) => {
  console.error(err);
});

const types: (keyof typeof UniformTypeSize)[] = ["mat4x4<f32>", "mat4x4<f32>"];
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

console.log(layout, totalSize, "fvdbhkj");
