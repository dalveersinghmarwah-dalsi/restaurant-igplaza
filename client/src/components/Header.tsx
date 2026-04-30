import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Decorating", href: "/decorating" },
    { label: "Event Styles", href: "/event-styles" },
    { label: "Party Themes", href: "/party-themes" },
    { label: "Hire Products", href: "/hire-products" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/">
            <a className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition flex-shrink-0">
              <img
                src="/logo.png"
                alt="IG Plaza Logo"
                className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border-2 border-primary flex-shrink-0"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary whitespace-nowrap">
                  ig.plaza
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground whitespace-nowrap">
                  Isaac & Glendi Osornio
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-foreground hover:text-primary transition font-accent font-medium">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-card rounded-lg transition"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-card rounded-lg transition font-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
