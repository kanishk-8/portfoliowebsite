"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: "easeOut",
              }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-center mb-6 text-gray-100">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
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
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        }}
                        className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-100">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux",
              "Zustand",
              "Prisma",
              "Firebase",
              "Vercel",
              "Netlify",
              "Jest",
              "Cypress",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-600 hover:border-gray-500 hover:bg-gray-600 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
