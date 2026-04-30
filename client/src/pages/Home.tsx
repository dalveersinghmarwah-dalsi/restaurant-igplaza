import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FlowerIcon, RingIcon, CakeIcon, BalloonIcon, TableIcon, DecorIcon, GlassIcon, ChampagneIcon } from "@/components/Icons";

const venueImages = [
  {
    title: "Elegant Weddings",
    subtitle: "Your dream day, perfectly styled",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop",
  },
  {
    title: "Garden Celebrations",
    subtitle: "Outdoor elegance and natural beauty",
    image: "https://images.unsplash.com/photo-1519671482677-36034494c7ad?w=1200https://images.unsplash.com/photo-1519167758481-83f19106c8f3?w=1200&h=600&fit=croph=600https://images.unsplash.com/photo-1519167758481-83f19106c8f3?w=1200&h=600&fit=cropfit=crop",
  },
  {
    title: "Intimate Gatherings",
    subtitle: "Personal touches, lasting memories",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200https://images.unsplash.com/photo-1530519387789-4c1017266635?w=1200&h=600&fit=croph=600https://images.unsplash.com/photo-1530519387789-4c1017266635?w=1200&h=600&fit=cropfit=crop",
  },
  {
    title: "Grand Celebrations",
    subtitle: "Spectacular events, unforgettable nights",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=600&fit=crop",
  },
  {
    title: "Luxury Receptions",
    subtitle: "Premium service, exceptional details",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=600&fit=crop",
  },
];

const serviceCategories = [
  {
    title: "Weddings & Engagements",
    description: "Complete wedding rental services with elegant styling",
    color: "from-[#E63946] to-[#C63946]",
    icon: RingIcon,
  },
  {
    title: "Quinceañeras",
    description: "Celebrate this special milestone with style",
    color: "from-[#E0BFB8] to-[#D4A5A0]",
    icon: BalloonIcon,
  },
  {
    title: "Linens & Textiles",
    description: "Premium fabrics and linens in all colors",
    color: "from-[#E63946] to-[#C63946]",
    icon: TableIcon,
  },
  {
    title: "Waiter Service",
    description: "Professional staff for seamless events",
    color: "from-[#E0BFB8] to-[#D4A5A0]",
    icon: ChampagneIcon,
  },
];

const productCategories = [
  { name: "Seating", icon: TableIcon, color: "#E0BFB8" },
  { name: "Tables", icon: TableIcon, color: "#E63946" },
  { name: "Glassware", icon: GlassIcon, color: "#E0BFB8" },
  { name: "Decor", icon: DecorIcon, color: "#E63946" },
  { name: "Linens", icon: FlowerIcon, color: "#E0BFB8" },
  { name: "Lighting", icon: CakeIcon, color: "#E63946" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % venueImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % venueImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + venueImages.length) % venueImages.length);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {venueImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl text-champagne-cream mb-8">
                  {image.subtitle}
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-[#E63946] hover:bg-[#D63946] text-white font-semibold rounded transition">
                    Explore Now
                  </button>
                  <button className="px-8 py-3 bg-[#E0BFB8] hover:bg-[#D4A5A0] text-black font-semibold rounded transition">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {venueImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === currentSlide ? "bg-[#E63946]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-display font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${service.color} rounded-lg p-8 text-white hover:shadow-2xl transition transform hover:scale-105`}
                >
                  <div className="mb-4">
                    <Icon color="white" size={48} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
                  <p className="text-lg opacity-90">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-display font-bold text-center mb-16">Browse Our Inventory</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((product, idx) => {
              const Icon = product.icon;
              return (
                <div
                  key={idx}
                  className="bg-background rounded-lg p-8 text-center hover:border-[#E63946] border-2 border-transparent transition cursor-pointer group"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition">
                    <Icon color={product.color} size={56} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground mt-2">Browse our collection</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-display font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 md:gap-2">
              {[
                { step: 1, title: "Browse", desc: "Explore our catalog" },
                { step: 2, title: "Select", desc: "Choose your items" },
                { step: 3, title: "Quote", desc: "Get pricing" },
                { step: 4, title: "Book", desc: "Confirm your order" },
                { step: 5, title: "Enjoy", desc: "Perfect event!" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#E63946] text-white flex items-center justify-center font-display font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {idx < 4 && (
                    <div className="hidden md:block absolute right-0 top-6 w-8 h-1 bg-gradient-to-r from-[#E63946] to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#E63946] to-[#C63946] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display font-bold text-white mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you create an unforgettable celebration with our premium rental services.
          </p>
          <button className="px-10 py-4 bg-white text-[#E63946] font-display font-bold text-lg rounded hover:bg-champagne-cream transition">
            Get Your Quote Today
          </button>
        </div>
      </section>
    </div>
  );
}
