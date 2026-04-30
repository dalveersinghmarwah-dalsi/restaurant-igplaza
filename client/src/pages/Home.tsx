import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const venueImages = [
    "/manus-storage/venue_hero_1_5930d074.webp",
    "/manus-storage/venue_setup_3_80e09d5a.webp",
    "/manus-storage/venue_setup_4_96def31e.webp",
    "/manus-storage/venue_setup_5_e0436076.webp",
    "/manus-storage/venue_setup_6_39ae3c16.webp",
  ];

  const slideTexts = [
    { title: "Elegant Weddings", subtitle: "Your dream day, perfectly styled" },
    { title: "Quinceañera Magic", subtitle: "Celebrate this milestone in style" },
    { title: "Corporate Events", subtitle: "Professional and sophisticated" },
    { title: "Intimate Gatherings", subtitle: "Personal touches that matter" },
    { title: "Garden Celebrations", subtitle: "Natural beauty enhanced" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % venueImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % venueImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + venueImages.length) % venueImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen overflow-hidden">
        {/* Slides */}
        {venueImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={slideTexts[idx].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start z-10">
          <div className="container mx-auto px-4 max-w-3xl py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-2 sm:mb-4 text-white leading-tight">
              {slideTexts[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8">
              {slideTexts[currentSlide].subtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="btn-luxury">Explore Now</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {venueImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition ${
                idx === currentSlide ? "bg-primary w-8" : "bg-primary/40 w-2"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            What We Offer
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Complete event rental solutions tailored to your vision
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎨", title: "Decorating", desc: "Custom designs & styling" },
              { icon: "✨", title: "Event Styles", desc: "Themed experiences" },
              { icon: "🎉", title: "Party Themes", desc: "Pre-curated concepts" },
              { icon: "🪑", title: "Hire Products", desc: "Premium rentals" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-background rounded-lg p-8 border border-border hover:border-primary transition group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's bring your vision to life with our premium rental services. Contact us today for a personalized quote.
          </p>
          <Button className="btn-luxury text-lg">Get Your Quote</Button>
        </div>
      </section>
    </div>
  );
}
