"use client";

import React from "react";
import Image from "next/image";
import { FiShoppingCart, FiCheck } from "react-icons/fi";

export default function BestSellerItems() {
  const pizzaItems = [
    {
      id: 1,
      name: "HALF & HALF PIZZA",
      description: "Please choose two halves of pizza slices for the customization",
      price: "$17.40",
      originalPrice: "$20.40",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop",
      buttonText: "ADD TO CART",
      buttonIcon: FiShoppingCart,
      featured: false,
    },
    {
      id: 2,
      name: "MARGHERITA",
      description: "Cherry tomatoes, fresh tomato basil drizzle & mozzarella",
      price: "$6.40",
      originalPrice: "$20.40",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop",
      buttonText: "VIEW CART",
      buttonIcon: FiCheck,
      featured: true,
    },
    {
      id: 3,
      name: "BACON CHEESE",
      description: "Nullam ac tortor vitae purus faucibus ornare suspendisse ...",
      price: "$6.90",
      originalPrice: "$12.90",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop",
      buttonText: "ADD TO CART",
      buttonIcon: FiShoppingCart,
      featured: false,
    },
    {
      id: 4,
      name: "PEPPERONI",
      description: "Nullam ac tortor vitae purus faucibus ornare suspendisse ...",
      price: "$17.40",
      originalPrice: "$20.40",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop",
      buttonText: "ADD TO CART",
      buttonIcon: FiShoppingCart,
      featured: false,
    },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section className="relative py-20 bg-white overflow-hidden">
        {/* Top Paint Brush Stroke */}
        <div className="absolute top-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,40 Q50,10 100,40 T200,40 T300,40 T400,40 T500,40 T600,40 T700,40 T800,40 T900,40 T1000,40 T1100,40 T1200,40 L1200,0 L0,0 Z"
              fill="#E8DDD3"
              opacity="0.8"
            />
            <path
              d="M0,60 Q80,30 160,60 T320,60 T480,60 T640,60 T800,60 T960,60 T1120,60 L1200,60 L1200,0 L0,0 Z"
              fill="#E8DDD3"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Bottom Paint Brush Stroke */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,40 Q50,70 100,40 T200,40 T300,40 T400,40 T500,40 T600,40 T700,40 T800,40 T900,40 T1000,40 T1100,40 T1200,40 L1200,100 L0,100 Z"
              fill="#1a1a1a"
              opacity="0.9"
            />
            <path
              d="M0,20 Q80,50 160,20 T320,20 T480,20 T640,20 T800,20 T960,20 T1120,20 L1200,20 L1200,100 L0,100 Z"
              fill="#1a1a1a"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-bold text-[#8B2E1F] mb-4"
              style={{ fontFamily: "Bebas Neue, sans-serif", letterSpacing: "2px" }}
            >
              OUR BEST SELLER ITEMS
            </h2>
            {/* Decorative Underline */}
            <div className="flex justify-center">
              <svg width="200" height="8" viewBox="0 0 200 8" fill="none">
                <path
                  d="M2 4C2 4 50 1 100 4C150 7 198 4 198 4"
                  stroke="#F5A623"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Pizza Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {pizzaItems.map((item) => {
              const ButtonIcon = item.buttonIcon;

              return (
                <div
                  key={item.id}
                  className={`relative group ${
                    item.featured ? "lg:scale-105 z-20" : ""
                  }`}
                >
                  {/* Featured Background */}
                  {item.featured && (
                    <div className="absolute -inset-8 -z-10">
                      {/* Paint Stroke Background */}
                      <svg
                        viewBox="0 0 300 400"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M50,20 Q80,10 120,25 L250,40 Q280,45 270,80 L260,350 Q258,380 230,375 L70,360 Q40,355 45,325 L55,60 Q52,30 50,20 Z"
                          fill="#8B2E1F"
                          opacity="0.95"
                        />
                      </svg>

                      {/* Heart Icon */}
                      <div className="absolute top-8 right-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="white"
                          opacity="0.9"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div
                    className={`relative text-center ${
                      item.featured ? "pt-8" : ""
                    }`}
                  >
                    {/* Pizza Image */}
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <div
                        className={`absolute inset-0 rounded-full ${
                          item.featured ? "ring-4 ring-white/30" : "ring-2 ring-gray-200"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>

                    {/* Pizza Name */}
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        item.featured ? "text-white" : "text-[#2D1810]"
                      }`}
                      style={{
                        fontFamily: "Bebas Neue, sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-xs mb-4 px-2 min-h-[40px] ${
                        item.featured ? "text-white/90" : "text-gray-600"
                      }`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.description}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <span
                        className={`text-2xl font-bold ${
                          item.featured ? "text-white" : "text-[#8B2E1F]"
                        }`}
                        style={{ fontFamily: "Bebas Neue, sans-serif" }}
                      >
                        {item.price}
                      </span>
                      <span
                        className={`ml-2 text-lg line-through ${
                          item.featured ? "text-white/60" : "text-gray-400"
                        }`}
                        style={{ fontFamily: "Bebas Neue, sans-serif" }}
                      >
                        {item.originalPrice}
                      </span>
                    </div>

                    {/* Button */}
                    <button
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg ${
                        item.featured
                          ? "bg-white text-[#8B2E1F] hover:bg-gray-100"
                          : "bg-[#F5A623] text-white hover:bg-[#E09200]"
                      }`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      <ButtonIcon className="text-lg" />
                      <span>{item.buttonText}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Items Button */}
          <div className="text-center">
            <button
              className="px-12 py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
              style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "1px" }}
            >
              VIEW ALL ITEMS
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
