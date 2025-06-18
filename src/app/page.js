"use client";
import { motion, useScroll } from "framer-motion";
import AboutSection from "./componet/home/aboutMe";
import HeroSection from "./componet/home/hero";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "orange",
        }}
      />

      <HeroSection />
      <AboutSection />
    </>
  );
}
