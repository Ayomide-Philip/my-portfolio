"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import AboutSection from "./componet/home/aboutMe";
import HeroSection from "./componet/home/hero";
import ServiceSection from "./componet/home/service";
import Skills from "./componet/home/skills";
import ContactPage from "./componet/home/contactPage";
import ProjectSection from "./componet/home/project";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
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
      <Skills />
      <ProjectSection />
      <ContactPage />
    </>
  );
}
