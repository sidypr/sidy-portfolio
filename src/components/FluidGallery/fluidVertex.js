const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.z += sin(pos.x * 10.0 + uTime * 2.0) * 0.015;
    pos.z += sin(pos.y * 10.0 + uTime * 2.0) * 0.015;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export default vertexShader; 