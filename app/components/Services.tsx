import { useLanguage } from "../i18n/LanguageContext";

const getServices = (t: any) => [
  {
    title: t.services.items.dynamic.title,
    description: t.services.items.dynamic.description,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: t.services.items.mobile.title,
    description: t.services.items.mobile.description,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </svg>
    ),
  },
  {
    title: t.services.items.tokenization.title,
    description: t.services.items.tokenization.description,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: t.services.items.landing.title,
    description: t.services.items.landing.description,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="16" y2="7" />
        <line x1="9" y1="11" x2="16" y2="11" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: t.services.items.ecommerce.title,
    description: t.services.items.ecommerce.description,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: t.services.items.dapps.title,
    description: t.services.items.dapps.description,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export function Services() {
  const { t } = useLanguage();
  const servicesData = getServices(t);

  return (
    <section id="services" className="relative bg-atypica-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-10 h-0.5 bg-atypica-olive" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-olive">
              {t.services.label}
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-atypica-black mb-4">
            {t.services.title}
          </h2>

          <p className="text-base sm:text-lg text-atypica-black/70">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative group flex flex-col bg-atypica-paper border border-atypica-black/10 p-6 sm:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-atypica-olive"
            >
              {/* Mono index */}
              <span className="absolute top-4 right-4 font-mono text-xs text-atypica-olive">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center mb-5 bg-atypica-olive/10 text-atypica-olive transition-colors group-hover:bg-atypica-olive group-hover:text-atypica-cream"
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-atypica-black mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-atypica-black/60 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-atypica-lime opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}