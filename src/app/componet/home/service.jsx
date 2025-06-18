"use client";
import { motion } from "framer-motion";
import {
  FaCode,
  FaFigma,
  FaMagic,
  FaTachometerAlt,
  FaLaptop,
  FaPlug,
} from "react-icons/fa";

const services = [
  {
    title: "Responsive Web Development",
    icon: (
      <FaCode className="text-3xl sm:text-4xl text-orange-400 dark:text-orange-600" />
    ),
    description:
      "Building responsive, accessible UIs using modern frontend frameworks like React and Next.js.",
  },
  {
    title: "UI/UX Design Implementation",
    icon: (
      <FaFigma className="text-3xl sm:text-4xl text-orange-400 dark:text-orange-600" />
    ),
    description:
      "Turning Figma and design files into pixel-perfect, interactive frontend components.",
  },
  {
    title: "Animation & Interactivity",
    icon: (
      <FaMagic className="text-3xl sm:text-4xl text-orange-400 dark:text-orange-600" />
    ),
    description:
      "Creating engaging user experiences with hover effects, scroll animations, and motion.",
  },
  {
    title: "Performance Optimization",
    icon: (
      <FaTachometerAlt className="text-3xl sm:text-4xl text-orange-400 dark:text-orange-600" />
    ),
    description:
      "Speeding up load times with lazy loading, image optimization, and efficient code.",
  },
  {
    title: "Cross-Browser Compatibility",
    icon: (
      <FaLaptop className="text-3xl sm:text-4xl text-orange-400 dark:text-orange-600" />
    ),
    description:
      "Ensuring your site works flawlessly across all modern browsers and screen sizes.",
  },
  {
    title: "API Integration",
    icon: (
      <FaPlug className="text-3xl sm:text-4xl text-orange-400 dark:text-orange-600" />
    ),
    description:
      "Integrating RESTful and GraphQL APIs to display real-time, dynamic content.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ServiceSection() {
  return (
    <div className="w-full px-4 md:px-10 py-16 bg-[#111111] dark:bg-white rounded-2xl">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white dark:text-black">
          What I Do
        </h2>
        <div className="h-1 w-24 mt-2 rounded-full bg-  e-400 dark:bg-orange-600" />
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="flex gap-4 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeIn}
          >
            <div className="mt-1">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-white dark:text-black mb-1">
                {service.title}
              </h3>
              <p className="text-gray-400 dark:text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
