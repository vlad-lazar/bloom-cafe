"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { WorkingHours, type HoursInfo } from "@/components/working-hours";
import { ContactForm } from "@/components/contact-form";

interface ContactViewProps {
  hoursData: HoursInfo[];
}

export function ContactView({ hoursData }: ContactViewProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t.contactTitle}
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  {t.ourLocation}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  str. Feroviara 41
                  <br />
                  Ungheni, Moldova
                </p>
                {/* --- THIS IS THE UPDATED SECTION --- */}
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.052639110467!2d27.79588907686501!3d47.21199321350638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb06a5a48d3c5b%3A0x867046399a9a5f48!2sStrada%20Feroviar%C4%83%2041%2C%20Ungheni%2C%20Moldova!5e0!3m2!1sen!2s!4v1726595562013!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">{/* ... */}</div>

            <Card>{/* ... */}</Card>
          </div>

          <ContactForm />
        </div>

        <div className="mt-16 text-center">{/* ... */}</div>
      </div>
    </div>
  );
}
