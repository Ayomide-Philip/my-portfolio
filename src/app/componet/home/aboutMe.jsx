"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12 flex justify-center md:justify-start"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
            className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-2xl shadow-2xl border-4 border-orange-500 dark:border-orange-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full md:w-7/12 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-800 dark:text-white">
            A Passionate Developer <br />
            Crafting Impactful Interfaces
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            I'm Areo Ayomide Philip — a frontend developer focused on building
            clean, user-focused websites using React, Next.js, and modern web
            tools. I turn ideas into elegant digital products that perform
            smoothly and look great on every screen.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-xl transition duration-300 shadow-md"
            >
              See Projects
            </a>
            <a
              href="/about"
              className="border border-orange-600 text-orange-600 dark:text-orange-400 font-semibold py-2 px-6 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/20 transition duration-300 shadow-sm"
            >
              More About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
