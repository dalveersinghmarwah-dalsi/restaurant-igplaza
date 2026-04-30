import { FlowerIcon, DecorIcon, CandleIcon, CheckIcon } from "@/components/Icons";

export default function Decorating() {
  const services = [
    { icon: FlowerIcon, title: "Custom Floral Arrangements", description: "Stunning floral designs tailored to your event theme and color palette" },
    { icon: DecorIcon, title: "Themed Decorations", description: "Complete venue transformation with custom backdrops and themed elements" },
    { icon: CandleIcon, title: "Centerpieces & Table Styling", description: "Elegant table arrangements and centerpieces for every occasion" },
    { icon: FlowerIcon, title: "Ambient Lighting", description: "Professional lighting design to create the perfect atmosphere" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero with Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="/manus-storage/venue_setup_4_cc6beed7.jpeg"
          alt="Decorating Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center pl-8 md:pl-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Decorating Services</h1>
            <p className="text-xl text-[#E0BFB8]">
              Transform your venue into a stunning masterpiece with our professional decorating expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-card rounded-lg p-8 border-l-4 border-[#E0BFB8] hover:shadow-lg transition">
                  <div className="mb-4">
                    <Icon color="#E0BFB8" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Our Process</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Consultation", desc: "We meet with you to understand your vision and preferences" },
                  { step: 2, title: "Design & Planning", desc: "Create detailed design plans with visual mockups" },
                  { step: 3, title: "Setup & Installation", desc: "Professional installation with meticulous attention to detail" },
                  { step: 4, title: "Enjoy Your Event", desc: "Relax while we handle everything" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E0BFB8] text-black flex items-center justify-center font-display font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/manus-storage/venue_setup_5_eeb36ecb.jpeg"
                alt="Decorating Process"
                className="rounded-lg shadow-lg"
              />
            </div>
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
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E0BFB8] flex items-center justify-center">
                  <CheckIcon color="black" size={32} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Ready to Decorate?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let us create something beautiful for your event.</p>
          <button className="px-10 py-4 bg-[#E0BFB8] text-black font-display font-bold text-lg rounded hover:bg-[#D4A5A0] transition">
            Get Your Quote
          </button>
        </div>
      </section>
    </div>
  );
}
