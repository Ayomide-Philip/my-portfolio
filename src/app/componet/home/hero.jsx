"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import bg from "@/public/bg.jpg";

export default function HeroSection() {
  const typedEl = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Frontend Developer.", "React Enthusiast.", "Next.js Lover."],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 300,
      loop: true,
    });

    return () => typed.destroy();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center w-full text-center px-6 py-20 sm:py-32 min-h-screen"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight max-w-5xl"
      >
        Frontend Magic with Code and Creativity
        <span className="block mt-2 text-orange-400 text-xl sm:text-2xl font-semibold">
          <span ref={typedEl} className="typed-text" />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-6 max-w-2xl text-white text-lg sm:text-xl leading-relaxed"
      >
        I build clean, responsive interfaces that merge form and function.
        Let&apos;s turn bold ideas into elegant digital experiences that feel
        right on any device.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-10"
      >
        <Link
          href="/about"
          className="inline-block rounded-xl bg-orange-600 dark:bg-orange-500 text-white font-semibold px-6 py-3 hover:bg-orange-500 dark:hover:bg-orange-400 transition duration-300 shadow-xl"
        >
          About Me
        </Link>
      </motion.div>
    </motion.div>
  );
}
