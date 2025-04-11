"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedH1() {
  const text = ["Unleash Your Creativity"];
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [isInView, controls]);

  const charVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.6 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
  };

  return (
    <motion.h1
      ref={ref}
      className="framer-text text-4xl md:text-6xl font-bold text-center leading-tight mb-5 text-primary"
      initial="hidden"
      animate={controls}
      exit="exit"
      style={{
        display: "inline-block",
        position: "relative",
        whiteSpace: "pre-line",
      }}
    >
      {text.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: "block" }}>
          {isMobile
            ? // On mobile, animate by words
              line.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className="word"
                  style={{
                    display: "inline-block",
                    marginRight: "0.3em",
                  }}
                  variants={wordVariants}
                  custom={wordIndex}
                >
                  {word}
                </motion.span>
              ))
            : // On desktop, animate by characters
              line.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="char"
                  style={{
                    display: "inline-block",
                    whiteSpace: char === " " ? "pre" : "normal",
                    minWidth: char === " " ? "0.3em" : "auto",
                  }}
                  variants={charVariants}
                  custom={index + lineIndex * 10}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
        </div>
      ))}
    </motion.h1>
  );
}
