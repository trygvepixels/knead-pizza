'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import useCartStore from '@/store/cartStore';
import { FiShoppingBag } from "react-icons/fi";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const itemCount = useCartStore((state) => state.getItemCount());

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="relative bg-[#E67449] sticky top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🍕</span>
                </div>
                <div>
                    <h1 className="text-white text-3xl font-extrabold tracking-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Knead
                    </h1>
                    <p className="text-white/90 text-xs font-medium" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Henley Beach
                    </p>
                </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-white font-semibold hover:opacity-80 transition-opacity" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Home
                </Link>
                <Link href="/menu" className="text-white font-semibold hover:opacity-80 transition-opacity" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Menu
                </Link>
                <Link href="#about" className="text-white font-semibold hover:opacity-80 transition-opacity" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    About
                </Link>
                <Link href="#contact" className="text-white font-semibold hover:opacity-80 transition-opacity" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Contact
                </Link>
            </nav>

            {/* Right Side - Status & Cart */}
            <div className="flex items-center gap-4">
                {/* Open Now Badge */}
                <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        OPEN NOW
                    </span>
                </div>

                {/* Cart Icon */}
                <Link href="/cart" className="relative">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                        <FiShoppingBag className="text-[#E67449] text-xl" />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-black text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                                {itemCount}
                            </span>
                        )}
                    </div>
                </Link>
            </div>
        </header>
    );
}
