"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timeline = [
    {
        time: "Friday – Official Opening",
        title: "Grand Opening Ceremony",
        description:
            "Official welcome addresses and presentation of participating African countries with artistic performances (music, dance, poetry).",
        emoji: "🌍",
        color: "#c8392b",
    },
    {
        time: "Friday, 19:00",
        title: "African Gala Banquet",
        description:
            "An elegant evening of culinary experience, live music, cultural ambiance, and diplomatic & business networking.",
        emoji: "🥂",
        color: "#e67e22",
    },
    {
        time: "Saturday, 10:00",
        title: "Africa–Poland Cooperation Forum",
        description:
            "Culture • Business • Science • Innovation. Panel discussions, spotlight pitches, and academic collaboration opportunities.",
        emoji: "🤝",
        color: "#f39c12",
    },
    {
        time: "Saturday, 13:00",
        title: "Networking Lunch",
        description: "Continuing the discussions over an authentic African lunch.",
        emoji: "🍲",
        color: "#27ae60",
    },
    {
        time: "Saturday, 14:00",
        title: "African Flag Parade",
        description:
            "A vibrant procession celebrating African unity and diversity at Plac Litewski, Lublin.",
        emoji: "🚩",
        color: "#2980b9",
    },
    {
        time: "Saturday, 15:00",
        title: "Africa Day Grand Celebration",
        description:
            "Live concerts, traditional dance, fashion showcase, youth performances, and a cultural village with food and crafts.",
        emoji: "🎸",
        color: "#8e44ad",
    },
    {
        time: "Saturday, 20:00",
        title: "Closing Ceremony",
        description: "A final celebration to mark the end of the 2026 Africa Day Festival.",
        emoji: "✨",
        color: "#c8392b",
    },
]

function TimelineItem({
    item,
    index,
}: {
    item: (typeof timeline)[0]
    index: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px" })
    const isLeft = index % 2 === 0

    return (
        <div ref={ref} className="relative flex items-start md:items-center">

            {/* ── MOBILE layout: left-pinned vertical line, dot on left, card on right ── */}
            <div className="flex md:hidden w-full items-start gap-4 pl-1">
                {/* Dot */}
                <motion.div
                    className="flex-shrink-0 mt-1 w-9 h-9 rounded-full flex items-center justify-center shadow-md z-10"
                    style={{ background: item.color }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
                >
                    <span className="text-base leading-none">{item.emoji}</span>
                </motion.div>

                {/* Card */}
                <motion.div
                    className="flex-1 rounded-2xl p-4 shadow-sm mb-1"
                    style={{
                        background: item.color + "12",
                        border: `1px solid ${item.color}30`,
                    }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <p
                        className="text-[10px] font-bold uppercase tracking-widest mb-1"
                        style={{ color: item.color }}
                    >
                        {item.time}
                    </p>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
            </div>

            {/* ── DESKTOP layout: alternating left/right ── */}
            <div className="hidden md:flex w-full items-center gap-6">
                {/* Left side */}
                <div className="flex-1 flex justify-end">
                    {isLeft ? (
                        <motion.div
                            className="w-full max-w-xs rounded-2xl p-5 shadow-md text-right"
                            style={{
                                background: item.color + "12",
                                border: `1px solid ${item.color}30`,
                            }}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.1 }}
                        >
                            <p
                                className="text-xs font-bold uppercase tracking-widest mb-1"
                                style={{ color: item.color }}
                            >
                                {item.time}
                            </p>
                            <h3 className="text-base font-bold text-gray-900 mb-1">
                                {item.emoji} {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ) : (
                        <div />
                    )}
                </div>

                {/* Center dot */}
                <motion.div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{ background: item.color }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                >
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                </motion.div>

                {/* Right side */}
                <div className="flex-1">
                    {!isLeft ? (
                        <motion.div
                            className="w-full max-w-xs rounded-2xl p-5 shadow-md"
                            style={{
                                background: item.color + "12",
                                border: `1px solid ${item.color}30`,
                            }}
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.1 }}
                        >
                            <p
                                className="text-xs font-bold uppercase tracking-widest mb-1"
                                style={{ color: item.color }}
                            >
                                {item.time}
                            </p>
                            <h3 className="text-base font-bold text-gray-900 mb-1">
                                {item.emoji} {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
        </div>
    )
}

export function FestivalTimeline() {
    return (
        <section className="py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">
                        Experience
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Event 2026</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                        Here is a more engaging and dynamic version of our program — concise, but richer,
                        more attractive, and with better flow and energy building toward Saturday’s big celebration.
                    </p>
                </div>

                {/* Timeline container */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Desktop centre line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#c8392b] via-[#f39c12] via-[#27ae60] to-[#8e44ad] hidden md:block" />

                    {/* Mobile left line — sits behind the dots */}
                    <div className="absolute left-[1.1rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c8392b] via-[#f39c12] via-[#27ae60] to-[#8e44ad] md:hidden" />

                    <div className="flex flex-col gap-5 md:gap-8">
                        {timeline.map((item, i) => (
                            <TimelineItem key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
