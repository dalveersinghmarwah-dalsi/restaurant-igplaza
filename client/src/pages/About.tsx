import { MapPin, Users, Heart, Accessibility, Wifi, DollarSign, ParkingCircle, Globe } from "lucide-react";

export default function About() {
  const features = [
    { icon: "♿", title: "Wheelchair Accessible", description: "Accessible parking, entrance, seating, and restrooms" },
    { icon: "🌈", title: "LGBTQ+ Friendly", description: "Inclusive space celebrating all love and identities" },
    { icon: "🏳️‍⚧️", title: "Transgender Safe Space", description: "Gender-neutral facilities and welcoming environment" },
    { icon: "🅿️", title: "Free Parking", description: "Ample on-site parking available for all guests" },
    { icon: "🌐", title: "Multilingual Support", description: "Language assistance available for your convenience" },
    { icon: "💳", title: "NFC Payments", description: "Modern payment options including mobile payments" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About IG Plaza</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            IG Plaza is a premier event rental service dedicated to making your celebration unforgettable. Founded by Isaac & Glendi Osornio, we bring passion, creativity, and professionalism to every event.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              With over a decade of experience in the event rental industry, Isaac & Glendi Osornio have built IG Plaza on the foundation of excellence, integrity, and customer satisfaction. What started as a small family business has grown into a trusted partner for hundreds of celebrations throughout California.
            </p>
            <p>
              We believe that every event is unique and deserves personalized attention. Whether you're planning an intimate gathering or a grand celebration, our team is committed to bringing your vision to life with style, elegance, and professionalism.
            </p>
            <p>
              As a Latino-owned business, we take pride in serving our community and celebrating the rich cultural traditions that make events special. We're honored to be part of your most important moments.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility & Amenities */}
      <section className="section-container bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Accessibility & Amenities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-background rounded-lg p-8 border border-border hover:border-primary transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-display font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">Premium products and exceptional service in every detail</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-display font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">Honest communication and reliable partnerships</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-display font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">Celebrating diversity and supporting our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-container bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions? We'd love to hear from you. Contact us today to discuss your event.
          </p>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <MapPin size={20} className="text-primary" />
              15808 Ave 356, Visalia, CA 93292
            </p>
            <p className="flex items-center justify-center gap-2">
              <Globe size={20} className="text-primary" />
              +1 (559) 397-4173
            </p>
            <p className="flex items-center justify-center gap-2">
              <Heart size={20} className="text-primary" />
              @ig.plaza on Instagram
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
