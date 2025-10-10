"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import SlideUp from "./SlideUp";

type Testimonial = {
  name: string;
  comment: string[];
};

export default function Clients({ testimonials, title }: { testimonials: Testimonial[], title: string }) {

  const [index, setIndex] = useState(0);
  const autoPlayDelay = 4000; // 4 seconds
  const cardWidth = 400; // Width of each card
  const gap = 30; // Gap between cards

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayDelay);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  },
);

  // Calculate the translateX value to center the current card
  const calculateTranslateX = () => {
    const containerWidth = cardWidth * 3 + gap * 2; // Show 3 cards at once
    const centerPosition = (containerWidth - cardWidth) / 2;
    return -index * (cardWidth + gap) + centerPosition;
  };

  return (
    <main className="w-full bg-cover bg-center relative flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 w-full max-w-6xl">
        <SlideUp>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-500 to-neutral-300 text-xl py-2 relative z-20 font-bold tracking-tight">
            {title}
          </h1>
        </SlideUp>
      </div>
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-center py-8">
        {/* Left Arrow - Fixed outside position */}
        <button
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-xl transition-all duration-200 border border-gray-200"
        >
          <IconArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Carousel container */}
        <div className="overflow-hidden w-[80%]">
          <motion.div
            className="flex gap-8"
            animate={{ x: calculateTranslateX() }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          >
            {testimonials.map((t, idx) => {
              const distanceFromCenter = Math.abs(idx - index);
              let opacity = 1;
              let scale = 1;
              
              // Adjust opacity and scale based on distance from center
              if (distanceFromCenter === 1) {
                opacity = 0.6;
                scale = 0.9;
              } else if (distanceFromCenter >= 2) {
                opacity = 0.3;
                scale = 0.8;
              }

              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-fit bg-white/90 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between shadow-lg relative"
                  style={{ 
                    opacity,
                    transform: `scale(${scale})`,
                    transition: 'all 0.3s ease'
                  }}
                >

                  {/* Comment */}
                  <div className="relative z-10 mb-4">
                    <ul className="text-gray-800 text-lg leading-relaxed pt-3 flex flex-col list-disc">
                      {t.comment.map((comm) => { return <li key={comm}>{comm}</li> })}
                    </ul>
                  </div>

                  {/* Name, Company & Photo */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Arrow - Fixed outside position */}
        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-xl transition-all duration-200 border border-gray-200"
        >
          <IconArrowRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}