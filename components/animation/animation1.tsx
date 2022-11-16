import { motion } from "framer-motion";
import { useState } from "react";

export default function Animation1() {
  return (
    <>
      <motion.span
        className="block h-10 w-10 rounded-full"
        animate={{
          opacity: [0, 0.5, 1],
          y: ["700%", "-20%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
        transition={bounceTransition1}
      />
      <motion.span
        className="block h-10 w-10 rounded-full"
        animate={{
          opacity: [0, 0.5, 1],
          y: ["700%", "-20%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
        transition={bounceTransition2}
      />
      <motion.span
        className="block h-10 w-10 rounded-full"
        animate={{
          opacity: [0, 0.5, 1],
          y: ["700%", "-20%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
        transition={bounceTransition3}
      />
    </>
  );
}

const bounceTransition1 = {
  y: {
    duration: 0.45,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
  },
  backgroundColor: {
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};
const bounceTransition2 = {
  y: {
    duration: 0.45,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
    delay: 0.15,
  },
  backgroundColor: {
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
    repeatDelay: 1,
  },
};
const bounceTransition3 = {
  y: {
    duration: 0.45,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
    delay: 0.3,
  },
  backgroundColor: {
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeOut",
    repeatDelay: 1.2,
  },
};
