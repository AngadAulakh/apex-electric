import { Link } from "wouter";
import { Zap, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2 font-heading font-bold text-2xl text-white mb-4">
                <div className="bg-primary p-1.5 rounded-lg text-white">
                  <Zap className="h-5 w-5 fill-current" />
                </div>
                <span>Apex<span className="text-primary">Electric</span></span>
              </a>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              Premium electrical services for Toronto and the GTA. Licensed, insured, and committed to safety and excellence.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Our Services</a></Link></li>
              <li><Link href="/pricing"><a className="hover:text-primary transition-colors">Pricing Guide</a></Link></li>
              <li><Link href="/reviews"><a className="hover:text-primary transition-colors">Customer Reviews</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors">FAQ</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map(service => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`}>
                    <a className="hover:text-primary transition-colors">{service.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}<br/><span className="text-xs text-slate-500">Serving the entire GTA</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm whitespace-pre-line">{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy"><a className="hover:text-white">Privacy Policy</a></Link>
            <Link href="/terms"><a className="hover:text-white">Terms of Service</a></Link>
            <Link href="/admin/leads"><a className="hover:text-white">Admin</a></Link>
          </div>
          <p className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            ESA Licensed: {COMPANY_INFO.license}
          </p>
        </div>
      </div>
    </footer>
  );
}
