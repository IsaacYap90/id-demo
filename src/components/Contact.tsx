"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-14">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">✦ Let&apos;s Talk</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream">
              Book Your Free<br /><span className="text-gradient font-semibold">Design Consultation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <div className="bg-dark-card border border-gold/10 p-6 sm:p-8">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <input type="text" placeholder="Full Name *" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none text-sm" />
                  <input type="tel" placeholder="Phone Number *" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none text-sm" />
                  <input type="email" placeholder="Email Address *" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none text-sm" />
                  <select className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream/60 focus:border-gold/50 outline-none text-sm">
                    <option value="">Property Type</option>
                    <option>HDB BTO</option>
                    <option>HDB Resale</option>
                    <option>Condo</option>
                    <option>Landed</option>
                    <option>Commercial</option>
                  </select>
                  <select className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream/60 focus:border-gold/50 outline-none text-sm">
                    <option value="">Budget Range</option>
                    <option>Under $30,000</option>
                    <option>$30,000 - $50,000</option>
                    <option>$50,000 - $80,000</option>
                    <option>$80,000 - $120,000</option>
                    <option>$120,000+</option>
                  </select>
                  <input type="date" className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream/60 focus:border-gold/50 outline-none text-sm" />
                  <button type="submit" className="w-full bg-gold text-dark py-4 font-semibold tracking-wider uppercase hover:bg-gold-light transition-all">
                    Book My Free Consultation →
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl text-gradient font-semibold mb-3">Booking Confirmed!</h3>
                  <p className="text-cream/60 text-sm">A design consultant will contact you within 2 hours to confirm your preferred date and time.</p>
                </motion.div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="p-6 border border-gold/10 bg-dark-card">
                <h3 className="text-gold text-sm tracking-wider uppercase mb-4">Visit Our Showroom</h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Luxe Interiors Design Studio<br />
                  123 Orchard Road, #05-01<br />
                  Design Centre, Singapore 238858
                </p>
              </div>
              <div className="p-6 border border-gold/10 bg-dark-card">
                <h3 className="text-gold text-sm tracking-wider uppercase mb-4">Get In Touch</h3>
                <div className="space-y-2 text-cream/70 text-sm">
                  <p>📞 +65 6123 4567</p>
                  <p>✉️ hello@luxeinteriors.sg</p>
                  <p>💬 WhatsApp: +65 9123 4567</p>
                </div>
              </div>
              <div className="p-6 border border-gold/10 bg-dark-card">
                <h3 className="text-gold text-sm tracking-wider uppercase mb-4">Operating Hours</h3>
                <div className="space-y-1 text-cream/70 text-sm">
                  <p>Mon — Fri: 10:00 AM — 7:00 PM</p>
                  <p>Sat — Sun: 10:00 AM — 5:00 PM</p>
                  <p>Public Holidays: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
