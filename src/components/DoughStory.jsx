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
