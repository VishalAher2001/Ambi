import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { CtaButton } from '../components/common/CtaButton';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { IlluminationCanvas } from '../components/animations/IlluminationCanvas';
import { ImageReveal } from '../components/animations/ImageReveal';
import { ContactBanner } from '../components/sections/ContactBanner';
import { BRAND_INFO, COMPANY_COPY, SERVICES } from '../data/brand';
import { PRODUCT_CATEGORY_SECTIONS } from '../data/products';
import { EXECUTED_PROJECTS } from '../data/projects';
import { ESTEEMED_CLIENTS } from '../data/clients';
import { ProductCard } from '../components/products/ProductCard';

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const heroImgRef = useRef<HTMLImageElement | null>(null);
  const pinnedSectionRef = useRef<HTMLElement | null>(null);
  const glowProgressRef = useRef(0.12);
  const [stmtProgress, setStmtProgress] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const clientsGridRef = useRef<HTMLDivElement | null>(null);

  // Hero subtle scale-down & parallax
  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.08 },
        { scale: 1.0, duration: 1.8, ease: 'power2.out' }
      );
      gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Pinned brand statement & illumination canvas scroll controller
  useEffect(() => {
    const section = pinnedSectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      glowProgressRef.current = 0.75;
      setStmtProgress(1);
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      end: 'bottom bottom',
      scrub: 0.25,
      onUpdate: (self) => {
        const p = self.progress;
        glowProgressRef.current = Math.min(1, p * 1.15);
        // Reveal statement between 18% and 88% of section scroll
        const textP = Math.max(0, Math.min(1, (p - 0.14) / 0.72));
        setStmtProgress(textP);
      },
    });

    return () => trigger.kill();
  }, []);

  // Staggered client logo reveal
  useEffect(() => {
    const grid = clientsGridRef.current;
    if (!grid) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cells = grid.querySelectorAll('[data-client-cell]');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cells,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 84%',
            once: true,
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, []);

  const featuredProjects = EXECUTED_PROJECTS.slice(0, 4);

  return (
    <>
      <SeoHead
        title="AMBILUX — Customised Architectural Lighting Solutions"
        description="Architectural lighting solutions by Ambient Works. Explore Commercial, Decorative, Geometrical, Acoustic, and Outdoor lighting systems."
        path="/"
      />

      {/* SECTION 1: CINEMATIC FULL-SCREEN HERO */}
      <section
        data-nav-theme="dark"
        className="relative flex min-h-[640px] h-[100svh] w-full items-end overflow-hidden bg-[#555555] text-white"
      >
        <img
          ref={heroImgRef}
          src="/assets/images/hero_architectural_lobby_1794914229704.webp"
          alt="Contemporary architectural atrium illuminated with warm linear coves and recessed ceiling downlights"
          loading="eager"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#555555]/85 via-[#555555]/40 to-[#555555]/35"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[var(--gutter)] pb-14 pt-32 md:pb-20">
          <div className="max-w-4xl space-y-6">
            <CharacterReveal
              text={"Customised lighting\nto match your design vision"}
              as="h1"
              mode="mount"
              theme="dark"
              delay={0.18}
              className="text-[clamp(2.4rem,5.4vw,4.75rem)] font-normal leading-[1.03] tracking-[-0.035em] text-white"
            />
            <p className="max-w-xl text-base md:text-lg leading-relaxed text-white">
              Architectural lighting solutions by {BRAND_INFO.legalName}, crafted alongside architects and interior spaces from concept to completion.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <CtaButton
                label="Explore products"
                to="/products"
                variant="primary"
                size="lg"
              />
              <Link
                to="/projects"
                className="editorial-link text-[15px] font-medium text-white hover:text-[#ffeb00] py-2 transition-colors"
              >
                <span>View executed projects</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PINNED BRAND STATEMENT WITH ARCHITECTURAL ILLUMINATION CANVAS */}
      <section
        ref={pinnedSectionRef}
        className="relative bg-white md:h-[210vh]"
      >
        <div className="md:sticky md:top-0 md:h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <IlluminationCanvas progressRef={glowProgressRef} />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[var(--gutter)] py-24 md:py-0">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <CharacterReveal
                  text={COMPANY_COPY.manifesto}
                  as="h2"
                  theme="light"
                  spread={0.18}
                  controlledProgress={stmtProgress}
                  className="text-[clamp(1.65rem,3.2vw,2.9rem)] font-normal leading-[1.18] tracking-[-0.025em] text-[#555555]"
                />
              </div>
              <div className="lg:col-span-4 lg:pl-8 space-y-6">
                <p className="text-[15px] leading-relaxed text-[#555555]">
                  {COMPANY_COPY.legacyParagraphs[0]}
                </p>
                <Link
                  to="/about"
                  className="editorial-link text-sm font-medium text-[#0074ba] hover:text-[#00943e] transition-colors"
                >
                  <span>Read our story</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL ARCHITECTURAL INTERLUDE */}
      <section className="bg-[#aeb0b1]/15 border-y border-[#aeb0b1]/50">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)] py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <ImageReveal
                src="/assets/general/about-pendants.webp"
                alt="Warm tiered architectural pendant fixtures illuminating a minimalist room"
                direction="up"
                aspectClass="aspect-[16/10]"
                parallax
              />
            </div>
            <div className="lg:col-span-5 space-y-6 lg:pl-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
                Ambient Works · Mumbai
              </p>
              <CharacterReveal
                text="Translating architectural intent into luminous reality"
                as="h2"
                mode="scroll"
                theme="light"
                className="text-[clamp(1.75rem,2.8vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.025em] text-[#555555]"
              />
              <p className="text-[15px] leading-relaxed text-[#555555]">
                {COMPANY_COPY.legacyParagraphs[1]}
              </p>
              <p className="text-[15px] leading-relaxed text-[#555555]">
                {COMPANY_COPY.legacyParagraphs[2]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW (ASYMMETRICAL INTERACTIVE LAYOUT) */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
                Services Offered
              </p>
              <CharacterReveal
                text="End-to-end architectural lighting execution"
                as="h2"
                mode="scroll"
                theme="light"
                className="text-[clamp(1.9rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#555555]"
              />
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Link
                to="/services"
                className="editorial-link text-sm font-medium text-[#0074ba] hover:text-[#00943e] transition-colors"
              >
                <span>Explore all services</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Interactive Visual Showcase */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#aeb0b1]/15">
                {SERVICES.map((srv, idx) => (
                  <img
                    key={srv.id}
                    src={srv.homeImage}
                    alt={srv.homeImageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                      idx === activeServiceIdx
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  />
                ))}
              </div>
              <div className="border-t border-[#aeb0b1]/60 pt-4 flex items-center justify-between gap-4 text-xs text-[#555555]">
                <span>{COMPANY_COPY.casambiNote}</span>
              </div>
            </div>

            {/* Right Hairline-Divided Interactive Rows */}
            <div className="lg:col-span-7 border-t border-[#aeb0b1]">
              {SERVICES.map((srv, idx) => {
                const isActive = idx === activeServiceIdx;
                return (
                  <div
                    key={srv.id}
                    onMouseEnter={() => setActiveServiceIdx(idx)}
                    onFocus={() => setActiveServiceIdx(idx)}
                    onClick={() => setActiveServiceIdx(idx)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    className={`group cursor-pointer border-b border-[#aeb0b1] py-7 md:py-9 transition-colors duration-300 outline-none focus-visible:bg-[#aeb0b1]/15 ${
                      isActive ? 'bg-[#aeb0b1]/15 px-4 md:px-6 -mx-4 md:-mx-6' : ''
                    }`}
                  >
                    <div className="grid grid-cols-12 items-start gap-4">
                      <span
                        className={`col-span-2 md:col-span-1 font-display text-sm font-medium tabular-code pt-1 ${
                          isActive ? 'text-[#00943e]' : 'text-[#555555]'
                        }`}
                      >
                        {srv.number}
                      </span>
                      <div className="col-span-10 md:col-span-11 space-y-2.5">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-[#555555]">
                            {srv.title}
                          </h3>
                          <span
                            aria-hidden="true"
                            className={`h-2.5 w-2.5 rounded-full transition-transform duration-300 ${
                              isActive ? 'bg-[#00943e] scale-125' : 'bg-[#aeb0b1]'
                            }`}
                          />
                        </div>
                        <p className="max-w-xl text-[15px] leading-relaxed text-[#555555]">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCTS */}
      <section className="bg-[#aeb0b1]/15 py-24 md:py-32 border-t border-[#aeb0b1]/50">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
                Products
              </p>
              <CharacterReveal
                text="Architectural lighting products"
                as="h2"
                mode="scroll"
                theme="light"
                className="text-[clamp(1.9rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#555555]"
              />
            </div>
            <CtaButton label="View All Products" to="/products" variant="primary" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PRODUCT_CATEGORY_SECTIONS.filter((group) =>
              ['commercial', 'decorative', 'outdoor'].includes(group.id)
            ).map((group) => {
              const repImage =
                group.homeImage?.image ??
                group.mainImage?.image ??
                group.subcategories?.[0]?.image ??
                '';
              const repIsPhoto =
                group.homeImage?.isPhotoTile ??
                group.mainImage?.isPhotoTile ??
                group.subcategories?.[0]?.isPhotoTile;
              return (
                <Link
                  key={group.id}
                  to={`/products#${group.id}`}
                  className="flex h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00943e]"
                >
                  <ProductCard
                    product={{
                      id: group.id,
                      category: `${group.number} · Category`,
                      name: group.title,
                      image: repImage,
                      description: group.description,
                      isPhotoTile: repIsPhoto,
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: DARK CINEMATIC FEATURED PROJECTS (HALDEN SPLIT INSPIRATION) */}
      <section data-nav-theme="dark" className="relative bg-[#555555] text-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-10 border-b border-[#aeb0b1]/40 pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#ffeb00]">
                Executed Projects
              </p>
              <CharacterReveal
                text="Spaces shaped by architectural light"
                as="h2"
                mode="scroll"
                theme="dark"
                className="text-[clamp(2rem,3.6vw,3.2rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white"
              />
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <CtaButton label="All projects" to="/projects" variant="primary" />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
            {featuredProjects.map((project, idx) => {
              const span = idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5';
              const aspect = idx === 0 || idx === 3 ? 'aspect-[16/10]' : 'aspect-[4/3]';
              return (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className={`group block ${span} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00943e]`}
                >
                  <ImageReveal
                    src={project.homeImage ?? project.heroImage}
                    alt={project.homeAlt ?? project.heroAlt}
                    direction={idx % 2 === 0 ? 'up' : 'left'}
                    aspectClass={aspect}
                    className="bg-[#555555] border border-[#aeb0b1]/35"
                    imgClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="mt-4 flex items-start justify-between gap-4 border-t border-[#aeb0b1]/40 pt-4">
                    <div className="space-y-1">
                      <p className="text-xs text-[#aeb0b1]">
                        {project.seriesUsed.join(' · ')}
                      </p>
                      <h3 className="text-lg md:text-xl font-medium tracking-[-0.015em] text-white">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#ffeb00]"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: ESTEEMED CLIENTS */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
                Esteemed Clients
              </p>
              <CharacterReveal
                text="Trusted across enterprise workspaces and institutions"
                as="h2"
                mode="scroll"
                theme="light"
                className="text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-[1.12] tracking-[-0.025em] text-[#555555]"
              />
            </div>
            <Link
              to="/clients"
              className="editorial-link text-sm font-medium text-[#0074ba] hover:text-[#00943e] transition-colors"
            >
              <span>View all clients</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div
            ref={clientsGridRef}
            className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-[#aeb0b1]"
          >
            {ESTEEMED_CLIENTS.map((client) => (
              <div
                key={client.id}
                data-client-cell
                className="flex h-28 md:h-32 items-center justify-center border-r border-b border-[#aeb0b1] bg-white p-6 transition-colors duration-300 hover:bg-[#aeb0b1]/15"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="max-h-11 md:max-h-12 w-auto max-w-[82%] object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT CTA */}
      <ContactBanner
        heading="Plan your architectural lighting with AMBILUX"
        description="Speak with our team in Malad West, Mumbai for customized fixtures, light planning, or product catalogues."
        theme="warm"
      />
    </>
  );
}
