"use client"

import type React from "react"
import { useState } from "react"
import { motion, useAnimation } from "framer-motion"

const InteractiveButton = ({
  children,
  onClick,
  type,
}: { children: React.ReactNode; onClick?: () => void; type: "yes" | "no" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  const handleClick = () => {
    if (type === "no") {
      const newX = Math.random() * (window.innerWidth - 100)
      const newY = Math.random() * (window.innerHeight - 100) - window.innerHeight
      setPosition({ x: newX, y: newY })
      controls.start({ x: newX, y: newY, transition: { type: "spring", stiffness: 50, damping: 10 } })
    } else if (onClick) {
      onClick()
    }
  }

  const buttonStyle = type === "yes" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"

  return (
    <motion.div animate={controls} style={{ display: "inline-block" }}>
      <motion.button
        className={`px-6 py-3 rounded-full text-white font-bold ${buttonStyle}`}
        whileHover={{ scale: type === "yes" ? 1.1 : 1 }}
        onClick={handleClick}
      >
        {children}
      </motion.button>
      {type === "no" && (
        <motion.div
          className="absolute -top-32 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
        >
          {/* Balloon */}
          <motion.div
            className="w-16 h-20 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          />
          {/* Balloon tie */}
          <div className="w-2 h-4 bg-red-600 mx-auto -mt-1 rounded-b-full" />
          {/* Strings */}
          <motion.div
            className="w-0.5 h-12 bg-gray-400 mx-auto"
            animate={{ skew: [0, 2, -2, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

export default InteractiveButton

