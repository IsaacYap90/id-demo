"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah & David Tan",
    type: "4-Room HDB BTO, Tampines",
    rating: 5,
    text: "Luxe Interiors transformed our BTO into something we couldn't even imagine. The AI style quiz nailed our preferences perfectly, and the 3D visualization let us see every detail before they started. Completed on time and within budget!",
  },
  {
    name: "Marcus Lim",
    type: "Condo, Rivière",
    rating: 5,
    text: "As someone who works in tech, I was impressed by their AI-powered design process. The instant quote was spot-on, and their smart home integration is seamless. My condo feels like a luxury hotel suite. Worth every dollar.",
  },
  {
    name: "Priya & Raj Sharma",
    type: "5-Room HDB Resale, Bishan",
    rating: 5,
    text: "We were nervous about renovating a resale flat, but the team made it stress-free. The custom carpentry is stunning — maximized every inch of storage. Our friends can't believe it's an HDB! Highly recommend their VR walkthrough service.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-14">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">✦ Client Stories</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream">
              What Our Clients<br /><span className="text-gradient font-semibold">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 sm:p-8 border border-gold/10 bg-dark-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="text-cream/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-cream font-medium text-sm">{t.name}</p>
                  <p className="text-cream/40 text-xs mt-1">{t.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
