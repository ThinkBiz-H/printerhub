import { Phone, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import supportBanner from "@/assets/support-banner.jpg";

const PromoBanner = () => (
  <>
    <ScrollReveal>
      <section className="relative py-20 overflow-hidden">
        <img src={supportBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground">24/7 Printer Support Available</h3>
              <p className="text-primary-foreground/70 mt-1">Call us anytime for emergency printer repairs and technical assistance.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm shadow-lg shadow-accent/25 hover:shadow-xl active:scale-[0.97] transition-all duration-200 flex-shrink-0"
          >
            Get Help Now
          </a>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="banner-gradient py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground">Same Day Repair Service</h3>
              <p className="text-primary-foreground/70 mt-1">We arrive at your location and fix your printer the same day you call.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-lg bg-primary-foreground text-foreground font-semibold text-sm shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-200 flex-shrink-0"
          >
            Book Today
          </a>
        </div>
      </section>
    </ScrollReveal>
  </>
);

export default PromoBanner;
