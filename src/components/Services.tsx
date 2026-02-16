"use client";
import { motion } from "framer-motion";

const services = [
  { icon: "◈", title: "Design Consultation", desc: "One-on-one sessions with our award-winning designers to understand your vision, lifestyle, and goals." },
  { icon: "▦", title: "Space Planning & 3D Visualization", desc: "Comprehensive space planning with photorealistic 3D renders so you can see your dream home before construction." },
  { icon: "⚙", title: "Full Renovation & Project Management", desc: "End-to-end project management from demolition to handover. We handle permits, contractors, and timelines." },
  { icon: "◆", title: "Custom Carpentry", desc: "Bespoke carpentry crafted in our in-house workshop. From wardrobes to kitchen cabinets, tailored to your space." },
  { icon: "⚡", title: "Smart Home Integration", desc: "Future-proof your home with smart lighting, automated blinds, integrated speakers, and climate control." },
  { icon: "✦", title: "Post-Renovation Support", desc: "12-month warranty with dedicated after-service support. We stand behind every project we deliver." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 px-4 bg-dark-lighter/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-14">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">✦ What We Do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream">
              Our<br /><span className="text-gradient font-semibold">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 sm:p-8 border border-gold/10 hover:border-gold/30 bg-dark-card hover:bg-dark-card/80 transition-all duration-300"
              >
                <div className="text-3xl text-gold/60 group-hover:text-gold transition-colors mb-4">{s.icon}</div>
                <h3 className="text-lg text-cream font-medium mb-3">{s.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
