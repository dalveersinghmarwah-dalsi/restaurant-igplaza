import { FlowerIcon, DecorIcon, CandleIcon, CheckIcon } from "@/components/Icons";

export default function Decorating() {
  const services = [
    { icon: FlowerIcon, title: "Custom Floral Arrangements", description: "Stunning floral designs tailored to your event theme and color palette" },
    { icon: DecorIcon, title: "Themed Decorations", description: "Complete venue transformation with custom backdrops and themed elements" },
    { icon: CandleIcon, title: "Centerpieces & Table Styling", description: "Elegant table arrangements and centerpieces for every occasion" },
    { icon: FlowerIcon, title: "Ambient Lighting", description: "Professional lighting design to create the perfect atmosphere" },
  ];

  const process = [
    { step: "Consultation", desc: "We meet with you to understand your vision, theme, and color preferences" },
    { step: "Design & Planning", desc: "Our team creates a detailed design plan with visual mockups and material selections" },
    { step: "Setup & Installation", desc: "Professional installation of all decorations with attention to every detail" },
    { step: "Enjoy Your Event", desc: "Relax and enjoy your beautifully decorated venue while we handle everything" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#E63946] to-[#C63946] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Decorating Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Transform your venue into a stunning masterpiece. Our professional decorating team specializes in creating beautiful, cohesive designs that reflect your vision.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-card rounded-lg p-8 border-l-4 border-[#E63946] hover:shadow-lg transition">
                  <div className="mb-4">
                    <Icon color="#E63946" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-background rounded-lg p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E63946] text-white flex items-center justify-center font-display font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{item.step}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-12 w-6 h-1 bg-gradient-to-r from-[#E63946] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Why Choose Our Decorating</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Expert Design", desc: "Professional designers with years of experience" },
              { title: "Quality Materials", desc: "Premium decorations and flowers" },
              { title: "Full Service", desc: "Setup, styling, and breakdown included" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E63946] to-[#C63946] flex items-center justify-center">
                  <CheckIcon color="white" size={32} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#E0BFB8] to-[#D4A5A0] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-black mb-4">Ready to Decorate?</h2>
          <p className="text-lg text-black/80 mb-8">Let us create something beautiful for your event.</p>
          <button className="px-10 py-4 bg-[#E63946] text-white font-display font-bold text-lg rounded hover:bg-[#D63946] transition">
            Get Your Quote
          </button>
        </div>
      </section>
    </div>
  );
}
