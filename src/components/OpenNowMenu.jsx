"use client";

import React from "react";
import Image from "next/image";

export default function OpenNowMenu() {
  return (
    <>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&family=Dela+Gothic+One&display=swap');
      `}</style>

      <section className="relative bg-[#1E3227] overflow-hidden py-20">
        {/* Top Border Pattern */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-full ${i % 2 === 0 ? "bg-[#F5F4E0]" : "bg-[#E25439]"}`}
            />
          ))}
        </div>

        {/* Bottom Border Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-full ${i % 2 === 0 ? "bg-[#E25439]" : "bg-[#F5F4E0]"}`}
            />
          ))}
        </div>

        {/* Scrolling "Open Now!" Text */}
        <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll-left">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="text-white/10 text-7xl md:text-9xl font-bold mx-8"
                style={{
                  fontFamily: "Dela Gothic One, sans-serif",
                  transform: `rotate(${i % 2 === 0 ? -5 : 5}deg)`,
                }}
              >
                Open Now!
              </span>
            ))}
          </div>
        </div>

        {/* Menu Card Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="relative">
            {/* Menu Card with Shadow */}
            <div className="bg-[#F5F4E0] rounded-lg shadow-2xl overflow-hidden border-t-4 border-b-4 border-[#1E3227]">
              {/* Striped Header */}
              <div className="h-3 flex">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-full ${i % 2 === 0 ? "bg-[#E25439]" : "bg-[#1E3227]"
                      }`}
                  />
                ))}
              </div>

              {/* Menu Content */}
              <div className="p-8 md:p-12">
                {/* Logo and Header */}
                <div className="text-center mb-8">
                  <div className="inline-block mb-4">
                    <div className="relative">
                      <h1
                        className="text-5xl md:text-6xl font-black text-[#1E3227] mb-2"
                        style={{
                          fontFamily: "Dela Gothic One, sans-serif",
                          letterSpacing: "3px",
                        }}
                      >
                        KNEAD
                      </h1>
                      <div className="flex justify-between items-center">
                        <span
                          className="text-sm text-[#E25439] font-bold"
                          style={{ fontFamily: "Bebas Neue, sans-serif" }}
                        >
                          ARTISAN
                        </span>
                        <span
                          className="text-sm text-[#E25439] font-bold"
                          style={{ fontFamily: "Bebas Neue, sans-serif" }}
                        >
                          PIZZA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    {/* Section 1 */}
                    <div className="mb-6">
                      <h3
                        className="text-[#E25439] font-bold text-sm mb-3 border-b border-gray-300 pb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Something To Share
                      </h3>
                      <div className="space-y-2">
                        <MenuItem
                          name="Double Baked Pizza Breads"
                          price="$8"
                          description="Fluffy dough balls"
                        />
                        <MenuItem
                          name="Burratina"
                          price="$12"
                          description="Mozzarella di bufala (125) bufala milk panna buratta"
                        />
                        <MenuItem name="Rosana di Pap" price="$8" />
                      </div>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-6">
                      <h3
                        className="text-[#E25439] font-bold text-sm mb-3 border-b border-gray-300 pb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Romana Pizza
                      </h3>
                      <div className="space-y-2">
                        <MenuItem name="Bufala Margherita" price="$12" />
                        <MenuItem
                          name="Olio e Rosmarino"
                          price="$10"
                          description="Extra virgin olive oil and rosemary"
                        />
                      </div>
                    </div>

                    {/* Extras Section */}
                    <div className="bg-[#F5F0E8] p-4 rounded-lg">
                      <h3
                        className="text-[#1E3227] font-bold text-xs mb-3 uppercase"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Extras
                      </h3>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <ExtraItem name="Anchovy Fillets" price="$2" />
                        <ExtraItem name="Chilli Oil" price="$2" />
                        <ExtraItem name="Rocket" price="$2" />
                        <ExtraItem name="Fior di Latte" price="$3" />
                        <ExtraItem name="Parmigiana" price="$2" />
                        <ExtraItem name="Spianata Calabra" price="$4" />
                        <ExtraItem name="Pepperoni" price="$3" />
                        <ExtraItem name="Salami Milano" price="$3" />
                        <ExtraItem name="Nduja" price="$4" />
                        <ExtraItem name="Bresaola" price="$5" />
                        <ExtraItem name="Prosciutto Cotto" price="$4" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="space-y-4">
                      <MenuItem
                        name="Margherita Marinara (V)"
                        price="$10"
                        description="Napoli sauce, oregano, garlic & basil"
                      />
                      <MenuItem
                        name="Acciughe"
                        price="$12"
                        description="Anchovies, buffalo mozzarella, olives & chilies"
                      />
                      <MenuItem
                        name="Romana di Bufala (V)"
                        price="$13"
                        description="Napoli sauce, buffalo mozzarella & basil"
                      />
                      <MenuItem
                        name="Four Seasons"
                        price="$14"
                        description="Artichokes, mushrooms, olives and more"
                      />
                      <MenuItem
                        name="Verdure"
                        price="$12"
                        description="Grilled vegetables with cheese"
                      />
                      <MenuItem
                        name="Capricciosa"
                        price="$13"
                        description="Ham, artichokes, mushrooms and olives"
                      />
                      <MenuItem
                        name="Trentina"
                        price="$15"
                        description="Speck, gorgonzola and walnuts"
                      />
                      <MenuItem
                        name="Deliziosa"
                        price="$14"
                        description="Italian sausage with friarielli"
                      />
                    </div>

                    {/* Note */}
                    <div className="mt-6 p-4 bg-[#F5F0E8] rounded-lg">
                      <p
                        className="text-xs text-gray-600 leading-relaxed"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Some of the dishes may contain allergens or gluten and lactose.
                        Please inform a staff member if you suffer from any allergies or food
                        intolerances and we will help you choose from our menu items.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div
                    className="text-xs text-gray-600"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <p className="font-bold">6508 Irvington Road, Shady Brook</p>
                    <p>NY 10002, United States(+1)</p>
                  </div>

                  <div className="w-16 h-16 relative">
                    <img
                      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop"
                      alt="Pizza Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  <div
                    className="text-xs text-[#E25439] font-bold text-right"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <p>Open On Mon-Fri 09:00am</p>
                    <p>Saturday 10:00 am - 11:00pm</p>
                    <p>We deliver through Uber and!</p>
                  </div>
                </div>
              </div>

              {/* Striped Footer */}
              <div className="h-3 flex">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-full ${
                      i % 2 === 0 ? "bg-[#E25439]" : "bg-[#1E3227]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          display: flex;
        }
      `}</style>
    </>
  );
}

// Menu Item Component
function MenuItem({ name, price, description }) {
  return (
    <div className="flex justify-between items-start gap-4 py-1">
      <div className="flex-1">
        <h4
          className="text-[#1E3227] font-black text-sm"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {name}
        </h4>
        {description && (
          <p
            className="text-gray-600 text-xs mt-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {description}
          </p>
        )}
      </div>
      <span
        className="text-[#1E3227] font-black text-sm whitespace-nowrap"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {price}
      </span>
    </div>
  );
}

// Extra Item Component
function ExtraItem({ name, price }) {
  return (
    <div className="flex justify-between items-center">
      <span
        className="text-gray-700"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {name}
      </span>
      <span
        className="text-gray-700 font-bold"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {price}
      </span>
    </div>
  );
}
