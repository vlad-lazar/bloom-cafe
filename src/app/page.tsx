// src/app/page.tsx
import { getGoogleSheetData } from "@/lib/google-sheets";
import { HomeView } from "@/components/home-view"; // Import the new client view
import { type HoursInfo } from "@/components/working-hours";

// This function runs on the server to fetch the hours data
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

// This is the main Server Component for the page
export default async function HomePage() {
  const hoursData = await getHoursData();

  return <HomeView hoursData={hoursData} />;
}
