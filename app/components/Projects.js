"use client";
import { useRef, useState, useEffect } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("featured");
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

  const projects = [
    {
      id: 1,
      title: "Weeblook - Manga Reader Platform",
      description:
        "A modern manga reader platform with dynamic theming built on Next.js. Integrates with MangaDex API to provide seamless manga reading experience with responsive design and real-time data fetching.",
      technologies: ["Next.js", "MangaDex API", "Tailwind CSS", "React"],
      category: "frontend",
      github: "https://github.com/kanishk-8/weeblook",
      live: "https://weeblook.vercel.app/popularmanga",
      image: "/weeblook.png", // Upload the Weeblook screenshot here
      featured: true,
    },
    {
      id: 2,
      title: "ProCode - Online Coding Assessment Platform",
      description:
        "A comprehensive coding assessment platform designed for teachers and students. Features include blogs, admin management, virtual classrooms, proctored coding tests, and real-time status tracking.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Authentication"],
      category: "fullstack",
      github: "https://github.com/kanishk-8/procode",
      live: "https://procode-alpha.vercel.app/",
      image: "/procode.png", // Upload the ProCode screenshot here
      featured: true,
    },
    {
      id: 3,
      title: "Cloud Teacher - AI Teaching Platform",
      description:
        "An innovative cloud-based teaching platform that handles PDF uploads and provides AI-generated notes, quizzes, and doubt-solving functionality. Built with Streamlit for seamless deployment.",
      technologies: ["Streamlit", "Python", "AI/ML", "PDF Processing"],
      category: "fullstack",
      github: "https://github.com/kanishk-8/cloudteacher",
      live: "https://cloudteacher-app.streamlit.app/",
      image: "/cloudteacher.png", // Upload the Cloud Teacher screenshot here
      featured: false,
    },
    {
      id: 4,
      title: "RailMadad - AI Railway Complaint System",
      description:
        "An AI-powered railway complaint management system with full-stack architecture. Features intelligent complaint categorization, real-time tracking, and automated responses for efficient railway customer service.",
      technologies: ["Next.js", "Flask", "AI/ML", "Python"],
      category: "fullstack",
      github: "https://github.com/kanishk-8/sih_railmadad",
      live: null,
      image: "/railmadad.png",
      featured: true,
    },
    {
      id: 5,
      title: "EcoCircle - Environmental Social Network",
      description:
        "An eco-friendly Android app connecting environmentally conscious people. Features achievement tracking, environmental contribution monitoring, and social networking for sustainability enthusiasts.",
      technologies: ["React Native", "Android", "Firebase", "Social Media"],
      category: "mobile",
      github: "https://github.com/kanishk-8/Eco-circle",
      live: null,
      image: "/ecocircle.png",
      featured: false,
    },
    {
      id: 6,
      title: "Noti - Cloud Notes App",
      description:
        "A feature-rich Android notes app with cloud syncing capabilities. Includes note-taking, todo management, Firebase authentication, and real-time synchronization across devices.",
      technologies: ["React Native", "Expo", "Firebase", "Cloud Sync"],
      category: "mobile",
      github: "https://github.com/kanishk-8/Noti",
      live: null,
      image: "/noti.png",
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

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            across different technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4 transform transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filters.map((filterItem, index) => (
            <button
              key={filterItem.value}
              onClick={() => setFilter(filterItem.value)}
              className={`px-3 sm:px-6 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 min-w-fit ${
                filter === filterItem.value
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-gray-600"
              } ${
                isVisible
                  ? `animate-fade-in-up animation-delay-${index * 100 + 300}`
                  : "opacity-0"
              }`}
            >
              {filterItem.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 shadow-lg hover:shadow-2xl group hover:-translate-y-2 transform ${
                project.featured ? "ring-2 ring-blue-500/30" : ""
              } ${
                isVisible
                  ? `animate-fade-in-up animation-delay-${index * 150 + 600}`
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20 flex items-center space-x-1">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>FEATURED</span>
                  </div>
                </div>
              )}

              {/* Project Image/Icon */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-3xl h-52">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full rounded object-contain bg-gray-900/20 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                      {project.category === "frontend" && "🎨"}
                      {project.category === "backend" && "⚙️"}
                      {project.category === "fullstack" && "🚀"}
                      {project.category === "mobile" && "📱"}
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 active:scale-95 border border-gray-600"
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
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-110 active:scale-95 border border-blue-400"
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
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex md:hidden space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 border border-gray-700 hover:border-gray-600 active:scale-95"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2 active:scale-95"
                    >
                      <svg
                        className="w-4 h-4"
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
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <div className="flex-1 bg-gray-700 text-gray-500 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 cursor-not-allowed">
                      <svg
                        className="w-4 h-4"
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
                      <span>No Demo</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://github.com/kanishk-8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 active:scale-95"
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
          </a>
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .animation-delay-100 {
          animation-delay: 100ms;
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
        .animation-delay-750 {
          animation-delay: 750ms;
        }
        .animation-delay-900 {
          animation-delay: 900ms;
        }
        .animation-delay-1050 {
          animation-delay: 1050ms;
        }
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
        .animation-delay-1350 {
          animation-delay: 1350ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
