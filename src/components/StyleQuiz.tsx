"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    q: "Which vibe speaks to you?",
    options: ["Minimalist", "Industrial", "Scandinavian", "Modern Luxe", "Japanese Zen"],
    icons: ["◻", "⚙", "△", "◆", "🌿"],
  },
  {
    q: "Your ideal colour palette?",
    options: ["Neutrals & Whites", "Bold & Dark", "Warm Wood Tones", "Monochrome", "Earthy Natural"],
    icons: ["○", "●", "▤", "◐", "◈"],
  },
  {
    q: "What matters most?",
    options: ["Storage & Function", "Aesthetics & Style", "Natural Light", "Open Space", "Smart Home Tech"],
    icons: ["▦", "✦", "☀", "⬡", "⚡"],
  },
  {
    q: "Your home type?",
    options: ["HDB BTO", "HDB Resale", "Condo", "Landed", "Commercial"],
    icons: ["🏠", "🏘", "🏢", "🏡", "🏬"],
  },
  {
    q: "Budget range?",
    options: ["Under $30K", "$30-50K", "$50-80K", "$80-120K", "$120K+"],
    icons: ["💰", "💰", "💎", "💎", "👑"],
  },
];

const styleResults: Record<string, { title: string; desc: string }> = {
  Minimalist: { title: "Minimalist Maven", desc: "You love clean lines, open spaces, and the beauty of less-is-more. Your ideal home breathes simplicity and intention." },
  Industrial: { title: "Industrial Chic", desc: "Raw textures, exposed elements, and urban edge define your style. You find beauty in the unfinished and authentic." },
  Scandinavian: { title: "Scandi Dreamer", desc: "Warmth, functionality, and natural materials are your pillars. Hygge isn't just a word — it's your lifestyle." },
  "Modern Luxe": { title: "Modern Luxe Lover", desc: "Sophisticated, bold, and refined. You gravitate toward premium finishes, rich textures, and statement pieces." },
  "Japanese Zen": { title: "Zen Harmonist", desc: "Balance, nature, and tranquility guide your choices. Your space is a sanctuary of calm and mindful design." },
};

export default function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const result = styleResults[answers[0]] || styleResults["Modern Luxe"];
  const progress = ((step + (showResult ? 1 : 0)) / questions.length) * 100;

  return (
    <section id="style-quiz" className="py-20 sm:py-32 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-3">✦ AI-Powered Style Discovery</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-cream">
              Discover Your Design Style<br /><span className="text-gradient font-semibold">in 60 Seconds</span>
            </h2>
          </div>

          {!showResult ? (
            <div className="bg-dark-card border border-gold/10 p-6 sm:p-10">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-cream/40 mb-2">
                  <span>Question {step + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-dark-lighter rounded-full overflow-hidden">
                  <motion.div className="h-full bg-gold" animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl text-cream mb-6">{questions[step].q}</h3>
                  <div className={`grid gap-3 ${questions[step].options.length === 5 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {questions[step].options.map((option, i) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className="group flex items-center gap-4 p-4 border border-gold/10 hover:border-gold/40 bg-dark/50 hover:bg-gold/5 transition-all duration-300 text-left"
                      >
                        <span className="text-2xl w-10 text-center opacity-50 group-hover:opacity-100 transition-opacity">
                          {questions[step].icons[i]}
                        </span>
                        <span className="text-cream/80 group-hover:text-cream transition-colors">{option}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : !showForm ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-card border border-gold/20 p-8 sm:p-12 text-center gold-glow"
            >
              <div className="text-5xl mb-4">✨</div>
              <p className="text-gold tracking-widest uppercase text-sm mb-2">Your Design Style</p>
              <h3 className="text-3xl sm:text-4xl text-gradient font-semibold mb-4">{result.title}</h3>
              <p className="text-cream/60 max-w-lg mx-auto mb-8">{result.desc}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {answers.map((a, i) => (
                  <span key={i} className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-xs tracking-wider">
                    {a}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="bg-gold text-dark px-8 py-4 font-semibold tracking-wider uppercase hover:bg-gold-light transition-all"
              >
                Get a Free Consultation Tailored to Your Style
              </button>
            </motion.div>
          ) : !submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-dark-card border border-gold/20 p-8 sm:p-12"
            >
              <h3 className="text-2xl text-cream mb-2 text-center">Almost There!</h3>
              <p className="text-cream/50 text-center mb-8">Enter your details and we&apos;ll prepare a personalized design brief for you.</p>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 max-w-md mx-auto">
                <input type="text" placeholder="Your Name" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none transition-colors" />
                <input type="tel" placeholder="Phone Number" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none transition-colors" />
                <input type="email" placeholder="Email Address" required className="w-full bg-dark border border-gold/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 outline-none transition-colors" />
                <button type="submit" className="w-full bg-gold text-dark py-4 font-semibold tracking-wider uppercase hover:bg-gold-light transition-all">
                  Get My Free Design Brief →
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-card border border-gold/20 p-12 text-center"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl text-gradient font-semibold mb-3">Thank You!</h3>
              <p className="text-cream/60">Our AI has prepared your personalized style brief. A design consultant will reach out within 24 hours.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
