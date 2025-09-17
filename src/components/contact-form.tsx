"use client";

import type React from "react";
import { useState, useContext } from "react";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
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
  );
}
