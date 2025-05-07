import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";
import './LiquidChrome.css';

export const LiquidChrome = ({
  baseColor = [0.1, 0.1, 0.1],
  speed = 0.1,
  amplitude = 0.3,
  frequencyX = 1,
  frequencyY = 1,
  interactive = true,
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ 
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2)
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    
    // S'assurer que le canvas ne bloque pas les interactions
    gl.canvas.style.pointerEvents = 'none';

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

          for (float i = 1.0; i < 10.0; i++){
              uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
              uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
          }

          vec2 diff = (uvCoord - uMouse);
          float dist = length(diff);
          float falloff = exp(-dist * 20.0);
          float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
          uv += (diff / (dist + 0.0001)) * ripple * falloff;

          vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
          return vec4(color, 1.0);
      }

      void main() {
          vec4 col = vec4(0.0);
          int samples = 0;
          for (int i = -1; i <= 1; i++){
              for (int j = -1; j <= 1; j++){
                  vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
                  col += renderImage(vUv + offset);
                  samples++;
              }
          }
          gl_FragColor = col / float(samples);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ]),
        },
        uBaseColor: { value: new Float32Array(baseColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0, 0]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      const resUniform = program.uniforms.uResolution.value;
      resUniform[0] = width;
      resUniform[1] = height;
      resUniform[2] = width / height;
    }

    // Gestionnaire d'événements optimisé
    let ticking = false;
    function handleMouseMove(event) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = event.clientX / window.innerWidth;
          const y = 1 - event.clientY / window.innerHeight;
          program.uniforms.uMouse.value[0] = x;
          program.uniforms.uMouse.value[1] = y;
          ticking = false;
        });
        ticking = true;
      }
    }

    function handleTouchMove(event) {
      if (event.touches.length > 0 && !ticking) {
        window.requestAnimationFrame(() => {
          const touch = event.touches[0];
          const x = touch.clientX / window.innerWidth;
          const y = 1 - touch.clientY / window.innerHeight;
          program.uniforms.uMouse.value[0] = x;
          program.uniforms.uMouse.value[1] = y;
          ticking = false;
        });
        ticking = true;
      }
      // Empêcher les événements de se propager
      event.stopPropagation();
    }

    window.addEventListener("resize", resize);
    resize();

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    let animationId;
    let lastTime = 0;
    const targetFPS = 30; // Limite à 30 FPS pour économiser les ressources CPU
    const frameInterval = 1000 / targetFPS;
    
    function update(t) {
      animationId = requestAnimationFrame(update);
      
      // Limitons le taux de rafraîchissement
      const deltaTime = t - lastTime;
      if (deltaTime < frameInterval) return;
      
      // Ajustons le temps pour maintenir une précision raisonnable
      lastTime = t - (deltaTime % frameInterval);
      
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    }
    animationId = requestAnimationFrame(update);

    container.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      }
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
      
      // Au lieu d'appeler des méthodes destroy qui n'existent pas
      // Nous allons nettoyer en nullifiant les références
      // et en utilisant loseContext pour libérer les ressources WebGL
      if (gl.getExtension('WEBGL_lose_context')) {
        gl.getExtension('WEBGL_lose_context').loseContext();
      }
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return (
    <div
      ref={containerRef}
      className="liquidChrome-container"
      aria-hidden="true"
      {...props}
    />
  );
};

export default LiquidChrome; 