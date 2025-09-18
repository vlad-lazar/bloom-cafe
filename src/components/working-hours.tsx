// src/components/working-hours.tsx
"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/layout";
import { translations } from "@/lib/i18n"; // Import translations

export interface HoursInfo {
  day: string;
  open_time: string;
  close_time: string;
  ro: string;
  en: string;
  ru: string;
}

interface WorkingHoursProps {
  hoursData: HoursInfo[];
  showTodayOnly?: boolean;
}

export function WorkingHours({
  hoursData,
  showTodayOnly = false,
}: WorkingHoursProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language]; // Get the translation object

  const getTranslatedDay = (dayData: HoursInfo) => {
    const langKey = language as keyof Pick<HoursInfo, "ro" | "en" | "ru">;
    return dayData[langKey] || dayData["ro"];
  };

  const today = new Date();
  const todayDayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const todayDateString = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  const specialDay = hoursData.find((h) => h.day === todayDateString);

  // --- THIS IS THE UPDATED LOGIC FOR THE FOOTER ---
  if (showTodayOnly) {
    const displayDay =
      specialDay || hoursData.find((h) => h.day === todayDayName);
    if (!displayDay) return <p>Orar indisponibil</p>;
    const isClosed = displayDay.open_time.toUpperCase() === "CLOSED";

    return (
      <div className="flex justify-center text-muted-foreground">
        {/* Use the new "Today" translation */}
        <span>{t.today}</span>
        <span>
          {isClosed
            ? "Închis"
            : `${displayDay.open_time} - ${displayDay.close_time}`}
        </span>
      </div>
    );
  }

  // Logic for the Contact Page remains the same
  const regularHours = hoursData.filter((h) => !h.day.includes("/"));

  return (
    <div className="space-y-2">
      {regularHours.map((dayInfo) => (
        <div key={dayInfo.day} className="flex justify-between">
          <span>{getTranslatedDay(dayInfo)}</span>
          <span className="text-muted-foreground">
            {dayInfo.open_time.toUpperCase() === "CLOSED"
              ? "Închis"
              : `${dayInfo.open_time} - ${dayInfo.close_time}`}
          </span>
        </div>
      ))}
      {specialDay && (
        <div className="flex justify-between text-secondary font-bold pt-2 mt-2 border-t border-border/50">
          <span>
            {getTranslatedDay(specialDay)} ({t.today})
          </span>
          <span>
            {specialDay.open_time.toUpperCase() === "CLOSED"
              ? "Închis"
              : `${specialDay.open_time} - ${specialDay.close_time}`}
          </span>
        </div>
      )}
    </div>
  );
}
