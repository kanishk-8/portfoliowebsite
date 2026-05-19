"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#111111] text-[#f7f7f5] relative border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-black tracking-tighter uppercase leading-none mb-6 sm:mb-8 text-[#f7f7f5]">
              Let's <br/> Collaborate
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-md">
              Available for new opportunities. Feel free to reach out for a project inquiry or just to say hello.
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Email</p>
                <a href="mailto:kanishkkumar222004@gmail.com" className="text-xl sm:text-2xl font-medium hover:text-gray-300 transition-colors break-all">
                  kanishkkumar222004@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">Socials</p>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <a href="https://www.linkedin.com/in/kanishk-kumar-926426258" target="_blank" rel="noreferrer" className="text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors">LinkedIn</a>
                  <a href="https://github.com/kanishk-8" target="_blank" rel="noreferrer" className="text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors">GitHub</a>
                  <a href="https://x.com/Kanishk0_0" target="_blank" rel="noreferrer" className="text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {submitStatus === "success" && <div className="text-green-500 font-medium">Message sent successfully!</div>}
              {submitStatus === "error" && <div className="text-red-500 font-medium">Something went wrong.</div>}
              
              <div className="mb-8 sm:mb-12">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Name" className="w-full bg-transparent border-b border-[#333] focus:border-[#f7f7f5] py-4 outline-none text-xl text-[#f7f7f5] placeholder-gray-600 transition-colors" />
              </div>
              <div className="mb-8 sm:mb-12">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" className="w-full bg-transparent border-b border-[#333] focus:border-[#f7f7f5] py-4 outline-none text-xl text-[#f7f7f5] placeholder-gray-600 transition-colors" />
              </div>
              <div className="mb-8 sm:mb-12">
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Subject" className="w-full bg-transparent border-b border-[#333] focus:border-[#f7f7f5] py-4 outline-none text-xl text-[#f7f7f5] placeholder-gray-600 transition-colors" />
              </div>
              <div className="mb-10 sm:mb-16">
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="4" placeholder="Message" className="w-full bg-transparent border-b border-[#333] focus:border-[#f7f7f5] py-4 outline-none text-xl text-[#f7f7f5] placeholder-gray-600 resize-none transition-colors"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#f7f7f5] text-[#111111] py-4 sm:py-5 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-transparent hover:text-[#f7f7f5] border border-[#f7f7f5] transition-colors">
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
