"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images from assets
import calabrese from "@/assets/KneadPizzerriaHenleyBeach_Calabrese-removebg-preview.png";
import margherita from "@/assets/KneadPizzerriaHenleyBeach_Margheritaaaaaa-removebg-preview.png";
import mrsPotato from "@/assets/KneadPizzerriaHenleyBeach_MrsPotato-removebg-preview.png";
import pumpkinPower from "@/assets/KneadPizzerriaHenleyBeach_PumpkinPower-removebg-preview.png";

const PIZZAS = [
  { 
    name: "Calabrese", 
    img: calabrese,
    rotate: "-3deg",
    delay: 0
  },
  { 
    name: "Margherita", 
    img: margherita,
    rotate: "2deg",
    delay: 0.15
  },
  { 
    name: "Mrs Potato", 
    img: mrsPotato,
    rotate: "-2deg",
    delay: 0.3
  },
  { 
    name: "Pumpkin Power", 
    img: pumpkinPower,
    rotate: "3deg",
    delay: 0.45
  },
];

export default function PizzaShowcase() {
  return (
    <section className="relative bg-[#F5F7E0] py-20 md:py-32 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #123218 0px, #123218 2px, transparent 2px, transparent 10px)`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Playful Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="relative inline-block">
            <h2 
              className="text-7xl md:text-9xl font-black text-[#123218] uppercase relative z-10"
              style={{ 
                fontFamily: "'Bebas Neue', sans-serif", 
                letterSpacing: "0.02em",
                textShadow: "4px 4px 0px #E25439"
              }}
            >
              Our Pizzas
            </h2>
          </div>
          <p className="mt-6 text-[#123218] text-lg md:text-xl font-bold uppercase tracking-[0.2em]">
            Fresh • Authentic • Delicious
          </p>
        </motion.div>

        {/* Stacked Polaroid-Style Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PIZZAS.map((pizza, index) => (
            <motion.div
              key={pizza.name}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: pizza.rotate }}
              viewport={{ once: true }}
              transition={{ 
                delay: pizza.delay,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotate: "0deg",
                scale: 1.05,
                zIndex: 20,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              style={{ 
                transformOrigin: "center center"
              }}
            >
              {/* Polaroid Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Image Area */}
                <div className="relative aspect-square bg-[#F5F7E0] p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={pizza.img}
                      alt={pizza.name}
                      fill
                      className="object-contain drop-shadow-[0_25px_35px_rgba(18,50,24,0.15)]"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Caption Area */}
                <div className="p-8 bg-white">
                  <h3 
                    className="text-4xl md:text-5xl font-black text-[#123218] uppercase mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {pizza.name}


                    
                  </h3>
                  
                  
                </div>
              </div>

              {/* Decorative Tape Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#E25439]/20 backdrop-blur-sm rounded-sm -z-10 group-hover:bg-[#E25439]/30 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-3 bg-white rounded-full shadow-lg">
            <p className="text-[#123218] text-sm font-black uppercase tracking-[0.3em]">
              ✨ Made with Love ✨
            </p>
          </div>
        </motion.div>
      </div>

      {/* Global Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
}
