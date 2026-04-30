import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
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
                <p>+1 (559) 397-4173</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <p>@ig.plaza on Instagram</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/decorating" className="hover:text-primary transition">Decorating</a></li>
              <li><a href="/event-styles" className="hover:text-primary transition">Event Styles</a></li>
              <li><a href="/party-themes" className="hover:text-primary transition">Party Themes</a></li>
              <li><a href="/hire-products" className="hover:text-primary transition">Hire Products</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">About IG Plaza</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium event rental service in Visalia, CA. Latino-owned, LGBTQ+ friendly, and dedicated to making your celebration unforgettable.
            </p>
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
