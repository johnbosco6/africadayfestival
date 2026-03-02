"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, Heart, Code, Smartphone, Globe, Terminal } from "lucide-react"

export function DeveloperAcknowledgment() {
    return (
        <div className="bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="developer-note" className="border-none">
                        <AccordionTrigger className="hover:no-underline py-6 group">
                            <div className="flex items-center gap-3 text-left">
                                <div className="bg-orange-100 p-2 rounded-full group-hover:bg-orange-200 transition-colors">
                                    <Heart className="h-5 w-5 text-orange-600 fill-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-serif text-gray-900 group-hover:text-orange-700 transition-colors">
                                        A Special Note of Gratitude
                                    </h3>
                                    <p className="text-sm text-gray-500 font-sans">
                                        Recognizing the hands that built this digital home
                                    </p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="space-y-6">
                                    <blockquote className="relative">
                                        <span className="absolute -top-4 -left-2 text-6xl text-orange-200 font-serif leading-none italic select-none">"</span>
                                        <p className="text-xl font-serif text-gray-800 italic leading-relaxed relative z-10">
                                            Leveraging the full power of modern technology to build a digital legacy for our community. Every line of code is a commitment to our shared progress.
                                        </p>
                                    </blockquote>

                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                                            <Smartphone className="h-4 w-4" /> Mobile Dev
                                        </div>
                                        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                                            <Globe className="h-4 w-4" /> Web Apps
                                        </div>
                                        <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                                            <Terminal className="h-4 w-4" /> DevOps
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-4 md:border-l md:pl-8 border-gray-100">
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Our Developer</h4>
                                        <a
                                            href="https://www.instagram.com/jonjohnh_?igsh=MTNmZGI3MDd5bmx0bA%3D%3D&utm_source=qr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2"
                                        >
                                            <span className="text-2xl font-bold text-gray-900 border-b-2 border-transparent group-hover:border-orange-500 transition-all leading-tight">
                                                JOHNBOSCO J.
                                            </span>
                                            <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                                        </a>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed max-w-md">
                                        The NGO and the Africa Day Festival team extend our sincere appreciation to Johnbosco J. for his exceptional dedication and technical expertise. His vision and hard work have been instrumental in creating this platform to celebrate our heritage and foster international cooperation.
                                    </p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
