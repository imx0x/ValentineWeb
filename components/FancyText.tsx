"use client"

import { motion } from "framer-motion"

const FancyText = ({ text }: { text: string }) => {
  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold text-red-600 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {text}
    </motion.h1>
  )
}

export default FancyText

