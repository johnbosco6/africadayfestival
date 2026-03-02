"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Music, ChevronDown } from "lucide-react"

// "Circle of Life" – The Lion King (Official YouTube)
const YOUTUBE_ID = "GibiNy4d4gc"

export function AudioPlayer() {
    // isActive: whether user has started the music (iframe is mounted)
    const [isActive, setIsActive] = useState(false)
    // isOpen: whether the panel is visible
    const [isOpen, setIsOpen] = useState(false)

    // First click → start music + open panel
    // Subsequent clicks when panel is closed → re-open panel
    const handleFloatClick = () => {
        if (!isActive) {
            setIsActive(true)
            setIsOpen(true)
        } else {
            setIsOpen((v) => !v)
        }
    }

    // Close panel only — music keeps playing
    const handleClosePanel = () => {
        setIsOpen(false)
    }

    // Stop music entirely — unmount iframe + hide everything
    const handleStopMusic = () => {
        setIsActive(false)
        setIsOpen(false)
    }

    return (
        <>
            {/* ── YouTube iframe — always mounted while active, hidden off-screen ── */}
            {isActive && (
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

            {/* ── Floating trigger button ── */}
            {/* Only shown when there's no active panel open (or always, for re-open) */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
                {/* Small "stop music" badge — shown when music is playing but panel is closed */}
                <AnimatePresence>
                    {isActive && !isOpen && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={handleStopMusic}
                            className="text-[10px] font-bold text-white px-3 py-1 rounded-full shadow-md flex items-center gap-1"
                            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
                            title="Stop music"
                        >
                            <X className="w-3 h-3" /> Stop music
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Main floating button */}
                <motion.button
                    onClick={handleFloatClick}
                    className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white relative"
                    style={{ background: "linear-gradient(135deg, #c8392b, #e67e22)" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isActive ? "Open music player" : "Play Circle of Life"}
                >
                    {isActive ? (
                        /* Animated equalizer bars when music is playing */
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
            </div>

            {/* ── Expandable panel (shows the YouTube player visually) ── */}
            <AnimatePresence>
                {isOpen && isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                            background: "rgba(15, 15, 15, 0.92)",
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
                            <div className="flex items-center gap-2">
                                {/* Minimise panel — keeps music going */}
                                <button
                                    onClick={handleClosePanel}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Minimise (music keeps playing)"
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {/* Stop music entirely */}
                                <button
                                    onClick={handleStopMusic}
                                    className="text-gray-400 hover:text-red-400 transition-colors"
                                    title="Stop music"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* YouTube player visible in panel */}
                        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                                title="Circle of Life – The Lion King"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Footer hint */}
                        <div className="px-4 py-2 text-center">
                            <p className="text-[10px] text-gray-500">
                                ↙ Minimise to keep music playing in the background
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
