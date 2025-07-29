import { RenderViewsBuffer } from "./viewStruct";

type Plane = { A: number; B: number; C: number; D: number };

// Utility to normalize a plane from its coefficients
function normalizePlane(a: number, b: number, c: number, d: number): Plane {
  const length = Math.hypot(a, b, c);
  return {
    A: a / length,
    B: b / length,
    C: c / length,
    D: d / length,
  };
}

export function setFrustumPlanes(
  viewProjectionMatrix: Float32Array,
  renderViewsBuffer: RenderViewsBuffer,
  index: number = 0
) {
  const m = viewProjectionMatrix;

  // Transpose to row-major for easier access
  const m00 = m[0],
    m01 = m[4],
    m02 = m[8],
    m03 = m[12];
  const m10 = m[1],
    m11 = m[5],
    m12 = m[9],
    m13 = m[13];
  const m20 = m[2],
    m21 = m[6],
    m22 = m[10],
    m23 = m[14];
  const m30 = m[3],
    m31 = m[7],
    m32 = m[11],
    m33 = m[15];

  const planes: Plane[] = [
    normalizePlane(m30 + m00, m31 + m01, m32 + m02, m33 + m03), // Left
    normalizePlane(m30 - m00, m31 - m01, m32 - m02, m33 - m03), // Right
    normalizePlane(m30 + m10, m31 + m11, m32 + m12, m33 + m13), // Bottom
    normalizePlane(m30 - m10, m31 - m11, m32 - m12, m33 - m13), // Top
    normalizePlane(m30 + m20, m31 + m21, m32 + m22, m33 + m23), // Near
    normalizePlane(m30 - m20, m31 - m21, m32 - m22, m33 - m23), // Far
  ];

  // Store to renderViewsBuffer
  for (let i = 0 as 0 | 1 | 2 | 3 | 4 | 5; i < 6; i++) {
    const plane = planes[i];
    renderViewsBuffer.set(index, `viewPlanes.plane${i}.A`, plane.A);
    renderViewsBuffer.set(index, `viewPlanes.plane${i}.B`, plane.B);
    renderViewsBuffer.set(index, `viewPlanes.plane${i}.C`, plane.C);
    renderViewsBuffer.set(index, `viewPlanes.plane${i}.D`, plane.D);
  }
}
