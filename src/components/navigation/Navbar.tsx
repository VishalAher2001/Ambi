import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../../data/brand';
import { CtaButton } from '../common/CtaButton';

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/clients' },
];

export function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Entrance animation on mount
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.85, delay: 0.1, ease: 'power2.out' }
    );
  }, []);

  // Mobile drawer staggered link animation
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const items = drawer.querySelectorAll('[data-drawer-item]');
        gsap.fromTo(
          drawer,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, delay: 0.08, ease: 'power3.out' }
        );
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const pillSurface = scrolled
    ? 'bg-white text-[#555555] border border-[#aeb0b1] shadow-[0_12px_32px_-18px_rgba(85,85,85,0.22)] backdrop-blur-md'
    : 'bg-white text-[#555555] border border-[#aeb0b1] shadow-[0_8px_24px_-16px_rgba(85,85,85,0.16)] backdrop-blur-md';

  const logoSrc = BRAND_INFO.logoDark;

  return (
    <>
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-3 md:top-5 z-50 px-[var(--gutter)] pointer-events-none"
      >
        <div
          className={`pointer-events-auto mx-auto flex h-[54px] md:h-[62px] max-w-[1400px] items-center justify-between gap-6 md:gap-8 rounded-full px-4 md:px-6 transition-[background-color,color,border-color,box-shadow] duration-300 ${pillSurface}`}
        >
          {/* Zone 1: Brand wordmark */}
          <Link
            to="/"
            aria-label="AMBILUX Home"
            className="flex items-center shrink-0 whitespace-nowrap py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00943e]"
          >
            <img
              src={logoSrc}
              alt="AMBILUX"
              width={1200}
              height={209}
              className="h-[22px] sm:h-[25px] md:h-[28px] w-auto aspect-[1200/209] object-contain select-none"
            />
          </Link>

          {/* Zone 2: Single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-[14px] font-medium tracking-[-0.01em] text-[#555555]"
          >
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `editorial-link whitespace-nowrap shrink-0 py-1 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00943e] ${
                    isActive ? 'font-semibold text-[#00943e]' : 'text-[#555555] hover:text-[#00943e]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-[#00943e]"
                      />
                    ) : null}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <CtaButton
              label="Contact"
              to="/contact"
              variant="primary"
              className="hidden sm:inline-flex !h-[38px] md:!h-[40px] !text-[13px] !pl-4 !pr-11"
            />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-[#555555] transition-colors hover:bg-[#aeb0b1]/20 hover:text-[#00943e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00943e]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Drawer */}
      {mobileOpen ? (
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 flex flex-col justify-between bg-[#555555] px-6 pt-24 pb-10 text-white lg:hidden overflow-y-auto"
        >
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              data-drawer-item
              onClick={() => setMobileOpen(false)}
              className={`font-display text-3xl font-normal tracking-tight py-2 border-b border-[#aeb0b1]/30 ${
                pathname === '/' ? 'text-[#ffeb00]' : 'text-white hover:text-[#00943e]'
              }`}
            >
              Home
            </Link>
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                data-drawer-item
                onClick={() => setMobileOpen(false)}
                className={`font-display text-3xl font-normal tracking-tight py-2 border-b border-[#aeb0b1]/30 ${
                  pathname === item.to || pathname.startsWith(`${item.to}/`)
                    ? 'text-[#ffeb00]'
                    : 'text-white hover:text-[#00943e]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-drawer-item
              onClick={() => setMobileOpen(false)}
              className={`font-display text-3xl font-normal tracking-tight py-2 border-b border-[#aeb0b1]/30 ${
                pathname === '/contact' ? 'text-[#ffeb00]' : 'text-white hover:text-[#00943e]'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div data-drawer-item className="mt-10 space-y-3 text-sm text-[#aeb0b1]">
            <p className="text-white font-medium">{BRAND_INFO.legalName}</p>
            <p>{BRAND_INFO.phone}</p>
            <p>{BRAND_INFO.email}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
