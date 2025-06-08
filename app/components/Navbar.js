"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out border-b ${
        mounted ? "animate-slide-down" : "translate-y-[-100px]"
      } ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-gray-700/50 shadow-2xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div
            className={`flex-shrink-0 flex items-center space-x-3 transition-all duration-500 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/30 hover:ring-blue-500/60 transition-all duration-300 hover:scale-105 active:scale-95">
              <Image
                src="https://user-images.githubusercontent.com/74038190/218265814-3084a4ba-809c-4135-afc0-8685d0f634b3.gif"
                alt="Kanishk Kumar Animated Logo"
                width={48}
                height={48}
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Kanishk Kumar
              </h1>
              <span className="text-xs text-gray-400 hidden sm:block">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-5 py-2.5 text-gray-300 hover:text-white rounded-xl text-sm font-bold transition-all duration-300 group overflow-hidden hover:scale-105 active:scale-95 hover:-translate-y-1 ${
                  mounted ? "animate-fade-in-up" : "opacity-0 translate-y-5"
                }`}
                style={{
                  animationDelay: mounted ? `${index * 50}ms` : "0ms",
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/resume.pdf"
              download="Kanishk_Kumar_Resume.pdf"
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border border-gray-700 hover:border-gray-600 flex items-center space-x-2 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <span>📄</span>
              <span>Resume</span>
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 rounded-xl bg-black/20 backdrop-blur-xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-black/40 flex items-center justify-center text-gray-300 hover:text-white focus:outline-none transition-all duration-300 active:scale-95 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span
                  className={`w-full h-0.5 bg-current transform origin-center transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transform origin-center transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-2 pt-2 pb-6 space-y-2 rounded-xl mt-4 border shadow-2xl transition-all duration-200 ${
              isOpen
                ? "bg-black/80 backdrop-blur-xl border-gray-700/50"
                : "bg-black/60 backdrop-blur-md border-gray-700/30"
            }`}
          >
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative block w-full text-left px-5 py-3 text-gray-300 hover:text-white rounded-xl text-base font-medium transition-all duration-300 group overflow-hidden hover:scale-105 active:scale-95 hover:-translate-y-1 ${
                  isOpen ? "animate-fade-in-left" : ""
                }`}
                style={{
                  animationDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300" />
              </button>
            ))}

            {/* Mobile CTA */}
            <div
              className={`pt-4 border-t border-gray-700/50 space-y-3 ${
                isOpen ? "animate-fade-in-up animation-delay-300" : ""
              }`}
            >
              <a
                href="/resume.pdf"
                download="Kanishk_Kumar_Resume.pdf"
                className="w-full bg-black/40 backdrop-blur-xl hover:bg-black/60 text-gray-300 hover:text-white px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 flex items-center justify-center space-x-2 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <span>📄</span>
                <span>Download Resume</span>
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100px);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.2s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </nav>
  );
}
