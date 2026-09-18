import { Link } from "wouter";
import logoPath from "@assets/Color_and_black_4x-removebg-preview_1776250233659.png";
import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Top Banner */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-primary block" />
            <h2 className="text-xl md:text-2xl font-display font-semibold">Premium Indian solar energy EPC partner.</h2>
          </div>
          <Link href="/contact" className="group flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm hover:text-white transition-colors">
            Start a project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-4 inline-block shadow-sm">
              <img src={logoPath} alt="UVMAR Clean Energy" className="h-10 object-contain" />
            </div>
            <p className="text-secondary-foreground/60 leading-relaxed max-w-sm">
              Building clean energy infrastructure that lasts for decades. Delivering utility-scale solar, rooftop systems, and comprehensive O&M.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold mb-6 text-white tracking-widest uppercase opacity-50">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="/projects" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">Projects Portfolio</Link></li>
              <li><Link href="/gallery" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold mb-6 text-white tracking-widest uppercase opacity-50">Expertise</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">Rooftop Solar</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">Ground-Mounted</Link></li>
              <li><Link href="/solar-park" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">Solar Parks</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm font-medium">Liaisoning & O&M</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold mb-6 text-white tracking-widest uppercase opacity-50">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">112, Eldorado Building<br />Nungambakkam High Rd<br />Chennai, Tamil Nadu 600034</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+91444600660" className="hover:text-primary transition-colors">0444600660</a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="https://wa.me/919384812375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +91 93848 12375
                </a>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/80 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@uvmar.in" className="hover:text-primary transition-colors">info@uvmar.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-secondary-foreground/40">
          <p>
            © {new Date().getFullYear()} UVMAR Clean Energy (formerly Aditya Energy). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
