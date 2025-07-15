"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 300, label: "Students Enrolled" },
  { value: 50, label: "Qualified Teachers" },
  { value: 10, label: "Extracurricular Clubs" },
  { value: 100, label: "Parent Satisfaction (%)", suffix: "%" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SchoolStats: React.FC = () => {
  return (
    <section className=" py-12">
      <motion.div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // run every time 50% visible
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="transform transition duration-500 hover:scale-105"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.suffix || "+"}
                enableScrollSpy
                scrollSpyDelay={500} 
              />
            </h3>
            <p className="text-lg text-stone-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SchoolStats;
