"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPizzaSlice, FaFire, FaTruck, FaClock } from "react-icons/fa";

const ACTIVITIES = [
  { id: 1, type: "order", user: "Sarah from Henley", item: "Margherita Pizza", time: "Just now", icon: <FaPizzaSlice className="text-[#E25439]" /> },
  { id: 2, type: "oven", user: "Chef", item: "New Sourdough Batch Ready", time: "2 mins ago", icon: <FaFire className="text-orange-500" /> },
  { id: 3, type: "delivery", user: "Jack", item: "Large Truffle Mushroom", time: "Out for delivery", icon: <FaTruck className="text-blue-500" /> },
  { id: 4, type: "order", user: "Mike from Grange", item: "Pumpkin & Caramelized Onion", time: "5 mins ago", icon: <FaPizzaSlice className="text-[#E25439]" /> },
  { id: 5, type: "status", user: "Knead Pizzeria", item: "Now Accepting Pre-orders", time: "Active", icon: <FaClock className="text-green-500" /> },
];

export default function LiveFeed() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % ACTIVITIES.length);
        setVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = ACTIVITIES[currentIdx];

  return (
    <div className="fixed bottom-8 left-8 z-50 pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 pointer-events-auto min-w-[300px]"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl shadow-inner">
              {current.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-black text-[#1E3227] uppercase tracking-wider">
                  {current.user}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase italic">
                  {current.time}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600">
                {current.item}
              </p>
            </div>
            
            {/* Live Indicator */}
            <div className="absolute -top-1 -right-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
