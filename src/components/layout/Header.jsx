'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import useCartStore from '@/store/cartStore';
import { FiShoppingBag } from "react-icons/fi";

export default function Header() {
    const itemCount = useCartStore((state) => state.getItemCount());
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);

    // Handle scroll for "Sticky Island" effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Trigger pulse on item count change
    useEffect(() => {
        if (itemCount > 0) {
            setIsPulsing(true);
            const timer = setTimeout(() => setIsPulsing(false), 500);
            return () => clearTimeout(timer);
        }
    }, [itemCount]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center  ${isScrolled ? 'top-2' : 'top-0'
                }`}
        >
            <div
                className={`flex  py-4 px-4 items-center justify-between w-full transition-all duration-500 ease-in-out ${isScrolled
                    ? 'max-w-5xl bg-[#E25439] backdrop-blur-xl shadow-2xl rounded-[30px] px-8  border border-white/30 mx-4 bg-[E25439]'
                    : 'bg-[#E25439] '
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="relative flex items-center h-12 w-32 md:w-40 transition-transform hover:scale-105 active:scale-95 brightness-0 invert">
                    <Image
                        src="/logo.png"
                        alt="Ikneed Pizza Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {['About', 'Menu', 'Delivery', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-sm font-black uppercase tracking-widest transition-all text-white hover:opacity-70"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <span className="flex items-center gap-1">
                                {item}
                                {item === 'Menu' && <ChevronDownIcon className="w-3 h-3 stroke-[3px]" />}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Right Side - Cart & Order Now */}
                <div className="flex items-center gap-4">
                    <Link href="/cart" className="relative group">
                        <div
                            className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${isPulsing ? 'scale-125' : 'hover:scale-110 active:scale-95'} ${isScrolled ? 'bg-white/20 text-white' : 'bg-[#F5F4E0] text-[#1E3227] shadow-md'
                                }`}
                        >
                            <FiShoppingBag className="text-xl" />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F5F4E0] text-[#1E3227] text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#E25439] shadow-lg animate-in zoom-in duration-300">
                                    {itemCount}
                                </span>
                            )}
                        </div>
                    </Link>

                    <button
                        className={`hidden md:block px-6 py-3 rounded-2xl font-black uppercase text-xs tracking-widest transition-all active:scale-95 ${isScrolled
                            ? 'bg-[#F5F4E0] text-[#E25439] shadow-xl'
                            : 'bg-[#F5F4E0] text-[#1E3227] shadow-lg'
                            }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </header>
    );
}
