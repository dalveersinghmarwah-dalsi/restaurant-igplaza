import { Button } from "@/components/ui/button";

export default function HireProducts() {
  const categories = [
    {
      icon: "🪑",
      title: "Seating",
      items: ["Ghost Chairs", "Vineyard Chairs", "Chiavari Chairs", "Benches", "Bar Stools"]
    },
    {
      icon: "🪑",
      title: "Tables",
      items: ["Round Banquet Tables", "Farm Tables", "Cocktail Tables", "High-top Tables", "Console Tables"]
    },
    {
      icon: "🥂",
      title: "Tabletop",
      items: ["Premium Glassware", "Gold Chargers", "Linens & Runners", "Napkins", "Charger Plates"]
    },
    {
      icon: "🌸",
      title: "Decor & Props",
      items: ["Floral Arches", "Backdrops", "Centerpieces", "Lighting Fixtures", "Candelabras"]
    },
    {
      icon: "🍽️",
      title: "Catering Equipment",
      items: ["Serving Stations", "Chafing Dishes", "Beverage Dispensers", "Cake Tables", "Bar Setup"]
    },
    {
      icon: "🎪",
      title: "Tent & Outdoor",
      items: ["Tents & Canopies", "Outdoor Heaters", "Lounge Furniture", "Outdoor Lighting", "Dance Floors"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-container bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Hire Products</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Browse our extensive inventory of premium rental products. From elegant seating to sophisticated tabletop items, we have everything you need to create the perfect event.
          </p>
        </div>
      </section>

      <section className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Product Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border hover:border-primary transition">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-display font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Rent?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us for pricing, availability, and custom packages tailored to your event needs.
          </p>
          <Button className="btn-luxury text-lg">Get Rental Quote</Button>
        </div>
      </section>
    </div>
  );
}
