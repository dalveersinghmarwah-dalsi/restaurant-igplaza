import { BalloonIcon, CakeIcon, FlowerIcon, DecorIcon } from "@/components/Icons";

export default function PartyThemes() {
  const themes = [
    { icon: BalloonIcon, title: "Quinceañera", desc: "Elegant celebration of a young woman's 15th birthday" },
    { icon: CakeIcon, title: "Birthday Bash", desc: "Fun and festive celebrations for all ages" },
    { icon: FlowerIcon, title: "Bridal Shower", desc: "Sophisticated pre-wedding celebration" },
    { icon: DecorIcon, title: "Corporate Events", desc: "Professional gatherings and celebrations" },
    { icon: BalloonIcon, title: "Baby Shower", desc: "Joyful celebration welcoming new arrivals" },
    { icon: CakeIcon, title: "Anniversary Party", desc: "Celebrate milestones and special moments" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-96 overflow-hidden">
        <img
          src="/manus-storage/venue_setup_6_7a676f6b.jpeg"
          alt="Party Themes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center pl-8 md:pl-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Party Themes</h1>
            <p className="text-xl text-[#E0BFB8]">
              Celebrate any occasion with our expertly curated party themes and services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Popular Themes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, idx) => {
              const Icon = theme.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-8 border-l-4 border-[#E0BFB8] hover:shadow-lg transition"
                >
                  <div className="mb-4">
                    <Icon color="#E0BFB8" size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{theme.title}</h3>
                  <p className="text-muted-foreground">{theme.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">Venue Showcase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/manus-storage/venue_hero_2_343d8e24.jpeg"
              alt="Venue 1"
              className="rounded-lg shadow-lg h-96 object-cover"
            />
            <img
              src="/manus-storage/venue_setup_5_eeb36ecb.jpeg"
              alt="Venue 2"
              className="rounded-lg shadow-lg h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Plan Your Perfect Party</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you bring your party vision to life with our comprehensive theme packages and services.
          </p>
          <button className="px-10 py-4 bg-[#E0BFB8] text-black font-display font-bold text-lg rounded hover:bg-[#D4A5A0] transition">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
