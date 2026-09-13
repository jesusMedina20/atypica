import { useLanguage } from "../i18n/LanguageContext";

const processSteps = [
  { key: "discovery", letter: "A" },
  { key: "research", letter: "B" },
  { key: "architecture", letter: "C" },
  { key: "development", letter: "D" },
];

export function Process() {
  const { t } = useLanguage();
  const { process: p } = t;

  return (
    <section id="process" className="bg-atypica-paper py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 mb-4 justify-center">
            <span className="w-10 h-0.5 bg-atypica-olive" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-olive">
              {p.title}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-atypica-black mb-4">
            {p.title}
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.15em] text-atypica-olive">
            {p.subtitle}
          </p>
        </div>

        {/* Process Steps - Timeline Style */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-atypica-olive/40" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.key} className="relative text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Step Letter */}
                <div className="mx-auto w-16 h-16 bg-atypica-olive text-atypica-cream font-mono text-2xl flex items-center justify-center relative z-10 mb-4">
                  {step.letter}
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="font-display text-xl font-bold text-atypica-black mb-2">
                    {p.steps[step.key as keyof typeof p.steps].title}
                  </h3>
                  <p className="text-atypica-black/60 text-sm leading-relaxed">
                    {p.steps[step.key as keyof typeof p.steps].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14" data-aos="fade-up">
          <p className="font-display italic text-lg text-atypica-black/80 mb-5">{p.cta}</p>
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 bg-atypica-olive text-atypica-cream font-semibold rounded-full hover:bg-atypica-black transition-colors"
          >
            {t.nav.bookCall}
          </a>
        </div>
      </div>
    </section>
  );
}