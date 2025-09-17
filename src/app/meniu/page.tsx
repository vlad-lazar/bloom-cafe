import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Snowflake, Droplets, Flame, Leaf } from "lucide-react";

const menuSections = [
  {
    title: "Cafea",
    icon: Coffee,
    items: [
      { name: "Espresso", price: "20 LEI" },
      { name: "Americano", price: "20 LEI" },
      { name: "Latte", price: "35 LEI" },
      { name: "Cappuccino", price: "30 LEI" },
      { name: "Matcha", price: "35 LEI" },
    ],
  },
  {
    title: "Ice Drinks",
    icon: Snowflake,
    items: [
      { name: "Ice Caramel Latte", price: "40 LEI" },
      { name: "Caramel Frappe", price: "40 LEI" },
      { name: "Ness Frappe", price: "40 LEI" },
      { name: "Oreo Frappe", price: "40 LEI" },
      { name: "Espresso Tonic", price: "40 LEI" },
    ],
  },
  {
    title: "Limonade",
    icon: Droplets,
    items: [
      { name: "Limonadă Clasică", price: "40 LEI" },
      { name: "Limonadă Strawberry", price: "40 LEI" },
      { name: "Limonadă Passion Fruit", price: "40 LEI" },
      { name: "Limonadă Kiwi", price: "40 LEI" },
      { name: "Limonadă Raspberry", price: "40 LEI" },
    ],
  },
  {
    title: "Băuturi Reci",
    icon: Droplets,
    items: [
      { name: "Coca Cola 0.330ml", price: "20 LEI" },
      { name: "Fanta 0.330ml", price: "20 LEI" },
      { name: "Sprite 0.330ml", price: "20 LEI" },
      { name: "Schweppes 0.330ml", price: "20 LEI" },
      { name: "Apă plată / carbogazată 0.330ml", price: "20 LEI" },
    ],
  },
  {
    title: "Hot Drinks",
    icon: Flame,
    items: [
      { name: "Cacao", price: "30 LEI" },
      { name: "Cacao Strawberry", price: "35 LEI" },
      { name: "Latte Caramel", price: "40 LEI" },
      { name: "Hot Chocolate", price: "35 LEI" },
      { name: "Spanish Latte", price: "40 LEI" },
    ],
  },
  {
    title: "Ceai",
    icon: Leaf,
    items: [
      { name: "Ceai la pliculet", price: "20 LEI" },
      { name: "Ceai la infuzie", price: "50 LEI" },
      { name: "Ceai natural", price: "60 LEI" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Meniul Nostru
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Descoperă varietatea de băuturi și preparate delicioase de la Bloom
            Café
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="h-fit">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                      >
                        <span className="text-foreground font-medium text-pretty">
                          {item.name}
                        </span>
                        <span className="text-secondary font-bold text-lg">
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

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-bold mb-4">Informații Importante</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Program</h3>
                <p className="text-muted-foreground">
                  Luni - Duminică: 08:00 - 22:00
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Plăți</h3>
                <p className="text-muted-foreground">
                  Acceptăm numerar și plăți cu cardul
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
