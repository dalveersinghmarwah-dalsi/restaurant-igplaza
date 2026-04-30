import { Sparkles, Palette, Flower2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Decorating() {
  const services = [
    {
      icon: "✨",
      title: "Custom Floral Arrangements",
      description: "Stunning floral designs tailored to your event theme and color palette"
    },
    {
      icon: "🎨",
      title: "Themed Decorations",
      description: "Complete venue transformation with custom backdrops and themed elements"
    },
    {
      icon: "🌸",
      title: "Centerpieces & Table Styling",
      description: "Elegant table arrangements and centerpieces for every occasion"
    },
    {
      icon: "💡",
      title: "Ambient Lighting",
      description: "Professional lighting design to create the perfect atmosphere"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-container bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Decorating Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your venue into a stunning masterpiece. Our professional decorating team specializes in creating beautiful, cohesive designs that reflect your vision and make your event truly memorable.
          </p>
        </div>
      </section>

      <section className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border hover:border-primary transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Process</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg">1</div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Consultation</h3>
                <p className="text-muted-foreground">We meet with you to understand your vision, theme, and color preferences</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg">2</div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Design & Planning</h3>
                <p className="text-muted-foreground">Our team creates a detailed design plan with visual mockups and material selections</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg">3</div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Setup & Installation</h3>
                <p className="text-muted-foreground">Professional installation of all decorations with attention to every detail</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg">4</div>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-2">Enjoy Your Event</h3>
                <p className="text-muted-foreground">Relax and enjoy your beautifully decorated venue while we handle everything</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Decorate?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let us create something beautiful for your event.</p>
          <Button className="btn-luxury text-lg">Get Your Quote</Button>
        </div>
      </section>
    </div>
  );
}
