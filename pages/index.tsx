import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  animate,
  AnimatePresence,
} from "framer-motion";
import QuickViewIndex from "../components/quickViewIndex";
import memoji1 from "./cloneCoding/image/memoji/memoji1.png";
import memoji2 from "./cloneCoding/image/memoji/memoji2.png";
import memoji3 from "./cloneCoding/image/memoji/memoji3.png";
import memoji4 from "./cloneCoding/image/memoji/memoji4.png";
import memoji5 from "./cloneCoding/image/memoji/memoji5.png";
import memoji6 from "./cloneCoding/image/memoji/memoji6.png";
import memoji7 from "./cloneCoding/image/memoji/memoji7.png";
import memoji8 from "./cloneCoding/image/memoji/memoji8.png";
import Image from "next/image";

export const sleep = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const indexCount = async () => {
    await sleep(4000);
    setIndex((prev) => (prev === 5 ? (prev = 0) : prev + 1));
  };
  useEffect(() => {
    indexCount();
  }, [index]);
  const wordLi = [
    " 'Hello World!' ",
    " 'Hello JavsSript' ",
    " 'Hello TypeScript' ",
    " 'Hello React' ",
    " 'Hello NextJs' ",
    " 'Hello Python' ",
  ];
  const onBtnClick = (event: any) => {
    if (event.target.id === "btn1") {
      setClicked1(true);
      setClicked2(false);
      setClicked3(false);
    } else if (event.target.id === "btn1") {
      setClicked1(false);
      setClicked2(true);
      setClicked3(false);
    } else if (event.target.id === "btn1") {
      setClicked1(false);
      setClicked2(false);
      setClicked3(true);
    }
    console.log(event.target.id);
  };
  const printEngrave = () => {
    return (
      <AnimatePresence mode="sync">
        <motion.div className="absolute top-[20rem] left-32 text-3xl text-white ">
          {index === 5 ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pl-[3.8rem]"
            >
              print({wordLi[5]})
            </motion.span>
          ) : (
            <motion.span
              animate={{
                opacity: [0, 1, 1, 0],
                transition: { duration: 4, repeat: Infinity },
              }}
              className="pl-[0rem]"
            >
              console.log({wordLi[index]})
            </motion.span>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div className="h-[89rem] w-full">
        <div className="h-[46.6rem] w-full bg-[#0c0511] ">
          <span
            style={{
              fontFamily: "Luckiest Guy",
            }}
            className="absolute top-[10rem] left-20 text-7xl font-semibold tracking-widest text-[#FF9800]"
          >
            PORTFOLIO
          </span>
          {printEngrave()}
        </div>
        <div>
          <div className="absolute bottom-12 left-1/2 flex flex-col ">
            {clicked1 === false ? (
              <motion.button
                onClick={() => setClicked1(true)}
                id="btn1"
                initial={false}
                animate={{
                  rotateY: 0,
                }}
                layoutId="button1"
                variants={variants}
                className="mt-40 h-5 w-5 rounded-full bg-fuchsia-500 ring-fuchsia-300 ring-offset-2 transition focus:ring-2"
              />
            ) : (
              <motion.button
                onClick={() => setClicked1(false)}
                id="btn1"
                initial={false}
                layoutId="button1"
                variants={variants}
                animate={{
                  rotateY: 0,
                }}
                transition={{
                  duration: 1.5,
                  type: "tween",
                }}
                className="ml-[20rem] h-44 w-44 space-y-28 rounded-full bg-fuchsia-500 ring-fuchsia-300 ring-offset-2 transition focus:ring-2"
              />
            )}
            {clicked2 === false ? (
              <motion.button
                layoutId="button2"
                onClick={() => setClicked2(true)}
                id="btn2"
                variants={variants}
                className="mt-40 h-5 w-5 rounded-full bg-indigo-500 ring-indigo-300 ring-offset-2 transition focus:ring-2"
              />
            ) : (
              <motion.button
                layoutId="button2"
                onClick={() => setClicked2(false)}
                id="btn2"
                variants={variants}
                className="ml-[20rem] h-44 w-44 space-y-28 rounded-full bg-indigo-500 ring-indigo-300 ring-offset-2 transition focus:ring-2"
              />
            )}
            {clicked3 === false ? (
              <motion.button
                onClick={() => setClicked3(true)}
                id="btn3"
                layoutId="button3"
                variants={variants}
                className="mt-40 h-5 w-5 rounded-full bg-teal-500 ring-teal-300 ring-offset-2 transition focus:ring-2"
              />
            ) : (
              <motion.button
                onClick={() => setClicked3(false)}
                id="btn3"
                layoutId="button3"
                variants={variants}
                className="ml-[20rem] h-44 w-44 space-y-28 rounded-full bg-teal-500 ring-teal-300 ring-offset-2 transition focus:ring-2"
              />
            )}
          </div>
        </div>
        <div className="-mt-10 flex h-[45rem] w-full items-center justify-center bg-[#FEFBF6] ">
          <QuickViewIndex />
        </div>
      </div>
    )
  );
};

const variants = {
  animate1: {
    x: 150,

    transition: { duration: 1 },
  },
  animate2: {
    x: -100,
    opacity: [1, 0],
    transition: { duration: 1 },
  },
};

export default Home;
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/MenuToggle.tsx
