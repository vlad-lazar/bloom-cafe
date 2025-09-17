// src/components/specialties-section.tsx
"use client";

import { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee } from "lucide-react";

export interface Specialty {
  name_ro: string;
  name_en: string;
  name_ru: string;
  description_ro: string;
  description_en: string;
  description_ru: string;
  price: string;
  image_url: string;
}

interface SpecialtiesSectionProps {
  specialties: Specialty[];
}

export function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const getTranslation = (item: Specialty, field: "name" | "description") => {
    const key = `${field}_${language}` as keyof Specialty;
    return item[key] || item[`${field}_ro` as keyof Specialty];
  };

  if (!specialties || specialties.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t.specialtiesTitle}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.specialtiesText}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {/* --- THIS IS THE CORRECTED LOGIC --- */}
                {/* We now trim the URL to check if it's truly empty */}
                {item.image_url && item.image_url.trim() !== "" ? (
                  <Image
                    src={item.image_url.trim()}
                    alt={getTranslation(item, "name")}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Coffee className="h-16 w-16 text-primary" />
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {getTranslation(item, "name")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {getTranslation(item, "description")}
                </p>
                <p className="text-2xl font-bold text-secondary">
                  {item.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
