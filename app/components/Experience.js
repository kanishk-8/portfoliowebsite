"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 2,
      role: "Full Stack Development Intern",
      company: "Aveoearth Impact Private Limited",
      period: "Jan 2026 — May 2026",
      location: "IPU-IIF (Onsite)",
      points: [
        "Solved infrastructure fragmentation for early-stage founders by building full-stack features for Aveostack (startup SaaS) and Aveoearth (sustainable multi-vendor marketplace) using Next.js, React, FastAPI, and Tailwind CSS.",
        "Enabled secure transactions across 3 user roles (customer, vendor, admin) by integrating PhonePe S2S webhook payments and Firebase Auth JWT with role-based access control.",
        "Empowered vendors to independently manage their storefronts by building dashboards, product management UI, and cart & checkout flows backed by a hybrid PostgreSQL/NeonDB and Firestore stack."
      ],
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "Firebase"],
    },
    {
      id: 1,
      role: "Software Development Intern",
      company: "MakeHeadshot",
      period: "Jun 2025 — Sep 2025",
      location: "Remote",
      points: [
        "Eliminated the need for expensive photography sessions by shipping Next.js + Tailwind CSS features for an AI-driven SaaS that auto-generates professional headshots.",
        "Connected frontend workflows to AI processing pipelines by integrating REST APIs with backend developers, enabling end-to-end headshot generation.",
        "Improved user retention by optimizing frontend performance via code splitting and asset optimization, reducing page load times by 30%."
      ],
      technologies: ["Next.js", "Tailwind CSS", "REST APIs"],
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#f7f7f5] text-[#111111] relative border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase text-center"
          >
            Experience
          </motion.h2>
        </div>

        <div className="border-t border-[#111]">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group border-b border-[#111] py-12 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-gray-200/50 transition-colors duration-500 cursor-default px-4"
            >
              {/* Period / Year */}
              <div className="md:col-span-3 flex flex-col items-start gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-gray-400 group-hover:text-[#111] transition-colors duration-300">
                  {exp.period}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
                  {exp.location}
                </span>
              </div>

              {/* Role & Company */}
              <div className="md:col-span-9 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-baseline flex-wrap gap-2 sm:gap-4 mb-6">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-[#111]">
                    {exp.role}
                  </h3>
                  <span className="text-lg sm:text-xl font-medium italic text-gray-500 whitespace-nowrap">
                    @ {exp.company}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-600 text-base sm:text-lg leading-relaxed relative pl-6">
                      <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-[#111] rounded-full opacity-50"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#111] border border-[#111] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#111] hover:text-[#f7f7f5] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
