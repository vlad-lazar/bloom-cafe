// src/app/page.tsx
import { getGoogleSheetData } from "@/lib/google-sheets";
import { HomeView } from "@/components/home-view";
import { type HoursInfo } from "@/components/working-hours";
import { Specialty } from "@/components/specialities-section";

async function getHoursData(): Promise<HoursInfo[]> {
  const rows = await getGoogleSheetData("Hours!A2:F");
  if (!rows) return [];
  return rows.map((row) => ({
    day: row[0] || "",
    open_time: row[1] || "",
    close_time: row[2] || "",
    ro: row[3] || "",
    en: row[4] || "",
    ru: row[5] || "",
  }));
}

async function getSpecialtiesData(): Promise<Specialty[]> {
  try {
    const rows = await getGoogleSheetData("Specialties!A2:H");
    if (!rows) return [];
    return rows.map((row) => ({
      name_ro: row[0] || "",
      name_en: row[1] || "",
      name_ru: row[2] || "",
      description_ro: row[3] || "",
      description_en: row[4] || "",
      description_ru: row[5] || "",
      price: row[6] || "",
      image_url: row[7] || "",
    }));
  } catch (error) {
    console.error("Could not fetch specialties data.", error);
    return [];
  }
}

export default async function HomePage() {
  const [hoursData, specialtiesData] = await Promise.all([
    getHoursData(),
    getSpecialtiesData(),
  ]);

  return <HomeView hoursData={hoursData} specialties={specialtiesData} />;
}
