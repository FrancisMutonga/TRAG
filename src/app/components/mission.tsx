"use client";
import React from "react";
import { motion } from "framer-motion";

const MissionVisionValues = () => {
  const items = [
    {
      title: "Our Mission",
      text: "To empower young minds through innovative, holistic learning and nurture their full potential.",
    },
    {
      title: "Our Vision",
      text: "To become a leading center of excellence, shaping future leaders and lifelong learners.",
    },
    {
      title: "Our Core Values",
      text: "Integrity, Creativity, Inclusivity, and Community — the foundation of everything we do.",
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
          Our Core Values
        </motion.h2>
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-blue-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h3>
              <p className="text-stone-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
