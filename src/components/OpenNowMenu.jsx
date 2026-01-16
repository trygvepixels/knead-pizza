'use client'
import React from 'react'
import Image from 'next/image'

export default function OpenNowMenu() {
    return (
        <section className="relative bg-[#1E3227] overflow-hidden py-32">
            {/* Wavy Top Divider */}
            

            {/* Scrolling Wavy Background Text */}
            <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-[0.07]">
                <style jsx>{`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes wave-y {
                        0%, 100% { transform: translateY(-30px); }
                        50% { transform: translateY(30px); }
                    }
                    .animate-scroll {
                        animation: scroll-left 30s linear infinite;
                    }
                    .animate-wave {
                        animation: wave-y 4s ease-in-out infinite;
                    }
                `}</style>
                <div className="flex whitespace-nowrap animate-scroll">
                    {[...Array(12)].map((_, i) => (
                        <span
                            key={i}
                            className="text-white text-[18rem] font-black mx-12 uppercase tracking-tighter inline-block animate-wave"
                            style={{ animationDelay: `${i * -0.4}s` }}
                        >
                            Open Now!
                        </span>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-7xl font-black text-[#F5F4E0] uppercase tracking-tighter leading-none mb-4">
                        Discover Our <span className="text-[#E25439]">Menu</span>
                    </h2>
                    <p className="text-[#F5F4E0]/60 text-lg font-medium tracking-wide uppercase">
                        Authentic Artisan Pizza
                    </p>
                </div>

                {/* Menu Image Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border-4 border-[#F5F4E0]/10 hover:border-[#E25439]/50 transition-colors duration-500">
                        <Image
                            src="/knead-menu.jpg"
                            alt="Knead Pizza Menu"
                            width={1200}
                            height={1800}
                            className="w-full h-auto object-contain scale-[1.01]"
                            priority
                        />
                        
                        {/* Interactive Overlay */}
                     </div>
                    
                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-[#F5F4E0]/80 mb-8 max-w-xl mx-auto text-lg italic">
                            "Every pizza starts with high-quality ingredients and a lot of patience."
                        </p>
                        <a 
                            href="/order" 
                            className="inline-flex items-center gap-4 px-12 py-5 bg-[#E25439] text-[#123218] rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#c94733] hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Order This Deliciousness
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
