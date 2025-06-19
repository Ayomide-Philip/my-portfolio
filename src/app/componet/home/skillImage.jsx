import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaLaravel,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNuxtdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

const iconDetails = [
  { iconCode: FaHtml5, color: "#E34F26", label: "HTML5" },
  { iconCode: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { iconCode: RiJavascriptFill, color: "#F7DF1E", label: "JavaScript" },
  { iconCode: SiTailwindcss, color: "#2196f3", label: "Tailwindcss" },
  { iconCode: FaReact, color: "#61DAFB", label: "React JS   " },
];
export default function SkillImage() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {iconDetails.map(({ iconCode: Icon, color, label }) => {
        return (
          <div className="text-center">
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
