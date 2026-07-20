import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, isLanguage, type Language } from "./Language";
import { translationService } from "./TranslationService";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return isLanguage(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    document.title = translationService.translate(language, "meta.title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", translationService.translate(language, "meta.description"));
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", translationService.translate(language, "meta.title"));
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", translationService.translate(language, "meta.description"));
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (key) => translationService.translate(language, key),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider.");
  return context;
}
