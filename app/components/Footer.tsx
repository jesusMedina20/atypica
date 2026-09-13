import { useLanguage } from "../i18n/LanguageContext";
import { useState } from "react";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function Accordion({ title, isOpen, onToggle, children }: AccordionProps) {
  return (
    <div className="border-b border-atypica-olive/30 md:border-none">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 md:py-0 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-cream">{title}</span>
        <svg
          className={`w-5 h-5 text-atypica-cream/50 transition-transform duration-200 md:hidden ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 md:block ${isOpen ? "max-h-96 opacity-100" : "max-h-0 md:max-h-none opacity-0 md:opacity-100"
          }`}
      >
        <div className="pb-4 md:pb-0">{children}</div>
      </div>
    </div>
  );
}

const footerLinks = {
  company: [
    { labelKey: "home", href: "#home" },
    { labelKey: "about", href: "#about" },
    { labelKey: "services", href: "#services" },
    { labelKey: "process", href: "#process" },
    { labelKey: "contact", href: "#contact" },
  ],
  solutions: [
    { labelKey: "webDev", href: "https://canva.com/atypica" },
    { labelKey: "mobileApps", href: "https://drive.google.com/drive/atypica/assets" },
    { labelKey: "blockchain", href: "https://notion.so/atypica" },
    { labelKey: "cloud", href: "" },
  ],
};

export function Footer() {
  const { t } = useLanguage();
  const { footer: f } = t;
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    company: false,
    solutions: false,
    contact: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const labelKeys = {
    company: {
      home: f.company.home,
      about: f.company.about,
      services: f.company.services,
      process: f.company.process,
      contact: f.company.contact,
    },
    solutions: {
      webDev: f.solutions.webDev,
      mobileApps: f.solutions.mobileApps,
      blockchain: f.solutions.blockchain,
      cloud: f.solutions.cloud,
    },
  };

  return (
    <footer className="bg-atypica-black text-atypica-cream">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-baseline gap-0">
              <span className="font-display text-2xl font-extrabold tracking-tight text-atypica-cream leading-none">
                atypica
              </span>
              <span className="text-atypica-lime text-xs font-bold align-super">®</span>
            </a>
            <p className="font-mono text-sm uppercase tracking-[0.15em] text-atypica-cream/50 mt-4">
              {f.brand.description}
            </p>
            <div className="h-0.5 w-12 bg-atypica-lime mt-5" />
          </div>

          {/* Company Links */}
          <div className="col-span-1 md:col-span-1">
            <Accordion
              title={f.company.title}
              isOpen={openSections.company}
              onToggle={() => toggleSection("company")}
            >
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-atypica-cream/60 hover:text-atypica-lime transition-colors text-sm"
                    >
                      {labelKeys.company[link.labelKey as keyof typeof labelKeys.company]}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>

          {/* Assets / Master Links */}
          <div className="col-span-1 md:col-span-1">
            <Accordion
              title={f.solutions.title}
              isOpen={openSections.solutions}
              onToggle={() => toggleSection("solutions")}
            >
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.labelKey}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-atypica-cream/60 hover:text-atypica-lime transition-colors text-sm"
                      >
                        {labelKeys.solutions[link.labelKey as keyof typeof labelKeys.solutions]}
                      </a>
                    ) : (
                      <span className="text-atypica-cream/60 transition-colors text-sm">
                        {labelKeys.solutions[link.labelKey as keyof typeof labelKeys.solutions]}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 md:col-span-1">
            <Accordion
              title={f.contact.title}
              isOpen={openSections.contact}
              onToggle={() => toggleSection("contact")}
            >
              <ul className="space-y-3">
                <li className="text-atypica-cream/60 text-sm">
                  <span className="block mb-1">{f.contact.email}:</span>
                  <a
                    href={`mailto:${f.contact.emailAddress}`}
                    target="_blank"
                    className="hover:text-atypica-lime transition-colors"
                  >
                    {f.contact.emailAddress}
                  </a>
                </li>
                <li className="text-atypica-cream/60 text-sm">
                  <span className="block mb-1">{f.contact.phone}:</span>
                  <a
                    href={`tel:${f.contact.phoneNumber}`}
                    className="hover:text-atypica-lime transition-colors"
                  >
                    {f.contact.phoneNumber}
                  </a>
                </li>
                <li className="text-atypica-cream/60 text-sm">
                  <span className="block mb-1">{f.contact.location}:</span>
                  <span className="block">{f.contact.locationValue}</span>
                </li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-atypica-olive/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-atypica-cream/50">
              © {new Date().getFullYear()} ATYPICA®. {f.bottom.copyright}
            </p>
            <div className="flex gap-6 font-mono text-xs">
              <span className="text-atypica-cream/50 transition-colors">
                {f.bottom.privacy}
              </span>
              <span className="text-atypica-cream/50 transition-colors">
                {f.bottom.terms}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}