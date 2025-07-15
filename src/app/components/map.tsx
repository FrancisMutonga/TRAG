"use client";

import React from "react";
import { motion } from "framer-motion";

const LocationSection: React.FC = () => {
  return (
    <section className="py-12 bg-stone-200">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Visit Us
        </motion.h2>
        <p className="mb-6 text-gray-700">We&apos;d Love to Meet You</p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12601.250151365434!2d36.8335325!3d-1.6738609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fb8df568e9a83%3A0xab838e6d375810be!2sTop%20Ride%20Primary%20School%20Isinya!5e0!3m2!1sen!2s!4v1637060621177!5m2!1sen!2s"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0 w-full h-96"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
