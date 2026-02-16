"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { from: "bot" | "user"; text: string };

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (/price|cost|budget|quote|how much|estimate/.test(lower))
    return "Great question! 💰 I can help with that. Try our <a href='#quote' class='text-gold underline'>AI Instant Quote Calculator</a> for an estimate, or book a free consultation for an exact quote!";
  if (/portfolio|project|work|gallery|photo/.test(lower))
    return "We'd love to show you our work! 🏠 Check out our <a href='#portfolio' class='text-gold underline'>Portfolio Showcase</a> — it's AI-curated based on your style preferences!";
  if (/style|design|theme|look|vibe/.test(lower))
    return "Let's discover your perfect style! ✨ Take our <a href='#style-quiz' class='text-gold underline'>AI Design Style Quiz</a> — it only takes 60 seconds!";
  if (/book|consult|appointment|meet|schedule|visit/.test(lower))
    return "I'd be happy to help you book! 📅 Head to our <a href='#contact' class='text-gold underline'>Booking Form</a> to schedule your free design consultation. We typically respond within 2 hours!";
  if (/hdb|bto|resale/.test(lower))
    return "We're HDB-approved specialists! 🏢 We've completed 300+ HDB projects. Try our <a href='#quote' class='text-gold underline'>Quote Calculator</a> to get an instant estimate for your flat.";
  if (/hi|hello|hey|good/.test(lower))
    return "Hello! 👋 Welcome to Luxe Interiors. I can help you with pricing estimates, portfolio browsing, style discovery, or booking a consultation. What interests you?";
  return "I'd love to help! 😊 You can ask me about our <a href='#services' class='text-gold underline'>services</a>, <a href='#quote' class='text-gold underline'>pricing</a>, <a href='#portfolio' class='text-gold underline'>portfolio</a>, or <a href='#contact' class='text-gold underline'>book a free consultation</a>. What would you like to know?";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! 👋 I'm Luna, your AI design assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: getBotResponse(userMsg) }]);
    }, 600);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold text-dark rounded-full shadow-lg hover:bg-gold-light transition-all flex items-center justify-center text-xl hover:scale-110"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-dark-card border border-gold/20 shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="bg-gold/10 border-b border-gold/20 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-dark text-sm font-bold">L</div>
                <div>
                  <p className="text-cream text-sm font-medium">Luna — AI Design Assistant</p>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[400px]">
              {messages.map((m, i) => (
                <div key={i} className={`chat-message flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-gold text-dark rounded-t-lg rounded-bl-lg"
                        : "bg-dark border border-gold/10 text-cream/80 rounded-t-lg rounded-br-lg"
                    }`}
                    dangerouslySetInnerHTML={{ __html: m.text }}
                  />
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gold/10 p-3">
              <form
                onSubmit={(e) => { e.preventDefault(); send(); }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-dark border border-gold/20 px-3 py-2 text-cream text-sm placeholder:text-cream/30 focus:border-gold/50 outline-none"
                />
                <button type="submit" className="bg-gold text-dark px-4 py-2 text-sm font-semibold hover:bg-gold-light transition-colors">
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
