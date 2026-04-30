import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="/manus-storage/venue_hero_2_343d8e24.jpeg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center pl-8 md:pl-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-[#E0BFB8]">Get in touch to plan your perfect event.</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-display font-bold mb-12">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E0BFB8] flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (559) 397-4173</p>
                    <a href="tel:+15593974173" className="text-[#E0BFB8] hover:text-[#D84040] transition font-semibold mt-2 inline-block">Call Now</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E0BFB8] flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@igplaza.com</p>
                    <a href="mailto:info@igplaza.com" className="text-[#E0BFB8] hover:text-[#D84040] transition font-semibold mt-2 inline-block">Send Email</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E0BFB8] flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Fresno, California</p>
                    <a href="https://www.google.com/maps/place/IG+Plaza/" target="_blank" rel="noopener noreferrer" className="text-[#E0BFB8] hover:text-[#D84040] transition font-semibold mt-2 inline-block">View on Maps</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D84040] flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-1">Hours</h3>
                    <p className="text-muted-foreground">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.6234567890123!2d-119.2191607!3d36.436117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80953bc655bbbbfd%3A0xc130ccc0e011df98!2sIG%20Plaza!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-4 text-center">Send us a Message</h2>
          <p className="text-center text-muted-foreground mb-12">Fill out the form and we'll get back to you within 24 hours.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your name" className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-[#E0BFB8] transition" required />
              <input type="email" placeholder="your@email.com" className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-[#E0BFB8] transition" required />
            </div>
            <input type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-[#E0BFB8] transition" />
            <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-[#E0BFB8] transition">
              <option>Select event type</option>
              <option>Wedding</option>
              <option>Quinceañera</option>
              <option>Corporate Event</option>
              <option>Birthday Party</option>
            </select>
            <textarea placeholder="Tell us about your event..." rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-[#E0BFB8] transition resize-none" required></textarea>
            <button type="submit" className="w-full px-8 py-4 bg-[#E0BFB8] hover:bg-[#D84040] text-black font-display font-bold text-lg rounded transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#D84040] to-[#E0BFB8] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-black">Ready to Book?</h2>
          <p className="text-lg text-black/80 mb-8">Contact us today for a personalized quote.</p>
          <a href="tel:+15593974173" className="inline-block px-10 py-4 bg-black text-[#E0BFB8] font-display font-bold text-lg rounded hover:bg-opacity-80 transition">Call Us Now</a>
        </div>
      </section>
    </div>
  );
}
