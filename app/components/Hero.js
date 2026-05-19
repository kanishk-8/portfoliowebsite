"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: "100%" },
    visible: (custom) => ({
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Custom easing for premium feel
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#f7f7f5] text-[#111111] pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full z-20">
        <div className="flex flex-col items-center text-center">
          
          <div className="overflow-hidden mb-4 mt-8">
            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-gray-500"
            >
              Creative Developer & Engineer
            </motion.p>
          </div>

          {/* Huge Typography Awwwards Style */}
          <h1 className="flex flex-col items-center font-black tracking-tighter uppercase leading-none w-full">
            <div className="overflow-hidden w-full flex justify-center pb-2">
              <motion.span
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="text-[clamp(4rem,15vw,13rem)] block text-[#111111]"
              >
                Kanishk
              </motion.span>
            </div>
            
            <div className="overflow-hidden w-full flex justify-center -mt-2 sm:-mt-6 pb-4">
              <motion.span
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="text-[clamp(4rem,15vw,13rem)] block text-outline italic pr-2 sm:pr-4"
              >
                Portfolio
              </motion.span>
            </div>
          </h1>

          <div className="mt-12 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-gray-300 pt-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Location</h3>
              <p className="text-base sm:text-lg font-medium text-[#111]">New Delhi, India</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Focus</h3>
              <p className="text-base sm:text-lg font-medium text-[#111]">Full Stack & Mobile Experiences</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center md:justify-end"
            >
              <button
                onClick={() => scrollToSection("#projects")}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#111] bg-[#111] px-6 sm:px-8 py-3 sm:py-4 text-white hover:bg-transparent hover:text-[#111] transition-colors duration-300"
              >
                <span className="font-medium relative z-10 text-sm sm:text-base">Explore Work</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
