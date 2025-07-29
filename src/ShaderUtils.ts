export async function loadShaderCode(url: string) {
  const response = await fetch(url);
  return response.text();
}
import shaderCode from "./shader.wgsl?raw";
import ClusterFilteringCode from "./culling_compute_shader.wgsl?raw";
export const shaderString = shaderCode;
export const clusterFilterShaderString = ClusterFilteringCode;
