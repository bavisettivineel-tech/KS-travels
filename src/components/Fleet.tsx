import { motion } from "framer-motion";
import { Section } from "./Section";
import sedanImg from "@/assets/car-sedan.jpg";
import innovaImg from "@/assets/car-innova.jpg";
import tempoImg from "@/assets/car-tempo.jpg";
import ertigaImg from "@/assets/car-ertiga.jpg";
import amazeImg from "@/assets/car-amaze.jpg";

interface CarItem {
  type: string;
  name: string;
  models: string;
  seats: string;
  features: string[];
  price: string;
  image: string;
  whatsapp: string;
}

const cars: CarItem[] = [
  {
    type: "Economy Class",
    name: "Sedan",
    models: "Toyota Etios / Dzire",
    seats: "4 Seater",
    features: ["AC", "Music System", "GPS"],
    price: "₹12/km",
    image: sedanImg,
    whatsapp: "Hi, I want to book a Sedan from KS Travels",
  },
  {
    type: "Premium Class",
    name: "SUV — Innova Crysta",
    models: "Toyota Innova Crysta",
    seats: "7 Seater",
    features: ["AC", "Push-back Seats", "Music", "GPS"],
    price: "₹16/km",
    image: innovaImg,
    whatsapp: "Hi, I want to book an Innova Crysta from KS Travels",
  },
  {
    type: "Group Travel",
    name: "Tempo Traveller",
    models: "Force Traveller 12–17 Seater",
    seats: "12–17 Seater",
    features: ["AC", "Push-back Seats", "Music", "Luggage Space"],
    price: "₹22/km",
    image: tempoImg,
    whatsapp: "Hi, I want to book a Tempo Traveller from KS Travels",
  },
  {
    type: "Family MPV",
    name: "Maruti Ertiga",
    models: "Maruti Suzuki Ertiga",
    seats: "6+1 Seater",
    features: ["AC", "Push-back Seats", "Music", "Boot Space"],
    price: "₹14/km",
    image: ertigaImg,
    whatsapp: "Hi, I want to book a Maruti Ertiga from KS Travels",
  },
  {
    type: "Compact Sedan",
    name: "Honda Amaze",
    models: "Honda Amaze",
    seats: "4 Seater",
    features: ["AC", "Music System", "GPS", "Comfort Seats"],
    price: "₹13/km",
    image: amazeImg,
    whatsapp: "Hi, I want to book a Honda Amaze from KS Travels",
  },
];

function CarCard({ car, index }: { car: CarItem; index: number }) {
  const link = `https://wa.me/919397367722?text=${encodeURIComponent(car.whatsapp)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-[#0f0f0f] border border-gold/15 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:gold-glow-strong"
    >
      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/70 backdrop-blur text-[10px] uppercase tracking-widest text-gold border border-gold/40">
        {car.type}
      </div>

      <div
        className="relative h-56 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(201,168,76,0.22), transparent 60%), #060606",
        }}
      >
        {/* Spotlight glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full pointer-events-none"
             style={{ background: "radial-gradient(ellipse at top, rgba(255,240,200,0.18), transparent 60%)" }} />
        <img
          src={car.image}
          alt={`${car.name} — ${car.models}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl text-foreground">{car.name}</h3>
        <p className="text-sm text-foreground/50 mt-1">{car.models}</p>
        <div className="flex items-center gap-3 mt-3 text-xs uppercase tracking-widest text-gold/80">
          <span>{car.seats}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {car.features.map((f) => (
            <span
              key={f}
              className="text-[10px] px-2 py-1 border border-gold/30 text-gold/80 uppercase tracking-widest"
            >
              {f}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer mt-5 block text-center clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest py-3 text-sm"
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );
}

export function Fleet() {
  return (
    <Section
      id="fleet"
      label="Our Fleet"
      title="Choose Your Perfect Ride"
      bgClass="bg-[#050505]"
      subtitle="Step into our virtual showroom — every vehicle, immaculately maintained."
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cars.map((car, i) => (
          <CarCard key={car.name} car={car} index={i} />
        ))}
      </div>
    </Section>
  );
}
