import { Button } from "@/components/ui/button";

export default function EventStyles() {
  const styles = [
    {
      icon: "💍",
      title: "Classic Elegance",
      description: "Timeless sophistication with neutral tones, refined details, and luxurious touches"
    },
    {
      icon: "🌟",
      title: "Modern Minimalist",
      description: "Clean lines, contemporary design, and bold statement pieces for the modern couple"
    },
    {
      icon: "🌸",
      title: "Romantic Garden",
      description: "Lush florals, soft colors, and natural elements creating an enchanting atmosphere"
    },
    {
      icon: "✨",
      title: "Glamorous Luxury",
      description: "Opulent designs with metallics, crystals, and premium materials for maximum impact"
    },
    {
      icon: "🎨",
      title: "Bohemian Chic",
      description: "Eclectic, artistic designs with layered textures and vibrant, warm colors"
    },
    {
      icon: "🏛️",
      title: "Vintage Inspired",
      description: "Nostalgic charm with antique elements, classic patterns, and timeless aesthetics"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-container bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Event Styles</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our curated collection of event styles. Whether you prefer timeless elegance, modern sophistication, or romantic charm, we have the perfect aesthetic for your celebration.
          </p>
        </div>
      </section>

      <section className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Style Collections</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border hover:border-primary transition group cursor-pointer">
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{style.icon}</div>
                <h3 className="text-2xl font-display font-semibold mb-3">{style.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-6">Find Your Style</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Not sure which style fits your vision? Let's discuss your ideas and create something uniquely yours.
          </p>
          <Button className="btn-luxury text-lg">Schedule Consultation</Button>
        </div>
      </section>
    </div>
  );
}
