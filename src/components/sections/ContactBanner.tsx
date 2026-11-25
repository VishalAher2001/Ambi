import { CharacterReveal } from '../animations/CharacterReveal';
import { CtaButton } from '../common/CtaButton';
import { BRAND_INFO } from '../../data/brand';

interface ContactBannerProps {
  heading?: string;
  description?: string;
  theme?: 'warm' | 'dark';
}

export function ContactBanner({
  heading = 'Illuminate your next architectural space',
  description = 'Share your architectural drawings, lighting schedule, or customisation brief with our Mumbai studio.',
  theme = 'warm',
}: ContactBannerProps) {
  const isDark = theme === 'dark';

  return (
    <section
      data-nav-theme={isDark ? 'dark' : undefined}
      className={
        isDark
          ? 'bg-[#555555] text-white border-t border-[#aeb0b1]/40'
          : 'bg-[#aeb0b1]/15 text-[#555555] border-t border-[#aeb0b1]'
      }
    >
      <div className="mx-auto max-w-[1400px] px-[var(--gutter)] py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 space-y-5">
            <CharacterReveal
              text={heading}
              as="h2"
              mode="scroll"
              theme={isDark ? 'dark' : 'light'}
              className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.03em]"
            />
            <p
              className={`max-w-xl text-base leading-relaxed ${
                isDark ? 'text-white/85' : 'text-[#555555]'
              }`}
            >
              {description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
            <CtaButton
              label="Start an enquiry"
              to="/contact"
              variant="primary"
              size="lg"
            />
            <div
              className={`text-sm flex flex-wrap gap-x-4 gap-y-1 ${
                isDark ? 'text-[#aeb0b1]' : 'text-[#555555]'
              }`}
            >
              <a
                href={BRAND_INFO.phoneHref}
                className={
                  isDark
                    ? 'text-white hover:text-[#ffeb00] transition-colors'
                    : 'text-[#0074ba] hover:text-[#00943e] transition-colors'
                }
              >
                {BRAND_INFO.phone}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={BRAND_INFO.emailHref}
                className={
                  isDark
                    ? 'text-white hover:text-[#ffeb00] transition-colors'
                    : 'text-[#0074ba] hover:text-[#00943e] transition-colors'
                }
              >
                {BRAND_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
