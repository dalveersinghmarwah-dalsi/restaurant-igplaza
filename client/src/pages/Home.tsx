import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const inventory = {
    seating: [
      { id: 1, name: "Ghost Chairs", image: "🪑", description: "Elegant transparent seating" },
      { id: 2, name: "Vineyard Chairs", image: "🪑", description: "Classic wooden design" },
      { id: 3, name: "Chiavari Chairs", image: "🪑", description: "Premium metal frame" },
    ],
    tables: [
      { id: 4, name: "Round Banquet Tables", image: "🪑", description: "60-inch diameter" },
      { id: 5, name: "Farm Tables", image: "🪑", description: "Rustic wood finish" },
      { id: 6, name: "Cocktail Tables", image: "🪑", description: "Elegant high-top" },
    ],
    tabletop: [
      { id: 7, name: "Premium Glassware", image: "🥂", description: "Crystal clear sets" },
      { id: 8, name: "Gold Chargers", image: "✨", description: "Luxury place settings" },
      { id: 9, name: "Linens & Runners", image: "🧵", description: "Multiple colors available" },
    ],
    decor: [
      { id: 10, name: "Floral Arches", image: "🌸", description: "Custom designs" },
      { id: 11, name: "Backdrops", image: "🎭", description: "Photo-worthy setups" },
      { id: 12, name: "Lighting", image: "💡", description: "Ambient & accent" },
    ],
  };

  const services = [
    {
      title: "Weddings & Engagements",
      description: "Complete rental solutions for your special day",
      icon: "💍",
    },
    {
      title: "Quinceañeras",
      description: "Celebrate this milestone with elegance",
      icon: "👑",
    },
    {
      title: "Linens & Textiles",
      description: "Premium fabrics in every color imaginable",
      icon: "🧵",
    },
    {
      title: "Waiter Service",
      description: "Professional staff for seamless events",
      icon: "🍽️",
    },
  ];

  const steps = [
    { number: "01", title: "Browse Catalog", description: "Explore our inventory of premium items" },
    { number: "02", title: "Get a Quote", description: "Contact us for custom pricing" },
    { number: "03", title: "Confirm Details", description: "Finalize your event requirements" },
    { number: "04", title: "Setup & Delivery", description: "We handle all logistics" },
    { number: "05", title: "Enjoy Your Event", description: "Create unforgettable memories" },
  ];

  const gallery = [
    { title: "Elegant Wedding Reception", image: "/manus-storage/venue_hero_1_5930d074.webp", category: "wedding" },
    { title: "Quinceañera Celebration", image: "/manus-storage/venue_setup_3_80e09d5a.webp", category: "quince" },
    { title: "Corporate Gala", image: "/manus-storage/venue_setup_4_96def31e.webp", category: "corporate" },
    { title: "Intimate Dinner", image: "/manus-storage/venue_setup_5_e0436076.webp", category: "dinner" },
    { title: "Garden Party", image: "/manus-storage/venue_setup_6_39ae3c16.webp", category: "garden" },
    { title: "Grand Ballroom", image: "/manus-storage/venue_hero_1_5930d074.webp", category: "ballroom" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="IG Plaza" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-display font-bold text-primary">IG Plaza</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#inventory" className="hover:text-primary transition">Inventory</a>
            <a href="#gallery" className="hover:text-primary transition">Gallery</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <Button className="btn-luxury">Get Quote</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img
          src="/manus-storage/venue_hero_1_5930d074.webp"
          alt="IG Plaza Venue"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Luxury Event <span className="text-primary">Rentals</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your vision into reality with IG Plaza's premium event rental services. From intimate gatherings to grand celebrations, we provide everything you need for an unforgettable experience.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="btn-luxury">Explore Catalog</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="divider-rose-gold mt-12" />
      </section>

      {/* Services Section */}
      <section id="services" className="section-container bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">Our Services</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive solutions for every type of celebration
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-background rounded-lg p-8 hover:border-primary border border-border transition group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Catalog */}
      <section id="inventory" className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">Inventory Catalog</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Browse our extensive collection of premium event rental items
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["all", "seating", "tables", "tabletop", "decor"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition font-accent font-semibold ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Inventory Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(selectedCategory === "all"
              ? Object.values(inventory).flat()
              : inventory[selectedCategory as keyof typeof inventory] || []
            ).map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition group cursor-pointer"
              >
                <div className="aspect-square bg-muted flex items-center justify-center text-6xl group-hover:scale-110 transition">
                  {item.image}
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-container bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">How It Works</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Simple steps to plan your perfect event
          </p>
          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-3">{step.number}</div>
                  <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 text-primary">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">Gallery</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Inspiration from our past events
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-lg border border-border hover:border-primary transition group cursor-pointer overflow-hidden relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-end p-4">
                  <h3 className="font-display font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">About IG Plaza</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded by Isaac and Glendi Osornio, IG Plaza is a Latino-owned event rental service dedicated to bringing elegance and sophistication to every celebration. Located in Visalia, California, we serve the Central Valley and beyond.
            </p>
            <p>
              Our mission is simple: to provide premium event rental solutions that make your special moments truly unforgettable. Whether you're planning a wedding, quinceañera, corporate event, or intimate gathering, we have everything you need.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">100+</div>
                <p className="text-sm">Events Hosted</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">5.0★</div>
                <p className="text-sm">Customer Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary mb-2">LGBTQ+</div>
                <p className="text-sm">Friendly & Inclusive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">Get Your Quote Today</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ready to plan your event? Contact us for a personalized quote.
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-muted-foreground">15808 Ave 356, Visalia, CA 93292</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">+1 (559) 397-4173</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Follow Us</p>
                <p className="text-muted-foreground">@ig.plaza on Instagram</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button className="btn-luxury text-lg">Contact Us Now</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-4">© 2026 IG Plaza. All rights reserved.</p>
          <p className="text-sm">
            Proudly serving the Central Valley with premium event rental solutions.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="hover:text-primary transition">Instagram</a>
            <a href="#" className="hover:text-primary transition">Facebook</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
