import { RingIcon, BalloonIcon, FlowerIcon, HeartIcon, DecorIcon } from "@/components/Icons";

export default function EventStyles() {
  const styles = [
    { icon: RingIcon, title: "Classic Elegance", desc: "Timeless sophistication with neutral tones and refined details" },
    { icon: DecorIcon, title: "Modern Minimalist", desc: "Clean lines and contemporary design elements" },
    { icon: FlowerIcon, title: "Romantic Garden", desc: "Lush florals and natural elements" },
    { icon: HeartIcon, title: "Glamorous Luxury", desc: "Opulent designs with premium materials" },
    { icon: BalloonIcon, title: "Bohemian Chic", desc: "Eclectic, artistic designs with vibrant colors" },
    { icon: DecorIcon, title: "Vintage Inspired", desc: "Nostalgic charm with antique elements" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero with Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="/manus-storage/venue_hero_1_fed029b5.png"
          alt="Event Styles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center pl-8 md:pl-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Event Styles</h1>
            <p className="text-xl text-[#E0BFB8]">
              Explore our curated collection of event styles and aesthetics for your celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Style Collections */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Style Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style, idx) => {
              const Icon = style.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-8 border-l-4 border-[#E0BFB8] hover:shadow-lg transition"
                >
                  <div className="mb-4">
                    <Icon color="#E0BFB8" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{style.title}</h3>
                  <p className="text-muted-foreground">{style.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">Style Inspiration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/manus-storage/venue_setup_3_71c6a60e.jpeg"
              alt="Event Style 1"
              className="rounded-lg shadow-lg h-96 object-cover"
            />
            <img
              src="/manus-storage/venue_setup_4_cc6beed7.jpeg"
              alt="Event Style 2"
              className="rounded-lg shadow-lg h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Find Your Style</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure which style fits your vision? Let's discuss your ideas and create something uniquely yours.
          </p>
          <button className="px-10 py-4 bg-[#E0BFB8] text-black font-display font-bold text-lg rounded hover:bg-[#D4A5A0] transition">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
