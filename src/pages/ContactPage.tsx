import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { ImageReveal } from '../components/animations/ImageReveal';
import { ContactForm } from '../components/forms/ContactForm';
import { BRAND_INFO } from '../data/brand';

export function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact — AMBILUX | Ambient Works Mumbai"
        description="Get in touch with Ambient Works (AMBILUX) in Malad West, Mumbai. Phone: +91 9819 55 29 29, Email: sales@ambilux.in."
        path="/contact"
      />

      <section className="bg-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
              Contact Us
            </p>
            <CharacterReveal
              text="For additional information, please get in touch with us"
              as="h1"
              mode="mount"
              theme="light"
              className="text-[clamp(2.2rem,4.4vw,4rem)] font-normal leading-[1.06] tracking-[-0.03em] text-[#555555]"
            />
            <p className="max-w-2xl text-base leading-relaxed text-[#555555]">
              Connect with our architectural lighting specialists in Mumbai for customised fixture enquiries, light planning collaboration, or product datasheets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#aeb0b1]/15 py-20 md:py-28 border-t border-[#aeb0b1]/50">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
            {/* Verified Contact Details */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6 border-t border-[#aeb0b1] pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-[#00943e]" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#555555]">
                      Phone
                    </p>
                    <a
                      href={BRAND_INFO.phoneHref}
                      className="text-lg font-medium text-[#0074ba] hover:text-[#00943e] transition-colors"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-[#00943e]" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#555555]">
                      Email
                    </p>
                    <a
                      href={BRAND_INFO.emailHref}
                      className="text-lg font-medium text-[#0074ba] hover:text-[#00943e] transition-colors"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="mt-1 h-4 w-4 shrink-0 text-[#00943e]" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#555555]">
                      Website
                    </p>
                    <p className="text-base text-[#555555]">{BRAND_INFO.website}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#00943e]" aria-hidden="true" />
                  <div className="space-y-2">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#555555]">
                      Studio Address
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#555555]">
                      {BRAND_INFO.address}
                    </p>
                    <a
                      href={BRAND_INFO.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link inline-flex items-center gap-1.5 text-sm font-medium text-[#0074ba] hover:text-[#00943e] pt-1 transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              <ImageReveal
                src="/assets/unique/contact-studio.webp"
                alt="Architectural lounge studio illuminated with recessed downlights and wall sconces"
                direction="up"
                aspectClass="aspect-[16/10]"
              />
            </div>

            {/* Working Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#aeb0b1]">
              <div className="mb-8 space-y-2">
                <h2 className="text-2xl font-normal tracking-[-0.02em] text-[#555555]">
                  Send an enquiry
                </h2>
                <p className="text-sm text-[#555555]">
                  Fields marked with * are required. Submissions are delivered directly to our architectural team.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
