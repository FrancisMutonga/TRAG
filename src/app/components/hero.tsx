"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  
];

const words = ["Playgroup", "Primary", "Junior"];

export default function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [text, setText] = useState("Your Brand");
  const [index, setIndex] = useState(0);

  // Change word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulate typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(words[index].slice(0, i));
      i++;
      if (i > words[index].length) clearInterval(typingInterval);
    }, 100);
    return () => clearInterval(typingInterval);
  }, [index]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCurrentIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Image Carousel */}
      <div ref={emblaRef} className="relative w-full">
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="min-w-full relative h-[60vh] md:h-[75vh] lg:h-[95vh]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1500}
                height={700}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 bg-blck/30 z-10" />

        <div className="absolute top-8 inset-0 z-20 flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              className="text-xl md:text-3xl lg:text-5xl font-extrabold "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="block text-stone-700">TopRide Academy</span>
              <span className="text-blue-500">{text}|</span>
            </motion.h1>
           
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => embla && embla.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-gold" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
