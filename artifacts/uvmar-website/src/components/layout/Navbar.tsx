import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoPath from "@assets/Color_and_black@4x_1776244813263.jpg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/profile", label: "Profile" },
  { href: "/services", label: "Services" },
  { href: "/solar-park", label: "Solar Park" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src={logoPath} alt="UVMAR Clean Energy" className="h-12 object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 ml-4 rounded-none">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-border">
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 rounded-none w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
