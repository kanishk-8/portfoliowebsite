"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      color: "from-blue-400 to-blue-600",
      skills: ["JavaScript", "TypeScript", "Python", "Golang", "Rust", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-purple-400 to-purple-600",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS", "Vite", "Streamlit", "Expo"],
    },
    {
      title: "Backend & DBs",
      icon: "⚙️",
      color: "from-green-400 to-emerald-600",
      skills: ["Node.js", "Express.js", "FastAPI", "Axum", "PostgreSQL", "MySQL", "Firebase Firestore", "Supabase", "NeonDB", "Redis"],
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      color: "from-orange-400 to-red-600",
      skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman", "Clerk", "Firebase Auth", "Linux"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            The technical arsenal I use to build robust, scalable, and modern applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden hover:bg-white/[0.07] transition-colors"
            >
              {/* Subtle background glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
