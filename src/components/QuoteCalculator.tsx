"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const roomTypes = ["3-Room HDB", "4-Room HDB", "5-Room HDB", "Condo", "Landed"];
const scopes = ["Full Renovation", "Partial Renovation", "Kitchen Only", "Bathroom Only", "Living Room"];

const basePrices: Record<string, number> = {
  "3-Room HDB": 28000, "4-Room HDB": 35000, "5-Room HDB": 45000, Condo: 55000, Landed: 80000,
};
const scopeMultipliers: Record<string, number> = {
  "Full Renovation": 1, "Partial Renovation": 0.6, "Kitchen Only": 0.3, "Bathroom Only": 0.25, "Living Room": 0.35,
};

export default function QuoteCalculator() {
  const [room, setRoom] = useState("");
  const [scope, setScope] = useState("");
  const [flexibility, setFlexibility] = useState(50);
  const [showResult, setShowResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const calculate = () => {
    if (room && scope) setShowForm(true);
  };

  const base = basePrices[room] || 35000;
  const multiplier = scopeMultipliers[scope] || 1;
  const estimate = Math.round(base * multiplier);
  const low = Math.round(estimate * (1 - (flexibility / 200)));
  const high = Math.round(estimate * (1 + (flexibility / 100)));

  const formatPrice = (n: number) => "$" + n.toLocaleString();

  return (
    <section id="quote" className="py-20 sm:py-32 px-4 bg-dark-lighter/30">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">✦ AI-Powered Estimation</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream">
              Instant Quote<br /><span className="text-gradient font-semibold">Calculator</span>
            </h2>
          </div>

          <div className="bg-dark-card border border-gold/10 p-6 sm:p-10">
            {!showResult ? (
              <>
                <div className="space-y-6">
                  <div>
                    <label className="block text-cream/60 text-sm mb-3 tracking-wider uppercase">Property Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {roomTypes.map((r) => (
                        <button
                          key={r}
                          onClick={() => setRoom(r)}
                          className={`p-3 border text-sm transition-all ${
                            room === r ? "border-gold bg-gold/10 text-gold" : "border-gold/10 text-cream/60 hover:border-gold/30"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-cream/60 text-sm mb-3 tracking-wider uppercase">Renovation Scope</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {scopes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setScope(s)}
                          className={`p-3 border text-sm transition-all ${
                            scope === s ? "border-gold bg-gold/10 text-gold" : "border-gold/10 text-cream/60 hover:border-gold/30"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-cream/60 text-sm mb-3 tracking-wider uppercase">
                      Budget Flexibility: {flexibility}%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={flexibility}
                      onChange={(e) => setFlexibility(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-cream/30 mt-1">
                      <span>Fixed Budget</span>
                      <span>Very Flexible</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={calculate}
                  disabled={!room || !scope}
                  className={`w-full mt-8 py-4 font-semibold tracking-wider uppercase transition-all ${
                    room && scope
                      ? "bg-gold text-dark hover:bg-gold-light"
                      : "bg-gold/20 text-cream/30 cursor-not-allowed"
                  }`}
                >
                  Calculate My Estimate →
                </button>
              </>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                <p className="text-gold tracking-widest uppercase text-sm mb-4">AI Estimate for {room} · {scope}</p>
                <div className="text-5xl sm:text-6xl font-light text-cream mb-2">
                  {formatPrice(low)} — {formatPrice(high)}
                </div>
                <p className="text-cream/40 text-sm mb-8">
                  This is an AI-generated estimate. Book a consultation for an exact quote.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-gold text-dark px-8 py-4 font-semibold tracking-wider uppercase hover:bg-gold-light transition-all"
                >
                  Book Free Consultation for Exact Quote
                </a>
              </motion.div>
            )}

            {showForm && !showResult && !submitted && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 pt-6 border-t border-gold/10">
                <p className="text-cream/50 text-sm text-center mb-4">Enter your details to see your AI estimate</p>
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setShowResult(true); }} className="space-y-3 max-w-sm mx-auto">
                  <input type="text" placeholder="Your Name" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none text-sm" />
                  <input type="tel" placeholder="Phone" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none text-sm" />
                  <input type="email" placeholder="Email" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none text-sm" />
                  <button type="submit" className="w-full bg-gold text-dark py-3 font-semibold tracking-wider uppercase text-sm hover:bg-gold-light transition-all">
                    Show My AI Estimate →
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
