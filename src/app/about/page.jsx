'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HeartIcon, SparklesIcon, FireIcon } from '@heroicons/react/24/outline'
import orangeMen from '@/assets/orange-men.png'

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-[#F5F7E0] text-[#123218] overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image 
                            src={orangeMen} 
                            alt="Chef hugging a pizza" 
                            className="w-full h-auto transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="text-left"
                    >
                        
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                            About <br /> <span className="text-[#E25439]">Us</span>
                        </h1>

                        <div className="space-y-6 text-xl leading-relaxed opacity-90">
                            <p className="text-2xl font-bold leading-tight">
                                At Knead, we believe that good food should not only taste exceptional —
                                it should make you feel good too.
                            </p>
                            <p>
                                Our signature dough is crafted with care, using our own sourdough starter
                                and naturally fermented for 72 hours. No shortcuts. No additives.
                                Just time, craft, passion and a dedication to doing things properly.
                            </p>
                            <p>
                                This slow, three-day fermentation creates a base that’s light, balanced, 
                                and easier to digest, with a depth of flavour you can only achieve through patience. 
                                We finish it with thoughtfully sourced ingredients, house-made sauces, 
                                and toppings chosen for their quality and freshness — not excess.
                            </p>
                            <div className="p-6 bg-[#E25439] text-[#F5F7E0] rounded-2xl transform md:rotate-2 shadow-xl">
                                <p className="text-lg font-bold italic leading-snug">
                                    "For us, pizza isn’t a guilty pleasure.
                                    It’s feel-good indulgence, grounded in wholesome methods and elevated with premium produce."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Statement */}
            <section className="py-20 px-6 bg-[#123218] text-[#F5F7E0] relative">
                <div className="max-w-7xl mx-auto text-center z-10 relative">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none"
                    >
                        At Knead, we don’t just make pizza. 
                        <br />
                        We knead. We ferment. <br />
                        We nourish. We elevate.
                    </motion.p>
                </div>
            </section>

            {/* Sourdough Section */}
            <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-16 items-center">
                    <div className="lg:col-span-3 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                                OUR <span className="text-[#E25439]">SOURDOUGH</span>
                            </h2>

                            <div className="space-y-6 text-xl leading-relaxed opacity-90">
                                <p>
                                    At Knead Pizzeria, our dough is made the old-fashioned way —
                                    naturally fermented for 72 hours using our wild sourdough starter.
                                </p>

                                <div className="flex items-center gap-4 text-[#E25439] py-4 border-y border-[#123218]/10">
                                    <SparklesIcon className="w-8 h-8" />
                                    <span className="text-2xl font-black tracking-widest uppercase">
                                        Slow, patient, and honest.
                                    </span>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8 pt-6">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black uppercase text-[#E25439] flex items-center gap-2">
                                            <FireIcon className="w-6 h-6" /> More flavour
                                        </h3>
                                        <p>Long fermentation creates a deep, natural taste that mass-produced dough simply can't match.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black uppercase text-[#E25439] flex items-center gap-2">
                                            <HeartIcon className="w-6 h-6" /> Easier to digest
                                        </h3>
                                        <p>Slow fermentation breaks down the gluten gently, making our crust lighter on your stomach.</p>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <p className="text-2xl md:text-3xl font-medium">
                                        Good pizza starts with good dough. <br />
                                        And we <span className="italic font-black text-[#E25439]">knead</span> ours to be the best it can be.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square bg-[#123218] rounded-[4rem] overflow-hidden flex items-center justify-center p-12 shadow-2xl"
                        >
                             <Image 
                                src="/logox.png" 
                                alt="Ikneed Pizza" 
                                fill 
                                className="object-contain opacity-10 p-12"
                                />
                            <div className="text-[#F5F7E0] text-center relative z-10">
                                <p className="text-3xl font-black uppercase leading-tight mb-4">
                                    72-Hour <br/> Fermentation
                                </p>
                                <div className="w-12 h-1 bg-[#E25439] mx-auto mb-4"></div>
                                <p className="text-xl italic opacity-80">
                                    Crafted with patience.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-4xl font-black uppercase mb-8">Ready to taste the difference?</h2>
                    <a
                        href="https://knead-pizzerria.square.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-12 py-5 bg-[#E25439] text-[#123218] hover:text-[#F5F7E0] rounded-full font-black uppercase tracking-widest text-lg hover:bg-[#123218] hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        Order Now
                    </a>
                </motion.div>
            </section>

            {/* Decorative Brand Logo Background */}
            <div className="fixed top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.02] -z-10">
                <Image
                    src="/logox.png"
                    alt=""
                    fill
                    className="object-contain translate-x-1/2 rotate-12"
                />
            </div>
        </main>
    )
}

export default AboutPage
