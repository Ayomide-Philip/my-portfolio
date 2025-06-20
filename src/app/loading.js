"use client";

import { motion, Variants } from "motion/react";

function LoadingThreeDotsJumping() {
  const dotVariants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="flex items-center justify-center space-x-4"
      >
        <motion.div
          className="dot w-8 h-8 bg-orange-500 rounded-full"
          variants={dotVariants}
        />
        <motion.div
          className="dot w-8 h-8 bg-red-500 rounded-full"
          variants={dotVariants}
        />
        <motion.div
          className="dot w-8 h-8 bg-blue-500 rounded-full"
          variants={dotVariants}
        />
      </motion.div>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #ff0088;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingThreeDotsJumping;
