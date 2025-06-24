const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uHover;
  uniform float uAlpha;

  void main() {
    vec2 uv = vUv;
    uv.x += sin(uv.y * 10.0) * 0.03 * uHover;
    uv.y += cos(uv.x * 10.0) * 0.03 * uHover;

    vec4 color = texture2D(uTexture, uv);
    color.a *= uAlpha;
    gl_FragColor = color;
  }
`;

export default fragmentShader; 