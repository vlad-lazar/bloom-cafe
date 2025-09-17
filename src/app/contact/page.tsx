// src/app/contact/page.tsx
"use client";

import type React from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState, useContext } from "react";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";

export default function ContactPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Mesajul a fost trimis! Vă mulțumim pentru feedback.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

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
                <div className="bg-muted/30 rounded-lg p-4 text-center">
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
                  <p className="text-muted-foreground">+373 68 96 15 31</p>
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
                  <p className="text-muted-foreground">
                    bloomcafe145@gmail.com
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  {t.workingHours}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Luni - Vineri</span>
                    <span className="text-muted-foreground">08:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sâmbătă - Duminică</span>
                    <span className="text-muted-foreground">09:00 - 23:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                {t.formTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.formName}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t.formNamePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.formEmail}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.formEmailPlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.formSubject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.formSubjectPlaceholder}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.formMessage}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t.formMessagePlaceholder}
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {t.formSubmit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-4">{t.socialTitle}</h2>
              <p className="text-muted-foreground mb-6">{t.socialText}</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/people/Bloom-Caf%C3%A9/pfbid02tY4HyuxVjB2TGCaCBB9ybK6trv2dDxjDaAvE4XB4vYYgtHLDmfTpkS7xR8kTUMVcl/?mibextid=wwXIfr&rdid=33mkhBMZEv5XZCcQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1638BwXE4A%2F%3Fmibextid%3DwwXIfr"
                    );
                  }}
                >
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/caffebloom/?igsh=bWE3cWpkdTd5MWpm&utm_source=qr#"
                    );
                  }}
                >
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://www.tiktok.com/@bloomcaffe?_r=1&_d=em6bjdj49607le&sec_uid=MS4wLjABAAAA9ZY-dLf0KKJq05myFufCeMmAe_ArMbnsy5gFZPZwkcrsNmSOxAYRpnBlC9zceYLa&share_author_id=7544840276070646789&sharer_language=ro&source=h5_m&u_code=em6bkbaif4fei7&item_author_type=1&utm_source=more&tt_from=more&enable_checksum=1&utm_medium=ios&share_link_id=CBB1A67E-0BB6-482A-B5FA-D7D93540EB4D&user_id=7544840276070646789&sec_user_id=MS4wLjABAAAA9ZY-dLf0KKJq05myFufCeMmAe_ArMbnsy5gFZPZwkcrsNmSOxAYRpnBlC9zceYLa&social_share_type=5&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233",
                      "_blank"
                    )
                  }
                >
                  TikTok
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
