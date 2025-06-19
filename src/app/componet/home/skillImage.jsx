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

const iconDetails = [
  { iconCode: FaHtml5, color: "#E34F26", label: "HTML5" },
  { iconCode: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { iconCode: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { iconCode: FaBootstrap, color: "#563D7C", label: "Bootstrap " },
  { iconCode: SiTailwindcss, color: "#2196f3", label: "Tailwindcss" },
  { iconCode: FaGitAlt, color: "#F1502F", label: "Git" },
  { iconCode: FaReact, color: "#61DAFB", label: "React JS" },
  { iconCode: FaNode, color: "#8CC84B", label: "Node JS" },
  { iconCode: RiNextjsFill, color: "#FFFFFF", label: "Nextjs" },
];
export default function SkillImage() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {iconDetails.map(({ iconCode: Icon, color, label }) => {
        return (
          <div className="text-center" key={label}>
            <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
              <span className="text-4xl">
                <Icon size={30} color={color} />
              </span>
              <p className="text-xs mt-2">{label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
