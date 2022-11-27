import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { sleep } from "../pages";

const IndexTitle = () => {
  const [index, setIndex] = useState(0);
  const indexCount = async () => {
    await sleep(4000);
    setIndex((prev) => (prev === 5 ? (prev = 0) : prev + 1));
  };
  useEffect(() => {
    indexCount();
  }, [index, setIndex, sleep]);
  const wordLi = [
    " 'Hello World!' ",
    " 'Hello JavsSript' ",
    " 'Hello TypeScript' ",
    " 'Hello React' ",
    " 'Hello NextJs' ",
    " 'Hello Python' ",
  ];
  const printEngrave = () => {
    return (
      <AnimatePresence mode="sync">
        <motion.div className="absolute top-[15rem] left-[5rem] z-10 flex w-[26.5rem] items-center justify-center text-3xl text-white/80 ">
          {index === 5 ? (
            <motion.span
              initial={{ opacity: 0 }}
              // animate={{ opacity: [0, 1, 1, 0] }}
              // className="pl-[3.8rem]"
            >
              print({wordLi[5]})
            </motion.span>
          ) : (
            <motion.span
            // className="pl-[0rem]"
            >
              console.log({wordLi[index]})
            </motion.span>
          )}
        </motion.div>
      </AnimatePresence>
    );
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          style={{
            fontFamily: "Luckiest Guy",
          }}
          className="absolute top-[4rem] left-20 flex h-24 w-[27rem] items-center justify-center rounded-lg text-7xl font-semibold tracking-widest text-fuchsia-200 shadow-inner "
        >
          <motion.span
            className="mt-2"
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 0, duration: 2 },
            }}
          >
            P
          </motion.span>
          <motion.span
            className="mt-2"
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 0.5, duration: 2 },
            }}
          >
            O
          </motion.span>
          <motion.span
            className="mt-2"
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 1, duration: 2 },
            }}
          >
            R
          </motion.span>
          <motion.span
            className="mt-2"
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 1.5, duration: 2 },
            }}
          >
            T
          </motion.span>
          <motion.span
            className="mt-2"
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 2, duration: 2 },
            }}
          >
            F
          </motion.span>
          <motion.span
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 2.5, duration: 2 },
            }}
            className="mt-2"
          >
            O
          </motion.span>
          <motion.span
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 3, duration: 2 },
            }}
            className="mt-2"
          >
            L
          </motion.span>
          <motion.span
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 3.5, duration: 2 },
            }}
            className="mt-2"
          >
            I
          </motion.span>
          <motion.span
            className="mt-2"
            animate={{
              opacity: [0, 1],
              y: [10, 0],
              transition: { delay: 4, duration: 2 },
            }}
          >
            O
          </motion.span>
        </motion.div>
      </AnimatePresence>
      {printEngrave()}
    </>
  );
};

export default IndexTitle;
