"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const campusImages = [
  { src: "/campus1.jpg", alt: "Playground fun" },
  { src: "/campus2.jpg", alt: "STEM lab activities" },
  { src: "/campus3.jpg", alt: "Arts and creativity" },
  { src: "/campus4.jpg", alt: "Sports and teamwork" },
];

const CampusLife = () => {
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-6">
          <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-700 rounded "
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2  }}
                  transition={{ duration: 0.6 }}
                >Campus Life</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {campusImages.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
