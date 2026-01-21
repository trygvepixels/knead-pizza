"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="min-h-screen  bg-[#F5F4E0] font-sans overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden pointer-events-none -z-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-[#E25439]/5 rounded-full"
                />

            </div>

            {/* Hero Section */}
            <section className="pt-20 pb-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-[#E25439] uppercase leading-none mb-6"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
                    >
                        LET'S GET <br className="hidden md:block" /> IN TOUCH
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#1E3227]/70 text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest italic"
                    >
                        Questions, cravings, or just want to say hi? <br /> We're all ears (and taste buds).
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-[#1E3227]/5 relative"
                    >
                        {/* Form Header */}
                        <h2 className="text-3xl font-black text-[#1E3227] uppercase mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            Send us a Message
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-[#1E3227] uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-[#F5F4E0]/50 border-2 border-transparent focus:border-[#E25439] rounded-2xl px-6 py-4 outline-none transition-all font-medium text-[#1E3227] placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-[#1E3227] uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-[#F5F4E0]/50 border-2 border-transparent focus:border-[#E25439] rounded-2xl px-6 py-4 outline-none transition-all font-medium text-[#1E3227] placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#1E3227] uppercase tracking-widest ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="What's this about?"
                                    className="w-full bg-[#F5F4E0]/50 border-2 border-transparent focus:border-[#E25439] rounded-2xl px-6 py-4 outline-none transition-all font-medium text-[#1E3227] placeholder:text-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-[#1E3227] uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Type your message here..."
                                    className="w-full bg-[#F5F4E0]/50 border-2 border-transparent focus:border-[#E25439] rounded-2xl px-6 py-4 outline-none transition-all font-medium text-[#1E3227] placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 bg-[#E25439] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-lg shadow-xl hover:bg-[#1E3227] transition-colors duration-300"
                            >
                                Send Dough-licious Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Details & Info */}
                    <div className="space-y-12">

                        {/* Quick Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <FaPhoneAlt />, label: "Call Us", value: "0412 345 678", color: "bg-blue-50 text-blue-600" },
                                { icon: <FaEnvelope />, label: "Email Us", value: "ikneadpizzahenleybeach@gmail.com", color: "bg-purple-50 text-purple-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-[2rem] shadow-lg border border-[#1E3227]/5 group hover:border-[#E25439]/30 transition-all"
                                >
                                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</h3>
                                    <p className="text-[#1E3227] font-bold text-base md:text-lg break-all sm:break-words">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Address Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-[#1E3227] p-8 md:p-10 rounded-[2.5rem] text-[#F5F4E0] relative overflow-hidden group shadow-2xl"
                        >
                            <FaMapMarkerAlt className="absolute -bottom-10 -right-10 text-[15rem] text-white/5 group-hover:text-white/10 transition-all duration-700 -rotate-12" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#E25439] rounded-xl flex items-center justify-center text-xl shadow-lg">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h3 className="text-3xl font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Visit the Pizzeria</h3>
                                </div>
                                <p className="text-xl font-medium leading-relaxed max-w-md opacity-80 uppercase italic">
                                    123 Henely Beach Road, <br />
                                    Henley Beach, SA 5022 <br />
                                    Adelaide, Australia
                                </p>
                            </div>
                        </motion.div>

                        {/* Opening Hours & Socials */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <FaClock className="text-[#E25439] text-xl" />
                                    <h3 className="text-xl font-black text-[#1E3227] uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Opening Hours</h3>
                                </div>
                                <div className="space-y-2 opacity-70 font-bold uppercase text-sm tracking-wide">
                                    <div className="flex justify-between border-b border-[#1E3227]/10 pb-2">
                                        <span>Mon - Fri</span>
                                        <span>17:00 - 21:30</span>
                                    </div>
                                    <div className="flex flex-col border-b border-[#1E3227]/10 pb-2 text-[#E25439]">
                                        <div className="flex justify-between">
                                            <span>Sat - Sun</span>
                                            <span>12:00 - 15:00</span>
                                        </div>
                                        <div className="flex justify-end">
                                            <span>17:00 - 21:30</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-black text-[#1E3227] uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Follow the Sauce</h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <FaInstagram />, link: "https://instagram.com" },
                                        { icon: <FaFacebookF />, link: "https://facebook.com" }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 bg-white border border-[#1E3227]/5 shadow-md flex items-center justify-center rounded-2xl text-[#1E3227] text-2xl hover:bg-[#E25439] hover:text-white transition-all transform hover:-translate-y-2"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Decorative Styles */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
        </div>
    );
}
