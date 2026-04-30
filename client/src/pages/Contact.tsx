import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen section-container">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-5xl font-display font-bold mb-6 text-center">Contact Us</h1>
        
        <div className="space-y-8 mb-12">
          <div className="flex items-start gap-4">
            <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">Address</h3>
              <p className="text-muted-foreground">15808 Ave 356, Visalia, CA 93292</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (559) 397-4173</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-display font-semibold text-lg mb-2">Follow Us</h3>
              <p className="text-muted-foreground">@ig.plaza on Instagram</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-luxury text-lg">Get Your Quote</Button>
        </div>
      </div>
    </div>
  );
}
