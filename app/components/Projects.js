"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: "donut",
      title: "Donut",
      description: "Visual node-based workflow platform acting as a compiler and runtime engine.",
      technologies: ["Rust", "Axum", "Next.js"],
      github: "https://github.com/kanishk-8/Donut",
      live: null,
      image: "/donut.png",
    },
    {
      id: "dokify",
      title: "Dokify",
      description: "PDF to multi-voice audiobook pipeline leveraging Gemini and Bark TTS.",
      technologies: ["FastAPI", "React Native", "AI"],
      github: "https://github.com/kanishk-8/Dokify",
      live: "https://github.com/kanishk-8/Dokify/releases/tag/0.1",
      image: "/dokify.png",
    },
    {
      id: "procode",
      title: "ProCode",
      description: "Comprehensive coding assessment platform with virtual classrooms.",
      technologies: ["Next.js", "Golang", "JWT"],
      github: "https://github.com/kanishk-8/procode",
      live: "https://procode-alpha.vercel.app/",
      image: "/procode.png",
    },
    {
      id: "voicebot",
      title: "Voice Bot",
      description: "Real-time voice chatbot with natural turn-taking using Whisper and LangGraph.",
      technologies: ["FastAPI", "LangGraph", "Groq"],
      github: "https://github.com/kanishk-8/Voice_Bot",
      live: "https://voice-bot-lilac.vercel.app/",
      image: "/voicebot.png",
    },
    {
      id: "weeblook",
      title: "Weeblook",
      description: "Modern manga reader platform integrating with MangaDex API.",
      technologies: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/kanishk-8/weeblook",
      live: "https://weeblook.vercel.app/popularmanga",
      image: "/weeblook.png",
    },
    {
      id: "omunotes",
      title: "Omunotes",
      description: "A cross-platform mobile notes app leveraging Google's Gemini AI for smart note generation. Features multi-modal input, a Markdown renderer, and offline SQLite storage.",
      technologies: ["React Native", "Expo", "Gemini AI", "SQLite"],
      github: "https://github.com/kanishk-8/Omunotes",
      live: "https://github.com/kanishk-8/Omunotes/releases/tag/1.1",
      image: "/omunotes.png",
    },
    {
      id: "ecocircle",
      title: "EcoCircle",
      description: "An eco-friendly Android app connecting environmentally conscious people. Features achievement tracking, contribution monitoring, and social networking.",
      technologies: ["React Native", "Android", "Supabase"],
      github: "https://github.com/kanishk-8/EcoCircle",
      live: null,
      image: "/ecocircle.png",
    },
    {
      id: "cloudteacher",
      title: "Cloud Teacher",
      description: "An innovative teaching platform that handles PDF uploads and provides AI-generated notes, quizzes, and doubt-solving functionality. Built with Streamlit.",
      technologies: ["Streamlit", "Python", "AI/ML"],
      github: "https://github.com/kanishk-8/cloudteacher",
      live: "https://cloudteacher-app.streamlit.app/",
      image: "/cloudteacher.png",
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#f7f7f5] text-[#111111] relative border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-[#111] pb-6 sm:pb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter uppercase"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-sm mt-4 md:mt-0 text-base sm:text-lg"
          >
            A curated selection of projects highlighting full-stack development, mobile apps, and AI integrations.
          </motion.p>
        </div>

        <div className="flex flex-col relative w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group border-b border-[#111] py-10 flex flex-col lg:flex-row lg:items-center justify-between hover:bg-gray-200/50 transition-colors duration-300 relative cursor-default lg:cursor-pointer px-4 overflow-hidden"
            >
              {/* Content Side */}
              <div className="flex-1 relative z-10 w-full lg:w-2/3">
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4 text-[#111] group-hover:text-outline transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 max-w-md text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 lg:mb-0">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-bold border border-[#111] rounded-full px-3 py-1.5 text-[#111] uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 lg:opacity-0 lg:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-[#111] flex items-center justify-center hover:bg-[#111] hover:text-[#f7f7f5] transition-colors font-bold uppercase tracking-widest text-sm">
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-[#111] text-[#f7f7f5] flex items-center justify-center hover:bg-transparent hover:text-[#111] border border-[#111] transition-colors font-bold uppercase tracking-widest text-sm">
                      Live <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Desktop Hover Floating Image */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-10 top-1/2 -translate-y-1/2 w-[400px] aspect-video rounded-xl overflow-hidden shadow-2xl pointer-events-none hidden lg:block z-20 bg-gray-100 border border-gray-300"
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain mix-blend-multiply bg-white" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Image (Always visible on mobile) */}
              <div className="block lg:hidden w-full aspect-video mt-8 rounded-xl overflow-hidden relative bg-gray-100 border border-gray-300">
                <img src={project.image} alt={project.title} className="w-full h-full object-contain mix-blend-multiply p-2" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
