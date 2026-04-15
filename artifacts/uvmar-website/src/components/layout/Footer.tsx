import { Link } from "wouter";
import logoPath from "@assets/Color_and_black_4x-removebg-preview_1776250233659.png";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-secondary-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="bg-white p-4 inline-block rounded-sm">
              <img src={logoPath} alt="UVMAR Clean Energy" className="h-12 object-contain" />
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Premium Indian solar energy EPC company. Building clean energy infrastructure that lasts for decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/profile" className="text-secondary-foreground/70 hover:text-primary transition-colors">Company Profile</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="text-secondary-foreground/70 hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase text-sm">Services</h3>
            <ul className="space-y-4">
              <li className="text-secondary-foreground/70">Rooftop Solar</li>
              <li className="text-secondary-foreground/70">Ground-Mounted Solar</li>
              <li className="text-secondary-foreground/70">Solar Parks</li>
              <li className="text-secondary-foreground/70">Operations & Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@uvmar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} UVMAR Clean Energy (formerly Aditya Energy). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-secondary-foreground/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-secondary-foreground/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
