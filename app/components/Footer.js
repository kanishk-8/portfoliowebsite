"use client";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🐙", href: "https://github.com/kanishk-8" },
    {
      name: "LinkedIn",
      icon: "💼",
      href: "https://www.linkedin.com/in/kanishk-kumar-926426258",
    },
    { name: "Twitter", icon: "🐦", href: "https://twitter.com/kanishk" },
    {
      name: "Instagram",
      icon: "📷",
      href: "https://instagram.com/kanishk._.2",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={ref} className="bg-black border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Kanishk
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                Passionate student and full-stack developer creating innovative
                solutions with modern technologies. Always learning, always
                building.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-gray-600 transform hover:scale-110 active:scale-95 ${
                      isVisible
                        ? `animate-scale-in animation-delay-${
                            200 + index * 100
                          }`
                        : "opacity-0 scale-0"
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li
                    key={link.name}
                    className={`transform transition-all duration-500 ${
                      isVisible
                        ? `animate-fade-in-left animation-delay-${
                            300 + index * 50
                          }`
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div
                  className={`flex items-center space-x-2 text-sm transform transition-all duration-500 ${
                    isVisible
                      ? "animate-fade-in-left animation-delay-400"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <span>📧</span>
                  <a
                    href="mailto:kanishkkumar222004@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    kanishkkumar222004@gmail.com
                  </a>
                </div>
                <div
                  className={`flex items-center space-x-2 text-sm transform transition-all duration-500 ${
                    isVisible
                      ? "animate-fade-in-left animation-delay-450"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <span>📱</span>
                  <a
                    href="tel:+919871808842"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    +91 9871808842
                  </a>
                </div>
                <div
                  className={`flex items-center space-x-2 text-sm transform transition-all duration-500 ${
                    isVisible
                      ? "animate-fade-in-left animation-delay-500"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <span>📍</span>
                  <span className="text-gray-400">Delhi, India</span>
                </div>
                <div
                  className={`flex items-center space-x-2 text-sm transform transition-all duration-500 ${
                    isVisible
                      ? "animate-fade-in-left animation-delay-550"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <span>💼</span>
                  <span className="text-gray-400">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center transform transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Kanishk. All rights reserved. Built with ❤️ using
            Next.js & Tailwind CSS
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-all duration-200 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700 hover:border-gray-600 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
          >
            <span>Back to Top</span>
            <svg
              className="w-4 h-4 transform hover:-translate-y-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform transition-all duration-1000 delay-700 ${
          isVisible ? "scale-x-100" : "scale-x-0"
        }`}
        style={{ transformOrigin: "left" }}
      />

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.5s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-350 {
          animation-delay: 350ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-450 {
          animation-delay: 450ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-550 {
          animation-delay: 550ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </footer>
  );
}
