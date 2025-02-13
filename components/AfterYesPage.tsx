"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import FloatingHearts from "./FloatingHearts"

const AfterYesPage = () => {
  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      <Image src="/love-heart.jpg" alt="Heart with LOVE" width={200} height={200} className="mb-8" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center px-4"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Even though we're miles apart, you're always in my heart.
        </h2>
        <p className="text-lg text-gray-800 mb-8">
          Every day, I'm reminded of how much you mean to me, and I cherish every moment we share, even from afar. I'm
          counting down the days until we're together again. Happy Valentine's Day, my forever Valentine. Distance means
          so little when you mean everything. I love you more than words can say.
        </p>
      </motion.div>
      <Image src="/heart-tree.jpg" alt="Heart Tree" width={300} height={300} className="mt-8" />
    </main>
  )
}

export default AfterYesPage

