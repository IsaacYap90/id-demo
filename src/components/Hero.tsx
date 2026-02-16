"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-bg grid-pattern relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-6">Est. 2009 · Singapore</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-cream leading-tight mb-4">
            Where Vision Meets<br />
            <span className="text-gradient font-semibold">Craftsmanship</span>
          </h1>
          <p className="text-cream/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Award-Winning Interior Design & Renovation in Singapore
          </p>
          
          <a
            href="#style-quiz"
            className="inline-block bg-gold text-dark px-8 py-4 text-sm sm:text-base font-semibold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
          >
            Get Your Free AI Design Consultation
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-16"
        >
          {["HDB Approved", "BCA Licensed", "CaseTrust Accredited"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-cream/40 text-xs sm:text-sm tracking-wider uppercase">
              <div className="w-2 h-2 bg-gold/60 rotate-45" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-gold/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gold/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
