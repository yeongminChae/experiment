import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Animation1 from "./animation/animation1";
import Animation2 from "./animation/animation2";
import Animation3 from "./animation/animation3";
import Animation4 from "./animation/animation4";
import Animation5 from "./animation/animation5";
import Animation6 from "./animation/animation6";
import Animation7 from "./animation/animation7";

export default function FifthApp() {
  const [index, setIndex] = useState(1);
  const [back, setBack] = useState(false);
  let ran1 = Math.floor(Math.random() * 5 + 5);
  const bottomIndex = `${ran1}rem`;
  const onNextclick = () => {
    setBack(false);
    setIndex((prev) => (prev === 7 ? 7 : prev + 1));
  };
  const onPrevclick = () => {
    setBack(true);
    setIndex((prev) => (prev == 1 ? 1 : prev - 1));
  };
  const customValue = {
    direction: back,
  };
  return (
    <div className="mb-20 ml-0 h-[25rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl md:ml-40 md:w-[60vw] xl:absolute xl:bottom-40 xl:left-72 xl:w-[45vw] ">
      <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
        Yeongmin&apos;s Collection
      </div>
      <div className="ml-6 mt-1 text-2xl opacity-90 ">
        So far , I made them All !
      </div>
      <AnimatePresence mode="wait" custom={customValue.direction}>
        <div className="mt-20 flex h-full w-full justify-around ">
          <motion.div
            whileHover={{ scale: 1.3, originX: 1, originY: 0.5 }}
            className="-mr-0.5 ml-0.5 mt-10 h-10 w-10"
            onClick={onPrevclick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              stroke="1"
              className="h-6 w-6"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </motion.div>
          <motion.div
            variants={box}
            key={index}
            custom={customValue.direction}
            initial="entry"
            animate="center"
            exit="exit"
            className="-ml-2 -mt-20 flex h-[20rem] w-[97%] items-start justify-around rounded-xl shadow-2xl"
          >
            {index === 1 && <Animation1 />}
            {index === 2 && <Animation2 />}
            {index === 3 && <Animation3 />}
            {index === 4 && <Animation4 />}
            {index === 5 && <Animation5 />}
            {index === 6 && <Animation6 />}
            {index === 7 && <Animation7 />}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3, originX: 0, originY: 0.5 }}
            className="-mr-3 ml-1 mt-10 h-10 w-10"
            onClick={onNextclick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512 "
              className="h-6 w-6 "
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

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
