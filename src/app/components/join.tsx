"use client";
import React from "react";
import { motion } from "framer-motion";


const Join = () => {
    const ctaButtons = [
        { label: "Apply Now", href: "/apply", primary: true },
        { label: "Contact Us", href: "/contact", primary: false },
      ];
  return (
    <>

      <section className="py-16 px-6 text-white text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl text-blue-600 font-bold mb-4">Join Our Vibrant School Community</h2>
          <p className="mb-8 text-stone-700 text-lg">
            Ready to give your child an exceptional educational experience? Apply today or contact us to learn more!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {ctaButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                className={`${
                  button.primary
                    ? "bg-white text-blue-600 hover:bg-gray-200"
                    : "border border-white hover:bg-white text-stone-500 hover:text-blue-600"
                } font-semibold py-2 px-6 rounded-full transition`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
        </section>
    </>
  );
};

export default Join;
