"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

interface Review {
  name: string;
  title: string;
  profilePic: string;
  testimony: string;
  date: string;
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Jane Sereyan",
      title:"Teacher",
      profilePic: "/teacher1.jpg",
      testimony:
        "The school provides a nurturing environment where every child’s potential is celebrated. I’ve seen tremendous growth in our learners!",
      date: "March 12, 2025",
    },
    {
      name: "Paul Sisimet",
      title:"Parent",
      profilePic: "/parent1.jpg",
      testimony:
        "As a parent, I’m amazed at the transformation in my child. The programs are engaging, and the teachers are truly dedicated.",
      date: "Feb 27, 2025",
    },
    {
      name: "Emily Nempiris",
      profilePic: "/student1.jpg",
      title:"Learner",
      testimony:
        "I love how we get to explore STEM projects and arts! School has never been this fun and inspiring for me.",
      date: "Jan 15, 2025",
    },
    {
      name: "Elijah Shonko",
      title:"Alumni",
      profilePic: "/coach1.jpg",
      testimony:
        "Our sports program has boosted confidence and teamwork among students. Proud to be part of this journey!",
      date: "Dec 5, 2024",
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <section className="py-20 overflow-hidden w-full">
  <div className="max-w-6xl mx-auto px-4">
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-700"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      What Our Community Says
    </motion.h2>

    {/* Embla Carousel */}
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex w-full p-4">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] px-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-gradient-to-b from-blue-700 to-blue-400 shadow-lg rounded-xl p-[2px] transition-transform hover:scale-105 h-full">
              <div className="bg-stone-200 rounded-xl p-6 flex flex-col h-full justify-between">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.profilePic}
                    alt={`${review.name}'s profile`}
                    width={80}
                    height={80}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg text-blue-700 font-bold">
                      {review.name}
                    </h3>
                    <h6 className="text-sm text-gray-500 ">
                      {review.title}
                    </h6>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">{`"${review.testimony}"`}</p>
                <p className="text-sm text-blue-500 text-right">
                  {review.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Reviews;
