export type Language = "tr" | "en";

export const DEFAULT_LANGUAGE: Language = "tr";

export function isLanguage(value: string | null): value is Language {
  return value === "tr" || value === "en";
}
