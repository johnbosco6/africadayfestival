"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
    { text: "Karibu! Welcome to Africa Day Festival", lang: "Swahili" },
    { text: "E kaabo! Welcome to Africa Day Festival", lang: "Yoruba" },
    { text: "Sawubona! Welcome to Africa Day Festival", lang: "Zulu" },
    { text: "Akwaaba! Welcome to Africa Day Festival", lang: "Twi (Ghana)" },
    { text: "Marahaba! Welcome to Africa Day Festival", lang: "Swahili (formal)" },
    { text: "Bienvenue! Africa Day Festival", lang: "French" },
    { text: "Welcome! Africa Day Festival", lang: "English" },
]

export function WelcomeBanner() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="bg-gradient-to-r from-[#c8392b] via-[#e67e22] to-[#27ae60] text-white text-center py-1.5 px-4 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center gap-3 text-sm font-medium"
                >
                    <span className="font-bold tracking-wide">{greetings[index].text}</span>
                    <span className="opacity-70 text-xs hidden sm:inline">· {greetings[index].lang}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
