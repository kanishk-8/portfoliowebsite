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
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "JavaScript", icon: "📜" },
        { name: "TypeScript", icon: "📘" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML/CSS", icon: "🌐" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Golang", icon: "🐹" },
        { name: "Flask", icon: "🐍" },
        { name: "Appwrite", icon: "🚀" },
        { name: "REST APIs", icon: "🔌" },
        { name: "PHP", icon: "�" },
      ],
    },
    {
      title: "Mobile & Tools",
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "Mysql", icon: "🗄️" },
        { name: "Podman", icon: "�" },
        { name: "Git", icon: "📝" },
        { name: "Docker", icon: "🐳" },
        { name: "Firebase", icon: "🔥" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? `animate-fade-in-up animation-delay-${
                      categoryIndex * 200 + 200
                    }`
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-black rounded-2xl"></div>

              {/* Content */}
              <div className="relative p-8 h-full">
                {/* Category header with gradient */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-300 group-hover:to-purple-500 transition-all duration-300">
                    {category.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto opacity-60"></div>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`group/skill relative overflow-hidden rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 ${
                        isVisible
                          ? `animate-fade-in-scale animation-delay-${
                              categoryIndex * 200 + skillIndex * 100 + 400
                            }`
                          : "opacity-0 scale-95"
                      }`}
                    >
                      {/* Subtle gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-center space-x-3 p-4">
                        <div className="text-2xl transform group-hover/skill:scale-110 transition-transform duration-300 flex-shrink-0">
                          {skill.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300 text-sm sm:text-base">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category decoration */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="text-4xl">
                    {category.title === "Frontend" && "🎨"}
                    {category.title === "Backend" && "⚙️"}
                    {category.title === "Mobile & Tools" && "🔧"}
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.5s ease-out forwards;
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
