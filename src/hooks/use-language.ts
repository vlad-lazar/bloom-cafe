// src/hooks/use-language.ts
import { useState } from "react";

export type Language = "ro" | "en" | "ru";

export function useLanguage(): [Language, (lang: Language) => void] {
  const [language, setLanguage] = useState<Language>("ro");

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  return [language, changeLanguage];
}
