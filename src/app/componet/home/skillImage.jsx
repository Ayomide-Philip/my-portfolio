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

// Array of icons with labels and colors
const iconDetails = [
  { iconCode: FaHtml5, color: "#E34F26", label: "HTML5" },
  { iconCode: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { iconCode: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { iconCode: FaBootstrap, color: "#563D7C", label: "Bootstrap" },
  { iconCode: SiTailwindcss, color: "#2196f3", label: "TailwindCSS" },
  { iconCode: FaGitAlt, color: "#F1502F", label: "Git" },
  { iconCode: FaReact, color: "#61DAFB", label: "React JS" },
  { iconCode: FaNode, color: "#8CC84B", label: "Node JS" },
  { iconCode: RiNextjsFill, color: "#ffffff", label: "Next.js" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillImage() {
  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {iconDetails.map(({ iconCode: Icon, color, label }) => (
        <motion.div
          key={label}
          variants={itemVariants}
          className="flex flex-col items-center justify-center text-center"
        >
          <Icon size={40} color={color} aria-label={label} />
          <p className="mt-2 text-sm  text-zinc-200">{label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
