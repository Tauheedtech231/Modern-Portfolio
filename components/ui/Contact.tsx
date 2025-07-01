"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    if (typeof window !== "undefined") {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = anchor.getAttribute("href")?.slice(1);
          const section = document.getElementById(targetId || "");
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    // Optionally: reset form fields or add logic here
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#0a0a0f] to-[#1b1b28] py-20 px-6 text-white min-h-screen flex items-center justify-center"
    >
      {hasMounted && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-3xl bg-white/10 p-10 rounded-2xl shadow-2xl backdrop-blur-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-300">
            Let’s Connect
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me how I can help you..."
                className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md font-medium shadow-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
