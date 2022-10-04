import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";

const gridMainVars = {
  start: { scale: 1.5, opacity: 0, backgroundColor: "#F9F9F9" },
  end: {
    scale: 1,
    opacity: 1,
    backgroundColor: "#af7732",
    transition: {
      type: "just",
      duration: 3,
    },
  },
};

const gridSubVars1 = {
  start: { scale: 0, opacity: 1 },
  end: {
    scale: 1,
    opacity: 1,
    backgroundColor: "#af7732",
    transition: { type: "just", duration: 2 },
  },
};

const gridSubVars2 = {
  start: { scale: 0, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    backgroundColor: "#af7732",
    transition: { type: "just", duration: 2 },
  },
};

const gridMidVars = {
  start: { scale: 0, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    backgroundColor: "#af7732",
    transition: { type: "just", duration: 0.5 },
  },
};

const svgVars = {
  start: { pathLength: 0, opacity: 0 },
  end: {
    opacity: 1,
    pathLength: 1,
    pill: "#af7732",
    boxShadow: "10px 10px 8px rgb(255,255,255) ",
  },
};

const numVars = {
  start: { scale: 1, opacity: 1 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "just",
    },
  },
  whileHover: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    backgroundColor: "#af7732",
    color: "white",
  },
};

const P10x19: NextPage = () => {
  return (
    <motion.div
      variants={gridMainVars}
      initial="start"
      animate="end"
      exit={{ backgroundColor: "#af7732" }}
      className="grid h-screen w-screen grid-cols-1019 gap-[1px]"
    >
      <motion.div
        variants={gridSubVars1}
        initial="start"
        animate="end"
        className="grid gap-[1px]"
      >
        <div className="row-span-2 flex items-center justify-center bg-[#F9F9F9] ">
          <motion.svg
            variants={svgVars}
            initial="start"
            animate="end"
            transition={{
              default: { duration: 5 },
              fill: { duration: 3, delay: 3 },
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="h-6 w-6 stroke-black stroke-2 "
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </motion.svg>
        </div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={numVars}
            initial="start"
            animate="end"
            whileHover="whileHover"
            className="row-span-5 flex flex-col-reverse items-center justify-center bg-[#F9F9F9] text-xl text-[#af7732]"
          >
            #{i + 6}
          </motion.div>
        ))}
        <div className="row-span-2 bg-[#F9F9F9]">8</div>
      </motion.div>

      <motion.div
        variants={gridMidVars}
        initial="start"
        animate="end"
        className="grid grid-rows-1019 gap-[1px] overflow-auto whitespace-nowrap "
      >
        <div className="bg-[#F9F9F9]"></div>
        <motion.div className="bg-[#F9F9F9]">8</motion.div>
        <motion.div className="overflow-hidden bg-[#F9F9F9]">
          <motion.div
            initial={{ x: 550 }}
            animate={{ x: -1000 }}
            exit={{ x: -600 }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="mt-3 text-xl text-[#af7732] "
          >
            If there&apos;s a bustle in your hedgerow, don&apos;t be alarmed now
            It&apos;s just a spring clean for the May Queen
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={gridSubVars2}
        initial="start"
        animate="end"
        className="grid gap-[1px]"
      >
        <motion.div
          variants={numVars}
          initial="start"
          animate="end"
          whileHover="whileHover"
          className="row-span-2 flex cursor-pointer items-center justify-center bg-[#F9F9F9] text-[16px] text-[#af7732]"
        >
          <Link href={"./10x19/list"}>MENU</Link>
        </motion.div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={numVars}
            initial="start"
            animate="end"
            whileHover="whileHover"
            className="row-span-5 flex flex-col-reverse items-center justify-center bg-[#F9F9F9] text-xl text-[#af7732]"
          >
            #{i + 1}
          </motion.div>
        ))}
        <div className="row-span-2 bg-[#F9F9F9]">99</div>
      </motion.div>
    </motion.div>
  );
};

export default P10x19;
