import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = 'up' | 'left' | 'right' | 'center';

interface ImageRevealProps {
  src: string;
  alt: string;
  direction?: RevealDirection;
  aspectClass?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  parallax?: boolean;
}

const INITIAL_CLIP: Record<RevealDirection, string> = {
  up: 'inset(14% 0% 0% 0%)',
  left: 'inset(0% 14% 0% 0%)',
  right: 'inset(0% 0% 0% 14%)',
  center: 'inset(6% 6% 6% 6%)',
};

export function ImageReveal({
  src,
  alt,
  direction = 'up',
  aspectClass = 'aspect-[4/3]',
  className = '',
  imgClassName = 'object-cover',
  eager = false,
  parallax = false,
}: ImageRevealProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrap,
        { clipPath: INITIAL_CLIP[direction] },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 88%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        img,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 88%',
            once: true,
          },
        }
      );

      if (parallax) {
        gsap.fromTo(
          img,
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: wrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, wrap);

    return () => ctx.revert();
  }, [direction, parallax]);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden bg-[#aeb0b1]/15 ${aspectClass} ${className}`}
    >
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#aeb0b1]/15 p-6 text-center text-[#555555]">
          <span className="font-display text-sm font-medium text-[#555555]">{alt}</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={`h-full w-full will-change-transform ${imgClassName}`}
        />
      )}
    </div>
  );
}
