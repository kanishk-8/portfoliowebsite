"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "MakeHeadshot",
      role: "Software Development Intern",
      date: "Jun 2025 - Sep 2025",
      location: "Remote",
      color: "from-blue-500 to-cyan-400",
      image: "/makeheadshot.png",
      points: [
        "Eliminated the need for expensive photography sessions by shipping Next.js + Tailwind CSS features for an AI-driven SaaS that auto-generates professional headshots.",
        "Connected frontend workflows to AI processing pipelines by integrating REST APIs with backend developers, enabling end-to-end headshot generation.",
        "Improved user retention by optimizing frontend performance via code splitting and asset optimization, reducing page load times by 30%.",
      ],
    },
    {
      company: "Aveoearth Impact",
      role: "Full Stack Development Intern",
      date: "Jan 2026 - May 2026",
      location: "IPU-IIF (Onsite)",
      color: "from-purple-500 to-pink-500",
      image: "/aveoearth.png",
      points: [
        "Solved infrastructure fragmentation for early-stage founders by building full-stack features for Aveostack and Aveoearth using Next.js, React, FastAPI, and Tailwind CSS.",
        "Enabled secure transactions across 3 user roles (customer, vendor, admin) by integrating PhonePe S2S webhook payments and Firebase Auth JWT.",
        "Empowered vendors to independently manage storefronts by building dashboards and cart flows backed by PostgreSQL/NeonDB and Firestore.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-black mb-4 text-white">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="group relative"
            >
              {/* Premium Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${exp.color} rounded-[2rem] blur opacity-20 group-hover:opacity-60 transition duration-500 group-hover:duration-200`}></div>
              
              <div className="relative h-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 sm:p-10 hover:border-white/20 transition-all duration-300">
                
                {/* Header Section */}
                <div className="flex flex-col space-y-4 mb-8">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <div className="hidden sm:block text-right">
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg p-[2px]`}>
                      <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center overflow-hidden">
                         <img src={exp.image} alt={exp.company} className="w-full h-full object-cover bg-white/5" />
                      </div>
                    </div>
                    <div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </div>
                      <div className="text-gray-500 text-sm">{exp.location}</div>
                    </div>
                  </div>
                  
                  {/* Mobile Date */}
                  <div className="sm:hidden mt-2">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium">
                      {exp.date}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start group/item">
                      <span className={`mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0 shadow-lg group-hover/item:scale-150 transition-transform duration-300`}></span>
                      <span className="group-hover/item:text-white transition-colors duration-300">{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
