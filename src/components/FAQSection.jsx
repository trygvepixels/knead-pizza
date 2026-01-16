'use client'
import React from 'react'
import { FaInstagram, FaFacebookF, FaClock, FaLeaf, FaWheatAwnCircleExcl, FaMotorcycle, FaStore } from 'react-icons/fa6'
import Link from 'next/link'

const FAQSection = () => {
    return (
        <section className="py-24 bg-[#F5F4E0]">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-8xl font-black text-[#1E3227] uppercase tracking-tighter mb-4">
                        Know Your <span className="text-[#E25439]">Knead</span>
                    </h2>
                    <p className="text-[#1E3227]/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Everything you need to know about our hours, ingredients, and the best way to enjoy our pizza.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Column 1: Opening Hours & Catering */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Opening Hours Card */}
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#1E3227]/5">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-[#E25439] text-white rounded-2xl">
                                    <FaClock size={24} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-[#1E3227]">Opening Hours</h3>
                            </div>
                            <div className="space-y-6">
                                <p className="text-[#E25439] font-bold text-lg">Open 7 Days a week</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-[#1E3227]/5">
                                        <span className="font-bold text-[#1E3227]/60 uppercase text-sm tracking-widest">Mon - Thu</span>
                                        <span className="font-black text-[#1E3227]">16:00 – 21:00</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-[#1E3227]/5">
                                        <span className="font-bold text-[#1E3227]/60 uppercase text-sm tracking-widest">Friday</span>
                                        <span className="font-black text-[#1E3227]">16:00 – 21:30</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-[#1E3227]/60 uppercase text-sm tracking-widest">Sat - Sun</span>
                                        <span className="font-black text-[#1E3227]">12:00 – 21:30</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Catering & Socials Card */}
                        <div className="bg-[#1E3227] p-8 rounded-[2.5rem] text-[#F5F4E0] shadow-xl">
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Catering & Bookings</h3>
                            <p className="opacity-80 mb-8 leading-relaxed">
                                We currently don’t offer off-site catering, our locations are walk-in only.
                            </p>
                            <p className="font-bold uppercase text-sm tracking-[0.2em] text-[#E25439] mb-4">Follow our journey</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E25439] hover:border-[#E25439] transition-all">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E25439] hover:border-[#E25439] transition-all">
                                    <FaFacebookF size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Dietary Information */}
                    <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-[#1E3227]/5">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-[#1E3227] text-white rounded-2xl">
                                <FaLeaf size={24} />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tight text-[#1E3227]">Allergens & Dietary Information</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-2">
                                <h4 className="flex items-center gap-2 font-black uppercase text-[#E25439] tracking-widest text-sm">
                                    <FaLeaf /> Gluten-Free
                                </h4>
                                <p className="text-[#1E3227]/70 text-sm leading-relaxed">
                                    We offer Homemade gluten-free base. However, please note our kitchen isn’t entirely gluten-free, so cross-contamination is possible.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="flex items-center gap-2 font-black uppercase text-[#1E3227] tracking-widest text-sm">
                                    <FaLeaf /> Vegan
                                </h4>
                                <p className="text-[#1E3227]/70 text-sm leading-relaxed">
                                    We have vegan pizzas with plant-based toppings and dairy-free cheese available upon request.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="flex items-center gap-2 font-black uppercase text-[#E25439] tracking-widest text-sm">
                                    <FaLeaf /> Halal
                                </h4>
                                <p className="text-[#1E3227]/70 text-sm leading-relaxed">
                                    We offer Halal-certified options; please let us know when ordering.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="flex items-center gap-2 font-black uppercase text-[#1E3227] tracking-widest text-sm">
                                    Dairy-Free
                                </h4>
                                <p className="text-[#1E3227]/70 text-sm leading-relaxed">
                                    We have dairy-free Fior di latte, which is soy based and available for all pizzas.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#1E3227]/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#F5F4E0]/50 p-6 rounded-2xl">
                                <p className="text-sm font-bold text-[#1E3227] flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#E25439]"></span>
                                    Pasteurised Milk
                                </p>
                                <p className="text-xs text-[#1E3227]/60">All our cheese is made from pasteurised milk.</p>
                            </div>
                            <div className="bg-[#F5F4E0]/50 p-6 rounded-2xl">
                                <p className="text-sm font-bold text-[#1E3227] flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#E25439]"></span>
                                    No Garlic/Onion base
                                </p>
                                <p className="text-xs text-[#1E3227]/60">Our tomato sauce is free of onions and garlic.</p>
                            </div>
                        </div>

                        <div className="mt-8 bg-[#E25439]/5 p-6 rounded-[2rem] border border-[#E25439]/10">
                            <p className="text-[#1E3227] text-sm font-medium text-center">
                                <strong>Important Note:</strong> We use some seasonings on toppings & nuts may be present. Please inform our staff of any allergies when ordering.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: The Delivery Truth - Wide Card */}
                    <div className="lg:col-span-12 mt-4">
                        <div className="relative overflow-hidden bg-white rounded-[3rem] shadow-sm border border-[#1E3227]/5 group">
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                                <div className="md:col-span-8 p-10 md:p-16">
                                    <span className="inline-block px-4 py-1.5 bg-[#E25439] text-white text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
                                        Why Order Direct?
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-black text-[#1E3227] uppercase tracking-tighter mb-6 leading-none">
                                        The truth about <span className="text-[#E25439]">Deliveries</span>
                                    </h3>
                                    <div className="space-y-4 text-[#1E3227]/70 font-medium max-w-2xl mb-10">
                                        <p>
                                            Third-party drivers often take multiple orders and may wait for additional pickups, which we cannot control. This can lead to cold food and longer wait times.
                                        </p>
                                        <p className="text-[#1E3227] font-bold">
                                            We strongly recommend ordering for Click & Collect via our website. Your pizza will be made, boxed, and put in your hands hot and fresh!
                                        </p>
                                    </div>
                                    <a
                                        href="https://knead-pizzerria.square.site"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#1E3227] text-[#F5F4E0] rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#E25439] hover:scale-105 transition-all duration-300 shadow-xl"
                                    >
                                        <FaStore /> Order Click & Collect
                                    </a>
                                </div>
                                <div className="md:col-span-4 h-full bg-[#E25439]/5 flex items-center justify-center p-12">
                                    <FaMotorcycle className="text-[#E25439] opacity-10 text-[12rem] -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
