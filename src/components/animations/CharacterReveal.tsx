import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CharacterRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  mode?: 'mount' | 'scroll';
  theme?: 'light' | 'dark';
  spread?: number;
  delay?: number;
  className?: string;
  /** Optional externally driven progress (0..1) for pinned scroll timelines */
  controlledProgress?: number;
}

function clamp(v: number, min = 0, max = 1) {
  return v < min ? min : v > max ? max : v;
}

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function paintChars(
  spans: HTMLSpanElement[],
  progress: number,
  spread: number,
  theme: 'light' | 'dark'
) {
  const n = Math.max(spans.length, 1);
  // Light surface: #aeb0b1 -> #00943e -> #555555
  // Dark surface: #aeb0b1 -> #00943e -> #FFFFFF
  const ghost = [174, 176, 177];
  const accent = [0, 148, 62];
  const final = theme === 'light' ? [85, 85, 85] : [255, 255, 255];

  for (let i = 0; i < n; i++) {
    const el = spans[i];
    const t = clamp((progress * (1 + spread) - i / n) / spread);

    let opacity = 1;
    let blur = 0;
    let yOffset = 0;
    let rgb = final;

    if (t <= 0) {
      opacity = 0;
      blur = 7;
      yOffset = 8;
      rgb = ghost;
    } else if (t < 0.35) {
      const k = t / 0.35;
      opacity = k;
      blur = 7 - 5.5 * k;
      yOffset = 8 * (1 - k);
      rgb = ghost;
    } else if (t < 0.72) {
      const k = (t - 0.35) / 0.37;
      opacity = 1;
      blur = 1.5 * (1 - k);
      yOffset = 0;
      rgb = [
        lerp(ghost[0], accent[0], k),
        lerp(ghost[1], accent[1], k),
        lerp(ghost[2], accent[2], k),
      ];
    } else {
      const k = (t - 0.72) / 0.28;
      opacity = 1;
      blur = 0;
      yOffset = 0;
      rgb = [
        lerp(accent[0], final[0], k),
        lerp(accent[1], final[1], k),
        lerp(accent[2], final[2], k),
      ];
    }

    el.style.opacity = String(opacity);
    el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : 'none';
    el.style.transform = yOffset > 0.05 ? `translate3d(0, ${yOffset.toFixed(2)}px, 0)` : 'none';
    el.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }
}

export function CharacterReveal({
  text,
  as: Tag = 'h2',
  mode = 'scroll',
  theme = 'light',
  spread = 0.28,
  delay = 0.1,
  className = '',
  controlledProgress,
}: CharacterRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>('[data-char]'));
    charsRef.current = spans;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      paintChars(spans, 1, spread, theme);
      return;
    }

    if (typeof controlledProgress === 'number') {
      paintChars(spans, controlledProgress, spread, theme);
      return;
    }

    if (mode === 'mount') {
      paintChars(spans, 0, spread, theme);
      const state = { p: 0 };
      const tween = gsap.to(state, {
        p: 1,
        duration: 1.25,
        delay,
        ease: 'power2.out',
        onUpdate: () => paintChars(spans, state.p, spread, theme),
      });
      return () => {
        tween.kill();
      };
    }

    // Scroll-triggered progressive reveal — once revealed, stays sharp
    paintChars(spans, 0, spread, theme);
    let maxP = 0;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 86%',
      end: 'top 38%',
      scrub: 0.35,
      onUpdate: (self) => {
        if (self.progress > maxP) {
          maxP = self.progress;
        }
        paintChars(spans, maxP, spread, theme);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [text, mode, theme, spread, delay, controlledProgress]);

  useEffect(() => {
    if (typeof controlledProgress === 'number' && charsRef.current.length > 0) {
      paintChars(charsRef.current, controlledProgress, spread, theme);
    }
  }, [controlledProgress, spread, theme]);

  // Split into words and characters so lines never wrap mid-word
  const lines = text.split('\n');

  return (
    <Tag
      ref={containerRef as React.RefObject<never>}
      className={className}
      aria-label={text.replace(/\n/g, ' ')}
    >
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        return (
          <span key={lineIdx}>
            {words.map((word, wordIdx) => (
              <span key={`${lineIdx}-${wordIdx}`}>
                <span className="inline-block whitespace-nowrap" aria-hidden="true">
                  {Array.from(word).map((ch, charIdx) => (
                    <span
                      key={charIdx}
                      data-char
                      className="inline-block will-change-[opacity,filter,transform]"
                    >
                      {ch}
                    </span>
                  ))}
                </span>
                {wordIdx < words.length - 1 ? ' ' : ''}
              </span>
            ))}
            {lineIdx < lines.length - 1 ? <br /> : null}
          </span>
        );
      })}
    </Tag>
  );
}
