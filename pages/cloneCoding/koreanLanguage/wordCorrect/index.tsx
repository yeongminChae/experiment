import type { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { consumers } from "stream";

const WordCorrect: NextPage = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const [animalIndex, setAnimalIndex] = useState(0);
  const nextPls = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setAnimalIndex((prev) => prev + 1);
  };
  const prevPls = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setAnimalIndex((prev) => prev - 1);
  };
  const customValue = {
    direction: back,
  };

  let animalsName = [
    "호랑이",
    "고래",
    "기린",
    "양",
    "강아지",
    "용",
    "곰",
    "고양이",
    "토끼",
    "말",
  ];
  let animalsImg = ["🐅", "🐳", "🦒", "🐑", "🐕", "🐉", "🧸", "🐈", "🐇", "🐎"];

  return (
    <motion.div className="flex h-screen w-screen items-center justify-around bg-gradient-to-tl from-purple-600 to-pink-600">
      <motion.button
        whileHover={{
          scale: 1.5,
        }}
        className="relative -right-9"
        onClick={prevPls}
      >
        Prev
      </motion.button>
      <div className="flex h-64 w-[35rem] flex-col items-center justify-around ">
        <AnimatePresence mode="wait" custom={customValue.direction}>
          <motion.div
            key={visible}
            custom={customValue.direction}
            variants={box}
            initial="entry"
            animate="center"
            exit="exit"
            className="absolute mb-48 flex h-40 w-64 items-center justify-center rounded-[40px] bg-white text-2xl shadow-xl"
          >
            <div className="">
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className=""
              >
                {visible}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.5 }}
                className="absolute left-20 top-5 text-8xl"
              >
                {animalsImg[animalIndex]}
              </motion.span>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-64 flex h-36 w-full items-center justify-between ">
          <div className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"></div>
          <div className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"></div>
          <div className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"></div>
          <div className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"></div>
        </div>
      </div>
      <motion.button
        whileHover={{
          scale: 1.5,
        }}
        className="relative -left-9"
        onClick={nextPls}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

const box = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 0.3,
    },
  }),
};

export default WordCorrect;
