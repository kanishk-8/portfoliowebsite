"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                  K
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-100">
              Passionate Student & Developer
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                I'm a dedicated student with a passion for web and mobile
                application development. My journey in programming started with
                curiosity and has evolved into a deep love for creating
                innovative solutions.
              </p>
              <p>
                I specialize in modern technologies like React, Next.js, and
                React Native for frontend development, while also working with
                backend technologies like Golang and Flask to build full-stack
                applications.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or learning about the
                latest trends in software development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center p-4 bg-gray-700 rounded-lg"
              >
                <h4 className="text-3xl font-bold text-blue-400">2+</h4>
                <p className="text-gray-300">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-center p-4 bg-gray-700 rounded-lg"
              >
                <h4 className="text-3xl font-bold text-purple-400">15+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </motion.div>
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
