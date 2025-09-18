// src/components/menu-list.tsx
"use client";

import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageContext } from "@/app/layout";
import {
  Coffee,
  Snowflake,
  Droplets,
  Flame,
  Leaf,
  Beer,
  LucideProps,
} from "lucide-react";
import type { MenuSection as MenuSectionProps } from "@/app/meniu/page"; // Import the type from the page

// The iconMap now lives in the client component
const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  Cafea: Coffee,
  "Ice Drinks": Snowflake,
  Limonade: Droplets,
  "Băuturi Reci": Beer,
  "Hot Drinks": Flame,
  Ceai: Leaf,
  Default: Coffee, // Fallback icon
};

interface MenuListProps {
  menuSections: MenuSectionProps[];
}

interface MenuItem {
  name_ro: string;
  name_en: string;
  name_ru: string;
  description_ro?: string;
  description_en?: string;
  description_ru?: string;
  price: string;
}
export function MenuList({ menuSections }: MenuListProps) {
  const { language } = useContext(LanguageContext);

  const getTranslation = (item: MenuItem, field: "name" | "description") => {
    const key = `${field}_${language}` as keyof MenuItem;
    return item[key] || item[`${field}_ro` as keyof MenuItem];
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuSections.map((section, index) => {
        const IconComponent = iconMap[section.iconName] || iconMap.Default;
        return (
          // --- CHANGE IS HERE ---
          <Card key={index} className="flex flex-col">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start pt-3 border-t border-border/50 first:border-t-0 first:pt-0"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground text-pretty">
                        {getTranslation(item, "name")}
                      </h4>
                      {getTranslation(item, "description") && (
                        <p className="text-sm text-muted-foreground mt-1 text-pretty">
                          {getTranslation(item, "description")}
                        </p>
                      )}
                    </div>
                    <span className="text-secondary font-bold text-lg whitespace-nowrap pl-4">
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
  );
}
