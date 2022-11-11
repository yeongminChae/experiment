import { motion } from "framer-motion";
import { useState } from "react";

export default function Animation1() {
  return (
    <>
      <motion.span
        className="block h-10 w-10 rounded-full"
        animate={{
          opacity: [0, 0.5, 1],
          y: ["450%", "-150%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
        exit={{ opacity: 0 }}
        transition={bounceTransition1}
      />
      <motion.span
        className="block h-10 w-10 rounded-full"
        animate={{
          opacity: [0, 0.5, 1],
          y: ["450%", "-150%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
        transition={bounceTransition2}
        exit={{ opacity: 0 }}
      />
      <motion.span
        className="block h-10 w-10 rounded-full"
        animate={{
          opacity: [0, 0.5, 1],
          y: ["450%", "-150%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
        transition={bounceTransition3}
        exit={{ opacity: 0 }}
      />
    </>
  );
}

const bounceTransition1 = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};
const bounceTransition2 = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
    delay: 0.2,
  },
  backgroundColor: {
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 1,
  },
};
const bounceTransition3 = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
    delay: 0.4,
  },
  backgroundColor: {
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 1.2,
  },
};
