"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Golang", "Rust", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS", "Vite", "Streamlit", "Expo"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "Axum", "PostgreSQL", "MySQL", "Firestore", "Supabase", "Redis"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Vercel", "Linux", "Postman", "Clerk"],
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#111111] text-[#f7f7f5] relative border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase"
          >
            Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg max-w-xl"
          >
            A robust technical arsenal enabling high-performance digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-[#333] pt-6"
            >
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest mb-4 sm:mb-6">{category.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-base sm:text-lg text-gray-400 font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
