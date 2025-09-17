// src/app/meniu/page.tsx
import { Navigation } from "@/components/navigation";
import { getGoogleSheetData } from "@/lib/google-sheets";
import { MenuList } from "@/components/menu-list";

// This interface is now simpler, as it only deals with string data
interface MenuItem {
  name_ro: string;
  name_en: string;
  name_ru: string;
  price: string;
  description_ro: string;
  description_en: string;
  description_ru: string;
}
export interface MenuSection {
  title: string;
  iconName: string; // We now pass the category name as the icon identifier
  items: MenuItem[];
}

async function getMenuData(): Promise<MenuSection[]> {
  const rows = await getGoogleSheetData("Menu!A2:H");

  if (!rows || rows.length === 0) {
    return [];
  }

  const menu: { [key: string]: MenuSection } = {};

  rows.forEach((row) => {
    const [
      category,
      name_ro,
      name_en,
      name_ru,
      price,
      description_ro = "",
      description_en = "",
      description_ru = "",
    ] = row;

    if (!category || !name_ro) return;

    const trimmedCategory = category.trim();
    if (!menu[trimmedCategory]) {
      menu[trimmedCategory] = {
        title: trimmedCategory,
        iconName: trimmedCategory, // Pass the category name as a string
        items: [],
      };
    }

    menu[trimmedCategory].items.push({
      name_ro,
      name_en,
      name_ru,
      price,
      description_ro,
      description_en,
      description_ru,
    });
  });

  return Object.values(menu);
}

export default async function MenuPage() {
  const menuSections = await getMenuData();

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Discover our variety of delicious drinks and preparations.
          </p>
        </div>

        {menuSections && menuSections.length > 0 ? (
          <MenuList menuSections={menuSections} />
        ) : (
          <div className="text-center text-muted-foreground p-8 border rounded-lg bg-card">
            <h3 className="font-semibold text-lg">
              The Menu is Currently Unavailable.
            </h3>
            <p className="mt-2">
              There might be an issue loading data from the Google Sheet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
