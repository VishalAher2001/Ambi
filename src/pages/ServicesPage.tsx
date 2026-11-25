import { SeoHead } from '../components/common/SeoHead';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { ImageReveal } from '../components/animations/ImageReveal';
import { ContactBanner } from '../components/sections/ContactBanner';
import { COMPANY_COPY, SERVICES } from '../data/brand';
import { CtaButton } from '../components/common/CtaButton';

export function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services — AMBILUX Architectural Lighting"
        description="Customized Lighting, Testing & Validation, Light Planning, and Installation Support by Ambient Works (AMBILUX)."
        path="/services"
      />

      {/* Header */}
      <section className="bg-white pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
                Services Offered
              </p>
              <CharacterReveal
                text="From architectural visualization to site commissioning"
                as="h1"
                mode="mount"
                theme="light"
                className="text-[clamp(2.2rem,4.4vw,4rem)] font-normal leading-[1.06] tracking-[-0.03em] text-[#555555]"
              />
            </div>
            <div className="lg:col-span-4 space-y-4">
              <p className="text-[15px] leading-relaxed text-[#555555]">
                {COMPANY_COPY.experientialHeading}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed Experiential Lighting Spread */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <ImageReveal
            src="/assets/services/lounge-halo.webp"
            alt="Architectural lounge with dual halo suspended rings and vertical linear illumination"
            direction="up"
            aspectClass="aspect-[16/9]"
            eager
            parallax
          />
        </div>
      </section>

      {/* Alternating Editorial Service Spreads */}
      <section className="bg-[#aeb0b1]/15 border-t border-[#aeb0b1]/50">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)] divide-y divide-[#aeb0b1]">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={service.id}
                className="py-20 md:py-28 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center"
              >
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <ImageReveal
                    src={service.image}
                    alt={service.imageAlt}
                    direction={isEven ? 'left' : 'right'}
                    aspectClass="aspect-[4/3]"
                  />
                </div>

                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'
                  }`}
                >
                  <span className="inline-block font-display text-sm font-medium text-[#00943e] tabular-code">
                    {service.number}
                  </span>
                  <CharacterReveal
                    text={service.title}
                    as="h2"
                    mode="scroll"
                    theme="light"
                    className="text-[clamp(1.85rem,3vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.025em] text-[#555555]"
                  />
                  <p className="text-base md:text-lg leading-relaxed text-[#555555]">
                    {service.description}
                  </p>
                  <p className="text-[15px] leading-relaxed text-[#555555]">
                    {service.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Casambi Integration Dark Spread */}
      <section data-nav-theme="dark" className="bg-[#555555] text-white py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#ffeb00]">
                Intelligent Lighting Control
              </p>
              <CharacterReveal
                text="Tunable and dimming fixtures powered by Casambi"
                as="h2"
                mode="scroll"
                theme="dark"
                className="text-[clamp(1.8rem,3vw,2.7rem)] font-normal leading-[1.1] tracking-[-0.025em] text-white"
              />
              <p className="text-base leading-relaxed text-white/90">
                {COMPANY_COPY.casambiNote}
              </p>
              <div className="pt-2">
                <CtaButton label="Browse lighting systems" to="/products" variant="primary" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <ImageReveal
                src="/assets/unique/srv-casambi-dark.webp"
                alt="Tunable architectural hexagonal ceiling cluster controlled seamlessly via Casambi"
                direction="center"
                aspectClass="aspect-[16/10]"
                className="bg-[#555555] border border-[#aeb0b1]/35"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactBanner
        heading="Discuss a bespoke lighting brief"
        description="Whether you need customized fixtures, light planning support, or technical commissioning, our team is ready to assist."
        theme="warm"
      />
    </>
  );
}
