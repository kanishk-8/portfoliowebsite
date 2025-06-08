"use client";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "kanishkkumar222004@gmail.com",
      link: "mailto:kanishkkumar222004@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9871808842",
      link: "tel:+919871808842",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Delhi, India",
      link: "#",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/kanishk-kumar-926426258",
      link: "https://www.linkedin.com/in/kanishk-kumar-926426258",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just
            having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Feel free to reach
              out through any of the following channels.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className={`flex items-center space-x-4 p-4 bg-black rounded-lg border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all duration-500 group transform ${
                    isVisible
                      ? `animate-fade-in-up animation-delay-${
                          300 + index * 100
                        }`
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-2xl">{method.icon}</div>
                  <div>
                    <h4 className="text-gray-100 font-medium group-hover:text-blue-400 transition-colors duration-200">
                      {method.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`mt-8 transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "GitHub",
                    icon: "🐙",
                    link: "https://github.com/kanishk-8",
                  },
                  {
                    name: "LinkedIn",
                    icon: "💼",
                    link: "https://www.linkedin.com/in/kanishk-kumar-926426258",
                  },
                  {
                    name: "Twitter",
                    icon: "🐦",
                    link: "https://twitter.com/kanishk",
                  },
                  {
                    name: "Instagram",
                    icon: "📷",
                    link: "https://instagram.com/kanishk",
                  },
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600 transform hover:scale-110 active:scale-95 ${
                      isVisible
                        ? `animate-scale-in animation-delay-${
                            800 + index * 100
                          }`
                        : "opacity-0 scale-0"
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-black rounded-xl p-8 border border-gray-800 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-lg mb-6 animate-fade-in">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 transform ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="32"
                        strokeDashoffset="32"
                      />
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
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
      `}</style>
    </section>
  );
}
