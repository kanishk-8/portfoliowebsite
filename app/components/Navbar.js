"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (href) => {
    setIsOpen(false);
    if (pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-xl border-b border-[#333] shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#f7f7f5]">
              <Image
                src="https://user-images.githubusercontent.com/74038190/218265814-3084a4ba-809c-4135-afc0-8685d0f634b3.gif"
                alt="Kanishk Kumar Animated Logo"
                width={40}
                height={40}
                className="object-cover scale-150 grayscale hover:grayscale-0 transition-all"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-white uppercase tracking-widest">
                Kanishk
              </h1>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                    isActive ? "text-[#111]" : "text-gray-400 hover:text-[#f7f7f5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#f7f7f5] rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {!isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#f7f7f5] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full border border-[#f7f7f5] flex items-center justify-center text-[#f7f7f5] focus:outline-none"
            >
              <div className="w-4 h-4 flex flex-col justify-center space-y-1">
                <span className={`w-full h-[2px] bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                <span className={`w-full h-[2px] bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-[2px] bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-6 space-y-2 rounded-2xl mt-2 bg-[#111111] border border-[#333] mb-4 shadow-xl">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-center px-5 py-4 text-[#f7f7f5] hover:bg-[#333] rounded-xl text-xs uppercase tracking-widest font-bold transition-all"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

