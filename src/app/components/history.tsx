"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const History = () => {
  
  return (
    <>
      {/* Our Story Section */}
      <section className="py-16 px-6 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/logo.png"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in <span className="font-semibold">1998</span>, <span className="font-semibold">TopRide Academy</span> began as a small community of passionate educators and eager learners. Over the years, we have grown into a dynamic institution known for academic excellence, innovation, and a nurturing environment.
            </p>
            <p className="text-gray-700">
              Today, we continue to inspire and empower students to reach their full potential — building not just brilliant minds, but compassionate hearts and resilient spirits.
            </p>
          </motion.div>
        </div>
      </section>

      
    </>
  );
};

export default History;
