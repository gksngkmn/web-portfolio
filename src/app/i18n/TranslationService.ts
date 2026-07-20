import { DEFAULT_LANGUAGE, type Language } from "./Language";
import { TRANSLATIONS } from "./translations";

export class TranslationService {
  translate(language: Language, key: string): string {
    return TRANSLATIONS[language][key] ?? TRANSLATIONS[DEFAULT_LANGUAGE][key] ?? key;
  }
}

export const translationService = new TranslationService();
