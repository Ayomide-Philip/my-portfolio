"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { FaReact, FaNode } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

// Skill Icons
const skills = [
  { iconCode: FaHtml5, color: "#E34F26", label: "HTML5" },
  { iconCode: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { iconCode: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { iconCode: FaBootstrap, color: "#7952B3", label: "Bootstrap" },
  { iconCode: SiTailwindcss, color: "#38BDF8", label: "TailwindCSS" },
  { iconCode: FaGitAlt, color: "#F1502F", label: "Git" },
  { iconCode: FaReact, color: "#61DAFB", label: "React JS" },
  { iconCode: FaNode, color: "#68A063", label: "Node JS" },
  { iconCode: RiNextjsFill, color: "#FFFFFF", label: "Next.js" },
];

// Animations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeInStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.3 },
  },
};

export default function AboutPage() {
  return (
    <motion.section
      className="min-h-screen px-6 py-20 bg-black text-white font-mono"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6 text-fuchsia-500 drop-shadow-[0_0_8px_#f0f]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎮 Welcome to My DevZone
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I&apos;m{" "}
          <span className="text-orange-400 font-bold">Ayomide Philip</span>, a
          full-stack adventurer on a quest to craft powerful, pixel-perfect web
          apps. I wield weapons like{" "}
          <span className="text-cyan-400">React</span>,{" "}
          <span className="text-indigo-400">TailwindCSS</span>, and{" "}
          <span className="text-green-400">Node.js</span> to defeat bugs and
          level up user experiences.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow shadow-pink-400">
            🚀 Frontend Avenger
          </span>
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow shadow-blue-400">
            ⚔️ UX Slicer
          </span>
          <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow shadow-green-400">
            🧠 Logic Tactician
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl font-bold mt-16 mb-8 text-lime-400 drop-shadow-[0_0_6px_#0f0]"
          variants={itemVariants}
        >
          🛠️ My Skill Arsenal
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center"
          variants={fadeInStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map(({ iconCode: Icon, label, color }) => (
            <motion.div
              key={label}
              className="flex flex-col items-center bg-gray-800 border border-gray-700 hover:bg-gray-700 transition rounded-xl py-5 shadow-lg hover:scale-105"
              variants={itemVariants}
            >
              <Icon size={36} color={color} className="drop-shadow-glow" />
              <p className="mt-3 text-sm font-medium text-white">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
