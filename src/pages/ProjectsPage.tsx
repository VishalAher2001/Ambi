import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SeoHead } from '../components/common/SeoHead';
import { CharacterReveal } from '../components/animations/CharacterReveal';
import { ImageReveal } from '../components/animations/ImageReveal';
import { ContactBanner } from '../components/sections/ContactBanner';
import { EXECUTED_PROJECTS } from '../data/projects';

export function ProjectsPage() {
  return (
    <>
      <SeoHead
        title="Executed Projects — AMBILUX Architectural Lighting"
        description="Explore verified executed architectural lighting installations across commercial interiors, hospitality spaces, and outdoor landscapes."
        path="/projects"
      />

      {/* Header */}
      <section data-nav-theme="dark" className="bg-[#555555] text-white pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#ffeb00]">
              Executed Projects
            </p>
            <CharacterReveal
              text="Architectural spaces illuminated across our catalogue portfolio"
              as="h1"
              mode="mount"
              theme="dark"
              className="text-[clamp(2.2rem,4.4vw,4rem)] font-normal leading-[1.06] tracking-[-0.03em] text-white"
            />
            <p className="max-w-2xl text-base leading-relaxed text-white/90">
              A photographic index of executed lighting installations documented in the AMBILUX architectural lighting catalogue.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetrical Editorial Portfolio Grid */}
      <section data-nav-theme="dark" className="bg-[#555555] text-white pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
            {EXECUTED_PROJECTS.map((project, idx) => {
              let colSpan = 'md:col-span-6';
              let aspectClass = 'aspect-[4/3]';
              if (project.aspect === 'wide') {
                colSpan = 'md:col-span-12';
                aspectClass = 'aspect-[16/9] md:aspect-[21/9]';
              } else if (project.aspect === 'portrait') {
                colSpan = 'md:col-span-5';
                aspectClass = 'aspect-[4/5]';
              } else if (idx % 3 === 0) {
                colSpan = 'md:col-span-7';
                aspectClass = 'aspect-[16/10]';
              }

              const dirs: Array<'up' | 'left' | 'right' | 'center'> = [
                'up',
                'center',
                'left',
                'right',
              ];

              return (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className={`group block ${colSpan} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00943e]`}
                >
                  <ImageReveal
                    src={project.heroImage}
                    alt={project.heroAlt}
                    direction={dirs[idx % dirs.length]}
                    aspectClass={aspectClass}
                    className="bg-[#555555] border border-[#aeb0b1]/35"
                    imgClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="mt-5 flex items-start justify-between gap-4 border-t border-[#aeb0b1]/40 pt-4">
                    <div className="space-y-1.5">
                      <p className="text-xs text-[#aeb0b1]">
                        {project.seriesUsed.join(' · ')}
                      </p>
                      <h2 className="text-xl md:text-2xl font-normal tracking-[-0.02em] text-white">
                        {project.title}
                      </h2>
                      <p className="max-w-xl text-sm leading-relaxed text-white/85">
                        {project.summary}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#ffeb00]"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactBanner theme="warm" />
    </>
  );
}
