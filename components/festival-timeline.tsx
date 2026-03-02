"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timeline = [
    {
        time: "10:00 AM",
        title: "Opening Ceremony",
        description:
            "The festival kicks off with a vibrant opening ceremony featuring traditional African drumming and a welcome address.",
        emoji: "🥁",
        color: "#c8392b",
    },
    {
        time: "11:00 AM",
        title: "African Fashion Runway",
        description:
            "International models showcase stunning African-designed garments, from Kente cloth to contemporary Ankara prints.",
        emoji: "👗",
        color: "#e67e22",
    },
    {
        time: "1:00 PM",
        title: "Culinary Workshops",
        description:
            "Hands-on cooking experiences explore the rich flavours of African cuisine — from jollof rice to tagine.",
        emoji: "🍲",
        color: "#f39c12",
    },
    {
        time: "3:00 PM",
        title: "Cultural Dance & Music",
        description:
            "Live performances featuring Afrobeats, Highlife, and traditional dances from across the continent.",
        emoji: "🎵",
        color: "#27ae60",
    },
    {
        time: "5:00 PM",
        title: "Community Programs Expo",
        description:
            "Explore our ongoing programs — from the French Club to the Programming Club and Internship opportunities.",
        emoji: "🤝",
        color: "#2980b9",
    },
    {
        time: "7:00 PM",
        title: "Film & Art Showcase",
        description:
            "African films, photography exhibitions, and visual art installations from emerging and established artists.",
        emoji: "🎬",
        color: "#8e44ad",
    },
    {
        time: "9:00 PM",
        title: "Grand Concert",
        description:
            "The festival concludes with a spectacular concert featuring top African artists performing under the stars.",
        emoji: "🌟",
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">A Day in the Life</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                        Here&apos;s what a full day at the Africa Day Festival looks like. Something for everyone,
                        from sunrise to starlight.
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
