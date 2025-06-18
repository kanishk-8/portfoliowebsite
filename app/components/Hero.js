"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [astronautAnimationData, setAstronautAnimationData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Load the astronaut Lottie animation
    fetch("/astani.json")
      .then((response) => response.json())
      .then((data) => setAstronautAnimationData(data))
      .catch((error) =>
        console.error("Error loading astronaut animation:", error)
      );

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Subtle Upward Moving Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>

        {/* Main upward floating stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-float-up opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-20px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 8 + 12}s`,
            }}
          >
            <div
              className="w-0.5 bg-gradient-to-t from-transparent via-white to-transparent"
              style={{
                height: `${Math.random() * 15 + 8}px`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
            />
          </div>
        ))}

        {/* Twinkling static stars */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}

        {/* Larger glowing stars */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          </div>
        ))}
      </div>

      {/* Wandering Astronaut Lottie Animation */}
      {mounted && astronautAnimationData && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div
            className={
              isMobile
                ? "animate-wander-space-mobile"
                : "animate-wander-space-desktop"
            }
          >
            <Lottie
              animationData={astronautAnimationData}
              loop={true}
              autoplay={true}
              style={{
                width: isMobile ? 70 : 120,
                height: isMobile ? 70 : 120,
                filter: `drop-shadow(0 0 ${
                  isMobile ? 8 : 15
                }px rgba(99, 102, 241, 0.4))`,
              }}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div
          className={`transform transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white transform transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Kanishk
            </span>
          </h1>

          <div
            className={`text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-16 transform transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {mounted && (
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React.js Developer",
                  2000,
                  "Next.js Expert",
                  2000,
                  "Mobile App Developer",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            )}
          </div>

          <p
            className={`text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto transform transition-all duration-1000 delay-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Student & passionate developer specializing in React, Next.js, React
            Native, Golang, and Flask. I love creating beautiful, functional
            applications that solve real-world problems.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-800 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-black/30 hover:bg-black/50 backdrop-blur-md text-gray-300 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ring-2 ring-blue-500/30 hover:ring-blue-500/60 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce-slow">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }

        /* Desktop wandering animation */
        @keyframes wander-space-desktop {
          0% {
            transform: translateX(15vw) translateY(25vh) rotate(0deg);
          }
          10% {
            transform: translateX(30vw) translateY(20vh) rotate(15deg);
          }
          25% {
            transform: translateX(65vw) translateY(35vh) rotate(-10deg);
          }
          40% {
            transform: translateX(70vw) translateY(60vh) rotate(20deg);
          }
          55% {
            transform: translateX(50vw) translateY(65vh) rotate(-15deg);
          }
          70% {
            transform: translateX(25vw) translateY(60vh) rotate(10deg);
          }
          85% {
            transform: translateX(20vw) translateY(40vh) rotate(-5deg);
          }
          100% {
            transform: translateX(15vw) translateY(25vh) rotate(0deg);
          }
        }

        /* Mobile wandering animation - avoids center text area */
        @keyframes wander-space-mobile {
          0% {
            transform: translateX(5vw) translateY(15vh) rotate(0deg);
          }
          15% {
            transform: translateX(80vw) translateY(20vh) rotate(10deg);
          }
          30% {
            transform: translateX(85vw) translateY(35vh) rotate(-8deg);
          }
          45% {
            transform: translateX(75vw) translateY(80vh) rotate(12deg);
          }
          60% {
            transform: translateX(20vw) translateY(85vh) rotate(-10deg);
          }
          75% {
            transform: translateX(10vw) translateY(75vh) rotate(8deg);
          }
          90% {
            transform: translateX(5vw) translateY(40vh) rotate(-5deg);
          }
          100% {
            transform: translateX(5vw) translateY(15vh) rotate(0deg);
          }
        }

        .animate-float-up {
          animation: float-up linear infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow ease-in-out infinite;
          animation-duration: 4s;
        }

        .animate-bounce-slow {
          animation: bounce-slow ease-in-out infinite;
          animation-duration: 2s;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator ease-in-out infinite;
          animation-duration: 2s;
        }

        .animate-wander-space-desktop {
          animation: wander-space-desktop ease-in-out infinite;
          animation-duration: 25s;
        }

        .animate-wander-space-mobile {
          animation: wander-space-mobile ease-in-out infinite;
          animation-duration: 20s;
        }
      `}</style>
    </section>
  );
}
