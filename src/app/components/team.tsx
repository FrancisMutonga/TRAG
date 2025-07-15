"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mr. Peter Waweru",
      role: "School Principal",
      image: "/images/director.png",
    },
    {
      name: "Mrs. Anne Mwangi",
      role: "Head Teacher",
      image: "/teamg.jpg",
    },
    {
      name: "Mrs Lydia Muturi",
      role: "Head of Academics",
      image: "/team2.jpg",
    },
    {
      name: "Coach John Kamau",
      role: "Sports Coordinator",
      image: "/team3.jpg",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-stone-200">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4">
          A passionate team shaping young minds for the future — dedicated to academic excellence, 
          creativity, and holistic growth.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-full object-cover shadow-lg"
                height={120}
                width={120}
              />
              <h3 className="mt-4 text-xl font-semibold text-blue-600">
                {member.name}
              </h3>
              <p className="text-stone-700 mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
