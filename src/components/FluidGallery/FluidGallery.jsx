import React, { useState, useEffect, useRef, Suspense, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Plane, OrbitControls } from '@react-three/drei';
import vertexShader from './fluidVertex';
import fragmentShader from './fluidFragment';
import * as THREE from 'three';
import ColorThief from 'colorthief';

/* ------------------------------------------------------------------ */
/*  Slide                                                         */
/* ------------------------------------------------------------------ */

const FluidSlide = ({ url, active }) => {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, url);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uHover: { value: active ? 1 : 0 },
          uAlpha: { value: active ? 1 : 0 },
          uTexture: { value: texture }
        },
        vertexShader,
        fragmentShader,
        transparent: true
      }),
    [texture, active]
  );

  useFrame((state, delta) => {
    material.uniforms.uTime.value += delta;
    material.uniforms.uHover.value = THREE.MathUtils.lerp(
      material.uniforms.uHover.value,
      active ? 1 : 0,
      0.075
    );
    material.uniforms.uAlpha.value = THREE.MathUtils.lerp(
      material.uniforms.uAlpha.value,
      active ? 1 : 0,
      0.1
    );
  });

  const { viewport } = useThree();
  return (
    <Plane
      ref={meshRef}
      args={[viewport.width, viewport.height, 32, 32]}
      material={material}
    />
  );
};

/* ------------------------------------------------------------------ */
/*  Background glassmorphism                                          */
/* ------------------------------------------------------------------ */

const DynamicGlassBackground = ({ src }) => {
  const ref = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = '';
    img.src = src;
    img.onload = () => {
      try {
        const ct = new ColorThief();
        const [r, g, b] = ct.getColor(img);
        if (ref.current) {
          ref.current.style.background = `rgba(${r},${g},${b},0.35)`;
        }
      } catch (e) {
        // fallback en cas d'erreur cross-origin
        if (ref.current) ref.current.style.background = 'rgba(0,0,0,0.35)';
      }
    };
  }, [src]);

  return <div ref={ref} className="absolute inset-0 -z-10 backdrop-blur-2xl transition-colors duration-700" />;
};

/* ------------------------------------------------------------------ */
/*  Galerie principale                                               */
/* ------------------------------------------------------------------ */

const FluidGallery = ({ sources = [] }) => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % sources.length);
  }, [sources.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + sources.length) % sources.length);
  }, [sources.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  if (!sources.length) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black select-none">
      <DynamicGlassBackground src={sources[index]} />

      {/* Zone clic/tap pour avancer */}
      <div
        className="absolute inset-0 z-20 cursor-pointer"
        onClick={next}
        onTouchEnd={next}
      />

      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 4] }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {sources.map((url, i) => (
            <FluidSlide key={i} url={url} active={i === index} />
          ))}
        </Suspense>
        {/* Debug controls, à retirer en prod */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Flèches UI (facultatif) */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white text-3xl"
        onClick={prev}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white text-3xl"
        onClick={next}
      >
        ❯
      </button>
    </section>
  );
};

export default FluidGallery; 