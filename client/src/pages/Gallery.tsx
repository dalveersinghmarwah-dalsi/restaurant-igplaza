export default function Gallery() {
  const galleryImages = [
    { title: "Elegant Wedding Reception", image: "/manus-storage/venue_hero_1_5930d074.webp" },
    { title: "Quinceañera Celebration", image: "/manus-storage/venue_setup_3_80e09d5a.webp" },
    { title: "Corporate Gala", image: "/manus-storage/venue_setup_4_96def31e.webp" },
    { title: "Intimate Dinner", image: "/manus-storage/venue_setup_5_e0436076.webp" },
    { title: "Garden Party", image: "/manus-storage/venue_setup_6_39ae3c16.webp" },
    { title: "Grand Ballroom", image: "/manus-storage/venue_hero_1_5930d074.webp" },
  ];

  return (
    <div className="min-h-screen">
      <section className="section-container bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            View our portfolio of past events. Each image showcases the elegance and attention to detail we bring to every celebration.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-lg overflow-hidden border border-border hover:border-primary transition cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <h3 className="font-display font-semibold text-xl text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
