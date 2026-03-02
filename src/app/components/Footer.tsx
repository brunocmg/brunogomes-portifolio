import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-400">
            Feito por Bruno Gomes
          </p>
        </div>
      </div>
    </footer>
  );
}