// src/components/navigation.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Menu, X } from "lucide-react";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Bloom Café" width={50} height={50} />
              Bloom Café
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.navHome}
            </Link>
            <Link
              href="/meniu"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.navMenu}
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t.navContact}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.navHome}
              </Link>
              <Link
                href="/meniu"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.navMenu}
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.navContact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
