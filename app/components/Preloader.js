"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = "auto";
        onComplete();
      }, 1000); // Wait for exit animation
    }, 2500); // 2.5s preloader display time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#111111] text-[#f7f7f5]"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-5xl sm:text-7xl font-bold tracking-tighter"
            >
              KANISHK
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="text-sm tracking-widest uppercase text-gray-400"
            >
              Portfolio &copy; 2026
            </motion.div>
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            className="h-[2px] bg-[#f7f7f5] mt-8"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
