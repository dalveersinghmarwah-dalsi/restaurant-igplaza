import { RingIcon, BalloonIcon, FlowerIcon, HeartIcon, DecorIcon } from "@/components/Icons";

export default function EventStyles() {
  const styles = [
    { icon: RingIcon, title: "Classic Elegance", desc: "Timeless sophistication with neutral tones, refined details, and luxurious touches" },
    { icon: DecorIcon, title: "Modern Minimalist", desc: "Clean lines, contemporary design, and bold statement pieces" },
    { icon: FlowerIcon, title: "Romantic Garden", desc: "Lush florals, soft colors, and natural elements creating enchantment" },
    { icon: HeartIcon, title: "Glamorous Luxury", desc: "Opulent designs with metallics, crystals, and premium materials" },
    { icon: BalloonIcon, title: "Bohemian Chic", desc: "Eclectic, artistic designs with layered textures and vibrant colors" },
    { icon: DecorIcon, title: "Vintage Inspired", desc: "Nostalgic charm with antique elements and timeless aesthetics" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-[#E63946] to-[#C63946] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Event Styles</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore our curated collection of event styles. Whether you prefer timeless elegance, modern sophistication, or romantic charm, we have the perfect aesthetic for your celebration.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Style Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style, idx) => {
              const Icon = style.icon;
              const bgColor = idx % 2 === 0 ? "from-[#E63946] to-[#C63946]" : "from-[#E0BFB8] to-[#D4A5A0]";
              const textColor = idx % 2 === 0 ? "text-white" : "text-black";
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${bgColor} rounded-lg p-8 ${textColor} hover:shadow-2xl transition transform hover:scale-105`}
                >
                  <div className="mb-4">
                    <Icon color={idx % 2 === 0 ? "white" : "black"} size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{style.title}</h3>
                  <p className="opacity-90">{style.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Find Your Style</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure which style fits your vision? Let's discuss your ideas and create something uniquely yours.
          </p>
          <button className="px-10 py-4 bg-[#E63946] text-white font-display font-bold text-lg rounded hover:bg-[#D63946] transition">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
