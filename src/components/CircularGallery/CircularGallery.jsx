import { useRef, useEffect } from 'react';
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Mesh,
  Program,
  Texture,
} from 'ogl';

import './CircularGallery.css';

/*********************** UTILS ************************/ 
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== 'constructor' && typeof instance[key] === 'function') {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createTextTexture(gl, text, font = 'bold 30px monospace', color = 'black') {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = font;
  const metrics = ctx.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2);
  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

/*********************** SHADERS ************************/ 
// Fragment shader pour l arrondi des coins
const roundedFrag = `
precision highp float;
uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform sampler2D tMap;
uniform float uBorderRadius;
varying vec2 vUv;

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 d = abs(p) - b;
  return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
}

void main() {
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  vec4 color = texture2D(tMap, uv);

  float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
  if (d > 0.0) discard;

  gl_FragColor = vec4(color.rgb, 1.0);
}`;

const wobbleVert = `
precision highp float;
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSpeed;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec3 p = position;
  p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
}`;

/*********************** TITLE ************************/ 
class Title {
  constructor({ gl, plane, text, textColor = '#ffffff', font = '30px sans-serif' }) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }

  createMesh() {
    const { texture, width, height } = createTextTexture(
      this.gl,
      this.text,
      this.font,
      this.textColor,
    );
    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `attribute vec3 position;attribute vec2 uv;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragment: `precision highp float;uniform sampler2D tMap;varying vec2 vUv;void main(){vec4 c=texture2D(tMap,vUv);if(c.a<0.1) discard;gl_FragColor=c;}`,
      uniforms: { tMap: { value: texture } },
      transparent: true,
    });
    this.mesh = new Mesh(this.gl, { geometry, program });
    const aspect = width / height;
    const textHeight = this.plane.scale.y * 0.15;
    const textWidth = textHeight * aspect;
    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y = -this.plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
    this.mesh.setParent(this.plane);
  }
}

/*********************** MEDIA ************************/ 
class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius = 0,
    font,
    itemScale = 1,
    mediaHeightPx = null,
    mediaWidthPx = null,
  }) {
    this.extra = 0;
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.itemScale = itemScale;
    this.mediaHeightPx = mediaHeightPx;
    this.mediaWidthPx = mediaWidthPx;

    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    const tex = new Texture(this.gl, { generateMipmaps: false });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: wobbleVert,
      fragment: roundedFrag,
      uniforms: {
        tMap: { value: tex },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    });
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = this.image;
    img.onload = () => {
      tex.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
      this.aspect = img.naturalWidth / img.naturalHeight;
    };
  }

  createMesh() {
    this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    this.title = new Title({ gl: this.gl, plane: this.plane, text: this.text, textColor: this.textColor, font: this.font });
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const Babs = Math.abs(this.bend);
      const R = (H * H + Babs * Babs) / (2 * Babs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = scroll.current - scroll.last;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    this.isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    this.isAfter = this.plane.position.x - planeOffset > viewportOffset;
    if (direction === 'right' && this.isBefore) {
      this.extra -= this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
    if (direction === 'left' && this.isAfter) {
      this.extra += this.widthTotal;
      this.isBefore = this.isAfter = false;
    }
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;

    this.scale = this.screen.height / 1500;
    if (this.mediaHeightPx) {
      this.plane.scale.y = this.viewport.height * (this.mediaHeightPx / this.screen.height);
      const aspect = this.aspect || 1.064;
      const targetWidthPx = this.mediaWidthPx || this.mediaHeightPx * aspect;
      this.plane.scale.x = this.viewport.width * (targetWidthPx / this.screen.width);
    } else {
      this.plane.scale.y = (this.viewport.height * (900 * this.scale)) / this.screen.height * this.itemScale;
      this.plane.scale.x = (this.viewport.width * (700 * this.scale)) / this.screen.width * this.itemScale;
    }

    this.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];

    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

/*********************** APP ************************/ 
class App {
  constructor(container, { items, bend, textColor = '#ffffff', borderRadius = 0, font = 'bold 30px Figtree', itemScale = 1, mediaHeightPx = null, mediaWidthPx = null } = {}) {
    document.documentElement.classList.remove('no-js');
    this.container = container;
    this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias(items, bend, textColor, borderRadius, font, itemScale, mediaHeightPx, mediaWidthPx);
    this.update();
    this.addEventListeners();
    this.container.addEventListener('click', this.onClick.bind(this));
  }

  createRenderer() {
    this.renderer = new Renderer({ alpha: true });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, { heightSegments: 50, widthSegments: 100 });
  }

  createMedias(items, bend = 1, textColor, borderRadius, font, itemScale = 1, mediaHeightPx, mediaWidthPx) {
    const defaultItems = [
      { image: 'https://picsum.photos/seed/1/800/600?grayscale', text: 'Bridge' },
      { image: 'https://picsum.photos/seed/2/800/600?grayscale', text: 'Desk Setup' },
      { image: 'https://picsum.photos/seed/3/800/600?grayscale', text: 'Waterfall' },
      { image: 'https://picsum.photos/seed/4/800/600?grayscale', text: 'Strawberries' },
      { image: 'https://picsum.photos/seed/5/800/600?grayscale', text: 'Deep Diving' },
      { image: 'https://picsum.photos/seed/6/800/600?grayscale', text: 'Train Track' },
      { image: 'https://picsum.photos/seed/7/800/600?grayscale', text: 'Santorini' },
      { image: 'https://picsum.photos/seed/8/800/600?grayscale', text: 'Blurry Lights' },
    ];

    const galleryItems = items && items.length ? items : defaultItems;
    this.mediasImages = galleryItems.concat(galleryItems); // duplication pour scroll infini
    this.medias = this.mediasImages.map((data, index) =>
      new Media({
        geometry: this.planeGeometry,
        gl: this.gl,
        image: data.image,
        index,
        length: this.mediasImages.length,
        scene: this.scene,
        screen: this.screen,
        text: data.text || data.title || '',
        viewport: this.viewport,
        bend,
        textColor,
        borderRadius,
        font,
        itemScale,
        mediaHeightPx,
        mediaWidthPx,
      }),
    );
  }

  /**************** EVENTS *****************/
  onTouchDown(e) {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = e.touches ? e.touches[0].clientX : e.clientX;
  }
  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * 0.05;
    this.scroll.target = this.scroll.position + distance;
  }
  onTouchUp() {
    this.isDown = false;
    this.onCheck();
  }
  onWheel() {
    this.scroll.target += 2;
    this.onCheckDebounce();
  }
  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  }

  onClick(e) {
    if (!this.medias || !this.medias[0]) return;
    const width = this.medias[0].width;
    const index = ((Math.round(Math.abs(this.scroll.current) / width)) % this.mediasImages.length);
    const itemData = this.mediasImages[index];
    if (!itemData || !itemData.link) return;
    const isInternal = itemData.isInternal || (itemData.link && itemData.link.startsWith('/'));
    if (isInternal) {
      window.location.href = itemData.link;
    } else {
      window.open(itemData.link, '_blank');
    }
  }

  /**************** RESIZE & RENDER *****************/
  onResize() {
    this.screen = { width: this.container.clientWidth, height: this.container.clientHeight };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });
    const fovRad = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fovRad / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    if (this.medias) this.medias.forEach((m) => m.onResize({ screen: this.screen, viewport: this.viewport }));
  }

  update() {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    if (this.medias) this.medias.forEach((m) => m.update(this.scroll, direction));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update.bind(this));
  }

  /**************** LISTENERS *****************/
  addEventListeners() {
    this.boundOnResize = this.onResize.bind(this);
    this.boundOnWheel = this.onWheel.bind(this);
    this.boundOnTouchDown = this.onTouchDown.bind(this);
    this.boundOnTouchMove = this.onTouchMove.bind(this);
    this.boundOnTouchUp = this.onTouchUp.bind(this);

    window.addEventListener('resize', this.boundOnResize);
    window.addEventListener('mousewheel', this.boundOnWheel);
    window.addEventListener('wheel', this.boundOnWheel);
    window.addEventListener('mousedown', this.boundOnTouchDown);
    window.addEventListener('mousemove', this.boundOnTouchMove);
    window.addEventListener('mouseup', this.boundOnTouchUp);
    window.addEventListener('touchstart', this.boundOnTouchDown);
    window.addEventListener('touchmove', this.boundOnTouchMove);
    window.addEventListener('touchend', this.boundOnTouchUp);
  }

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.boundOnResize);
    window.removeEventListener('mousewheel', this.boundOnWheel);
    window.removeEventListener('wheel', this.boundOnWheel);
    window.removeEventListener('mousedown', this.boundOnTouchDown);
    window.removeEventListener('mousemove', this.boundOnTouchMove);
    window.removeEventListener('mouseup', this.boundOnTouchUp);
    window.removeEventListener('touchstart', this.boundOnTouchDown);
    window.removeEventListener('touchmove', this.boundOnTouchMove);
    window.removeEventListener('touchend', this.boundOnTouchUp);
    if (this.renderer && this.renderer.gl && this.renderer.gl.canvas.parentNode) {
      this.renderer.gl.canvas.parentNode.removeChild(this.renderer.gl.canvas);
    }
  }
}

/*********************** REACT COMPONENT ************************/ 
export default function CircularGallery({ items, bend = 3, textColor = '#ffffff', borderRadius = 0.05, font = 'bold 30px Figtree', itemScale = 1.8, mediaHeightPx = 498, mediaWidthPx = 530 }) {
  const containerRef = useRef(null);
  useEffect(() => {
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font, itemScale, mediaHeightPx, mediaWidthPx });
    return () => app.destroy();
  }, [items, bend, textColor, borderRadius, font, itemScale, mediaHeightPx, mediaWidthPx]);

  return <div className="circular-gallery" ref={containerRef} />;
} 