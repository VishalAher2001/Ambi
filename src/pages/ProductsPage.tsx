import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { ContactBanner } from '../components/sections/ContactBanner';
import { ProductCard } from '../components/products/ProductCard';
import { PRODUCT_CATEGORY_SECTIONS } from '../data/products';

function getSubcategoryGridClass(count: number) {
  if (count === 5) {
    return 'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';
  }
  if (count === 6) {
    return 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3';
  }
  return 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4';
}

export function ProductsPage() {
  const [searchParams] = useSearchParams();
  const { hash } = useLocation();

  useEffect(() => {
    const requestedCategory = searchParams.get('category');
    const hashId = hash.replace('#', '');
    const matchedGroup = PRODUCT_CATEGORY_SECTIONS.find(
      (g) =>
        g.id === hashId ||
        g.queryCategory === requestedCategory ||
        g.title === requestedCategory
    );
    if (!matchedGroup) return;

    const id = requestAnimationFrame(() => {
      const target = document.getElementById(matchedGroup.id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    return () => cancelAnimationFrame(id);
  }, [searchParams, hash]);

  return (
    <>
      <SeoHead
        title="Products — AMBILUX Architectural Lighting"
        description="Explore AMBILUX architectural lighting products organized by category: Commercial, Decorative, Geometrical, Acoustic, and Outdoor."
        path="/products"
      />

      {/* Corporate Header */}
      <section className="bg-white pt-32 pb-14 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
              Products
            </p>
            <CharacterReveal
              text="Architectural lighting products by category"
              as="h1"
              mode="mount"
              theme="light"
              className="text-[clamp(2.2rem,4.4vw,4rem)] font-normal leading-[1.06] tracking-[-0.03em] text-[#555555]"
            />
            <p className="max-w-2xl text-base leading-relaxed text-[#555555]">
              Organized across Commercial, Decorative, Geometrical, Acoustic, and Outdoor architectural lighting lines from the AMBILUX collection.
            </p>
          </div>

          {/* Section Jump Links (Non-filtering anchor navigation) */}
          <nav
            aria-label="Product Categories"
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[#aeb0b1] py-4"
          >
            {PRODUCT_CATEGORY_SECTIONS.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="editorial-link text-sm font-medium text-[#0074ba] hover:text-[#00943e] transition-colors"
              >
                <span className="font-mono text-xs text-[#00943e] tabular-code">
                  {group.number}
                </span>
                <span>{group.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Simplified Category-Wise Sections */}
      {PRODUCT_CATEGORY_SECTIONS.map((group, groupIdx) => {
        const isTinted = groupIdx % 2 === 1;
        return (
          <section
            key={group.id}
            id={group.id}
            className={`scroll-mt-24 py-20 md:py-24 ${
              isTinted
                ? 'bg-[#aeb0b1]/15 border-y border-[#aeb0b1]/50'
                : 'bg-white'
            }`}
          >
            <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
              {group.subcategories && group.subcategories.length > 0 ? (
                <div className="space-y-12">
                  {/* Category Header */}
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end border-b border-[#aeb0b1] pb-8">
                    <div className="lg:col-span-7 space-y-3">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e] tabular-code">
                        {group.number} · Category
                      </p>
                      <CharacterReveal
                        text={group.title}
                        as="h2"
                        mode="scroll"
                        theme="light"
                        className="text-[clamp(1.9rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#555555]"
                      />
                    </div>
                    <div className="lg:col-span-5">
                      <p className="text-[15px] leading-relaxed text-[#555555]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* One representative image card per subcategory */}
                  <div className={getSubcategoryGridClass(group.subcategories.length)}>
                    {group.subcategories.map((sub) => (
                      <ProductCard
                        key={sub.id}
                        product={{
                          id: sub.id,
                          name: sub.name,
                          image: sub.image,
                          description: sub.description,
                          isPhotoTile: sub.isPhotoTile,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : group.mainImage ? (
                /* Category without subcategories: display only its main category image */
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-5 space-y-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e] tabular-code">
                      {group.number} · Category
                    </p>
                    <CharacterReveal
                      text={group.title}
                      as="h2"
                      mode="scroll"
                      theme="light"
                      className="text-[clamp(1.9rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#555555]"
                    />
                    <p className="text-[15px] leading-relaxed text-[#555555]">
                      {group.description}
                    </p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="overflow-hidden bg-white border border-[#aeb0b1]">
                      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden">
                        <img
                          src={group.mainImage.image}
                          alt={group.mainImage.alt}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className={
                            group.mainImage.isPhotoTile
                              ? 'h-full w-full object-cover object-center'
                              : 'max-h-[85%] max-w-[85%] h-auto w-auto object-contain'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      <ContactBanner
        heading="Discuss architectural lighting for your project"
        description="Contact our team in Mumbai for luminaire specifications, samples, or bespoke fixture customisation."
        theme="warm"
      />
    </>
  );
}
