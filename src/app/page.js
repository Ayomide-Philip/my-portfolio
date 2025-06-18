"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import AboutSection from "./componet/home/aboutMe";
import HeroSection from "./componet/home/hero";
import ServiceSection from "./componet/home/service";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="pb-10">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
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
      <ServiceSection />
    </div>
  );
}
