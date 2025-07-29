// import * as cv from "@techstark/opencv-js";

// const objectPoints = cv.matFromArray(4, 1, cv.CV_64FC3, [
//   0,
//   0,
//   0, //  1
//   1,
//   0,
//   0, //  2
//   0,
//   1,
//   0, //  3
//   0,
//   0,
//   1, //  4
// ]);

// const imagePoints = cv.matFromArray(4, 1, cv.CV_64FC2, [
//   320,
//   240, // 1
//   400,
//   240, // 2
//   320,
//   300, // 3
//   320,
//   180, // 4
// ]);

// //focal lengths fx ,  fy  800 and principal point 320,240
// const cameraMatrix = cv.matFromArray(
//   3,
//   3,
//   cv.CV_64F,
//   [800, 0, 320, 0, 800, 240, 0, 0, 1]
// );

// const distCoeffs = cv.Mat.zeros(4, 1, cv.CV_64F);

// const rvec = new cv.Mat();
// const tvec = new cv.Mat();

// const success = cv.solvePnP(
//   objectPoints,
//   imagePoints,
//   cameraMatrix,
//   distCoeffs,
//   rvec,
//   tvec,
//   false,
//   cv.SOLVEPNP_EPNP
// );
// // const offset1 = unifiedGeometryData.offsets[0];
// // const offset2 = unifiedGeometryData.offsets[1];
// // const offset3 = unifiedGeometryData.offsets[2];
// // const V1 = unifiedGeometryData.VertexBuffer[offset1.vertexOffset];
// // const I1 = unifiedGeometryData.indicesBuffer[offset1.indicesOffset];

// // const VA1 = this.geometryManager.registredGeometries[0].vertexbuffer[0];
// // const IA1 = this.geometryManager.registredGeometries[0].indexBuffer[0];

// // const V2 = unifiedGeometryData.VertexBuffer[offset2.vertexOffset];
// // const I2 = unifiedGeometryData.indicesBuffer[offset2.indicesOffset];

// // const VA2 = this.geometryManager.registredGeometries[1].vertexbuffer[0];
// // const IA2 = this.geometryManager.registredGeometries[1].indexBuffer[0];

// // const V3 = unifiedGeometryData.VertexBuffer[offset3.vertexOffset];
// // const I3 = unifiedGeometryData.indicesBuffer[offset3.indicesOffset];

// // const VA3 = this.geometryManager.registredGeometries[2].vertexbuffer[0];
// // const IA3 = this.geometryManager.registredGeometries[2].indexBuffer[0];

// // console.log(
// //   V1,
// //   VA1,
// //   ":",
// //   I1,
// //   IA1,
// //   ":::",
// //   V2,
// //   VA2,
// //   ":",
// //   I2,
// //   IA2,
// //   ":::",
// //   V3,
// //   VA3,
// //   ":",
// //   I3,
// //   IA3
// // );

//  const indirectBufferSize = unifiedGeometryData.offsets.length * 20;
//  const indirectArray = new Uint32Array(unifiedGeometryData.offsets.length * 5);

//  const offset1 = unifiedGeometryData.offsets[0];
//  const offset2 = unifiedGeometryData.offsets[1];
//  const offset3 = unifiedGeometryData.offsets[2];
//  const V1 = unifiedGeometryData.VertexBuffer[offset1.vertexOffset];
//  const I1 = unifiedGeometryData.indicesBuffer[offset1.indicesOffset];

//  const VA1 = this.geometryManager.registredGeometries[0].vertexbuffer[0];
//  const IA1 = this.geometryManager.registredGeometries[0].indexBuffer[0];

//  const V2 = unifiedGeometryData.VertexBuffer[offset2.vertexOffset];
//  const I2 = unifiedGeometryData.indicesBuffer[offset2.indicesOffset];

//  const VA2 = this.geometryManager.registredGeometries[1].vertexbuffer[0];
//  const IA2 = this.geometryManager.registredGeometries[1].indexBuffer[0];

//  const V3 = unifiedGeometryData.VertexBuffer[offset3.vertexOffset];
//  const I3 = unifiedGeometryData.indicesBuffer[offset3.indicesOffset];

//  const VA3 = this.geometryManager.registredGeometries[2].vertexbuffer[0];
//  const IA3 = this.geometryManager.registredGeometries[2].indexBuffer[0];

//  const I3C =
//    unifiedGeometryData.indicesBuffer[
//      offset2.indicesOffset + offset2.indexLen - 1
//    ];
//  const IA3C =
//    this.geometryManager.registredGeometries[1].indexBuffer[
//      this.geometryManager.registredGeometries[1].indexBuffer.length - 1
//    ];

//  console.log(
//    this.geometryManager.registredGeometries[4].indexBuffer.length,
//    unifiedGeometryData.offsets[4].indexLen,
//    ":",
//    I3C,
//    IA3C,
//    ":::",
//    V1,
//    VA1,
//    ":",
//    I1,
//    IA1,
//    ":::",
//    V2,
//    VA2,
//    ":",
//    I2,
//    IA2,
//    ":::",
//    V3,
//    VA3,
//    ":",
//    I3,
//    IA3
//  );
//  for (let i = 0, j = 0; i < indirectArray.length; i = i + 5, j++) {
//    const offset = unifiedGeometryData.offsets[j];

//    const vertFE = this.geometryManager.registredGeometries[j].vertexbuffer[0];
//    const indFE = this.geometryManager.registredGeometries[j].indexBuffer[0];

//    const vertFEoff = unifiedGeometryData.VertexBuffer[offset.vertexOffset];
//    const indFEoff = unifiedGeometryData.indicesBuffer[offset.indicesOffset];

//    if (vertFE === vertFEoff && indFE === indFEoff) {
//      console.log("validFE");
//    } else {
//      console.error("invalidFE");
//    }
//    const indLE =
//      unifiedGeometryData.indicesBuffer[
//        offset.indicesOffset + offset.indexLen - 1
//      ];
//    const indLEoff =
//      this.geometryManager.registredGeometries[j].indexBuffer[
//        this.geometryManager.registredGeometries[j].indexBuffer.length - 1
//      ];
//    if (indLE === indLEoff) {
//      console.log("validLE");
//    } else {
//      console.error("invalidLE");
//    }

//    // indirectArray[i + 0] = // indexCount
//    // indirectArray[i + 1] =  // instanceCount
//    // indirectArray[i + 2] = // firstIndex offset in the combined index buffer
//    // indirectArray[i + 3] = // baseVertex offset (in vertices)
//    // indirectArray[i + 4] =  // firstInstance (used to index into the transform buffer)
//  }

//  // const offset = unifiedGeometryData.offsets[0];
//  // indirectArray[0] = offset.indexLen; // indexCount
//  // indirectArray[1] = 1; // instanceCount
//  // indirectArray[2] = offset.indicesOffset; // firstIndex offset in the combined index buffer
//  // indirectArray[3] = offset.vertexOffset; // baseVertex offset (in vertices)
//  // indirectArray[4] = offset.meshIndex; // firstInstance (used to index into the transform buffer)

//  // const offset1 = unifiedGeometryData.offsets[1];
//  // indirectArray[5] = offset1.indexLen; // indexCount
//  // indirectArray[6] = 1; // instanceCount
//  // indirectArray[7] = offset1.indicesOffset; // firstIndex offset in the combined index buffer
//  // indirectArray[8] = offset1.vertexOffset; // baseVertex offset (in vertices)
//  // indirectArray[9] = ; // firstInstance (used to index into the transform buffer)

// //  console.log(indirectArray, "sfdjlbg");
// //  const indirectDrawBuffer = this.device.createBuffer({
// //    size: indirectArray.byteLength,
// //    usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_DST,
// //    mappedAtCreation: true,
// //  });
// //  new Uint32Array(indirectDrawBuffer.getMappedRange()).set(indirectArray);
// //  indirectDrawBuffer.unmap();
