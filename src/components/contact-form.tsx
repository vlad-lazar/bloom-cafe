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
import { Send, CheckCircle, AlertTriangle, Loader } from "lucide-react";

// A type to manage the form's state
type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // State for form data and submission status
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
    } else {
      setStatus("error");
    }
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
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <Loader className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Send className="h-4 w-4 mr-2" />
            )}
            {t.formSubmit}
          </Button>

          {/* User Feedback Messages */}
          {status === "success" && (
            <div className="text-green-600 flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-md">
              <CheckCircle className="h-4 w-4" />
              <p>Message sent successfully!</p>
            </div>
          )}
          {status === "error" && (
            <div className="text-destructive flex items-center gap-2 p-2 bg-red-50 border border-red-200 rounded-md">
              <AlertTriangle className="h-4 w-4" />
              <p>Something went wrong. Please try again.</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
