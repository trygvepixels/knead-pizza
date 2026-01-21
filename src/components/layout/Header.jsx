'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebookF } from 'react-icons/fa6'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-[#123218]/5 bg-[#F5F7E0]">
            <nav className="container mx-auto px-6 py-4 transition-all duration-300">
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-3 items-center">

                    {/* Left: Navigation Links */}
                    <div className="flex items-center gap-6 lg:gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[#123218] text-sm lg:text-base font-bold tracking-[0.15em] uppercase hover:text-[#E25439] transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Center: Big Logo */}
                    <div className="flex justify-center">
                        <Link href="/" className="transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/logox.png"
                                alt="Ikneed Pizza Logo"
                                width={240}
                                height={100}
                                className="h-28 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right: Order Now Button */}
                    <div className="flex justify-end items-center">
                        <a
                            href="https://knead-pizzerria.square.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-[#E25439] text-[#123218] hover:text-[#F5F7E0] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#123218] hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Order Now
                        </a>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-center justify-between relative h-16">
                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#123218] focus:outline-none p-2 z-20"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-8 h-8" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>

                    {/* Centered Logo on Mobile */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-10">
                        <Image
                            src="/logox.png"
                            alt="Ikneed Pizza Logo"
                            width={140}
                            height={60}
                            className="h-20 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Right spacer for centering */}
                    <div className="w-12"></div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden mt-8 pb-10 space-y-8 flex flex-col items-center animate-fadeIn text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[#123218] hover:text-[#E25439] text-xl font-bold uppercase tracking-[0.2em]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://knead-pizzerria.square.site"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-[#E25439] text-[#123218] hover:text-[#F5F7E0] rounded-full font-bold uppercase tracking-widest text-lg hover:bg-[#123218] transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Order Now
                        </a>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header