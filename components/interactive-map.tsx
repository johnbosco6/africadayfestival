"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X } from "lucide-react"

type Region = {
    id: string
    name: string
    emoji: string
    color: string
    labelX: number
    labelY: number
    culture: string
    music: string
    dish: string
    language: string
    path: string
}

// Africa SVG map split into 5 geographic regions
// ViewBox: 0 0 500 580
const regions: Region[] = [
    {
        id: "north",
        name: "North Africa",
        emoji: "🏺",
        color: "#2980b9",
        labelX: 248,
        labelY: 90,
        culture: "Ancient pyramids, Berber culture, and the crossroads of African and Mediterranean heritage.",
        music: "Raï, Gnawa, Chaabi",
        dish: "Tagine, Couscous, Harira",
        language: "Arabic, Berber (Tamazight)",
        // Top band of Africa: Morocco → Egypt → Sudan → Chad → Mali → Mauritania
        path: `
      M 142 24
      C 158 16 195 10 230 9
      L 268 10 300 14 332 16 360 22 385 36 402 52
      L 414 72 420 96 416 118 410 140
      C 403 155 395 165 385 178
      L 370 194 355 188 340 180     
      C 325 175 310 170 295 170
      L 278 168 262 165 245 164
      C 228 163 210 162 192 162
      L 175 162 158 163 142 165
      C 126 167 110 168 95 168
      L 75 168 58 164 44 156
      C 34 150 26 140 22 128
      L 18 112 20 94 28 78
      C 36 64 50 52 66 42
      C 84 30 112 26 142 24 Z
    `,
    },
    {
        id: "west",
        name: "West Africa",
        emoji: "🎺",
        color: "#e67e22",
        labelX: 88,
        labelY: 270,
        culture: "Famous for vibrant Kente cloth, masquerades, and rich storytelling traditions.",
        music: "Afrobeats, Highlife, Jùjú",
        dish: "Jollof Rice, Fufu, Egusi Soup",
        language: "Yoruba, Twi, Hausa, Wolof",
        // West Africa bulge: Mauritania coast down to Nigeria
        path: `
      M 44 156
      C 34 150 26 140 22 128
      L 18 112 20 94 28 78
      C 36 64 50 52 66 42
      C 80 34 100 28 122 25
      L 142 24 C 128 26 112 30 100 44
      C 82 62 70 86 58 108
      C 48 128 38 148 32 170
      C 26 192 18 214 14 236
      C 10 258 10 278 14 298
      C 18 316 26 332 38 344
      C 50 356 66 364 82 368
      L 95 370 110 368 125 362
      C 138 356 150 348 162 342
      L 178 334 192 328 208 324
      C 218 320 228 318 238 318
      L 248 318
      L 248 270 238 268 220 264
      C 205 260 190 254 178 246
      C 162 236 148 224 136 212
      C 120 198 106 184 95 168
      L 75 168 58 164 44 156 Z
    `,
    },
    {
        id: "central",
        name: "Central Africa",
        emoji: "🌿",
        color: "#c8392b",
        labelX: 240,
        labelY: 340,
        culture: "Ancient rainforests, the mighty Congo River, and the heart of Bantu civilisation.",
        music: "Makossa, Soukous, Ndombolo",
        dish: "Poulet DG, Fufu, Mbika",
        language: "Lingala, Kikongo, Sango, Fang",
        // Central: Congo basin area
        path: `
      M 248 318
      L 238 318 220 316 208 324
      C 192 328 178 334 162 342
      L 148 350 138 358 125 362
      C 110 368 95 370 82 368
      L 95 370 112 372 128 378
      C 144 384 158 392 170 402
      C 180 410 188 420 195 430
      L 200 440 205 452 210 460
      L 218 462 228 460 238 455
      C 248 450 256 442 264 434
      C 272 426 278 416 285 408
      C 292 400 300 394 308 390
      C 318 386 328 384 338 382
      L 352 380 360 372 362 358
      C 364 344 360 328 354 314
      C 348 302 340 292 332 284
      C 322 274 310 268 298 266
      L 280 264 265 265 250 268
      L 248 270 248 318 Z
    `,
    },
    {
        id: "east",
        name: "East Africa",
        emoji: "🦁",
        color: "#27ae60",
        labelX: 360,
        labelY: 260,
        culture: "Home to the Maasai, the great wildebeest migration, and ancient Swahili trade routes.",
        music: "Taarab, Benga, Bongo Flava",
        dish: "Ugali, Injera, Nyama Choma",
        language: "Swahili, Amharic, Somali",
        // East Africa: Horn + Kenya + Tanzania coast
        path: `
      M 385 178
      C 395 165 403 155 410 140
      L 416 118 420 96 414 72
      L 402 52 385 36
      C 398 50 415 72 428 96
      C 440 118 448 144 454 168
      C 460 192 462 216 460 238
      C 458 256 452 272 444 285
      C 436 298 426 308 415 318
      C 405 328 393 335 382 340
      L 370 345 358 348 348 350
      L 340 352 332 354 325 356
      L 315 360 308 366 305 374
      L 304 382 306 390 308 390
      C 320 388 332 384 342 380
      L 352 376 360 372 362 358
      C 364 344 360 328 354 314
      C 348 302 340 292 332 284
      C 322 274 310 268 298 266
      L 280 264 265 265 250 268
      L 248 270 248 318
      L 248 270 250 268 265 265
      L 278 264 295 170 310 170
      C 325 170 340 175 355 182
      L 368 190 379 196 385 178 Z
    `,
    },
    {
        id: "south",
        name: "Southern Africa",
        emoji: "💎",
        color: "#8e44ad",
        labelX: 235,
        labelY: 470,
        culture: "Diverse Zulu, Ndebele and San cultures — known for the ubuntu philosophy of shared humanity.",
        music: "Amapiano, Mbaqanga, Isicathamiya",
        dish: "Braai, Biltong, Bobotie",
        language: "Zulu, Xhosa, Afrikaans, Shona",
        // Southern Africa below Central+East
        path: `
      M 82 368
      C 70 364 58 356 48 346
      C 36 334 28 320 24 304
      C 18 286 18 268 22 250
      C 24 238 28 226 32 216
      L 38 196 44 178
      C 44 178 44 200 50 224
      C 56 246 66 265 78 282
      C 88 296 100 308 110 322
      C 120 334 130 346 138 360
      L 128 378 140 390
      C 148 400 158 408 165 420
      C 172 432 177 444 180 456
      L 185 468 190 478 196 486
      C 200 492 208 496 215 498
      C 222 500 230 498 237 495
      C 244 492 250 486 256 480
      L 262 472 268 462 272 452
      C 275 444 278 434 282 426
      C 286 416 290 408 296 400
      L 306 390 308 390
      C 300 394 292 400 285 408
      C 278 416 272 426 264 434
      C 256 442 248 450 238 455
      C 228 460 218 462 210 460
      L 205 452 200 440 195 430
      C 188 420 180 410 170 402
      C 158 392 144 384 128 378
      L 112 372 95 370 82 368 Z
    `,
    },
]

export function InteractiveMap() {
    const [selected, setSelected] = useState<Region | null>(null)
    const [hovered, setHovered] = useState<string | null>(null)

    return (
        <section className="py-20 bg-[#FFF5EB] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">Explore</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Cultural Journey</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm">
                        Click on a region of Africa to discover its culture, music, and the flavours we bring to the festival.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
                    {/* SVG Africa Map */}
                    <div className="relative w-full max-w-sm flex-shrink-0">
                        <svg
                            viewBox="0 0 500 540"
                            className="w-full h-auto drop-shadow-xl"
                            style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.15))" }}
                        >
                            {/* Continent shadow/base */}
                            <ellipse cx="248" cy="270" rx="220" ry="258" fill="rgba(0,0,0,0.06)" />

                            {/* Region paths */}
                            {regions.map((r) => {
                                const isSelected = selected?.id === r.id
                                const isHovered = hovered === r.id
                                return (
                                    <g
                                        key={r.id}
                                        onClick={() => setSelected(isSelected ? null : r)}
                                        onMouseEnter={() => setHovered(r.id)}
                                        onMouseLeave={() => setHovered(null)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <path
                                            d={r.path}
                                            fill={r.color}
                                            opacity={isSelected ? 1 : isHovered ? 0.85 : 0.72}
                                            stroke="white"
                                            strokeWidth={isSelected ? 2.5 : 1.5}
                                            style={{ transition: "opacity 0.2s, stroke-width 0.2s" }}
                                        />
                                        {/* Pulse ring on selected */}
                                        {isSelected && (
                                            <circle
                                                cx={r.labelX}
                                                cy={r.labelY}
                                                r="18"
                                                fill="none"
                                                stroke={r.color}
                                                strokeWidth="2"
                                                opacity="0.5"
                                            />
                                        )}
                                        {/* Region label */}
                                        <text
                                            x={r.labelX}
                                            y={r.labelY - 4}
                                            textAnchor="middle"
                                            fontSize="13"
                                            className="select-none pointer-events-none"
                                        >
                                            {r.emoji}
                                        </text>
                                        <text
                                            x={r.labelX}
                                            y={r.labelY + 10}
                                            textAnchor="middle"
                                            fontSize="7"
                                            fill="white"
                                            fontWeight="bold"
                                            className="select-none pointer-events-none"
                                            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                                        >
                                            {r.name.toUpperCase()}
                                        </text>
                                    </g>
                                )
                            })}

                            {/* Compass rose */}
                            <g transform="translate(460,30)">
                                <circle cx="0" cy="0" r="14" fill="white" opacity="0.9" />
                                <text x="0" y="-6" textAnchor="middle" fontSize="5" fill="#666" fontWeight="bold">N</text>
                                <text x="0" y="10" textAnchor="middle" fontSize="5" fill="#666">S</text>
                                <text x="-9" y="2" textAnchor="middle" fontSize="5" fill="#666">W</text>
                                <text x="9" y="2" textAnchor="middle" fontSize="5" fill="#666">E</text>
                                <line x1="0" y1="-10" x2="0" y2="-3" stroke="#c8392b" strokeWidth="1.5" />
                                <line x1="0" y1="3" x2="0" y2="10" stroke="#666" strokeWidth="1" />
                            </g>
                        </svg>

                        {/* Legend */}
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                            {regions.map((r) => (
                                <button
                                    key={r.id}
                                    onClick={() => setSelected(selected?.id === r.id ? null : r)}
                                    className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium transition-all"
                                    style={{
                                        background: selected?.id === r.id ? r.color : r.color + "22",
                                        color: selected?.id === r.id ? "white" : r.color,
                                        border: `1px solid ${r.color}40`,
                                    }}
                                >
                                    <span>{r.emoji}</span>
                                    {r.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="flex-1 w-full">
                        <AnimatePresence mode="wait">
                            {selected ? (
                                <motion.div
                                    key={selected.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.35 }}
                                    className="rounded-2xl p-6 shadow-lg relative bg-white"
                                    style={{ borderTop: `4px solid ${selected.color}` }}
                                >
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>

                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-4xl">{selected.emoji}</span>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{selected.name}</h3>
                                            <div className="flex items-center gap-1 text-xs" style={{ color: selected.color }}>
                                                <MapPin className="w-3 h-3" /> Africa Day Festival Feature Region
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{selected.culture}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {[
                                            { label: "🎵 Music", value: selected.music },
                                            { label: "🍽️ Cuisine", value: selected.dish },
                                            { label: "💬 Languages", value: selected.language },
                                        ].map((item) => (
                                            <div
                                                key={item.label}
                                                className="rounded-xl p-3"
                                                style={{ background: selected.color + "10" }}
                                            >
                                                <p className="text-xs font-bold mb-1" style={{ color: selected.color }}>{item.label}</p>
                                                <p className="text-xs text-gray-700 leading-snug">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="rounded-2xl p-10 text-center border-2 border-dashed border-orange-200 bg-white"
                                >
                                    <p className="text-5xl mb-4">🗺️</p>
                                    <p className="text-gray-600 font-semibold mb-2">Click a region on the map</p>
                                    <p className="text-gray-400 text-sm">Discover the music, cuisine, and culture of each region of Africa.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
