import { useLanguage } from "../i18n/LanguageContext";
import AboutLeftImage from "./About-left-image";

export function About() {
  const { t } = useLanguage();

  const pillars = [
    { title: t.about.features.consulting.title, desc: t.about.features.consulting.desc },
    { title: t.about.features.development.title, desc: t.about.features.development.desc },
    { title: t.about.features.architecture.title, desc: t.about.features.architecture.desc },
    { title: t.about.features.support.title, desc: t.about.features.support.desc },
  ];

  return (
    <section id="about" className="relative bg-atypica-night overflow-hidden py-20 sm:py-28">
      {/* Grain texture */}
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <AboutLeftImage />

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-6" data-aos="fade-left">
            {/* Section label */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-10 h-0.5 bg-atypica-olive" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-olive">
                {t.about.label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold leading-[1.05] text-atypica-cream">
              {t.about.title}
              <br />
              <span className="italic text-atypica-cream/70">{t.about.titleHighlight}</span>
            </h2>

            <div className="h-0.5 w-20 bg-atypica-lime" />

            {/* Manifesto */}
            <p className="text-base sm:text-lg text-atypica-cream/70 leading-relaxed">
              {t.about.description}
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="border border-atypica-olive/40 p-4 transition-colors hover:border-atypica-olive"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-atypica-lime mb-1.5">
                    {pillar.title}
                  </p>
                  <p className="text-sm text-atypica-cream/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-display italic text-lg text-atypica-lime transition-colors group"
              >
                {t.about.cta}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}