"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      <Preloader onComplete={() => setLoadingComplete(true)} />
      
      <div style={{ opacity: loadingComplete ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
