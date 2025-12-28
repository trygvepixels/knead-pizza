"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import hero from '@/assets/hero.png'

export default function PizzaHero() {
  return (
    <>
      {/* Add Google Font */}
      <style jsx global>{`
      `}</style>

      <section className="relative pt-20 min-h-screen bg-gradient-to-br from-[#E67449] to-[#D63227] overflow-hidden">
        {/* Header */}


        {/* Main Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-12 md:py-0 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Decorative Wave */}
            <svg width="328" height="25" viewBox="0 0 328 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12.5C2 12.5 42 2 82 12.5C122 23 162 12.5 162 12.5C162 12.5 202 2 242 12.5C282 23 322 12.5 326 12.5" stroke="#FDB913" strokeWidth="4" strokeLinecap="round" />
            </svg>

            {/* Main Heading */}
            <h1 className="text-white leading-none" style={{ fontFamily: 'Nunito, sans-serif' }}>
              <div className="text-6xl md:text-8xl font-extrabold mb-2">
                The best
              </div>
              <div className="text-6xl md:text-8xl font-extrabold mb-2">
                pizza to
              </div>
              <div className="text-6xl md:text-8xl font-extrabold">
                share with
              </div>
              <div className="text-6xl md:text-8xl font-extrabold">
                friends
              </div>
            </h1>

            {/* CTA Button */}
            <button className="px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-900 transition-colors shadow-xl" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Get Your Coupon
            </button>
          </div>

          {/* Right Content - Pizza Image */}
          <div className="relative">

            {/* Pizza Image Container */}
            <div className="relative w-full aspect-square">
              {/* Pizza Image with imported hero.png */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100 to-orange-200 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
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
        </div>

        {/* Ticker Tape */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#FFF8E7] py-4 overflow-hidden">
          <div className="flex items-center gap-8 animate-scroll whitespace-nowrap">
            <span className="text-black text-2xl md:text-3xl font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>
              We have faster delivery in your town
            </span>
            <span className="text-[#E67449] text-3xl">✱</span>
            <span className="text-black text-2xl md:text-3xl font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>
              We have faster delivery in your town
            </span>
            <span className="text-[#EF4136] text-3xl">✱</span>
            <span className="text-black text-2xl md:text-3xl font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>
              We have faster delivery in your town
            </span>
            <span className="text-[#EF4136] text-3xl">✱</span>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 right-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
        }
      `}</style>
    </>
  );
}
