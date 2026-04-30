import { Button } from "@/components/ui/button";

export default function PartyThemes() {
  const themes = [
    {
      icon: "💍",
      title: "Weddings & Engagements",
      description: "Complete rental solutions for your special day - from intimate ceremonies to grand receptions"
    },
    {
      icon: "👑",
      title: "Quinceañeras",
      description: "Celebrate this milestone with elegance and tradition. We specialize in creating unforgettable quinceañera experiences"
    },
    {
      icon: "🎉",
      title: "Corporate Events",
      description: "Professional and sophisticated setups for conferences, galas, and business celebrations"
    },
    {
      icon: "🎂",
      title: "Birthday Celebrations",
      description: "From sweet 16s to milestone birthdays, we create memorable celebrations for all ages"
    },
    {
      icon: "🎓",
      title: "Graduations & Ceremonies",
      description: "Honor achievements with elegant setups perfect for graduation parties and ceremonies"
    },
    {
      icon: "💒",
      title: "Intimate Gatherings",
      description: "Personal touches for small celebrations, family reunions, and special occasions"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-container bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Party Themes</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our collection of pre-curated party themes designed for every type of celebration. Each theme is carefully crafted to create memorable experiences.
          </p>
        </div>
      </section>

      <section className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Celebration Themes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border hover:border-primary transition">
                <div className="text-5xl mb-4">{theme.icon}</div>
                <h3 className="text-2xl font-display font-semibold mb-3">{theme.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-6">Your Celebration Awaits</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you plan and execute the perfect event. Contact us to learn more about our themed packages.
          </p>
          <Button className="btn-luxury text-lg">Explore Packages</Button>
        </div>
      </section>
    </div>
  );
}
