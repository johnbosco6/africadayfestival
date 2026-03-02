"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Music } from "lucide-react"

// "Circle of Life" – The Lion King (Official YouTube)
const YOUTUBE_ID = "GibiNy4d4gc"

export function AudioPlayer() {
    const [isOpen, setIsOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <>
            {/* Floating trigger button */}
            <motion.button
                onClick={() => setIsOpen((v) => !v)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg, #c8392b, #e67e22)" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open music player"
            >
                {isPlaying ? (
                    <motion.div className="flex items-end gap-[2px] h-5">
                        {[3, 5, 4, 6, 3].map((h, i) => (
                            <motion.div
                                key={i}
                                className="w-[3px] bg-white rounded-full"
                                animate={{ height: [h, h * 2, h] }}
                                transition={{ repeat: Infinity, duration: 0.6 + i * 0.1, delay: i * 0.1 }}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <Music className="w-6 h-6" />
                )}
            </motion.button>

            {/* Player panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                            background: "rgba(15, 15, 15, 0.9)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.12)",
                        }}
                    >
                        {/* Header */}
                        <div
                            className="px-4 py-3 flex items-center justify-between"
                            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                        >
                            <div className="flex items-center gap-2">
                                <Music className="w-4 h-4 text-orange-400" />
                                <div>
                                    <p className="text-white text-sm font-bold leading-tight">Circle of Life</p>
                                    <p className="text-gray-400 text-[10px]">The Lion King · Africa Day Festival</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* YouTube embed */}
                        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                                title="Circle of Life – The Lion King"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                onLoad={() => setIsPlaying(true)}
                            />
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-3 text-center">
                            <p className="text-[10px] text-gray-500">🎵 Sound of Africa · Africa Day Festival Anthem</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
