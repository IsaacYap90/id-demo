"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "The Amber Residence", type: "HDB", style: "Modern Luxe", desc: "4-room HDB transformed into a sophisticated urban retreat with custom marble-effect carpentry.", gradient: "portfolio-1" },
  { name: "Skyline Penthouse", type: "Condo", style: "Minimalist", desc: "Open-concept living with floor-to-ceiling glass integration and sleek built-in storage.", gradient: "portfolio-2" },
  { name: "Tanglin Estate", type: "Landed", style: "Japanese Zen", desc: "A 3-storey landed home blending traditional Japanese aesthetics with modern functionality.", gradient: "portfolio-3" },
  { name: "Clementi Heights", type: "HDB", style: "Scandinavian", desc: "5-room resale HDB with warm wood tones, natural light optimization, and cozy textiles.", gradient: "portfolio-4" },
  { name: "Marina One Suite", type: "Condo", style: "Industrial", desc: "CBD condo with exposed concrete features, metal accents, and statement lighting.", gradient: "portfolio-5" },
  { name: "Holland Grove", type: "Landed", style: "Modern Luxe", desc: "Semi-detached home with premium finishes, smart home integration, and bespoke furniture.", gradient: "portfolio-6" },
];

const filters = ["All", "HDB", "Condo", "Landed"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="portfolio" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">✦ Our Work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream">
              Portfolio<br /><span className="text-gradient font-semibold">Showcase</span>
            </h2>
            <div className="inline-block mt-4 px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold text-xs tracking-wider">
              ✦ AI-Curated: Based on your style quiz results
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-sm tracking-wider transition-all ${
                  filter === f ? "bg-gold text-dark font-semibold" : "border border-gold/20 text-cream/60 hover:border-gold/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group ${project.gradient} border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden`}
              >
                {/* Placeholder image area */}
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-10 group-hover:opacity-20 transition-opacity">◆</div>
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 bg-gold/90 text-dark text-xs font-semibold">{project.type}</span>
                    <span className="px-2 py-1 bg-dark/80 text-cream text-xs">{project.style}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg text-cream font-medium mb-2">{project.name}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
