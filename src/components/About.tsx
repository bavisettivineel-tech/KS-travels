import { Section } from "./Section";
import { motion } from "framer-motion";
import { Star, Clock, Car, UserCheck, MapPin, ShieldCheck } from "lucide-react";

const cards = [
  { icon: Star, title: "5★ Rated", desc: "Perfect 5.0 rating on Google with 31 verified reviews" },
  { icon: Clock, title: "24/7 Service", desc: "Round the clock availability for all travel needs" },
  { icon: Car, title: "AC Vehicles", desc: "All cars fully air-conditioned and well maintained" },
  { icon: UserCheck, title: "Pro Drivers", desc: "Licensed, experienced and courteous chauffeurs" },
  { icon: MapPin, title: "GPS Tracked", desc: "Real-time vehicle tracking for your safety" },
  { icon: ShieldCheck, title: "Best Rates", desc: "Transparent pricing with zero hidden charges" },
];

export function About() {
  return (
    <Section id="about" label="About Us" title="Kakinada's Most Trusted Car Service">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground/70 text-lg leading-relaxed mb-8">
            KS Travels is the best car travels in Kakinada — trusted by 1000+ happy customers
            across East Godavari district and all of Andhra Pradesh. Whether you need a local city taxi,
            outstation cab to Hyderabad, Vizag, Vijayawada or Tirupati, an airport transfer to
            Rajahmundry or Visakhapatnam Airport, wedding cars, tour packages to Araku Valley,
            Draksharamam, Annavaram, Konaseema or Pancharama Temples — we cover every journey with
            comfort, safety and professionalism. Our 24/7 AC fleet includes Toyota Innova Crysta,
            Force Tempo Traveller, Sedan, Maruti Ertiga, and Honda Amaze. Zero hidden charges. On-time,
            every time. The most reliable car travels near you in Kakinada.
          </p>
          <div className="border border-gold/40 bg-black/40 p-6 rounded-lg flex items-center gap-6">
            <div>
              <div className="font-display text-6xl text-gold leading-none">5.0</div>
              <div className="flex gap-1 mt-2 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="border-l border-gold/30 pl-6">
              <div className="font-display text-2xl text-foreground">252 Reviews</div>
              <div className="text-sm text-foreground/60 uppercase tracking-widest mt-1">
                Verified Google Reviews
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-[#111] border-l-[3px] border-gold/70 p-5 hover:-translate-y-1.5 transition-all duration-300 hover:gold-glow"
            >
              <c.icon className="text-gold mb-3" size={26} />
              <div className="font-display text-xl text-foreground mb-1">{c.title}</div>
              <div className="text-sm text-foreground/60 leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
