import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-3" : "bg-transparent py-4 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className={cn("flex items-center gap-2 font-heading font-bold text-xl md:text-2xl tracking-tight transition-colors", scrolled ? "text-primary" : "text-white")}>
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className={scrolled ? "text-foreground" : "text-white"}>Apex</span>
            <span className={scrolled ? "text-primary" : "text-white/90"}>Electric</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Service Areas", href: "/service-areas" },
            { label: "Reviews", href: "/reviews" },
            { label: "About", href: "/about" },
            { label: "FAQ", href: "/faq" },
          ].map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group py-2",
                  location === link.href 
                    ? "text-primary font-semibold" 
                    : (scrolled ? "text-foreground/80" : "text-white/90")
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform origin-left group-hover:scale-x-100",
                  location === link.href ? "scale-x-100" : ""
                )} />
              </a>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href={`tel:${COMPANY_INFO.phoneRaw}`} 
            className={cn("flex items-center gap-2 font-semibold transition-colors hover:text-primary", scrolled ? "text-foreground" : "text-white")}
          >
            <Phone className="h-4 w-4" />
            {COMPANY_INFO.phone}
          </a>
          <Link href="/contact">
            <Button variant={scrolled ? "default" : "secondary"} className="font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn("lg:hidden p-2 rounded-md transition-colors", scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10")}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl animate-in slide-in-from-top-5">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Service Areas", href: "/service-areas" },
              { label: "Reviews", href: "/reviews" },
              { label: "About", href: "/about" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "text-lg font-medium py-2 border-b border-border/50 transition-colors",
                  location === link.href ? "text-primary" : "text-foreground"
                )}>
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href={`tel:${COMPANY_INFO.phoneRaw}`}>
                <Button variant="outline" className="w-full justify-center gap-2 h-12 text-base">
                  <Phone className="h-4 w-4" />
                  Call {COMPANY_INFO.phone}
                </Button>
              </a>
              <Link href="/contact">
                <Button className="w-full justify-center h-12 text-base shadow-md">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
