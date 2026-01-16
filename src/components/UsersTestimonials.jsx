"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

export default function UsersTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "MARTIN GOUTRY",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "« Dico is finally addressing a long time problem we had when building Uis. It's ease of use and workflow seems really intuitive. Promising! »",
      date: "Dico user, 2021.03.02",
      position: { top: "10%", left: "35%" },
      size: "large",
    },
    {
      id: 2,
      name: "THEO CHAMPION",
      avatar: "https://i.pravatar.cc/150?img=33",
      text: "« Dico is finally addressing a long time problem we had when building Uis. It's ease of use and workflow seems really intuitive. Promising! »",
      date: "Dico user, 2021.03.02",
      position: { top: "25%", left: "5%" },
      size: "medium",
    },
    {
      id: 3,
      name: "AGNES REMI",
      avatar: "https://i.pravatar.cc/150?img=45",
      text: "« Dico is finally addressing a long time problem we had when building Uis. It's ease of use and workflow seems really intuitive. Promising! »",
      date: "Dico user, 2021.03.02",
      position: { top: "35%", left: "50%" },
      size: "large",
    },
    {
      id: 4,
      name: "AGNES REMI",
      avatar: "https://i.pravatar.cc/150?img=47",
      text: "« Dico is finally addressing a long time problem we had wh Promising! »",
      date: "Dico user, 2021",
      position: { top: "50%", left: "12%" },
      size: "small",
    },
    {
      id: 5,
      name: "ROMAN ATWOODS",
      avatar: "https://i.pravatar.cc/150?img=68",
      text: "« Dico is finally addressing a long time problem we had when building Uis. It's ease of use and workflow seems really intuitive. Promising! »",
      date: "Dico user, 2021.03.02",
      position: { top: "62%", left: "32%" },
      size: "medium",
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "w-80 md:w-96";
      case "medium":
        return "w-64 md:w-72";
      case "small":
        return "w-56 md:w-64";
      default:
        return "w-72";
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

      <section className="relative min-h-screen bg-[#F5F4E0] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-black text-[#E25439] mb-4"
              style={{
                fontFamily: "Bebas Neue, sans-serif",
                letterSpacing: "2px",
              }}
            >
              USERS TESTIMONIALS
            </h2>
            {/* Decorative Underline */}
            <div className="flex justify-center">
              <svg width="200" height="8" viewBox="0 0 200 8" fill="none">
                <path
                  d="M2 4C2 4 50 1 100 4C150 7 198 4 198 4"
                  stroke="#1E3227"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Testimonials - Scattered Layout */}
          <div className="relative h-[600px] md:h-[700px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute ${getSizeClasses(testimonial.size)} group`}
                style={{
                  top: testimonial.position.top,
                  left: testimonial.position.left,
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index * 2)}deg)`,
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200/50"
                  style={{
                    transform: "rotate(0deg)",
                  }}
                >
                  {/* Avatar and Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#E25439]/20">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-[#1E3227]"
                      style={{
                        fontFamily: "Bebas Neue, sans-serif",
                        letterSpacing: "1px",
                      }}
                    >
                      {testimonial.name}
                    </h3>
                  </div>

                  {/* Testimonial Text */}
                  <p
                    className="text-gray-700 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {testimonial.text}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FaCalendarAlt className="text-[#E25439]" />
                    <span style={{ fontFamily: "Poppins, sans-serif" }}>
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-white/20 rounded-full blur-3xl -z-10" />
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(0px) translateX(-5px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
        }
      `}</style>
    </>
  );
}
