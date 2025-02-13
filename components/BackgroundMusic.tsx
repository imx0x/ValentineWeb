"use client"

import { useEffect, useRef } from "react"

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2
      audioRef.current.loop = true
      audioRef.current.play().catch((error) => console.log("Audio playback failed:", error))
    }
  }, [])

  return <audio ref={audioRef} src="/romantic-music.mp3" />
}

export default BackgroundMusic

