"use client";
import { motion } from "framer-motion";

const reasons = [
  { num: "15+", label: "Years Experience", icon: "◆" },
  { num: "500+", label: "Completed Projects", icon: "▦" },
  { num: "AI", label: "Powered Design Process", icon: "⚡" },
  { num: "✓", label: "CaseTrust & HDB Approved", icon: "◈" },
  { num: "$0", label: "In-House Renovation Loan", icon: "✦" },
  { num: "3D", label: "& VR Visualization", icon: "◇" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-32 px-4 bg-dark-lighter/30">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-14">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">✦ Why Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream">
              Why Choose<br /><span className="text-gradient font-semibold">Luxe Interiors</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 sm:p-8 border border-gold/10 bg-dark-card hover:border-gold/30 transition-all"
              >
                <div className="text-3xl sm:text-4xl text-gradient font-bold mb-2">{r.num}</div>
                <p className="text-cream/60 text-sm">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
