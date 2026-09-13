import { useLanguage } from '../i18n/LanguageContext'

export default function AboutLeftImage() {
    const { t } = useLanguage();
    return (
        <div className="relative order-2 lg:order-1 mt-8 lg:mt-0" data-aos="fade-right">
            {/* Typographic / editorial block */}
            <div className="relative bg-atypica-olive p-8 sm:p-12 aspect-[4/3] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-atypica-lime" />

                <div className="relative h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-atypica-cream/80">
                            ≥ criterio
                        </span>
                        <span className="text-atypica-black/30 font-display font-extrabold text-lg">A®</span>
                    </div>

                    <div>
                        <span className="block font-display font-extrabold text-[6rem] sm:text-[8rem] leading-none text-atypica-cream">
                            A.
                        </span>
                        <div className="h-0.5 w-24 bg-atypica-lime my-4" />
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-cream/80">
                            el error es el sistema.
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-atypica-cream p-4 shadow-xl border border-atypica-black/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-atypica-lime">
                        <span className="font-display font-extrabold text-atypica-black">A</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold font-display text-atypica-black">{t.about.cards.web2.title}</p>
                        <p className="text-xs text-atypica-black/60">{t.about.cards.web2.desc}</p>
                    </div>
                </div>
            </div>

            <div className="absolute -top-3 -left-2 sm:-left-4 bg-atypica-cream p-4 shadow-xl border border-atypica-black/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-atypica-olive">
                        <span className="font-mono text-atypica-cream text-sm">∞</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold font-display text-atypica-black">{t.about.cards.web3.title}</p>
                        <p className="text-xs text-atypica-black/60">{t.about.cards.web3.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}