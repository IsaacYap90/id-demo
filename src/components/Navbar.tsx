"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#style-quiz", label: "Style Quiz" },
  { href: "#quote", label: "AI Quote" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="#" className="text-gold font-bold text-xl sm:text-2xl tracking-wider">
            LUXE<span className="text-cream font-light">INTERIORS</span>
          </a>
          
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-cream/70 hover:text-gold transition-colors text-sm tracking-wide uppercase">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="bg-gold text-dark px-5 py-2 text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors">
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-cream p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/98 backdrop-blur-md border-t border-gold/20"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-cream/70 hover:text-gold transition-colors text-sm tracking-wide uppercase py-2">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="block bg-gold text-dark px-5 py-3 text-sm font-semibold tracking-wide text-center">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
