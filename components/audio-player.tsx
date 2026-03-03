"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Music } from "lucide-react"

// "Circle of Life" – The Lion King (Official YouTube)
const YOUTUBE_ID = "GibiNy4d4gc"

// Add TypeScript support for YouTube API
declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void
        YT: any
    }
}

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isPlayerReady, setIsPlayerReady] = useState(false)
    const playerRef = useRef<any>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // 1. Load the YouTube IFrame Player API code asynchronously.
        if (!window.YT) {
            const tag = document.createElement("script")
            tag.src = "https://www.youtube.com/iframe_api"
            const firstScriptTag = document.getElementsByTagName("script")[0]
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

            window.onYouTubeIframeAPIReady = () => {
                initPlayer()
            }
        } else {
            initPlayer()
        }

        function initPlayer() {
            if (playerRef.current) return

            playerRef.current = new window.YT.Player("youtube-player", {
                height: "1",
                width: "1",
                videoId: YOUTUBE_ID,
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1, // Crucial for mobile background play
                },
                events: {
                    onReady: () => {
                        setIsPlayerReady(true)
                        // Attempt to autoplay the music as soon as the player is ready.
                        // Note: Browsers may block this if the user hasn't interacted with the page yet.
                        playerRef.current.playVideo()
                    },
                    onStateChange: (event: any) => {
                        // YT.PlayerState.PLAYING = 1
                        if (event.data === 1) setIsPlaying(true)
                        // YT.PlayerState.PAUSED = 2, YT.PlayerState.ENDED = 0
                        else if (event.data === 2 || event.data === 0) setIsPlaying(false)
                    },
                },
            })
        }

        return () => {
            // Cleanup if needed
        }
    }, [])

    useEffect(() => {
        // Auto-unlock music on first interaction (required for mobile sound)
        const unlockAudio = () => {
            if (isPlayerReady && playerRef.current && !isPlaying) {
                playerRef.current.playVideo()
                cleanup()
            }
        }

        const cleanup = () => {
            window.removeEventListener("touchstart", unlockAudio)
            window.removeEventListener("mousedown", unlockAudio)
        }

        if (!isPlaying) {
            window.addEventListener("touchstart", unlockAudio, { passive: true })
            window.addEventListener("mousedown", unlockAudio, { passive: true })
        }

        return cleanup
    }, [isPlayerReady, isPlaying])

    const toggle = () => {
        if (!isPlayerReady || !playerRef.current) return

        if (isPlaying) {
            playerRef.current.pauseVideo()
        } else {
            // Explicitly calling playVideo here is a "user gesture" 
            // which mobile browsers (iOS/Android) will respect.
            playerRef.current.playVideo()
        }
    }

    return (
        <>
            {/* 
        Hidden YouTube container. 
        Note: The API replaces the div with an iframe. 
      */}
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
                <div id="youtube-player"></div>
            </div>

            {/* Floating play/stop button */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1">
                <motion.button
                    onClick={toggle}
                    disabled={!isPlayerReady}
                    className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-opacity ${!isPlayerReady ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    style={{ background: "linear-gradient(135deg, #c8392b, #e67e22)" }}
                    whileHover={isPlayerReady ? { scale: 1.1 } : {}}
                    whileTap={isPlayerReady ? { scale: 0.95 } : {}}
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
                        <Music className={`w-6 h-6 ${!isPlayerReady ? 'animate-pulse' : ''}`} />
                    )}
                </motion.button>

                {/* Tiny label beneath */}
                <span className="text-[9px] font-semibold text-gray-500 tracking-wide">
                    {!isPlayerReady ? "LOADING..." : isPlaying ? "PLAYING" : "MUSIC"}
                </span>
            </div>
        </>
    )
}
