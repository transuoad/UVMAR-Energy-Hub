import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logoPath from "@assets/Color_and_black_4x-removebg-preview_1776250233659.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/profile", label: "Profile" },
  { href: "/services", label: "Services" },
  { href: "/solar-park", label: "Solar Park" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 navbar-safe-top ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-1" : "bg-background border-b border-border py-2"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src={logoPath} alt="UVMAR Clean Energy" className="h-10 md:h-12 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full">
          <div className="flex space-x-1 h-full items-center mr-6">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 h-full flex items-center text-sm font-semibold tracking-wide transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>
          <Button asChild className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors rounded-none px-6 py-5 uppercase text-xs tracking-wider font-bold">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu" className="rounded-none">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-border p-0 flex flex-col">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to UVMAR company information, services, projects, gallery, and contact details.
            </SheetDescription>
            <div className="p-6 border-b border-border">
              <img src={logoPath} alt="UVMAR Clean Energy" className="h-8 object-contain" />
            </div>
            <nav className="flex flex-col flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 text-lg font-display border-b border-border transition-colors ${
                    location === link.href ? "text-primary bg-primary/5 font-semibold" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="p-6 mt-auto">
                <Button asChild className="w-full bg-foreground text-background hover:bg-primary transition-colors rounded-none py-6 uppercase text-sm tracking-wider font-bold">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
