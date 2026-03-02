"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Music, Square } from "lucide-react"

// "Circle of Life" – The Lion King (Official YouTube, audio only via autoplay)
const YOUTUBE_ID = "GibiNy4d4gc"

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)

    const toggle = () => setIsPlaying((v) => !v)

    return (
        <>
            {/* Hidden YouTube iframe — only mounted while playing */}
            {isPlaying && (
                <div
                    aria-hidden="true"
                    style={{
                        position: "fixed",
                        width: 1,
                        height: 1,
                        overflow: "hidden",
                        opacity: 0,
                        pointerEvents: "none",
                        top: 0,
                        left: 0,
                        zIndex: -1,
                    }}
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                        title="Circle of Life – The Lion King"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </div>
            )}

            {/* Floating play/stop button */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
                <motion.button
                    onClick={toggle}
                    className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white"
                    style={{ background: "linear-gradient(135deg, #c8392b, #e67e22)" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isPlaying ? "Stop music" : "Play Circle of Life"}
                    title={isPlaying ? "Stop music" : "Play Circle of Life"}
                >
                    {isPlaying ? (
                        /* Animated equalizer while playing */
                        <motion.div className="flex items-end gap-[2px] h-5">
                            {[3, 5, 4, 6, 3].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="w-[3px] bg-white rounded-full"
                                    animate={{ height: [h, h * 2, h] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.6 + i * 0.1,
                                        delay: i * 0.1,
                                    }}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <Music className="w-6 h-6" />
                    )}
                </motion.button>

                {/* Tiny label beneath */}
                <span className="text-[9px] font-semibold text-gray-500 tracking-wide">
                    {isPlaying ? "PLAYING" : "MUSIC"}
                </span>
            </div>
        </>
    )
}
