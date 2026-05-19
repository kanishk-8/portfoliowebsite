"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [astronautAnimationData, setAstronautAnimationData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    fetch("/astani.json")
      .then((res) => res.json())
      .then((data) => setAstronautAnimationData(data))
      .catch((err) => console.error(err));

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate random particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      {/* Dynamic Background with Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-pulse-slow delay-1000" />
        
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: `${particle.x}vw`,
              y: `${particle.y}vh`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [`${particle.y}vh`, `${particle.y - 20}vh`, `${particle.y}vh`],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {mounted && astronautAnimationData && (
        <div className="absolute inset-0 pointer-events-none z-10 opacity-70">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[20%] right-[5%] sm:right-[15%]"
          >
            <Lottie
              animationData={astronautAnimationData}
              loop={true}
              autoplay={true}
              style={{
                width: isMobile ? 180 : 350,
                height: isMobile ? 180 : 350,
                filter: "drop-shadow(0 0 30px rgba(124, 58, 237, 0.6))",
              }}
            />
          </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <span className="px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md text-xs sm:text-sm font-semibold text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              🚀 Welcome to my digital universe
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-6 text-white tracking-tighter drop-shadow-2xl">
            Hi, I'm <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient pb-2 inline-block">
              Kanishk
            </span>
          </h1>

          <div className="text-2xl sm:text-4xl lg:text-5xl text-gray-300 mb-8 h-16 sm:h-20 font-bold drop-shadow-md">
            {mounted && (
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "React.js Developer", 2000,
                  "Next.js Expert", 2000,
                  "Mobile App Developer", 2000,
                  "Backend Developer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent"
              />
            )}
          </div>

          <p className="text-base sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Passionate developer building scalable web and mobile applications using React, Next.js, and Rust. Turning complex ideas into elegant, high-performance solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] transition-all duration-300 text-lg border border-white/10"
            >
              Explore My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto bg-white/5 border border-white/20 backdrop-blur-md text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg hover:border-white/40"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center p-1.5 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <div className="w-1.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]" />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      `}</style>
    </section>
  );
}
