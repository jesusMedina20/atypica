import { useLanguage } from "../i18n/LanguageContext";
import HeroRightImage from "./Hero-right-image";

export function Hero() {
  const { t } = useLanguage();
  const taglineWords = t.hero.subtitle.split(" ");

  return (
    <section id="home" className="relative bg-atypica-cream overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div data-aos="fade-right" className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 border border-atypica-olive/40 px-4 py-2">
              <span className="w-2 h-2 bg-atypica-lime" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-olive">
                {t.hero.badge}
              </span>
            </div>

            {/* Statement */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-atypica-black">
              <span className="block">{t.hero.firstTitle}</span>
              <span className="block italic text-atypica-olive">{t.hero.secondTitle}</span>
            </h1>

            {/* Tagline */}
            <p className="font-mono text-sm sm:text-base uppercase tracking-[0.15em] text-atypica-black/70">
              {taglineWords.slice(0, -1).join(" ")}{" "}
              <span className="text-atypica-lime">{taglineWords[taglineWords.length - 1]}</span>
            </p>

            {/* Description */}
            <p className="text-lg text-atypica-black/70 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA pair */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-atypica-cream bg-atypica-olive transition-all duration-200 hover:bg-atypica-black hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-atypica-black text-atypica-black transition-all duration-200 hover:bg-atypica-black hover:text-atypica-cream"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Value trio */}
            <div className="flex gap-10 pt-8 border-t border-atypica-black/15">
              <div>
                <p className="font-display text-3xl font-bold text-atypica-olive">01</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-black/60 mt-1">{t.hero.stats.verified}</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-atypica-olive">04</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-black/60 mt-1">{t.hero.stats.countries}</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-atypica-olive">∞</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-black/60 mt-1">{t.hero.stats.support}</p>
              </div>
            </div>
          </div>

          {/* Right: Editorial visual */}
          <HeroRightImage />
        </div>
      </div>
    </section>
  );
}