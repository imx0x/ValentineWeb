"use client"

import { motion } from "framer-motion"

const AnimatedFlower = () => {
  return (
    <motion.div
      className="absolute top-10 right-10"
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 100 100">
        <motion.path
          d="M50 10 C60 30 80 40 90 50 C80 60 60 70 50 90 C40 70 20 60 10 50 C20 40 40 30 50 10"
          fill="#FF69B4"
          stroke="#FF1493"
          strokeWidth="2"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <circle cx="50" cy="50" r="10" fill="#FFD700" />
      </svg>
    </motion.div>
  )
}

export default AnimatedFlower

