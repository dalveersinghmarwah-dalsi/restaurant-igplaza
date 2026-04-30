import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FlowerIcon, RingIcon, CakeIcon, BalloonIcon, TableIcon, DecorIcon, GlassIcon, ChampagneIcon } from "@/components/Icons";

const venueImages = [
  {
    title: "Elegant Weddings",
    subtitle: "Your dream day, perfectly styled",
    image: "/images/venue_hero_1.png",
  },
  {
    title: "Garden Celebrations",
    subtitle: "Outdoor elegance and natural beauty",
    image: "/images/venue_hero_2.jpeg",
  },
  {
    title: "Intimate Gatherings",
    subtitle: "Personal touches, lasting memories",
    image: "/images/venue_setup_3.jpeg",
  },
  {
    title: "Grand Celebrations",
    subtitle: "Spectacular events, unforgettable nights",
    image: "/images/venue_setup_3.jpeg",
  },
  {
    title: "Luxury Receptions",
    subtitle: "Premium service, exceptional details",
    image: "/images/venue_setup_3.jpeg",
  },
];

const galleryImages = [
  "/images/venue_setup_3.jpeg",
  "/images/venue_setup_4.jpeg",
  "/images/venue_setup_5.jpeg",
  "/images/venue_setup_6.jpeg",
  "/images/venue_hero_1.png",
  "/images/venue_hero_2.jpeg",
];

const serviceCategories = [
  {
    title: "Weddings & Engagements",
    description: "Complete wedding rental services with elegant styling",
    color: "from-[#E0BFB8] to-[#D4A5A0]",
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
    color: "from-[#E0BFB8] to-[#D4A5A0]",
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
  { name: "Tables", icon: TableIcon, color: "#E0BFB8" },
  { name: "Glassware", icon: GlassIcon, color: "#E0BFB8" },
  { name: "Decor", icon: DecorIcon, color: "#E0BFB8" },
  { name: "Linens", icon: FlowerIcon, color: "#E0BFB8" },
  { name: "Lighting", icon: CakeIcon, color: "#E0BFB8" },
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
                  <button className="px-8 py-3 bg-[#E0BFB8] hover:bg-[#D4A5A0] text-black font-semibold rounded transition">
                    Explore Now
                  </button>
                  <button className="px-8 py-3 border-2 border-[#E0BFB8] hover:bg-[#E0BFB8]/10 text-[#E0BFB8] font-semibold rounded transition">
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
                idx === currentSlide ? "bg-[#E0BFB8]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Tilted Portrait Gallery */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Our Venue in Action</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group perspective"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? -3 : 3}deg)`,
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:rotate-0">
                  <img
                    src={image}
                    alt={`Venue setup ${idx + 1}`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">Venue Setup</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${service.color} rounded-lg p-8 text-black hover:shadow-2xl transition transform hover:scale-105`}
                >
                  <div className="mb-4">
                    <Icon color="black" size={48} />
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
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">Browse Our Inventory</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((product, idx) => {
              const Icon = product.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-8 text-center hover:border-[#E0BFB8] border-2 border-transparent transition cursor-pointer group"
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
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">How It Works</h2>
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
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#E0BFB8] text-black flex items-center justify-center font-display font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#E0BFB8] to-[#D4A5A0] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display font-bold text-black mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let us help you create an unforgettable celebration with our premium rental services and beautiful venue.
          </p>
          <button className="px-10 py-4 bg-black text-[#E0BFB8] font-display font-bold text-lg rounded hover:bg-opacity-80 transition">
            Get Your Quote Today
          </button>
        </div>
      </section>
    </div>
  );
}
