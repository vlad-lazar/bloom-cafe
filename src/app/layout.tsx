// src/app/layout.tsx
"use client";

import type React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense, useState, createContext } from "react";
import "./globals.css";
import { Language } from "@/hooks/use-language";

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({
  language: "ro",
  setLanguage: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, setLanguage] = useState<Language>("ro");

  return (
    <html lang={language}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
