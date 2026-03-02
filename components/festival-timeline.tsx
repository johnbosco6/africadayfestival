"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timeline = [
    {
        time: "10:00 AM",
        title: "Opening Ceremony",
        description: "The festival kicks off with a vibrant opening ceremony featuring traditional African drumming and a welcome address.",
        emoji: "🥁",
        color: "#c8392b",
    },
    {
        time: "11:00 AM",
        title: "African Fashion Runway",
        description: "International models showcase stunning African-designed garments, from Kente cloth to contemporary Ankara prints.",
        emoji: "👗",
        color: "#e67e22",
    },
    {
        time: "1:00 PM",
        title: "Culinary Workshops",
        description: "Hands-on cooking experiences explore the rich flavours of African cuisine — from jollof rice to tagine.",
        emoji: "🍲",
        color: "#f39c12",
    },
    {
        time: "3:00 PM",
        title: "Cultural Dance & Music",
        description: "Live performances featuring Afrobeats, Highlife, and traditional dances from across the continent.",
        emoji: "🎵",
        color: "#27ae60",
    },
    {
        time: "5:00 PM",
        title: "Community Programs Expo",
        description: "Explore our ongoing programs — from the French Club to the Programming Club and Internship opportunities.",
        emoji: "🤝",
        color: "#2980b9",
    },
    {
        time: "7:00 PM",
        title: "Film & Art Showcase",
        description: "African films, photography exhibitions, and visual art installations from emerging and established artists.",
        emoji: "🎬",
        color: "#8e44ad",
    },
    {
        time: "9:00 PM",
        title: "Grand Concert",
        description: "The festival concludes with a spectacular concert featuring top African artists performing under the stars.",
        emoji: "🌟",
        color: "#c8392b",
    },
]

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })
    const isLeft = index % 2 === 0

    return (
        <div ref={ref} className={`flex items-center gap-6 md:gap-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
            {/* Content card */}
            <motion.div
                className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div
                    className="inline-block rounded-2xl p-4 md:p-5 shadow-lg w-full"
                    style={{
                        background: item.color + "12",
                        border: `1px solid ${item.color}30`,
                    }}
                >
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>
                        {item.time}
                    </p>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 flex items-center gap-2 flex-wrap">
                        <span className="text-xl">{item.emoji}</span>
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
            </motion.div>

            {/* Center dot */}
            <motion.div
                className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ background: item.color }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
            >
                <span className="text-white text-sm font-bold">{index + 1}</span>
            </motion.div>

            {/* Spacer for alternating layout */}
            <div className="flex-1 hidden md:block" />
        </div>
    )
}

export function FestivalTimeline() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Experience</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">A Day in the Life</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
                        Here's what a full day at the Africa Day Festival looks like. Something for everyone, from sunrise to starlight.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c8392b] via-[#27ae60] to-[#2980b9] hidden md:block" />
                    {/* Mobile line */}
                    <div className="absolute left-[calc(1.25rem-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c8392b] via-[#27ae60] to-[#2980b9] md:hidden" />

                    <div className="flex flex-col gap-6 md:gap-8">
                        {timeline.map((item, i) => (
                            <TimelineItem key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
