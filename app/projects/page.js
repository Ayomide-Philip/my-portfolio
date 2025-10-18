"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import project from "@/lib/project";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Page() {
  return (
    <motion.section
      className="px-4 py-12 sm:px-6 lg:px-8 pb-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="mx-auto max-w-7xl" variants={cardVariants}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-white sm:mt-4">
            Check out some of my recent work and case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map(({ imageUrl, name, description, tag, url }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {name}
                  </h3>
                  <p className="mt-2 text-black text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tag.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={url}
                    target="_blank"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View case study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
