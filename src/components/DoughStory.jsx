"use client";

import React from "react";
import Image from "next/image";

export default function DoughStory() {
    const steps = [
        {
            number: "01",
            title: "The Ancient Starter",
            description:
                "Our journey begins with our 'Mother' starter, nurtured daily for over 3 years to develop a complex, tangy depth of flavour that commercial yeast simply cannot match.",
            label: "Authentic Roots",
        },
        {
            number: "02",
            title: "48-Hour Patience",
            description:
                "Time is our secret ingredient. We cold-ferment our dough for 48 hours, allowing enzymes to break down gluten for a crust that is incredibly light and easy to digest.",
            label: "Slow Fermented",
        },
        {
            number: "03",
            title: "Mastery of Fire",
            description:
                "Stretched by hand and blasted at 450°C in our stone oven. The high heat creates the signature 'leopard spotting' and a crust that's crisp yet airy.",
            label: "High Hydration",
        },
    ];

    return (
        <section className="bg-[#1E3227] py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Dynamic Background "Bubbles" - mimicking fermentation */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/10 rounded-full animate-bubble"
                        style={{
                            width: `${Math.random() * 100 + 20}px`,
                            height: `${Math.random() * 100 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${Math.random() * 15 + 10}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content - Storyline */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-[#E25439] font-black uppercase tracking-widest text-sm">
                                The Science of Sourdough
                            </span>
                            <h2 className="text-white text-5xl md:text-6xl font-black mt-4 leading-tight">
                                Crafting the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">Perfect Rise</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {steps.map((step) => (
                                <div key={step.number} className="group relative pl-12 border-l border-white/10 hover:border-[#E25439] transition-colors pb-8 last:pb-0">
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#1E3227] border-2 border-white/20 group-hover:border-[#E25439] group-hover:scale-125 transition-all" />
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-4xl font-black text-white/10 group-hover:text-[#E25439]/20 transition-colors uppercase leading-none">
                                            {step.number}
                                        </span>
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-[#E25439] uppercase tracking-tighter">
                                            {step.label}
                                        </span>
                                    </div>
                                    <h3 className="text-white text-xl font-black uppercase mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Visual Masterpiece */}
                    <div className="relative">
                        {/* The "Watch the Rise" Mini-Video Container */}
                        <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                            >
                                <source
                                    src="https://cdn.pixabay.com/video/2021/04/12/70860-536481745_large.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E25439] flex items-center justify-center animate-pulse">
                                        <div className="w-4 h-4 bg-white rounded-full" />
                                    </div>
                                    <div>
                                        <span className="text-white font-black uppercase tracking-widest text-xs block">Live in Oven</span>
                                        <span className="text-white/60 text-[10px] font-bold uppercase">Expansion Stage: Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Health Stats */}
                        <div className="absolute top-10 -right-8 bg-white p-6 rounded-3xl shadow-2xl rotate-6 hover:rotate-0 transition-all cursor-default hidden md:block">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#E25439] font-black text-2xl">0%</span>
                                    <span className="text-black font-black uppercase text-[10px] leading-tight">Artificial <br /> Yeast</span>
                                </div>
                                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="w-0 h-full bg-[#E25439]" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -left-8 bg-[#F5F4E0] p-6 rounded-3xl shadow-2xl -rotate-6 hover:rotate-0 transition-all cursor-default text-[#1E3227]">
                            <div className="flex items-center gap-4">
                                <div className="text-black">
                                    <span className="block font-black text-2xl leading-none">48H</span>
                                    <span className="text-[10px] font-bold uppercase">Fermentation</span>
                                </div>
                                <div className="h-8 w-[1px] bg-black/10" />
                                <span className="text-black font-black uppercase text-[10px] leading-tight">Better <br /> Digestion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes bubble {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }
      `}</style>
        </section>
    );
}
