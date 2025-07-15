"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Star className="w-8 h-8 text-blue-800" />,
      title: "Excellence",
      text: "We deliver top-notch education with proven outcomes.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-800" />,
      title: "Care & Support",
      text: "We nurture every child’s potential with love and care.",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-blue-800" />,
      title: "Innovation",
      text: "We embrace creative learning methods and technology.",
    },
  ];

  return (
    <section className="bg-stone-200 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-700 rounded "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
