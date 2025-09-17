// src/components/contact-view.tsx
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
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    {t.locationSoon}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    {t.phone}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+37368961531"
                    className="text-muted-foreground hover:underline"
                  >
                    +373 68 96 15 31
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    {t.email}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:bloomcafe145@gmail.com"
                    className="text-muted-foreground hover:underline"
                  >
                    bloomcafe145@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* --- THIS IS THE CORRECTED SECTION --- */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  {t.workingHours}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <WorkingHours hoursData={hoursData} />
              </CardContent>
            </Card>
          </div>

          <ContactForm />
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-primary/5">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-4">{t.socialTitle}</h2>
              <p className="text-muted-foreground mb-6">{t.socialText}</p>
              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.facebook.com/people/Bloom-Caf%C3%A9/pfbid02tY4HyuxVjB2TGCaCBB9ybK6trv2dDxjDaAvE4XB4vYYgtHLDmfTpkS7xR8kTUMVcl/?mibextid=wwXIfr&rdid=33mkhBMZEv5XZCcQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1638BwXE4A%2F%3Fmibextid%3DwwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.instagram.com/caffebloom/?igsh=bWE3cWpkdTd5MWpm&utm_source=qr#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.tiktok.com/@bloomcaffe?_r=1&_d=em6bjdj49607le&sec_uid=MS4wLjABAAAA9ZY-dLf0KKJq05myFufCeMmAe_ArMbnsy5gFZPZwkcrsNmSOxAYRpnBlC9zceYLa&share_author_id=7544840276070646789&sharer_language=ro&source=h5_m&u_code=em6bkbaif4fei7&item_author_type=1&utm_source=more&tt_from=more&enable_checksum=1&utm_medium=ios&share_link_id=CBB1A67E-0BB6-482A-B5FA-D7D93540EB4D&user_id=7544840276070646789&sec_user_id=MS4wLjABAAAA9ZY-dLf0KKJq05myFufCeMmAe_ArMbnsy5gFZPZwkcrsNmSOxAYRpnBlC9zceYLa&social_share_type=5&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
