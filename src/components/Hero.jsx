"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from '@/assets/hero.png'

export default function PizzaHero() {
  return (
    <>
      {/* Add Google Font and Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-pizza-slow {
          animation: spin-slow 80s linear infinite;
        }
      `}</style>

      <section className="relative min-h-screen bg-[#E25439] overflow-hidden flex items-center ">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-6 md:px-12 max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Decorative Wave */}
            <div className="w-24">
              <svg width="100%" height="20" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
                <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="#F5F4E0" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-6xl md:text-[5.5rem] font-[900] leading-[1.05] tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              The best<br />
              pizza to<br />
              share with<br />
              friends
            </h1>

            {/* CTA Button & Stamp Row */}
            <div className="flex items-center gap-12 pt-4">
              <a
                href="https://knead-pizzerria.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#1E3227] text-[#F5F4E0] rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl inline-block"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Order Now
              </a>

              {/* Halal Stamp Placeholder Rendering */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-[#F5F4E0]/30 border-dashed animate-spin-slow"></div>
                <div className="w-28 h-28 rounded-full border-4 border-[#F5F4E0] flex flex-center text-center p-2 rotate-12">
                  <div className="flex flex-col items-center justify-center w-full h-full border-2 border-[#F5F4E0] rounded-full">
                    <span className="text-[#F5F4E0] text-[0.6rem] font-bold uppercase tracking-widest">100% </span>
                    <span className="text-[#F5F4E0] text-sm font-black uppercase">Fresh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Pizza Image */}
          <div className="relative h-[600px] md:h-[800px] flex items-center">
            <div className="absolute right-[-20%] md:right-[-30%] w-[120%] aspect-square max-w-[900px]">
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-[20px] ring-white/10 animate-pizza-slow">
                <Image
                  src={hero}
                  alt="Delicious Pizza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ticker Tape Ribbon */}
        <div className="absolute bottom-6 left-0 right-0 py-8 bg-[#F5F4E0] -rotate-2 scale-110 origin-center z-20 shadow-xl overflow-hidden">
          <div className="flex items-center gap-12 animate-scroll whitespace-nowrap px-4">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-[#1E3227] text-3xl md:text-4xl font-black uppercase tracking-tighter" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  faster delivery in your town
                </span>
                <span className="text-[#E25439] text-4xl">✱</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-black/10 rounded-full blur-[120px]" />
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
      `}</style>
    </>
  );
}
