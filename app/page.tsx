"use client"

import { useState } from "react"
import FloatingHearts from "@/components/FloatingHearts"
import FancyText from "@/components/FancyText"
import InteractiveButton from "@/components/InteractiveButton"
import AnimatedFlower from "@/components/AnimatedFlower"
import AfterYesPage from "@/components/AfterYesPage"
import BackgroundMusic from "@/components/BackgroundMusic"
import Image from "next/image"

export default function HomePage() {
  const [showAfterYes, setShowAfterYes] = useState(false)

  const handleYesClick = () => {
    setShowAfterYes(true)
  }

  if (showAfterYes) {
    return <AfterYesPage />
  }

  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      <BackgroundMusic />
      <FloatingHearts />
      <AnimatedFlower />
      <Image
        src="/valentines-day.jpg"
        alt="Valentine's Day Decorative Element"
        width={300}
        height={200}
        className="absolute top-5 left-5 opacity-50"
      />
      <FancyText text="Will you be my Valentine?" />
      <div className="flex space-x-8 mt-8">
        <InteractiveButton onClick={handleYesClick} type="yes">
          Yes
        </InteractiveButton>
        <InteractiveButton type="no">No</InteractiveButton>
      </div>
    </main>
  )
}

