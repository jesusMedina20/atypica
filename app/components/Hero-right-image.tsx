import { useLanguage } from '../i18n/LanguageContext'

export default function HeroRightImage() {
  const { t } = useLanguage();

  const blockLabels = [
    { index: "01", title: t.services.items.dynamic.title },
    { index: "02", title: t.services.items.mobile.title },
    { index: "03", title: t.services.items.tokenization.title },
    { index: "04", title: t.services.items.landing.title },
  ];

  return (
    <div className="relative" data-aos="fade-left">
      <div className="relative bg-atypica-night text-atypica-cream p-8 sm:p-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-atypica-olive" />

        {/* Editorial block */}
        <div className="relative space-y-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-olive">
              atypica<sup className="text-atypica-lime">®</sup> — estudio
            </span>
            <span className="w-2.5 h-2.5 bg-atypica-lime" />
          </div>

          {/* Outlined display type */}
          <div className="text-outline font-display font-extrabold text-[5rem] sm:text-[7rem] leading-none select-none">
            A.
          </div>

          <div className="h-0.5 w-24 bg-atypica-lime" />

          {/* Grid of blocks */}
          <div className="grid grid-cols-2 gap-2">
            {blockLabels.map((block) => (
              <div
                key={block.index}
                className="border border-atypica-olive/50 p-3 sm:p-4 transition-colors hover:bg-atypica-olive/20"
              >
                <span className="block font-mono text-xs text-atypica-lime">{block.index}</span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-atypica-cream/90 mt-1">
                  {block.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -top-4 -right-2 sm:-right-4 bg-atypica-cream p-4 shadow-xl border border-atypica-black/10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-atypica-lime" />
          <div>
            <p className="font-display text-sm font-bold text-atypica-black">{t.heroCards.verified.title}</p>
            <p className="text-xs text-atypica-black/60">{t.heroCards.verified.desc}</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-atypica-cream p-4 shadow-xl border border-atypica-black/10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-atypica-olive" />
          <div>
            <p className="font-display text-sm font-bold text-atypica-black">{t.heroCards.global.title}</p>
            <p className="text-xs text-atypica-black/60">{t.heroCards.global.desc}</p>
          </div>
        </div>
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />
    </div>
  )
}