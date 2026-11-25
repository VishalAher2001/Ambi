import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SeoHead } from '../components/common/SeoHead';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { ContactBanner } from '../components/sections/ContactBanner';
import { ESTEEMED_CLIENTS } from '../data/clients';

gsap.registerPlugin(ScrollTrigger);

export function ClientsPage() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cells = grid.querySelectorAll('[data-client-item]');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cells,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.045,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SeoHead
        title="Esteemed Clients — AMBILUX Architectural Lighting"
        description="Organizations and enterprises trusting Ambient Works and AMBILUX for architectural lighting execution."
        path="/clients"
      />

      <section className="bg-white pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
              Esteemed Clients
            </p>
            <CharacterReveal
              text="Organizations illuminated by AMBILUX"
              as="h1"
              mode="mount"
              theme="light"
              className="text-[clamp(2.2rem,4.4vw,4rem)] font-normal leading-[1.06] tracking-[-0.03em] text-[#555555]"
            />
            <p className="max-w-2xl text-base leading-relaxed text-[#555555]">
              Every client shown below is featured in the official AMBILUX architectural lighting catalogue.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#aeb0b1]/15 py-20 md:py-28 border-t border-[#aeb0b1]/50">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#aeb0b1]"
          >
            {ESTEEMED_CLIENTS.map((client) => (
              <div
                key={client.id}
                data-client-item
                className="group flex flex-col justify-between border-r border-b border-[#aeb0b1] bg-white p-8 md:p-10 min-h-[190px] transition-colors duration-300 hover:border-[#00943e] hover:bg-[#aeb0b1]/10"
              >
                <div className="flex flex-1 items-center justify-center py-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="max-h-14 w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 border-t border-[#aeb0b1]/50 pt-3 text-center text-xs font-medium tracking-wide text-[#555555]">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner
        heading="Partner with Ambient Works on your next project"
        theme="dark"
      />
    </>
  );
}
