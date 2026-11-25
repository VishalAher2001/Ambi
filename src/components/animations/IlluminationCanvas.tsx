import { useEffect, useRef } from 'react';

interface IlluminationCanvasProps {
  /** Progress from 0 (warm white) -> 1 (expanded warm architectural wash) */
  progressRef: React.MutableRefObject<number>;
  className?: string;
}

const W = 96;
const H = 60;

function clamp(v: number, min = 0, max = 1) {
  return v < min ? min : v > max ? max : v;
}

function smoothstep(t: number) {
  const c = clamp(t);
  return c * c * (3 - 2 * c);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * Scroll-driven architectural light wash canvas adapted from the 96x60 bilinear
 * illumination technique. Emits a soft warm-amber architectural glow that widens
 * smoothly as the reader scrolls through the statement section.
 */
export function IlluminationCanvas({ progressRef, className = '' }: IlluminationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const imgData = ctx.createImageData(W, H);
    const buf = imgData.data;

    let rafId = 0;
    let curP = progressRef.current;
    const startTime = performance.now();

    // Soft illumination wash strictly blended between White (#FFFFFF),
    // Neutral Grey (#aeb0b1 @ 12%), Blue (#0074ba @ 6%), and Green (#00943e @ 7%):
    const cWhite = [255, 255, 255];
    const cWarm = [245, 246, 246];
    const cHalo = [240, 247, 251];
    const cCore = [237, 247, 241];

    const render = (now: number) => {
      const targetP = clamp(progressRef.current);
      curP += (targetP - curP) * (prefersReducedMotion ? 1 : 0.14);

      const t = prefersReducedMotion ? 0 : now - startTime;
      const driftY = prefersReducedMotion ? 0 : Math.sin(t * 0.00042 + 1.1) * 0.02;
      const driftX = prefersReducedMotion ? 0 : Math.sin(t * 0.00055) * 0.025;

      const aspect = window.innerWidth / Math.max(window.innerHeight, 1);

      // Geometry expands from subtle top architectural light beam into wide ambient glow
      const tip = lerp(0.32, 1.38, smoothstep(curP)) + driftY;
      const half = lerp(0.38, 1.55, Math.pow(curP, 1.15)) + driftX;
      const soft = lerp(0.28, 0.22, curP);
      const RND = 0.28;

      // Prebuild bowl edge polyline (40 segments)
      const N = 40;
      const edgeX = new Float32Array(N);
      const edgeY = new Float32Array(N);
      for (let k = 0; k < N; k++) {
        const frac = k / (N - 1);
        const yy = lerp(-0.25, tip, frac);
        const normY = clamp(yy / Math.max(tip, 0.05));
        const cx = half * aspect * Math.pow(Math.max(1 - normY, 0), 0.72);
        edgeX[k] = cx;
        edgeY[k] = yy;
      }

      for (let pyIdx = 0; pyIdx < H; pyIdx++) {
        const py = (pyIdx + 0.5) / H;
        for (let pxIdx = 0; pxIdx < W; pxIdx++) {
          const px = Math.abs((pxIdx + 0.5) / W - 0.5) * aspect;

          // Distance to nearest segment of bowl edge
          let minD2 = 1e9;
          for (let k = 0; k < N - 1; k++) {
            const ax = edgeX[k];
            const ay = edgeY[k];
            const bx = edgeX[k + 1];
            const by = edgeY[k + 1];
            const dx = bx - ax;
            const dy = by - ay;
            const len2 = dx * dx + dy * dy + 1e-8;
            const proj = clamp(((px - ax) * dx + (py - ay) * dy) / len2);
            const qx = ax + proj * dx;
            const qy = ay + proj * dy;
            const d2 = (px - qx) * (px - qx) + (py - qy) * (py - qy);
            if (d2 < minD2) minD2 = d2;
          }

          let dist = Math.sqrt(minD2);
          const insideBoundary =
            py < tip &&
            px < half * aspect * Math.pow(Math.max(1 - py / Math.max(tip, 0.05), 0), 0.72);
          if (insideBoundary) dist = -dist;

          const sd = dist - RND;
          const g = 1 - smoothstep((sd + soft) / (2 * soft));

          let r: number;
          let gr: number;
          let b: number;

          if (g < 0.35) {
            const k = smoothstep(g / 0.35);
            r = lerp(cWhite[0], cWarm[0], k);
            gr = lerp(cWhite[1], cWarm[1], k);
            b = lerp(cWhite[2], cWarm[2], k);
          } else if (g < 0.75) {
            const k = smoothstep((g - 0.35) / 0.4);
            r = lerp(cWarm[0], cHalo[0], k);
            gr = lerp(cWarm[1], cHalo[1], k);
            b = lerp(cWarm[2], cHalo[2], k);
          } else {
            const k = smoothstep((g - 0.75) / 0.25);
            r = lerp(cHalo[0], cCore[0], k);
            gr = lerp(cHalo[1], cCore[1], k);
            b = lerp(cHalo[2], cCore[2], k);
          }

          const idx = (pyIdx * W + pxIdx) * 4;
          buf[idx] = r;
          buf[idx + 1] = gr;
          buf[idx + 2] = b;
          buf[idx + 3] = 255;
        }
      }

      ctx.putImageData(imgData, 0, 0);
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [progressRef]);

  return (
    <canvas
      ref={canvasRef}
      width={W}
      height={H}
      aria-hidden="true"
      className={`pointer-events-none block w-full h-full ${className}`}
    />
  );
}
