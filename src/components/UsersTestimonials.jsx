"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaGoogle, FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import google from "../../public/google.png";

// Import user avatars
import mhMishuAvatar from "../images/mh-mishu.png";
import lAvatar from "../images/l.png";
import jaxAvatar from "../images/jax.png";
import aptivaAvatar from "../images/aptiva.png";
import sophieAvatar from "../images/Sophie.png";
import pouriaAvatar from "../images/Pouria.png";
import myAvatar from "../images/my.png";
import yennhiAvatar from "../images/yennhi.png";

// REAL GOOGLE REVIEWS fetched from Knead Pizzeria Henley Beach
const INITIAL_REVIEWS = [
  {
    id: "review_1",
    name: "MH Mishu",
    avatar: mhMishuAvatar,
    text: "What makes a pizza great? For me, it all starts with the dough, then the sauce, the cooking time and heat, and finally the presentation—and this spot nailed every aspect. Extra points for the skillful preparation too. It's a cozy little pizzeria right in the heart of busy Henley Beach. The place is quite small, so you might struggle to find a seat depending on when you visit. All the staff are welcoming and relaxed, and the chef is especially cool—he makes everything look so effortless that you'll be tempted to try it at home. The pizzas? Nothing comes close. I got a bit greedy and tried almost everything on the menu, and it was all spot-on. The standout for me was the dough: super light and perfectly crispy. Most of the sauces had that authentic kick, and every pizza came with generous toppings and portions.If you're ever in Henley Beach, make sure to stop by Knead—you'll thank me later!.",
    date: "a week ago",
    rating: 5,
  },
  {
    id: "review_2",
    name: "L",
    avatar: lAvatar,
    text: "Really good fresh and authentic pizza. My favourite was definitely the pumpkin pizza, the sweet caramelised onions mixed with that rocket was super harmonious, along with the chewy sourdough which was fabulous. The margarita and mr potato were tied second, but they were both so good too. And lastly, the big prawn pizza was probably last due to the small sized prawns and the amount of sour flavours. The service was fantastic, and the guy were super friendly.",
    rating: 5,
  },
  {
    id: "review_3",
    name: "Jax Drury",
    avatar: jaxAvatar,
    text: "The pizza is amazing! Traditional Italian pizza, like an explosion of flavour in your mouth. Home made sourdough and authentic ingredients. Excellent service, made efficiently and deliciously. I struggled to find things to nitpick here as it’s supposed to be a messy meal. The atmosphere is amazing except that the lights and music was a little overwhelming but I’m sensitive so this shouldn’t affect you unless you are sensitive to this. My mother said that it was like she was back in Italy (she’s travelled there).",
    date: "a month ago",
    rating: 5,
  },
  {
    id: "review_4",
    name: "Aptiva Sharma",
    avatar: aptivaAvatar,
    text: "Quick & quality pizza despite the Boxing Day craziness. Fresh, soft middle & crispy airy crust. Big Prawn, Big Guy (Truffle Mushroom), and Aloha with the chilli honey were all flavoursome & fresh! Add a dash of complementary chilli oil or balsamic  for a subtle kick",
    date: "3 weeks ago",
    rating: 5,
  },
  {
    id: "review_5",
    name: "Sophie Adams",
    avatar: sophieAvatar,
    text: "So glad I was able to go to this small business before I moved out of the area. As soon as we walked through the door we were greeted with smiles and lovely staff. We got the pepperoni pizza and the Mrs potato. Both of them were gluten free but halfway through we literally forgot they were gluten free! That’s how good they are, the crust wasn’t dry, the dough was thin but not too thin, the taste was delicious. I would recommend picking a sauce for the Mrs potato. They have some alcoholic drinks although not the typical coke and Pepsi soft drinks which was a bit odd but that’s alright. Maybe they were behind the counter and I couldn’t see them, not too sure. The owner came around to ask how everything was, he’s very friendly and you can tell he pours his heart into every pizza. We didn’t get an entree and the pizzas were big enough we had left overs for the next day! They also accept cash which is good",
    date: "4 months ago",
    rating: 5,
  },
  {
    id: "review_6",
    name: "Pouria Aryan",
    avatar: pouriaAvatar,
    text: "This gem of a pizzeria is just a short stroll from Henley Beach Jetty and the ocean, making it a perfect post-beach stop. The vibrant decor immediately sets the tone, but what really makes this place stand out is their hybrid oven — a clever combination of gas burner and wood fire. The result? Incredibly consistent, beautifully cooked pizzas that hit all the right notes. We tried the Margherita and the Prawn pizzas, and both were absolutely outstanding. The base was thin and super crispy, yet still had a lovely chew and a bit of crunch on the crust — exactly how a great pizza should be. The sauce was clearly a cooked base, rich and full of flavour, and the buffalo mozzarella was incredibly fresh and creamy. One of the highlights was watching the final touches being added by two talented ladies — pesto drizzled over the prawn pizza, a sprinkle of parmesan, and a dash of chili oil. Everything was so fresh, and the attention to detail made it feel special. The staff were warm and welcoming, and you can tell there’s real passion behind the food. I was thrilled to discover that they’ve only recently opened — it already feels like one of the best pizzerias in Adelaide. I can’t wait to go back and explore the rest of the menu. Well done to the team!",
    date: "5 months ago",
    rating: 5,
  },
  {
    id: "review_7",
    name: "My pham",
    avatar: myAvatar,
    text: "The pizza was absolutely amazing, it was so juicy and the meat is really tender. The burrata bowl is so fresh and have a peachy flavour. I would definitely come back.",
    date: "a month ago",
    rating: 5,
  },
  {
    id: "review_8",
    name: "yennhi le",
    avatar: yennhiAvatar,
    text: "I have been here a few times and none of them made me disappointed. I love the seasonal burrata bowl and my fav is the prawn pizza, so lovely!!!",
    date: "a month ago",
    rating: 5,
  },
];

export default function UsersTestimonials() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [loading, setLoading] = useState(false);

  // Future implementation for live fetching
  // This would require a Google Places API Key in .env
  useEffect(() => {
    async function fetchReviews() {
      if (!process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY) return;

      setLoading(true);
      try {
        // Example fetch using our API route (to be implemented)
        const res = await fetch('/api/google-reviews');
        const data = await res.json();
        if (data.reviews) setReviews(data.reviews);
      } catch (err) {
        console.error("Failed to fetch live reviews:", err);
      } finally {
        setLoading(false);
      }
    }
    // Uncomment to enable live fetching if API exists
    // fetchReviews();
  }, []);

  return (
    <section className="relative bg-[#F5F4E0] py-24 overflow-hidden min-h-screen font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-[#E25439]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#1E3227]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#E25439] text-white px-4 py-1 rounded-full text-sm font-bold mb-4"
            >
              <FaGoogle className="text-white" />
              <span>GOOGLE REVIEWS</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-[#1E3227] leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
            >
              WHAT OUR PIZZA LOVERS SAY
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-6 border border-[#1E3227]/10"
          >
            <div className="text-center">
              <div className="text-4xl font-black text-[#1E3227]">4.8</div>
              <div className="flex text-[#E25439] text-lg">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
            </div>
            <div className="h-12 w-[1px] bg-gray-200" />
            <div>
              <div className="text-sm font-bold text-[#1E3227] uppercase tracking-wider">Overall Rating</div>
              <div className="text-xs text-gray-500">Based on 300+ reviews</div>
            </div>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-[#E25439]/20 relative">
                <div className="absolute top-8 right-8">
                  <Image src={google} alt="Google" width={30} height={30} />
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1E3227] leading-none mb-1">
                      {review.name}
                    </h3>
                    <div className="flex text-[#E25439] text-xs">
                      {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[#1E3227]/80 text-base leading-relaxed mb-6 font-medium">
                  "{review.text}"
                </p>

                {/* Date and Platform */}

              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Knead+Pizzeria+Henley+Beach/@-34.9186441,138.4911363,17z/data=!4m8!3m7!1s0x6ab0c548f2594135:0x2af1cb823cc4bd75!8m2!3d-34.9186441!4d138.4937112!9m1!1b1!16s%2Fg%2F11x66dhj4b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1E3227] hover:bg-[#E25439] text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-110 shadow-xl"
          >
            <span>VIEW ALL REVIEWS ON GOOGLE</span>
            <FaGoogle />
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}</style>
    </section>
  );
}
