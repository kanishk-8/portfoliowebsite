"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("featured");

  const projects = [
    {
      id: "donut",
      title: "Donut",
      description: "A visual node-based workflow platform acting as a compiler and runtime engine, letting users drag-and-drop backend apps without writing glue code. Features a high-performance Rust/Axum runtime and Next.js canvas.",
      technologies: ["Rust", "Axum", "Next.js 16", "React 19", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/kanishk-8/Donut",
      live: null,
      image: "/donut.png",
      featured: true,
    },
    {
      id: "dokify",
      title: "Dokify",
      description: "An end-to-end pipeline that converts PDF books into natural multi-voice audiobooks using AI. Features cloud (Gemini) and local (Bark) TTS pipelines seamlessly integrated with a React Native app.",
      technologies: ["FastAPI", "React Native", "Gemini", "Bark TTS", "spaCy"],
      category: "mobile",
      github: "https://github.com/kanishk-8/Dokify",
      live: "https://github.com/kanishk-8/Dokify/releases/tag/0.1",
      image: "/dokify.png",
      featured: true,
    },
    {
      id: "procode",
      title: "ProCode",
      description: "A comprehensive coding assessment platform for teachers and students. Features virtual classrooms, in-browser compilation, proctored coding tests, and real-time status tracking.",
      technologies: ["Next.js", "Node.js", "Mysql", "Golang", "JWT"],
      category: "fullstack",
      github: "https://github.com/kanishk-8/procode",
      live: "https://procode-alpha.vercel.app/",
      image: "/procode.png",
      featured: true,
    },
    {
      id: "voicebot",
      title: "Voice Bot",
      description: "A real-time voice chatbot with natural turn-taking, built with a FastAPI WebSocket backend, Groq Whisper ASR, LangGraph agents, and an animated React frontend.",
      technologies: ["FastAPI", "React", "Groq Whisper", "LangGraph", "Supabase"],
      category: "fullstack",
      github: "https://github.com/kanishk-8/Voice_Bot",
      live: "https://voice-bot-lilac.vercel.app/",
      image: "/voicebot.png",
      featured: false,
    },
    {
      id: "omunotes",
      title: "Omunotes",
      description: "A cross-platform mobile notes app leveraging Google's Gemini AI for smart note generation. Features multi-modal input, a Markdown renderer, and offline SQLite storage.",
      technologies: ["React Native", "Expo", "Gemini AI", "SQLite"],
      category: "mobile",
      github: "https://github.com/kanishk-8/Omunotes",
      live: "https://github.com/kanishk-8/Omunotes/releases/tag/1.1",
      image: "/omunotes.png",
      featured: false,
    },
    {
      id: "weeblook",
      title: "Weeblook - Manga Reader Platform",
      description: "A modern manga reader platform with dynamic theming built on Next.js. Integrates with MangaDex API to provide seamless reading experience with responsive design.",
      technologies: ["Next.js", "MangaDex API", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/kanishk-8/weeblook",
      live: "https://weeblook.vercel.app/popularmanga",
      image: "/weeblook.png",
      featured: false,
    },
    {
      id: "ecocircle",
      title: "EcoCircle",
      description: "An eco-friendly Android app connecting environmentally conscious people. Features achievement tracking, contribution monitoring, and social networking.",
      technologies: ["React Native", "Android", "Supabase"],
      category: "mobile",
      github: "https://github.com/kanishk-8/EcoCircle",
      live: null,
      image: "/ecocircle.png",
      featured: false,
    },
    {
      id: "cloudteacher",
      title: "Cloud Teacher",
      description: "An innovative teaching platform that handles PDF uploads and provides AI-generated notes, quizzes, and doubt-solving functionality. Built with Streamlit.",
      technologies: ["Streamlit", "Python", "AI/ML"],
      category: "fullstack",
      github: "https://github.com/kanishk-8/cloudteacher",
      live: "https://cloudteacher-app.streamlit.app/",
      image: "/cloudteacher.png",
      featured: false,
    },
  ];

  const filters = [
    { name: "Featured", value: "featured" },
    { name: "All Projects", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Full Stack", value: "fullstack" },
    { name: "Mobile", value: "mobile" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work, highlighting full-stack development, mobile apps, and AI integrations.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === f.value ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {filter === f.value && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-blue-500/30 transition-all hover:-translate-y-1 shadow-lg"
              >
                {/* Image Container */}
                <div className="relative h-56 bg-black/50 overflow-hidden p-4 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-60"></div>
                  {project.image ? (
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain z-0"
                    />
                  ) : (
                    <div className="text-5xl opacity-30 z-0">🚀</div>
                  )}

                  {/* Badges */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 bg-blue-600/80 hover:bg-blue-500 rounded-full flex items-center justify-center text-white border border-blue-400 transition-all hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
