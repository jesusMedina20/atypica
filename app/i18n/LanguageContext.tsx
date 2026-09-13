import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { en, es, type Translations } from "./index";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const translations = { en, es };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const stored = localStorage.getItem("atypica-language") as Language;
    if (stored && (stored === "en" || stored === "es")) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("atypica-language", lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}