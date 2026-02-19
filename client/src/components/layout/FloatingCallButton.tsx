import { Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit (e.g., past the hero)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${COMPANY_INFO.phoneRaw}`}
      className={cn(
        "fixed bottom-6 right-6 md:hidden z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-110 active:scale-95",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
      aria-label="Call Now"
    >
      <Phone className="h-6 w-6 animate-pulse" />
    </a>
  );
}
