"use client";
import { useRef, useState, useEffect } from "react";

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "JavaScript", level: 88, icon: "📜" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 82, icon: "🟢" },
        { name: "Golang", level: 75, icon: "🐹" },
        { name: "Flask", level: 78, icon: "🐍" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "REST APIs", level: 85, icon: "🔌" },
        { name: "GraphQL", level: 70, icon: "📊" },
      ],
    },
    {
      title: "Mobile & Others",
      skills: [
        { name: "React Native", level: 83, icon: "📱" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "Git", level: 88, icon: "📝" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-black rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-500 shadow-lg hover:shadow-2xl transform ${
                isVisible
                  ? `animate-fade-in-up animation-delay-${
                      categoryIndex * 200 + 200
                    }`
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-bold text-center mb-6 text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`transform transition-all duration-600 ${
                      isVisible
                        ? `animate-fade-in-left animation-delay-${
                            categoryIndex * 200 + skillIndex * 100 + 400
                          }`
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ${
                          isVisible ? "animate-width-expand" : "w-0"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          animationDelay: `${
                            categoryIndex * 200 + skillIndex * 100 + 600
                          }ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-bold mb-6 text-white">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "convex",
              "Firebase",
              "Vercel",
              "Microsoft Azure",
              "Render",
              "Clerk",
            ].map((tech, index) => (
              <span
                key={tech}
                className={`bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-gray-500 hover:bg-gray-700 transition-all duration-300 transform ${
                  isVisible
                    ? `animate-scale-in animation-delay-${1200 + index * 100}`
                    : "opacity-0 scale-0"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        .animation-delay-900 {
          animation-delay: 900ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-1100 {
          animation-delay: 1100ms;
        }
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
        .animation-delay-1300 {
          animation-delay: 1300ms;
        }
        .animation-delay-1400 {
          animation-delay: 1400ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        .animation-delay-1600 {
          animation-delay: 1600ms;
        }
        .animation-delay-1700 {
          animation-delay: 1700ms;
        }
        .animation-delay-1800 {
          animation-delay: 1800ms;
        }
        .animation-delay-1900 {
          animation-delay: 1900ms;
        }
      `}</style>
    </section>
  );
}
