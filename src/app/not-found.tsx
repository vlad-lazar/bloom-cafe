// src/app/not-found.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Pagina nu a fost găsită
      </h2>
      <p className="text-muted-foreground mb-6">
        Ne pare rău, nu am putut găsi pagina pe care o căutați.
      </p>
      <Button asChild>
        <Link href="/">Întoarce-te acasă</Link>
      </Button>
    </div>
  );
}
