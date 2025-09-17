// src/components/language-switcher.tsx
"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";
import { Language } from "@/hooks/use-language";

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const languages: { [key in Language]: string } = {
    ro: t.langRO,
    en: t.langEN,
    ru: t.langRU,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {languages[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(languages) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={language === lang ? "bg-primary/10" : ""}
          >
            {languages[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
