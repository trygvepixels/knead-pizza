"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaHeart, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GiFullPizza, GiBreadSlice, GiNoodles, GiChiliPepper, GiGlassShot, GiCakeSlice, GiHotMeal } from "react-icons/gi";

export default function DailyZoneMenu() {
    const scrollRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("Pizza");

    const categories = [
        { name: "Pizza", icon: <GiFullPizza size={32} /> },
        { name: "Sourdough", icon: <GiBreadSlice size={32} /> },
        { name: "Pasta", icon: <GiNoodles size={32} /> },
        { name: "Burgers", icon: <GiChiliPepper size={32} /> },
        { name: "Soups", icon: <GiHotMeal size={32} /> },
        { name: "Desserts", icon: <GiCakeSlice size={32} /> },
        { name: "Drinks", icon: <GiGlassShot size={32} /> },
    ];

    const menuData = {
        Pizza: [
            {
                id: 1,
                name: "Burrata & Me",
                price: "28.00",
                rating: "5.0",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop",
                bgColor: "bg-[#F37070]",
                shadowColor: "shadow-[#F37070]/30",
            },
            {
                id: 2,
                name: "Pepperoni",
                price: "26.00",
                rating: "4.9",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
                bgColor: "bg-[#F58F29]",
                shadowColor: "shadow-[#F58F29]/30",
            },
            {
                id: 3,
                name: "Henley Med",
                price: "28.00",
                rating: "5.0",
                image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=400&fit=crop",
                bgColor: "bg-[#6BCB36]",
                shadowColor: "shadow-[#6BCB36]/30",
            },
            {
                id: 4,
                name: "Margheritaaaaa",
                price: "22.00",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=400&h=400&fit=crop",
                bgColor: "bg-[#615CEF]",
                shadowColor: "shadow-[#615CEF]/30",
            },
        ],
        Sourdough: [
            {
                id: 5,
                name: "Freshly Baked",
                price: "15.00",
                rating: "5.0",
                image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
                bgColor: "bg-[#F37070]",
                shadowColor: "shadow-[#F37070]/30",
            }
        ],
        // Additional categories can be populated as needed
    };

    const currentItems = menuData[selectedCategory] || menuData["Pizza"];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-[#F5F4E0] py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative bg-white rounded-[60px] p-8 md:p-16 shadow-2xl shadow-orange-100/50">
                    
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2
                            className="text-5xl md:text-7xl font-black text-[#1E3227] mb-4"
                            style={{
                                fontFamily: "Dela Gothic One, sans-serif",
                                letterSpacing: "1px",
                            }}
                        >
                            OUR MENU
                        </h2>
                        <p
                            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Hand-stretched artisan pizzas made fresh daily in <br className="hidden md:block" /> Henley Beach
                        </p>

                        {/* Decorative Underline */}
                        <div className="flex justify-center mt-6">
                            <svg width="280" height="12" viewBox="0 0 280 12" fill="none">
                                <path
                                    d="M2 6C2 6 70 2 140 6C210 10 278 6 278 6"
                                    stroke="#E25439"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Menu Category Toggle */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-1 border-b border-gray-100 pb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setSelectedCategory(cat.name)}
                                className={`flex flex-col items-center gap-3 group transition-all duration-300 ${
                                    selectedCategory === cat.name ? "opacity-100 scale-110" : "opacity-40 hover:opacity-100"
                                }`}
                            >
                                <div className={`transition-all duration-300 ${
                                    selectedCategory === cat.name ? "text-[#E25439]" : "text-[#1E3227]/60"
                                }`}>
                                    {/* Icon container */}
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        {cat.icon}
                                    </div>
                                </div>
                                <span className={`text-sm font-bold uppercase tracking-widest ${
                                    selectedCategory === cat.name ? "text-[#1E3227]" : "text-[#1E3227]/40"
                                }`}>
                                    {cat.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-[-28px] top-[65%] -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1E3227] hover:bg-[#E25439] hover:text-white transition-all duration-300 z-20 border border-gray-100 hidden md:flex"
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-[-28px] top-[65%] -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#1E3227] hover:bg-[#E25439] hover:text-white transition-all duration-300 z-20 border border-gray-100 hidden md:flex"
                    >
                        <FaChevronRight size={20} />
                    </button>

                    {/* Cards Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-10 pb-12 pt-20 no-scrollbar snap-x snap-mandatory px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {currentItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex-none w-[280px] snap-center group"
                            >
                                <div className={`relative ${item.bgColor} ${item.shadowColor} shadow-2xl rounded-[45px] pt-24 pb-8 px-8 transition-transform duration-300 group-hover:-translate-y-2`}>

                                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border-[10px] border-white/30 p-1 group-hover:scale-105 transition-transform duration-500">
                                        <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-white">
                                        <h3 className="text-2xl font-black mb-1 opacity-95" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.name}</h3>
                                        <div className="flex items-center justify-between mb-8">
                                            <span className="text-3xl font-black font-serif">${item.price}</span>
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white hover:text-red-500 transition-all">
                                                <FaHeart size={16} />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <button className="flex items-center gap-2 bg-white text-[#1E3227] px-6 py-2.5 rounded-full text-[13px] font-black shadow-lg hover:bg-gray-50 transition-all active:scale-95">
                                                Order Now
                                                <HiOutlineArrowNarrowRight size={16} className="text-[#E25439] stroke-2" />
                                            </button>
                                            <div className="flex items-center gap-1 font-black text-sm">
                                                <FaStar className="text-white text-xs" />
                                                <span>{item.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Arrows */}
                    <div className="flex md:hidden justify-center gap-6 mt-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}


