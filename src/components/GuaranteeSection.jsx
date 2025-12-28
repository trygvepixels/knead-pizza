"use client";

import React from "react";
import Image from "next/image";

export default function GuaranteeSection() {
  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&family=Pacifico&display=swap');
      `}</style>

      <section className="relative bg-[#E8DDD3] overflow-hidden">
        {/* Top Paint Brush Stroke */}
        <div className="absolute top-0 left-0 right-0 h-20 z-10">
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,50 Q30,10 80,40 Q150,80 220,45 Q290,10 360,50 Q430,90 500,45 Q570,5 640,50 Q710,95 780,50 Q850,5 920,45 Q990,85 1060,50 Q1130,15 1200,50 L1200,0 L0,0 Z"
              fill="#1a1a1a"
            />
          </svg>
        </div>

        {/* Bottom Paint Brush Stroke */}
        <div className="absolute bottom-0 left-0 right-0 h-20 z-10">
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,50 Q30,90 80,60 Q150,20 220,55 Q290,90 360,50 Q430,10 500,55 Q570,95 640,50 Q710,5 780,50 Q850,95 920,55 Q990,15 1060,50 Q1130,85 1200,50 L1200,100 L0,100 Z"
              fill="#1a1a1a"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-20 min-h-[600px] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="relative z-20">
                {/* Badge */}
                <div className="mb-6">
                  <span
                    className="text-[#F5A623] text-lg font-medium"
                    style={{ fontFamily: "Pacifico, cursive" }}
                  >
                    30 minutes Delivery!
                  </span>
                </div>

                {/* Main Heading */}
                <h1
                  className="text-white text-7xl md:text-8xl font-bold mb-6 leading-none"
                  style={{
                    fontFamily: "Bebas Neue, sans-serif",
                    letterSpacing: "3px",
                  }}
                >
                  GUARANTEE
                </h1>

                {/* Description */}
                <p
                  className="text-white/80 text-lg mb-8 max-w-md"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Food, treats and drinks full of big and bold back yard flavor. Take your pick.
                </p>

                {/* CTA Button */}
                <div className="relative inline-block">
                  <button
                    className="px-8 py-4 bg-[#F5A623] text-white rounded-full font-bold text-sm hover:bg-[#E09200] transition-all duration-300 hover:scale-105 shadow-xl"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    VIEW ALL ITEMS
                  </button>

                  {/* Hand-drawn Arrow */}
                  <svg
                    className="absolute -right-16 top-1/2 -translate-y-1/2 w-16 h-16"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M10,50 Q30,20 50,50 T90,50"
                      stroke="#F5A623"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M75,35 L90,50 L75,65"
                      stroke="#F5A623"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Pizza Image - Left Side */}
                <div className="absolute -left-20 bottom-0 w-80 h-80 hidden lg:block">
                  <div className="relative w-full h-full">
                    {/* Wooden Board */}
                    <div className="absolute bottom-0 left-0 w-72 h-16 bg-gradient-to-br from-[#8B4513] to-[#654321] rounded-full transform -rotate-12" />
                    
                    {/* Pizza */}
                    <div className="absolute bottom-8 left-4 w-64 h-64">
                      <img
                        src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop"
                        alt="Pizza"
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>

                    {/* Tomato */}
                    <div className="absolute bottom-4 right-12 w-12 h-12">
                      <img
                        src="https://images.unsplash.com/photo-1546470427-227fc1e5a990?w=100&h=100&fit=crop"
                        alt="Tomato"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>

                    {/* Bell Pepper */}
                    <div className="absolute bottom-2 right-0 w-14 h-14">
                      <img
                        src="https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=100&h=100&fit=crop"
                        alt="Pepper"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Mushrooms */}
                    <div className="absolute bottom-0 left-0 w-10 h-10">
                      <img
                        src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=100&h=100&fit=crop"
                        alt="Mushroom"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Basil Leaves */}
                    <div className="absolute bottom-8 left-0 w-8 h-8">
                      <img
                        src="https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=100&h=100&fit=crop"
                        alt="Basil"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Delivery Guy */}
              <div className="relative">
                <div className="relative w-full h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=800&fit=crop"
                    alt="Delivery Person"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Black Background Overlay */}
          <div className="absolute inset-0 bg-black -z-10" />

          {/* Decorative Paint Splashes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
