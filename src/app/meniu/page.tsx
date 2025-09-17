// src/app/meniu/page.tsx
"use client";

import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useContext } from "react";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";

export default function MenuPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const menuSections = Object.values(t.menu);

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t.menuPageTitle}
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.menuPageSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="h-fit">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                      >
                        <span className="text-foreground font-medium text-pretty">
                          {item.name}
                        </span>
                        <span className="text-secondary font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">{t.importantInfo}</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2 text-primary">{t.program}</h3>
                <p className="text-muted-foreground">
                  Luni - Duminică: 08:00 - 22:00
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {t.payments}
                </h3>
                <p className="text-muted-foreground">{t.paymentsText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
