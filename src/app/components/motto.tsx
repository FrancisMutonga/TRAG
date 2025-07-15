"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const motto = "Education For a Better Future";

const letterVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.06,
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  }),
};

export default function MottoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  return (
    <section className="py-6 px-4 text-center">
      <div ref={ref}>
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-700 flex flex-wrap justify-center gap-[2px]">
          {motto.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  );
}
