"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function AnimatedH1() {
  const text = ["Unleash Your Creativity", "with Coding and AI"]; // Split into two lines
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // Detect when 30% of the section is in view

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("exit"); // Disappear when out of view
    }
  }, [isInView, controls]);

  const charVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.6 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } }, // Moves up and disappears on scroll
  };

  return (
    <motion.h1
      ref={ref}
      className="framer-text text-4xl md:text-6xl font-bold text-center leading-tight mb-5"
      initial="hidden"
      animate={controls}
      exit="exit"
      style={{ display: "inline-block", position: "relative", whiteSpace: "pre-line" }}
    >
      {text.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: "block" }}> {/* Creates a line break */}
          {line.split("").map((char, index) => (
            <motion.span
              key={index}
              className="char"
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : "normal", // Ensures spaces are kept
                minWidth: char === " " ? "0.3em" : "auto", // Adds spacing for readability
              }}
              variants={charVariants}
              custom={index + lineIndex * 10} // Stagger animation across lines
            >
              {char === " " ? "\u00A0" : char} {/* Keeps spaces visible */}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.h1>
  );
}
