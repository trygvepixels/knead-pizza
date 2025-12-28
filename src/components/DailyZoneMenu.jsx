"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DailyZoneMenu() {
    const [selectedCategory, setSelectedCategory] = useState("PIZZA");

    const menuCategories = [
        { id: 1, name: "PIZZA", icon: "🍕" },
        { id: 2, name: "PASTA", icon: "🍝" },
        { id: 3, name: "SALADS", icon: "🥗" },
        { id: 4, name: "DRINKS", icon: "🥤" },
        { id: 5, name: "DESSERTS", icon: "🍰" },
        { id: 6, name: "SIDES", icon: "🍟" },
    ];

    // Sample Menu Data
    const menuItems = {
        PIZZA: [
            {
                id: 1,
                name: "Margherita Classic",
                description: "Fresh mozzarella, basil, tomato sauce",
                price: "$15",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop",
            },
            {
                id: 2,
                name: "Pepperoni Delight",
                description: "Double pepperoni, mozzarella, oregano",
                price: "$18",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop",
            },
            {
                id: 3,
                name: "Veggie Supreme",
                description: "Bell peppers, mushrooms, olives, onions",
                price: "$16",
                image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=300&h=300&fit=crop",
            },
            {
                id: 4,
                name: "BBQ Chicken",
                description: "Grilled chicken, BBQ sauce, red onions",
                price: "$19",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop",
            },
        ],
        PASTA: [
            {
                id: 5,
                name: "Spaghetti Carbonara",
                description: "Creamy sauce, bacon, parmesan",
                price: "$14",
                image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop",
            },
            {
                id: 6,
                name: "Penne Arrabbiata",
                description: "Spicy tomato sauce, garlic, chili",
                price: "$13",
                image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=300&h=300&fit=crop",
            },
            {
                id: 7,
                name: "Fettuccine Alfredo",
                description: "Rich cream sauce, parmesan cheese",
                price: "$15",
                image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&h=300&fit=crop",
            },
            {
                id: 8,
                name: "Lasagna Bolognese",
                description: "Layers of pasta, meat sauce, cheese",
                price: "$17",
                image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=300&fit=crop",
            },
        ],
        SALADS: [
            {
                id: 9,
                name: "Caesar Salad",
                description: "Romaine lettuce, croutons, parmesan",
                price: "$10",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=300&fit=crop",
            },
            {
                id: 10,
                name: "Greek Salad",
                description: "Feta cheese, olives, tomatoes, cucumber",
                price: "$11",
                image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop",
            },
            {
                id: 11,
                name: "Garden Fresh",
                description: "Mixed greens, cherry tomatoes, vinaigrette",
                price: "$9",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
            },
            {
                id: 12,
                name: "Caprese Salad",
                description: "Fresh mozzarella, tomato, basil, balsamic",
                price: "$12",
                image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=300&h=300&fit=crop",
            },
        ],
        DRINKS: [
            {
                id: 13,
                name: "Fresh Lemonade",
                description: "House-made, refreshing citrus drink",
                price: "$5",
                image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop",
            },
            {
                id: 14,
                name: "Italian Soda",
                description: "Sparkling water with fruit syrup",
                price: "$6",
                image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=300&h=300&fit=crop",
            },
            {
                id: 15,
                name: "Iced Coffee",
                description: "Cold brew with milk and ice",
                price: "$5",
                image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=300&h=300&fit=crop",
            },
            {
                id: 16,
                name: "Mineral Water",
                description: "Sparkling or still, imported",
                price: "$4",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
            },
        ],
        DESSERTS: [
            {
                id: 17,
                name: "Tiramisu",
                description: "Classic Italian coffee-flavored dessert",
                price: "$8",
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop",
            },
            {
                id: 18,
                name: "Chocolate Lava Cake",
                description: "Warm cake with molten chocolate center",
                price: "$9",
                image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=300&h=300&fit=crop",
            },
            {
                id: 19,
                name: "Panna Cotta",
                description: "Italian cream dessert with berry sauce",
                price: "$7",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop",
            },
            {
                id: 20,
                name: "Gelato",
                description: "Italian ice cream, various flavors",
                price: "$6",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop",
            },
        ],
        SIDES: [
            {
                id: 21,
                name: "Garlic Bread",
                description: "Toasted bread with garlic butter",
                price: "$6",
                image: "https://images.unsplash.com/photo-1619365584863-1785d5f0f3f6?w=300&h=300&fit=crop",
            },
            {
                id: 22,
                name: "Mozzarella Sticks",
                description: "Breaded cheese sticks with marinara",
                price: "$8",
                image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=300&h=300&fit=crop",
            },
            {
                id: 23,
                name: "Chicken Wings",
                description: "Crispy wings with choice of sauce",
                price: "$10",
                image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=300&h=300&fit=crop",
            },
            {
                id: 24,
                name: "Bruschetta",
                description: "Grilled bread with tomato and basil",
                price: "$7",
                image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=300&fit=crop",
            },
        ],
    };

    const currentItems = menuItems[selectedCategory] || [];

    return (
        <>
            {/* Google Fonts */}
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&family=Dela+Gothic+One&display=swap');
      `}</style>

            <section className="relative bg-gradient-to-br from-[#F9F6F0] to-[#E8DDD3] py-20 overflow-hidden">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-2 flex">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className={`flex-1 h-full ${i % 2 === 0 ? "bg-[#E67449]" : "bg-[#2C3E2E]"}`}
                        />
                    ))}
                </div>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className={`flex-1 h-full ${i % 2 === 0 ? "bg-[#2C3E2E]" : "bg-[#E67449]"}`}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2
                            className="text-5xl md:text-6xl font-bold text-[#2C3E2E] mb-2"
                            style={{
                                fontFamily: "Dela Gothic One, sans-serif",
                                letterSpacing: "3px",
                            }}
                        >
                            OUR MENU
                        </h2>
                        <p
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Hand-stretched artisan pizzas made fresh daily in Henley Beach
                        </p>

                        {/* Decorative Underline */}
                        <div className="flex justify-center mt-4">
                            <svg width="200" height="8" viewBox="0 0 200 8" fill="none">
                                <path
                                    d="M2 4C2 4 50 1 100 4C150 7 198 4 198 4"
                                    stroke="#E67449"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Menu Categories - Clickable */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
                        {menuCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${selectedCategory === category.name ? "scale-110" : ""
                                    }`}
                            >
                                <div
                                    className={`relative rounded-2xl overflow-hidden shadow-lg p-6 ${selectedCategory === category.name
                                            ? "bg-gradient-to-br from-[#E67449] to-[#D63227] ring-4 ring-[#F5A623] scale-105"
                                            : "bg-white hover:shadow-xl"
                                        } transition-all duration-300 flex items-center justify-center`}
                                >
                                    <div className="text-center">
                                        <div className={`text-5xl mb-2 transition-transform ${selectedCategory === category.name ? "scale-110" : "group-hover:scale-110"
                                            }`}>
                                            {category.icon}
                                        </div>
                                        <p
                                            className={`text-xs font-bold ${selectedCategory === category.name ? "text-white" : "text-[#2C3E2E]"
                                                }`}
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            {category.name}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Selected Category Items Preview */}
                    <div className="mb-12">
                        <h3
                            className="text-3xl font-bold text-[#2C3E2E] mb-8 text-center"
                            style={{ fontFamily: "Dela Gothic One, sans-serif" }}
                        >
                            {selectedCategory}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h4
                                            className="text-lg font-bold text-[#2C3E2E] mb-2"
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            {item.name}
                                        </h4>
                                        <p
                                            className="text-sm text-gray-600 mb-4"
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span
                                                className="text-2xl font-bold text-[#E67449]"
                                                style={{ fontFamily: "Dela Gothic One, sans-serif" }}
                                            >
                                                {item.price}
                                            </span>
                                            <button className="px-4 py-2 bg-gradient-to-r from-[#E67449] to-[#D63227] text-white rounded-full text-sm font-bold hover:shadow-lg transition-all hover:scale-105">
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button - Passes selected category to menu page */}
                    <div className="text-center">
                        <Link
                            href={`/menu?category=${selectedCategory.toLowerCase()}`}
                            className="inline-block px-12 py-4 bg-gradient-to-r from-[#E67449] to-[#D63227] text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            style={{
                                fontFamily: "Dela Gothic One, sans-serif",
                                letterSpacing: "2px",
                            }}
                        >
                            VIEW FULL MENU →
                        </Link>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#E67449]/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[#F5A623]/5 rounded-full blur-3xl -z-10" />
            </section>
        </>
    );
}
