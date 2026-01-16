"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import heroPizza from "@/assets/hero.png"; // Reusing the high-quality pizza image

export default function PromoGrid() {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Simple mock countdown for "Limited Time" vibe
        const target = new Date();
        target.setHours(target.getHours() + 4);

        const timer = setInterval(() => {
            const now = new Date();
            const diff = target - now;

            if (diff <= 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#F5F4E0] py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Main Large Promo Card */}
                    <div className="lg:col-span-8 relative bg-[#1E3227] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 overflow-hidden group">
                        <div className="relative z-10 flex-1 space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-[#E25439] text-[#F5F4E0] rounded-full text-xs font-black uppercase tracking-widest">
                                Deal of the week
                            </div>
                            <h2 className="text-white text-5xl md:text-7xl font-black leading-tight uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Double <br />
                                Trouble <br />
                                <span className="text-[#E25439]">BOGO!</span>
                            </h2>
                            <p className="text-[#F5F4E0]/60 text-lg max-w-sm font-medium">
                                Buy any Large Gourmet Sourdough Pizza and get a Traditional Pizza <span className="text-white font-bold">FREE</span>.
                            </p>
                            <button className="flex items-center gap-3 bg-[#F5F4E0] text-[#1E3227] px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-[#E25439] hover:text-[#F5F4E0] transition-all hover:translate-x-2">
                                Claim Offer <HiOutlineArrowNarrowRight size={20} />
                            </button>
                        </div>

                        {/* Overlapping Pizza Image */}
                        <div className="relative flex-1 w-full h-[300px] md:h-full min-h-[400px]">
                            <div className="absolute -right-20 md:-right-40 top-1/2 -translate-y-1/2 w-[120%] aspect-square animate-float">
                                <Image
                                    src={heroPizza}
                                    alt="Promo Pizza"
                                    fill
                                    className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] group-hover:rotate-12 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Decorative Overlay */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E25439]/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Side Stack of Promo Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-8">

                        {/* Countdown Card */}
                        <div className="bg-[#F5F4E0] rounded-[40px] p-8 flex flex-col justify-between items-center text-center relative overflow-hidden group cursor-pointer h-1/2 min-h-[250px] border border-[#1E3227]/10 shadow-xl">
                            <div className="relative z-10 text-[#1E3227]">
                                <span className="text-[#1E3227]/60 font-black uppercase tracking-widest text-xs mb-4 block">Ends in</span>
                                <div className="flex gap-4">
                                    {Object.entries(timeLeft).map(([label, value]) => (
                                        <div key={label} className="flex flex-col">
                                            <span className="text-4xl md:text-5xl font-black text-[#1E3227] leading-none">
                                                {value.toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-[10px] font-bold uppercase text-[#1E3227]/40 mt-1">{label}</span>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="mt-6 text-2xl font-black text-[#1E3227] uppercase leading-tight">
                                    Flash Sale <br /> On Drinks!
                                </h3>
                            </div>
                            {/* Background Shapes */}
                            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-black/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        </div>

                        {/* Family Pack Pack */}
                        <div className="bg-[#E25439] rounded-[40px] p-8 flex flex-col justify-between items-start relative overflow-hidden group cursor-pointer h-1/2 min-h-[250px]">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-[#F5F4E0] uppercase leading-tight mb-2">
                                    Family <br /> Pack!
                                </h3>
                                <p className="text-[#F5F4E0]/80 font-bold mb-4">Starting at $49.00</p>
                                <div className="w-12 h-12 rounded-full bg-[#F5F4E0] flex items-center justify-center text-[#E25439] group-hover:translate-x-2 transition-transform">
                                    <HiOutlineArrowNarrowRight size={24} />
                                </div>
                            </div>
                            {/* Decorative Cut-out Shape */}
                            <div className="absolute bottom-[-50px] right-[-50px] w-48 h-48 bg-black/10 rounded-full group-hover:translate-y-[-20px] transition-transform duration-700" />
                        </div>

                    </div>

                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(-50%) rotate(0deg); }
          50% { transform: translateY(-55%) rotate(5deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
