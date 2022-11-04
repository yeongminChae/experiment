import type { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import arrayShuffle from "array-shuffle";

interface IData {
  id: number;
  name: string;
}

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
  const chosenIndex = animalsImg.indexOf(animalsImg[animalIndex]);
  let answerName: string[] = [];
  answerName.push(animalsName[chosenIndex]);

  const function1 = () => {
    for (let i = 1; i <= 3; i++) {
      let number = animalsName[Math.floor(Math.random() * animalsName.length)];
      if (!sameNum(number)) {
        useEffect(() => {
          answerName;
        });
        answerName.push(number);
      } else {
        i--;
      }
    }
    function sameNum(n: string) {
      return answerName.find((e) => e === n);
    }
    return answerName;
  };
  // const { data } = useQuery<IData | string[]>(["datas"], function1());
  // function1();

  function1();
  const shuffleAns = arrayShuffle(answerName);

  console.log(answerName);
  console.log(shuffleAns);
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
          <motion.div
            whileHover={{
              scale: 1.25,
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
            }}
            className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"
          >
            {shuffleAns[0]}
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.25,
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
            }}
            className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"
          ></motion.div>
          <motion.div
            whileHover={{
              scale: 1.25,
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
            }}
            className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"
          ></motion.div>
          <motion.div
            whileHover={{
              scale: 1.25,
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
            }}
            className="h-24 w-32 rounded-lg bg-red-200 shadow-xl"
          ></motion.div>
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
