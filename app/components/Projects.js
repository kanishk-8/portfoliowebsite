"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/kanishk-8",
      live: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A React Native mobile app for task management with real-time synchronization. Built with Expo, Firebase, and features drag-and-drop functionality.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Expo", "Redux"],
      category: "mobile",
      github: "https://github.com/kanishk-8",
      live: "https://play.google.com/store",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard built with React.js and OpenWeatherMap API. Features include current weather, 5-day forecast, and location-based weather updates.",
      image: "/api/placeholder/400/300",
      technologies: ["React.js", "OpenWeather API", "Chart.js", "CSS3"],
      category: "frontend",
      github: "https://github.com/kanishk-8",
      live: "https://weather-dashboard-demo.vercel.app",
      featured: false,
    },
    {
      id: 4,
      title: "Blog API",
      description:
        "A RESTful API built with Golang and PostgreSQL for a blogging platform. Features include JWT authentication, CRUD operations, and role-based access control.",
      image: "/api/placeholder/400/300",
      technologies: ["Golang", "PostgreSQL", "JWT", "Docker"],
      category: "backend",
      github: "https://github.com/kanishk-8",
      live: null,
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Framer Motion. Features smooth animations, responsive design, and optimized performance.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      category: "frontend",
      github: "https://github.com/kanishk-8",
      live: "https://kanishk-portfolio.vercel.app",
      featured: true,
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat application built with Flask and Socket.IO. Features include private messaging, group chats, and file sharing capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["Flask", "Socket.IO", "SQLite", "JavaScript"],
      category: "fullstack",
      github: "https://github.com/kanishk-8",
      live: "https://chat-app-demo.herokuapp.com",
      featured: false,
    },
  ];

  const filters = [
    { name: "All Projects", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" },
    { name: "Full Stack", value: "fullstack" },
    { name: "Mobile", value: "mobile" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-800">
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
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            across different technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterItem.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === filterItem.value
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {filterItem.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${filter}-${project.id}`}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
                layout: { duration: 0.3 },
              }}
              whileHover={{ y: -5 }}
              className={`bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-200 ${
                project.featured ? "ring-2 ring-blue-500/20" : ""
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 inline-block">
                  FEATURED
                </div>
              )}

              <div className="relative overflow-hidden group">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/kanishk-8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200"
          >
            <span>View More on GitHub</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
