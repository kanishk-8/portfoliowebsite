"use client";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
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

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            className={`relative transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center border border-gray-800">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                  K
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
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
              <div
                className={`text-center p-4 bg-black rounded-lg border border-gray-800 transform transition-all duration-800 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <h4 className="text-3xl font-bold text-blue-400">2+</h4>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div
                className={`text-center p-4 bg-black rounded-lg border border-gray-800 transform transition-all duration-800 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95"
                }`}
              >
                <h4 className="text-3xl font-bold text-purple-400">15+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>
            </div>

            {/* Download CV Button */}
            <div
              className={`mt-8 transform transition-all duration-800 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="/resume.pdf"
                download="Kanishk_Kumar_Resume.pdf"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
