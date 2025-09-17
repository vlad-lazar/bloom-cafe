import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Clock, MapPin, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20">
          <Image
            src="/hero_image.jpg"
            alt="Bloom Café - Cafea și prăjituri cu petale de trandafir"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Bloom Café
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">
            Oaza Ta de Cafea și Relaxare în Ungheni
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              <Link href="/meniu">Vezi Meniul</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/contact">Comandă Acum</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Povestea Noastră
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Bloom Café este locul unde aromele autentice se întâlnesc cu
              atmosfera caldă și primitoare. Ne dedicăm să oferim cea mai bună
              experiență de cafea în Ungheni, folosind ingrediente proaspete și
              rețete tradiționale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cafea Premium</h3>
                <p className="text-muted-foreground">
                  Boabe de cafea selectate cu grijă pentru aroma perfectă
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Atmosferă Unică</h3>
                <p className="text-muted-foreground">
                  Un spațiu elegant și confortabil pentru relaxare
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Deschis Zilnic</h3>
                <p className="text-muted-foreground">
                  08:00 - 22:00, pentru toate momentele tale speciale
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signature Items */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Specialitățile Casei
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Descoperă cele mai apreciate preparate de la Bloom Café
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Spanish Latte</h3>
                <p className="text-muted-foreground mb-4">
                  O combinație perfectă de espresso și lapte condensat dulce
                </p>
                <p className="text-2xl font-bold text-secondary">40 LEI</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Ice Caramel Latte
                </h3>
                <p className="text-muted-foreground mb-4">
                  Răcoritor și dulce, perfect pentru zilele calde
                </p>
                <p className="text-2xl font-bold text-secondary">40 LEI</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ceai Natural</h3>
                <p className="text-muted-foreground mb-4">
                  Amestecuri naturale de plante pentru o experiență autentică
                </p>
                <p className="text-2xl font-bold text-secondary">60 LEI</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vizitează-ne în Ungheni
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Te așteptăm cu drag în locația noastră din centrul orașului
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
          >
            <Link href="/contact">Vezi Detalii Contact</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Bloom Café
              </h3>
              <p className="text-muted-foreground">
                Oaza ta de cafea și relaxare în Ungheni, Moldova
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Program</h4>
              <p className="text-muted-foreground">
                Luni - Duminică
                <br />
                08:00 - 22:00
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-muted-foreground">
                Ungheni, Moldova
                <br />
                info@bloomcafe.md
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Bloom Café. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
