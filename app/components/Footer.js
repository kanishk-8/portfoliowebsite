"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🐙", href: "https://github.com/kanishk-8" },
    { name: "LinkedIn", icon: "💼", href: "https://linkedin.com/in/kanishk" },
    { name: "Twitter", icon: "🐦", href: "https://twitter.com/kanishk" },
    { name: "Instagram", icon: "📷", href: "https://instagram.com/kanishk" },
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
    <footer className="bg-gray-900 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
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
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-gray-600"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h4 className="text-gray-100 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + index * 0.05,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h4 className="text-gray-100 font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <motion.div
                  className="flex items-center space-x-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span>📧</span>
                  <a
                    href="mailto:kanishk@example.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    kanishk@example.com
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  <span>📍</span>
                  <span className="text-gray-400">Your City, Country</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span>💼</span>
                  <span className="text-gray-400">
                    Available for opportunities
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Kanishk. All rights reserved. Built with ❤️ using
            Next.js & Tailwind CSS
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-all duration-200 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700 hover:border-gray-600"
          >
            <span>Back to Top</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />
    </footer>
  );
}
