// src/app/error.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-bold mb-4">Ceva s-a întâmplat!</h2>
      <p className="text-muted-foreground mb-6">
        A apărut o eroare neașteptată. Te rugăm să încerci din nou.
      </p>
      <Button onClick={() => reset()}>Încearcă din nou</Button>
    </div>
  );
}
