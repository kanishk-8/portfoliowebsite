"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-full p-1">
                <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src="/profile.png"
                    alt="Kanishk Kumar"
                    className="w-[95%] h-[95%] rounded-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Passionate Student & Developer
            </h3>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a dedicated student with a passion for web and mobile application development. My journey in programming started with curiosity and has evolved into a deep love for creating innovative solutions.
              </p>
              <p>
                I specialize in modern technologies like React, Next.js, and React Native for frontend development, while also working with backend technologies like Golang, Rust, and FastAPI to build full-stack applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or learning about the latest trends in software development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl hover:border-blue-500/30 transition-colors"
              >
                <h4 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">3+</h4>
                <p className="text-gray-400 text-sm mt-2 font-medium">Years Experience</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl hover:border-purple-500/30 transition-colors"
              >
                <h4 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">15+</h4>
                <p className="text-gray-400 text-sm mt-2 font-medium">Projects Completed</p>
              </motion.div>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Kanishk_Kumar_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-white text-black font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
