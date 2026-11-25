import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { ImageReveal } from '../components/animations/ImageReveal';
import { ContactBanner } from '../components/sections/ContactBanner';
import { CtaButton } from '../components/common/CtaButton';
import { EXECUTED_PROJECTS } from '../data/projects';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = EXECUTED_PROJECTS.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? EXECUTED_PROJECTS[index] : null;

  if (!project) {
    return (
      <section className="bg-white pt-40 pb-28">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)] space-y-6">
          <h1 className="text-3xl font-normal tracking-tight text-[#555555]">
            Project not found
          </h1>
          <p className="text-[#555555]">
            The requested project entry could not be located in the AMBILUX catalogue.
          </p>
          <CtaButton label="Return to projects" to="/projects" variant="primary" />
        </div>
      </section>
    );
  }

  const prevProject =
    EXECUTED_PROJECTS[(index - 1 + EXECUTED_PROJECTS.length) % EXECUTED_PROJECTS.length];
  const nextProject = EXECUTED_PROJECTS[(index + 1) % EXECUTED_PROJECTS.length];

  return (
    <>
      <SeoHead
        title={`${project.title} — AMBILUX Projects`}
        description={project.summary}
        path={`/projects/${project.slug}`}
      />

      {/* Project Hero */}
      <section data-nav-theme="dark" className="bg-[#555555] text-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="mb-8">
            <Link
              to="/projects"
              className="editorial-link text-sm text-white hover:text-[#ffeb00] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>All executed projects</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#ffeb00]">
                {project.catalogueSection}
              </p>
              <CharacterReveal
                text={project.title}
                as="h1"
                mode="mount"
                theme="dark"
                className="text-[clamp(2.1rem,4.2vw,3.75rem)] font-normal leading-[1.06] tracking-[-0.03em] text-white"
              />
            </div>
            <div className="lg:col-span-4 space-y-2 border-t border-[#aeb0b1]/40 pt-4 lg:border-t-0 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.12em] text-[#aeb0b1]">
                Fixture Disciplines
              </p>
              <p className="text-sm text-white">{project.seriesUsed.join(' · ')}</p>
            </div>
          </div>

          <div className="mt-12">
            <ImageReveal
              src={project.heroImage}
              alt={project.heroAlt}
              direction="up"
              aspectClass="aspect-[16/9]"
              eager
              parallax
              className="bg-[#555555] border border-[#aeb0b1]/35"
            />
          </div>
        </div>
      </section>

      {/* Verified Scope & Editorial Gallery */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          {project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4 space-y-6">
                <h2 className="text-xl font-medium tracking-[-0.015em] text-[#555555]">
                  Lighting Composition
                </h2>
                <p className="text-[15px] leading-relaxed text-[#555555]">
                  {project.summary}
                </p>
                <ul className="space-y-3 border-t border-[#aeb0b1] pt-5 text-sm leading-relaxed text-[#555555]">
                  {project.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <div className="pt-2">
                  <CtaButton
                    label="Browse related fixtures"
                    to={`/products?category=${encodeURIComponent(project.seriesUsed[0] || 'Commercial Lights')}`}
                    variant="primary"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-12">
                {project.gallery.map((photo, idx) => (
                  <figure key={idx} className="space-y-3">
                    <ImageReveal
                      src={photo.src}
                      alt={photo.alt}
                      direction={idx % 2 === 0 ? 'left' : 'right'}
                      aspectClass="aspect-[16/10]"
                    />
                    <figcaption className="text-xs text-[#555555]">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-xl font-medium tracking-[-0.015em] text-[#555555]">
                  Lighting Composition
                </h2>
                <p className="text-[15px] leading-relaxed text-[#555555]">
                  {project.summary}
                </p>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <ul className="space-y-3 border-t border-[#aeb0b1] pt-5 text-sm leading-relaxed text-[#555555]">
                  {project.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <div className="pt-2">
                  <CtaButton
                    label="Browse related fixtures"
                    to={`/products?category=${encodeURIComponent(project.seriesUsed[0] || 'Commercial Lights')}`}
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="bg-[#aeb0b1]/15 border-t border-[#aeb0b1] py-14">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col gap-2 border-t border-[#aeb0b1] pt-5"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#0074ba] group-hover:text-[#00943e] transition-colors">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                Previous Project
              </span>
              <span className="font-display text-lg font-medium text-[#555555] group-hover:text-[#00943e] transition-colors">
                {prevProject.title}
              </span>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col gap-2 border-t border-[#aeb0b1] pt-5 sm:items-end sm:text-right"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#0074ba] group-hover:text-[#00943e] transition-colors">
                Next Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="font-display text-lg font-medium text-[#555555] group-hover:text-[#00943e] transition-colors">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ContactBanner theme="dark" />
    </>
  );
}
