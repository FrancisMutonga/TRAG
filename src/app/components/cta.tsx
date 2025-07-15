"use client";
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="bg-stone-200 shadow-xl rounded-xl py-12 px-8">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Join Our Vibrant School Community?
        </motion.h2>
        <motion.p
          className="text-stone-600 text-lg sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover a nurturing environment where students thrive academically, creatively, and socially.
        </motion.p>
        <motion.a
          href="/admissions"
          className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-md transition transform hover:scale-105 hover:shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Enroll Now
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
