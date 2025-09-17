// src/components/home-view.tsx
"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Clock, MapPin, Star } from "lucide-react";
import { WorkingHours, type HoursInfo } from "@/components/working-hours";
import { SpecialtiesSection, Specialty } from "./specialities-section";
// Import the specialties component

interface HomeViewProps {
  hoursData: HoursInfo[];
  specialties: Specialty[]; // Add specialties to the props
}

export function HomeView({ hoursData, specialties }: HomeViewProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20">
          <Image
            src="/hero_image.jpg"
            alt="Bloom Café"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              <Link href="/meniu">{t.heroBtnMenu}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/contact">{t.heroBtnOrder}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {t.aboutTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.aboutText}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t.feature1Title}
                </h3>
                <p className="text-muted-foreground">{t.feature1Text}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t.feature2Title}
                </h3>
                <p className="text-muted-foreground">{t.feature2Text}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t.feature3Title}
                </h3>
                <p className="text-muted-foreground">{t.feature3Text}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use the new dynamic specialties section */}
      <SpecialtiesSection specialties={specialties} />

      {/* Location Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.locationTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">{t.locationText}</p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
          >
            <Link href="/contact">{t.locationBtn}</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Bloom Café
              </h3>
              <p className="text-muted-foreground">{t.footerSlogan}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footerHours}</h4>
              <WorkingHours hoursData={hoursData} showTodayOnly={true} />
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.navContact}</h4>
              <p className="text-muted-foreground">
                Ungheni, Moldova
                <br />
                <a
                  href="mailto:bloomcafe145@gmail.com"
                  className="text-muted-foreground hover:underline"
                >
                  bloomcafe145@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Bloom Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
