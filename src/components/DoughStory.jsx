"use client";

import React from "react";
import Image from "next/image";

export default function DoughStory() {
    const steps = [
        {
            number: "01",
            title: "72-Hour Patience",
            description:
                "Time is our secret ingredient. We naturally ferment our dough for 72 hours, allowing enzymes to break down gluten for a crust that is incredibly light and balanced.",
            label: "Slow Fermented",
        },
        {
            number: "02",
            title: "The Wild Starter",
            description:
                "Our journey begins with our wild sourdough starter, nurtured daily to develop a complex depth of flavour that commercial yeast simply cannot match.",
            label: "Naturally Leavened",
        },
        {
            number: "03",
            title: "Mastery of Fire",
            description:
                "Hand-kneaded and baked to perfection. The long fermentation creates a base that's easier to digest with a depth of flavour you can only achieve through patience.",
            label: "Light & Airy",
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
