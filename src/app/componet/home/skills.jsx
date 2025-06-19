import SkillImage from "./skillImage";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full px-4 sm:px-8 xl:px-20 text-gray-900 dark:text-white bg-white dark:bg-gray-950 flex items-center justify-center"
    >
      <motion.div
        variants={containerVariants}
        className="container flex flex-col md:flex-row items-center md:items-start gap-16 w-full"
      >
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 relative p-6 sm:px-10 md:p-0"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight"
          >
            🚀 Explore My Expertise & Tech Stack
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300"
          >
            These are the tools and technologies I use daily to develop modern
            web applications. With a solid frontend foundation, I strive for
            clean, maintainable code and intuitive experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <SkillImage />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
