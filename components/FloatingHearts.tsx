"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<number[]>([])

  useEffect(() => {
    setHearts(Array.from({ length: 20 }, (_, i) => i))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute text-red-500"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1100,
          }}
          animate={{
            y: -100,
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              duration: Math.random() * 10 + 20,
              ease: "linear",
            },
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts

