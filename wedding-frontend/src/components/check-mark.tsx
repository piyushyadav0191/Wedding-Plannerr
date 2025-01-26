import React from "react";
import { motion } from "framer-motion";

const AnimatedCheckmark = () => {
  return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30"
      >
        {/* Checkmark */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="green"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <path d="M9 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4L9 16.2z" />
        </motion.svg>

        {/* Red dots animation */}
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          ></motion.div>
        ))}
      </motion.div>
  );
};

export default AnimatedCheckmark;
