import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">ig.plaza</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Premium event rentals by Isaac & Glendi Osornio. Creating unforgettable celebrations.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ig.plaza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/igplazavenue/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.google.com/maps/place/IG+Plaza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition"
                aria-label="Google Maps"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/decorating" className="hover:text-primary transition">Decorating</a></li>
              <li><a href="/event-styles" className="hover:text-primary transition">Event Styles</a></li>
              <li><a href="/party-themes" className="hover:text-primary transition">Party Themes</a></li>
              <li><a href="/hire-products" className="hover:text-primary transition">Hire Products</a></li>
              <li><a href="/gallery" className="hover:text-primary transition">Gallery</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <p>15808 Ave 356, Visalia, CA 93292</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+15593974173" className="hover:text-primary transition">+1 (559) 397-4173</a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={18} className="text-primary flex-shrink-0" />
                <a href="https://www.instagram.com/ig.plaza/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">@ig.plaza</a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-rose-gold my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 IG Plaza. All rights reserved.</p>
          <p className="mt-2">Isaac & Glendi Osornio | Premium Event Rentals</p>
        </div>
      </div>
    </footer>
  );
}
