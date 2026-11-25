import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../../data/brand';

const FOOTER_PAGES = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
];

const PRODUCT_SHORTCUTS = [
  'Commercial Lights',
  'Decorative Lights',
  'Geometrical Lights',
  'Acoustic Lights',
  'Outdoor Lights',
];

export function Footer() {
  return (
    <footer className="bg-[#555555] text-white border-t border-[#aeb0b1]">
      <div className="mx-auto max-w-[1400px] px-[var(--gutter)] py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Summary */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              aria-label="AMBILUX Home"
              className="inline-flex items-center rounded-xl bg-white px-4 py-2.5"
            >
              <img
                src={BRAND_INFO.logoDark}
                alt="AMBILUX"
                width={1200}
                height={209}
                className="h-8 md:h-9 w-auto aspect-[1200/209] object-contain"
              />
            </Link>
            <p className="max-w-md text-[15px] leading-relaxed text-[#aeb0b1]">
              {BRAND_INFO.tagline}. Operated by {BRAND_INFO.legalName}, partnering with architects,
              designers, and enterprises from concept to completion.
            </p>
            <p className="text-xs tracking-wide text-[#aeb0b1]">
              GST No.: {BRAND_INFO.gstNo}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm text-[#aeb0b1]">
              {FOOTER_PAGES.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="editorial-link text-[#aeb0b1] transition-colors hover:text-[#00943e]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white">
              Collections
            </p>
            <ul className="space-y-2.5 text-sm text-[#aeb0b1]">
              {PRODUCT_SHORTCUTS.map((category) => (
                <li key={category}>
                  <Link
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="editorial-link text-[#aeb0b1] transition-colors hover:text-[#00943e]"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white">
              Mumbai Studio
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-[#aeb0b1]">
              <p>{BRAND_INFO.address}</p>
              <p>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="editorial-link text-white hover:text-[#00943e] transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={BRAND_INFO.emailHref}
                  className="editorial-link text-white hover:text-[#00943e] transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#aeb0b1]/35 pt-8 text-xs text-[#aeb0b1] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BRAND_INFO.brandName} · {BRAND_INFO.legalName}. All rights reserved.</p>
          <p>{BRAND_INFO.website}</p>
        </div>
      </div>
    </footer>
  );
}
