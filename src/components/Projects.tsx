"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";
import SlideUp from "./SlideUp";
import { GradientBackground } from "@/components/Gradient-bg-clients"
import { useLanguage } from "@/components/LanguageContext";

type Testimonial = {
  name: string;
  company: string;
  comment: string;
  photo: string;
};

export default function Clients() {
    const {language} = useLanguage();
    const text = {
      title: language === 'EN' ? 'What Our Customers Say' : 'Opiniones de Nuestros Clientes',
      paragraph: language === 'EN' ? 'Discover how our solutions have transformed businesses and enhanced operational efficiency.' : 'Descubre cómo nuestras soluciones han transformado negocios y mejorado la eficiencia operativa.',
      testimonial1: language === 'EN' ? 'Their AI solutions transformed our workflow and boosted efficiency beyond expectations!' : '¡Sus soluciones de IA transformaron nuestro flujo de trabajo e impulsaron la eficiencia más allá de las expectativas!',
      testimonial2: language === 'EN' ? 'Professional, reliable, and innovative. Highly recommend!' : 'Profesionales, confiables e innovadores. ¡Altamente recomendados!',
      testimonial3: language === 'EN' ? 'Amazing service and support. Our team loves it!' : '¡Increíble servicio y soporte! ¡A nuestro equipo le encanta!',
      testimonial4: language === 'EN' ? 'Exceeded our expectations in every way.' : 'Superó nuestras expectativas en todos los sentidos.',
      testimonial5: language === 'EN' ? 'Seamless integration and excellent communication.' : 'Integración impecable y excelente comunicación.',
      testimonial6: language === 'EN' ? 'Truly transformative solutions for our business.' : 'Soluciones verdaderamente transformadoras para nuestro negocio.',
    }
    const testimonials: Testimonial[] = [
    {
      name: "Alice Johnson",
      company: "TechCorp",
      comment:
        text.testimonial1,
      photo: "/images/customers/alice.jpg",
    },
    {
      name: "Bob Smith",
      company: "FinSolutions",
      comment: text.testimonial2,
      photo: "/images/customers/bob.jpg",
    },
    {
      name: "Clara Lee",
      company: "HealthPlus",
      comment: text.testimonial3,
      photo: "/images/customers/clara.jpg",
    },
    {
      name: "David Green",
      company: "InsureCo",
      comment: text.testimonial4,
      photo: "/images/customers/david.jpg",
    },
    {
      name: "Eva Martinez",
      company: "RetailHub",
      comment: text.testimonial5,
      photo: "/images/customers/eva.jpg",
    },
    {
      name: "Frank Wilson",
      company: "EduTech",
      comment: text.testimonial6,
      photo: "/images/customers/frank.jpg",
    },
  ];

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
    <main className="w-full min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center overflow-hidden py-4">
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <div className="relative z-10 text-center py-4 px-4 w-full max-w-6xl">
        <SlideUp>
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-500 to-neutral-300 text-5xl py-2 relative z-20 font-bold tracking-tight">
            {text.title}
          </h1>
          <p className="mx-auto text-sm md:text-lg text-white dark:text-neutral-300 text-center mt-7 mb-4">
            {text.paragraph}
          </p>
        </SlideUp>
      </div>
    
      {/* Carousel - Multiple visible with center focus */}
      <SlideUp>
        <div className="relative z-10 w-full max-w-6xl flex items-center justify-center py-8">
          {/* Left Arrow - Fixed outside position */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-xl transition-all duration-200 border border-gray-200"
          >
            <IconArrowLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden w-[100%]">
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
                    className="flex-shrink-0 w-[400px] bg-white/90 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between shadow-lg relative"
                    style={{ 
                      opacity,
                      transform: `scale(${scale})`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Large Quote Icon - Top Left */}
                    <div className="absolute top-2 right-8 text-blue-500/20">
                      <IconQuote className="w-16 h-16" />
                    </div>

                    {/* Comment */}
                    <div className="relative z-10">
                      <p className="text-gray-800 text-lg leading-relaxed pt-3">
                        {t.comment}
                      </p>
                    </div>

                    {/* Name, Company & Photo */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                        <p className="text-gray-600 text-sm">{t.company}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
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
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/90 hover:bg-white cursor-pointer rounded-full shadow-xl transition-all duration-200 border border-gray-200"
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
      </SlideUp>
    </main>
  );
}