import { GlobeIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-atypica-paper/90 backdrop-blur-sm shadow-sm border-b border-atypica-black/10" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Wordmark */}
          <a href="/" className="flex items-baseline gap-0">
            <span className="font-display text-2xl sm:text-[1.75rem] font-extrabold tracking-tight text-atypica-black leading-none">
              atypica
            </span>
            <span className="text-atypica-lime text-xs font-bold align-super">®</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-mono text-xs uppercase tracking-[0.2em] text-atypica-black/70 transition-colors hover:text-atypica-black group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-atypica-olive" />
              </a>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Selector */}
            <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
              <GlobeIcon className="w-4 h-4 text-atypica-black/60 mr-1" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 transition-colors ${language === "en" ? "text-atypica-lime" : "text-atypica-black/50 hover:text-atypica-black"}`}
              >
                EN
              </button>
              <span className="text-atypica-black/30">/</span>
              <button
                onClick={() => setLanguage("es")}
                className={`px-1.5 py-0.5 transition-colors ${language === "es" ? "text-atypica-lime" : "text-atypica-black/50 hover:text-atypica-black"}`}
              >
                ES
              </button>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full font-semibold text-sm bg-atypica-olive text-atypica-cream transition-all duration-200 hover:bg-atypica-black hover:shadow-md"
            >
              {t.nav.bookCall}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-atypica-black/5 transition-colors"
            style={{ color: "#0E0E0A" }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-atypica-black/10 mt-3 bg-atypica-paper">
            {/* Nav Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-4 py-3 rounded-lg transition-colors font-mono text-xs uppercase tracking-[0.2em] text-atypica-black group"
                >
                  {link.label}
                  <span className="absolute bottom-2 left-4 w-0 h-0.5 transition-all duration-300 group-hover:w-8 bg-atypica-olive" />
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 pt-4 border-t border-atypica-black/10">
              {/* Language Selector */}
              <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest px-4">
                <GlobeIcon className="w-4 h-4 text-atypica-black/60 mr-1" />
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-1.5 py-0.5 transition-colors ${language === "en" ? "text-atypica-lime" : "text-atypica-black/50 hover:text-atypica-black"}`}
                >
                  EN
                </button>
                <span className="text-atypica-black/30">/</span>
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-1.5 py-0.5 transition-colors ${language === "es" ? "text-atypica-lime" : "text-atypica-black/50 hover:text-atypica-black"}`}
                >
                  ES
                </button>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="md:w-full sm:max-w-44 sm:w-auto sm:mx-0 mx-4 px-5 py-2.5 rounded-full font-semibold text-center bg-atypica-olive text-atypica-cream"
              >
                {t.nav.bookCall}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}