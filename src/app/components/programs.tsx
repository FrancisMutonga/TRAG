"use client";
import React from "react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Playgroup",
    description: "A nurturing environment for early learning and social skills.",
    icon: "🧸",
  },
  {
    title: "CBC Curriculum",
    description: "Engaging Competency-Based Curriculum for holistic development.",
    icon: "📚",
  },
  {
    title: "STEM Program",
    description: "Hands-on learning in science, technology, engineering, and math.",
    icon: "🧪",
  },
  {
    title: "Arts & Sports",
    description: "Creative expression and active play to build confidence and teamwork.",
    icon: "🎨⚽",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProgramsSection: React.FC = () => {
  return (
    <section className="bg-stone-200 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-700 rounded "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2  }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white text-white rounded-2xl shadow-xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="text-xl text-blue-600 font-semibold mb-2">{program.title}</h3>
              <p className="text-stone-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
