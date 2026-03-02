"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react"

type Question = {
    question: string
    emoji: string
    answers: { text: string; tags: string[] }[]
}

const questions: Question[] = [
    {
        question: "What sounds most exciting to you?",
        emoji: "🎯",
        answers: [
            { text: "Learning to cook an amazing new dish", tags: ["cooking"] },
            { text: "Walking a runway or striking a pose", tags: ["fashion"] },
            { text: "Hearing live music and dancing", tags: ["music"] },
            { text: "Building or coding something cool", tags: ["tech"] },
        ],
    },
    {
        question: "Your ideal Friday evening is…",
        emoji: "🌙",
        answers: [
            { text: "Hosting a dinner party", tags: ["cooking"] },
            { text: "Going out and looking amazing", tags: ["fashion"] },
            { text: "At a concert or open mic night", tags: ["music"] },
            { text: "Hacking on a side project", tags: ["tech"] },
        ],
    },
    {
        question: "Which superpower would you choose?",
        emoji: "✨",
        answers: [
            { text: "Turn anything into a gourmet meal", tags: ["cooking"] },
            { text: "Always look flawless", tags: ["fashion"] },
            { text: "Sing or play any instrument perfectly", tags: ["music"] },
            { text: "Write code with your mind", tags: ["tech"] },
        ],
    },
]

const results: Record<string, { title: string; desc: string; emoji: string; cta: string; link: string; color: string }> = {
    cooking: {
        title: "Culinary School & Workshops",
        desc: "You're a natural in the kitchen! Join our African culinary workshops and discover the vibrant flavours of the continent.",
        emoji: "🍲",
        cta: "Join the Culinary Workshop",
        link: "https://chat.whatsapp.com/CWtZ6tkmWETF5mqNHwHtaU",
        color: "#e67e22",
    },
    fashion: {
        title: "International Model Agency",
        desc: "Style is your language. Walk the runway and showcase diverse African fashion on an international stage.",
        emoji: "👗",
        cta: "Join the Model Agency",
        link: "https://chat.whatsapp.com/DHFX8aT2KzT632wxKWVmJn",
        color: "#8e44ad",
    },
    music: {
        title: "Africa Day Festival Performance",
        desc: "You live for the music! Attend our live concerts and cultural performances celebrating the sound of Africa.",
        emoji: "🎵",
        cta: "Explore Performances",
        link: "/program",
        color: "#27ae60",
    },
    tech: {
        title: "The Programming Club of Lublin",
        desc: "A builder at heart! Our programming club is the perfect space to code, learn, and connect with fellow tech enthusiasts.",
        emoji: "💻",
        cta: "Join the Programming Club",
        link: "https://chat.whatsapp.com/LXdsztI9JFL3PcaHpQgg26",
        color: "#2980b9",
    },
}

export function WorkshopQuiz() {
    const [step, setStep] = useState(0)
    const [scores, setScores] = useState<Record<string, number>>({ cooking: 0, fashion: 0, music: 0, tech: 0 })
    const [done, setDone] = useState(false)

    const handleAnswer = (tags: string[]) => {
        const newScores = { ...scores }
        tags.forEach((tag) => { newScores[tag] = (newScores[tag] || 0) + 1 })
        setScores(newScores)
        if (step + 1 >= questions.length) {
            setDone(true)
        } else {
            setStep(step + 1)
        }
    }

    const reset = () => {
        setStep(0)
        setScores({ cooking: 0, fashion: 0, music: 0, tech: 0 })
        setDone(false)
    }

    const topResult = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
    const result = results[topResult]
    const q = questions[step]

    return (
        <section className="py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a00 0%, #2d1200 50%, #1a0a00 100%)" }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2 block">Take the Quiz</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Find Your Rhythm</h2>
                    <p className="text-orange-200/70 max-w-lg mx-auto text-sm">
                        Answer 3 quick questions and we'll match you with the perfect Africa Day Festival program.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!done ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.35 }}
                            >
                                {/* Progress */}
                                <div className="flex gap-2 mb-8">
                                    {questions.map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-1 flex-1 rounded-full transition-all duration-500"
                                            style={{ background: i <= step ? "#FF5C00" : "rgba(255,255,255,0.15)" }}
                                        />
                                    ))}
                                </div>

                                <div
                                    className="rounded-2xl p-6 md:p-8"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        backdropFilter: "blur(20px)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                    }}
                                >
                                    <p className="text-3xl mb-4 text-center">{q.emoji}</p>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center">{q.question}</h3>

                                    <div className="flex flex-col gap-3">
                                        {q.answers.map((a, i) => (
                                            <motion.button
                                                key={i}
                                                onClick={() => handleAnswer(a.tags)}
                                                className="text-left px-4 py-3.5 rounded-xl font-medium text-sm text-white transition-all"
                                                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                                                whileHover={{ scale: 1.02, background: "rgba(255, 92, 0, 0.2)", borderColor: "#FF5C00" }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className="flex items-center justify-between gap-3">
                                                    {a.text}
                                                    <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-50" />
                                                </span>
                                            </motion.button>
                                        ))}
                                    </div>

                                    <p className="text-center text-[11px] text-white/30 mt-5">Question {step + 1} of {questions.length}</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                <div
                                    className="rounded-2xl p-6 md:p-8 text-center"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        backdropFilter: "blur(20px)",
                                        border: `1px solid ${result.color}40`,
                                    }}
                                >
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: result.color + "25" }}>
                                        <span className="text-3xl">{result.emoji}</span>
                                    </div>
                                    <CheckCircle className="w-5 h-5 mx-auto mb-2" style={{ color: result.color }} />
                                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: result.color }}>Your perfect match</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{result.title}</h3>
                                    <p className="text-white/60 text-sm mb-6 leading-relaxed">{result.desc}</p>

                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <a
                                            href={result.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                                            style={{ background: result.color }}
                                        >
                                            {result.cta} <ArrowRight className="w-4 h-4" />
                                        </a>
                                        <button
                                            onClick={reset}
                                            className="px-6 py-3 rounded-xl font-medium text-white/60 text-sm hover:text-white transition-colors flex items-center justify-center gap-2"
                                            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                                        >
                                            <RotateCcw className="w-4 h-4" /> Retake Quiz
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
