// Converts a quaternion (x, y, z, w) to a 3x3 rotation matrix.
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


struct PerObjectUniforms {
   transform:array<f32,10>,
   mehletCount:u32,
   baseMeshletIndex:u32, 
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


@group(0) @binding(0) var<storage, read> uniforms : array<PerObjectUniforms>;
@group(1) @binding(0) var<uniform> G_uniforms : RenderView;

struct VertexOutput {
    @builtin(position) Position : vec4<f32>,
    @location(0) @interpolate(perspective) barycentric : vec3<f32>,
    @location(1) @interpolate(flat) triangleID : u32
};

struct VertexInput {
    @location(0) position : vec3<f32>,

    @builtin(vertex_index) vertexIndex : u32,
    @builtin(instance_index) instanceIndex : u32
};

// Function to generate a pseudo-random color from a triangle ID
fn randomColor(id: u32) -> vec3<f32> {
    let seed = f32(id) * 0.61803798875 + 1.0; // Offset to avoid zero values
    let color = vec3<f32>(
        fract(sin(seed) * 43758.5453),
        fract(sin(seed + 1.0) * 43758.5453),
        fract(sin(seed + 2.0) * 43758.5453)
    );

    // Ensure a minimum brightness level (avoid black triangles)
    return 0.5 + 0.5 * color; // Scales colors into the range [0.5, 1.0]
}

@vertex
fn vert_main(input : VertexInput) -> VertexOutput {
    var output : VertexOutput;

    let triangleID: u32 = input.vertexIndex;//input.vertexIndex / u32(3) + ((input.instanceIndex % u32(3)) * u32(1000));

    // Compute triangle ID (each triangle has 3 vertices)
      //  var triangleID: u32 = (input.instanceIndex * u32(100000)) + input.vertexIndex / u32(3);

    // Assign barycentric coordinates per vertex
    var barycentricCoords: array<vec3<f32>, 3> = array<vec3<f32>, 3>(
        vec3<f32>(0.0, 0.0, 1.0), // Vertex 0
        vec3<f32>(0.0, 1.0, 0.0), // Vertex 1
        vec3<f32>(1.0, 0.0, 0.0)  // Vertex 2
    );
    let modelMat: mat4x4<f32> = composeTransform(uniforms[input.instanceIndex].transform);
    output.Position = (G_uniforms.viewProjection * modelMat) * vec4<f32>(input.position, 1.0);
    output.barycentric = barycentricCoords[input.vertexIndex % u32(3)]; // Assign barycentric coordinates
    output.triangleID = triangleID; // Pass triangle ID to fragment shader

    return output;
}

@fragment
fn frag_main(
    @location(0) @interpolate(perspective) barycentric: vec3<f32>,
    @location(1) @interpolate(flat) triangleID: u32
) -> @location(0) vec4<f32> {
    // Compute the distance to the closest edge
    let edgeFactor = min(min(barycentric.x, barycentric.y), barycentric.z);

    // Control wireframe thickness
    let thickness = 0.02;  // Adjust this value for thicker/thinner lines

    // Compute wireframe color (black lines over triangle color)
    let wireframe = smoothstep(0.0, thickness, edgeFactor);
    let color = mix(vec3<f32>(0.0, 0.0, 0.0), randomColor(triangleID), wireframe);

    return vec4<f32>(color, 1.0);
}
