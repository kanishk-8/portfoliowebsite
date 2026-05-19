"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#111111] text-[#f7f7f5] relative border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Profile Image - Minimalist */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="w-full max-w-md mx-auto aspect-square overflow-hidden bg-[#222]">
               <img src="/profile.png" alt="Kanishk Kumar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">About Me</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
              Turning complex problems into elegant, high-performance solutions.
            </h3>
            
            <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a dedicated developer with a passion for building robust digital ecosystems. My journey is fueled by an endless curiosity to bridge the gap between design and intricate backend logic.
              </p>
              <p>
                I specialize in crafting seamless user interfaces with React and Next.js, while engineering highly scalable backend architectures using Go and Rust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-12 pt-12 border-t border-[#333]">
              <div>
                <h4 className="text-4xl sm:text-5xl font-black text-[#f7f7f5] mb-2">3+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl sm:text-5xl font-black text-[#f7f7f5] mb-2">15+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Projects Shipped</p>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/resume.pdf"
                download="Kanishk_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 border-b-2 border-[#f7f7f5] pb-1 font-bold text-base sm:text-lg hover:text-gray-400 hover:border-gray-400 transition-colors"
              >
                Download Resume <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
