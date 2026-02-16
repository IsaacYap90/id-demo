"use client";
import Hero from "@/components/Hero";
import StyleQuiz from "@/components/StyleQuiz";
import QuoteCalculator from "@/components/QuoteCalculator";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <StyleQuiz />
      <QuoteCalculator />
      <Portfolio />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}
