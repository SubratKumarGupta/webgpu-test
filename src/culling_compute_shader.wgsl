// Define the structure for an indirect draw command.
// This structure must match the layout expected by drawIndexedIndirect.
fn quaternionToMatrix(q: vec4<f32>) -> mat3x3<f32> {
    let x = q.x;
    let y = q.y;
    let z = q.z;
    let w = q.w;

    // Precompute common values.
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;
    let xx = x * x2;
    let yy = y * y2;
    let zz = z * z2;
    let xy = x * y2;
    let xz = x * z2;
    let yz = y * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;

    return mat3x3<f32>(
        1.0 - (yy + zz),    xy - wz,           xz + wy,
        xy + wz,            1.0 - (xx + zz),   yz - wx,
        xz - wy,            yz + wx,           1.0 - (xx + yy)
    );
}

// Composes a 4x4 transformation matrix from a quaternion, translation, and non-uniform scale.
// The input 'data' is assumed to have 10 floats: 4 for quaternion, 3 for translation, and 3 for scale.
fn composeTransform(t: array<f32, 10>) -> mat4x4<f32> {
     // Extract quaternion (rotation)
    let q = vec4<f32>(t[0], t[1], t[2], t[3]);

    // Extract translation
    let translation = vec3<f32>(t[4], t[5], t[6]);

    // Extract scale
    let scale = vec3<f32>(t[7], t[8], t[9]);

    // Get the rotation matrix from the quaternion.
    let rot: mat3x3<f32> = quaternionToMatrix(q);

    // Combine rotation with non-uniform scale.
    // Here, we scale each column of the rotation matrix by the corresponding scale factor.
    let rotScale: mat3x3<f32> = mat3x3<f32>(
        rot[0] * scale.x,
        rot[1] * scale.y,
        rot[2] * scale.z
    );

    // Build the 4x4 transformation matrix.
    // The upper-left 3x3 block is the scaled rotation,
    // the fourth column is the translation, and the bottom row is (0, 0, 0, 1).
    return mat4x4<f32>(
        vec4<f32>(rotScale[0], 0.0),
        vec4<f32>(rotScale[1], 0.0),
        vec4<f32>(rotScale[2], 0.0),
        vec4<f32>(translation, 1.0)
    );
}


struct IndirectDrawCommand {
  indexCount: u32,    // Number of indices to draw.
  instanceCount: u32, // Number of instances (typically 1 per object here).
  firstIndex: u32,    // Offset into the index buffer.
  baseVertex: u32,    // Offset added to each index.
  firstInstance: u32, // Index into the per-instance transform (or bounding sphere) array.
};

struct ClippingPlanes {
  normal:vec3f,
  constant:f32,
}
struct RenderView {
    viewProjection: mat4x4<f32>,
    inv_viewProjection  :mat4x4<f32>,
    viewPlanes: array<ClippingPlanes,6>
}

struct SphereBounds {
    center_x: f32,
    center_y: f32,
    center_z: f32,
    radius: f32,
};
 
struct Mehlet {
    boundingSphere: SphereBounds,
    vertexAndIndexCount: u32, // paking 2 uint 8 , 2 byts are free 
    vertexOffset: u32,
    indexOffset: u32, 
    instanceIndex: u32,
} 

struct PerObjectUniforms {
   transform:array<f32,10>,
   mehletCount:u32,
   baseMeshletIndex:u32, 
};



@group(0) @binding(0)
var<storage, read> meshletBuffer: array<Mehlet>;

@group(0) @binding(1)
var<storage, read_write> outDrawCommands: array<IndirectDrawCommand>;

@group(0) @binding(2)
var<storage, read> instanceBuffer: array<PerObjectUniforms>;


@group(0) @binding(3)
var<storage, read_write> drawCounter: atomic<u32>;




@group(1) @binding(0)
var<uniform> renderView: RenderView;

// Function to test if a sphere is at least partially inside the frustum.
// For each plane, if the sphere's distance is less than -radius, it is completely outside.
fn sphereInsideFrustum(center: vec3<f32>, radius: f32) -> bool {
  for (var i: u32 = 0u; i < 6u; i = i + 1u) {
    let plane = renderView.viewPlanes[i];
    let distance = dot(plane.normal, center) + plane.constant;
    if (distance < -radius) {
      return false;
    }
  }
  return true;
}

// The compute shader uses a workgroup size of 64. Adjust as needed.
@compute @workgroup_size(256,1,1)
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
//   let index = global_id.x;
    if (global_id.x >= arrayLength(&meshletBuffer)) {
        return;
    }
    // do the frustom culling 

  let meshlet = meshletBuffer[global_id.x];
  let instance = instanceBuffer[meshlet.instanceIndex];
  let modelMatrix = composeTransform(instance.transform);

  // Transform bounding sphere center to world space
  let localCenter = vec4<f32>(
    meshlet.boundingSphere.center_x,
    meshlet.boundingSphere.center_y,
    meshlet.boundingSphere.center_z,
    1.0
  );
  let worldCenter = (modelMatrix * localCenter).xyz;

  // Apply maximum scale to bounding radius
  let scale = vec3<f32>(
    instance.transform[7],
    instance.transform[8],
    instance.transform[9]
  );
  let maxScale = max(scale.x, max(scale.y, scale.z));
  let worldRadius = meshlet.boundingSphere.radius * maxScale;

  if (!sphereInsideFrustum(worldCenter, worldRadius)) {
    return;
  }



    let drawIndex = atomicAdd(&drawCounter, 1u);


    outDrawCommands[drawIndex].indexCount =  meshlet.vertexAndIndexCount;
    outDrawCommands[drawIndex].instanceCount = 1u;
    outDrawCommands[drawIndex].firstIndex =  meshlet.indexOffset;
    outDrawCommands[drawIndex].baseVertex =  meshlet.vertexOffset;
    outDrawCommands[drawIndex].firstInstance =  meshlet.instanceIndex;

    

}
