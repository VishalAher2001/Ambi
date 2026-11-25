import { SeoHead } from '../components/common/SeoHead';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { ImageReveal } from '../components/animations/ImageReveal';
import { ContactBanner } from '../components/sections/ContactBanner';
import { BRAND_INFO, COMPANY_COPY, SERVICES } from '../data/brand';
import { CtaButton } from '../components/common/CtaButton';

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us — AMBILUX | Ambient Works"
        description="Learn about Ambient Works and AMBILUX — led by Dharmesh Lad, delivering customized architectural lighting solutions from concept to completion."
        path="/about"
      />

      {/* Editorial Header */}
      <section className="bg-white pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e] mb-5">
            About Us · {BRAND_INFO.legalName}
          </p>
          <CharacterReveal
            text={COMPANY_COPY.manifesto}
            as="h1"
            mode="mount"
            theme="light"
            className="max-w-5xl text-[clamp(2rem,4vw,3.6rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#555555]"
          />
        </div>
      </section>

      {/* Full-Width Architectural Photography */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <ImageReveal
            src="/assets/images/geometrical_lighting_atrium_1794914230864.webp"
            alt="Architectural atrium corridor illuminated by bespoke circular and linear ceiling fixtures"
            direction="up"
            aspectClass="aspect-[16/9]"
            eager
            parallax
          />
        </div>
      </section>

      {/* Legacy & Approach */}
      <section className="bg-[#aeb0b1]/15 py-20 md:py-28 border-y border-[#aeb0b1]/50">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
                Leadership & Craft
              </p>
              <CharacterReveal
                text="A customer-centric approach to luminous architecture"
                as="h2"
                mode="scroll"
                theme="light"
                className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.025em] text-[#555555]"
              />
              <div className="pt-4">
                <ImageReveal
                  src="/assets/services/brass-spotlight.webp"
                  alt="Warm brass pendant architectural spotlight"
                  direction="left"
                  aspectClass="aspect-[3/4]"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-10 space-y-8 text-base md:text-lg leading-[1.7] text-[#555555]">
              {COMPANY_COPY.legacyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="grid grid-cols-1 gap-8 border-t border-[#aeb0b1] pt-10 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#00943e]">
                    Our Mission
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#555555]">
                    {COMPANY_COPY.mission}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#00943e]">
                    Our Vision
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#555555]">
                    {COMPANY_COPY.vision}
                  </p>
                </div>
              </div>

              <blockquote className="border-t border-[#aeb0b1] pt-8 font-display text-xl md:text-2xl font-medium tracking-[-0.02em] text-[#555555]">
                “{BRAND_INFO.motto}”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Experiential Design & Casambi */}
      <section data-nav-theme="dark" className="bg-[#555555] text-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#ffeb00]">
                Experiential Design & Controls
              </p>
              <CharacterReveal
                text={COMPANY_COPY.experientialHeading}
                as="h2"
                mode="scroll"
                theme="dark"
                className="text-[clamp(1.75rem,2.9vw,2.6rem)] font-normal leading-[1.15] tracking-[-0.025em] text-white"
              />
              {COMPANY_COPY.experientialBody.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-white/90">
                  {p}
                </p>
              ))}
              <div className="border-t border-[#aeb0b1]/40 pt-6 space-y-2">
                <p className="text-sm font-medium text-white">Casambi Technology</p>
                <p className="text-sm leading-relaxed text-[#aeb0b1]">
                  {COMPANY_COPY.casambiNote}
                </p>
              </div>
              <div className="pt-2">
                <CtaButton label="Explore our services" to="/services" variant="primary" />
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageReveal
                src="/assets/services/track-casambi.webp"
                alt="Architectural track spotlights powered by Casambi Bluetooth tunable dimming"
                direction="right"
                aspectClass="aspect-[4/3]"
                className="bg-[#555555] border border-[#aeb0b1]/35"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Summary */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(1.75rem,2.8vw,2.5rem)] font-normal tracking-[-0.025em] text-[#555555]">
              Four pillars of project execution
            </h2>
            <CtaButton label="View services" to="/services" variant="primary" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 border-t border-[#aeb0b1] pt-10">
            {SERVICES.map((s) => (
              <div key={s.id} className="space-y-3">
                <span className="font-display text-xs font-medium text-[#00943e] tabular-code">
                  {s.number}
                </span>
                <h3 className="text-lg font-medium text-[#555555]">{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#555555]">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner theme="warm" />
    </>
  );
}
