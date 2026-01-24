"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Subscribed:", email);
        setEmail("");
    };

    return (
        <>
            {/* Google Fonts */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>

            <footer className="relative bg-[#E8DDD3] overflow-hidden">
                {/* Top Paint Brush Stroke */}
                <div className="absolute top-0 left-0 right-0 h-16 z-10">
                    <svg
                        viewBox="0 0 1200 80"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        <path
                            d="M0,40 Q30,5 80,30 Q150,65 220,35 Q290,5 360,40 Q430,75 500,35 Q570,0 640,40 Q710,80 780,40 Q850,0 920,35 Q990,70 1060,40 Q1130,10 1200,40 L1200,0 L0,0 Z"
                            fill="#1E3227"
                        />
                    </svg>
                </div>

                {/* Main Footer Content */}
                <div className="relative z-20 bg-[#1E3227] pt-24 pb-8">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        {/* Top Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                            {/* Logo & Description */}
                            <div className="flex flex-col items-center">
                                <div className="mb-6">
                                    <div className="relative h-16 w-40 brightnes s-0 inv ert">
                                        <Image
                                            src="/logo.png"
                                            alt="Knead Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <p
                                    className="text-gray-400 text-sm leading-relaxed max-w-xs mb-4 text-center"
                                    style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                    <strong className="text-white text-base block mb-2 text-center">Artisan Sourdough Pizza</strong>
                                    Authentic Neopolitan pizza made with passion
                                </p>
                                <p className="text-[#E25439] font-black uppercase tracking-widest text-sm text-center">
                                    Open Now in Henley Beach! 🍕
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h4
                                    className="text-white text-2xl font-bold mb-6"
                                    style={{
                                        fontFamily: "Bebas Neue, sans-serif",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    CONTACT
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="text-[#E25439] mt-1 flex-shrink-0 text-lg" />
                                        <p
                                            className="text-gray-300 text-sm font-medium"
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            Shop 3, 269 Seaview Road,<br />
                                            Henley Beach, 5022
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-[#E25439] flex-shrink-0 text-lg" />
                                        <a href="tel:0466477713"
                                            className="text-gray-300 text-sm hover:text-[#E25439] transition-colors font-semibold"
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            0466 477 713
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-[#E25439] flex-shrink-0 text-lg" />
                                        <a
                                            href="mailto:ikneadpizzahenleybeach@gmail.com"
                                            className="text-gray-300 text-sm hover:text-[#E25439] transition-colors"
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            ikneadpizzahenleybeach@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div>
                                <h4
                                    className="text-white text-2xl font-bold mb-6"
                                    style={{
                                        fontFamily: "Bebas Neue, sans-serif",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    NEWSLETTERS
                                </h4>
                                <p
                                    className="text-gray-400 text-sm mb-6"
                                    style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                    Sign up now for exclusive savings and the latest news sent straight to your inbox.
                                </p>
                                <form onSubmit={handleSubscribe} className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email..."
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#E25439] transition-colors"
                                        style={{ fontFamily: "Poppins, sans-serif" }}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#E25439] rounded-lg hover:opacity-90 transition-colors"
                                    >
                                        <FaArrowRight className="text-white" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-dotted border-gray-700 mb-8" />

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Copyright */}
                            <p
                                className="text-gray-500 text-sm"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                © {new Date().getFullYear()} Knead Pizzeria Henley Beach. All Rights Reserved
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://www.instagram.com/ikneadpizzahenleybeach"
                                    target="_blank"
                                    className="w-10 h-10 rounded-lg border-2 border-[#E25439] flex items-center justify-center text-[#E25439] hover:bg-[#E25439] hover:text-[#F5F4E0] transition-all"
                                    title="@ikneadpizzahenleybeach"
                                >
                                    <FaInstagram className="text-lg" />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/kneadpizzeriahenleybeach"
                                    target="_blank"
                                    className="w-10 h-10 rounded-lg border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#E25439] hover:text-[#E25439] transition-all"
                                >
                                    <FaFacebookF className="text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
