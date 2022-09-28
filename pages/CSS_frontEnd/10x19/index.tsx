import { MotionConfig, motion } from "framer-motion";
import type { NextPage } from "next";

const gridMainVars = {
  start: { scale: 1.2, opacity: 0, backgroundColor: "white" },
  end: {
    scale: 1,
    opacity: 1,
    backgroundColor: "#af7732",
    transition: {
      type: "just",
    },
  },
};

const gridSubVars = {
  start: { scale: 0, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    transition: { type: "just" },
  },
};

// const cornerSubVars = {
//   start: { scale: 1, opacity: 0, backgroundColor: "white" },
//   end: {
//     scale: 1,
//     opacity: 1,
//     backgroundColor: "#af7732",
//     transition: { type: "just", delay: 1 },
//   },
// };

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

const Home: NextPage = () => {
  return (
    <motion.div
      variants={gridMainVars}
      initial="start"
      animate="end"
      className=", grid h-screen w-screen grid-cols-1019 gap-[1px]"
    >
      <motion.div
        variants={gridSubVars}
        initial="start"
        animate="end"
        className="grid gap-[1px]"
      >
        <div className="row-span-2 bg-[#F9F9F9] ">4</div>
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

      <div className="grid grid-rows-1019 gap-[1px] overflow-auto whitespace-nowrap">
        <div className="bg-[#F9F9F9]">7</div>
        <div className="bg-[#F9F9F9] ">8</div>
        <div className="overflow-hidden bg-[#F9F9F9]">
          <motion.div
            initial={{ x: 150 }}
            animate={{ x: 800 }}
            transition={{
              duration: 3,
              easeOut: "linear",
              yoyo: Infinity,
            }}
            className="mt-3 animate-pulse text-xl text-[#af7732] "
          >
            If there&apos;s a bustle in your hedgerow, don&apos;t be alarmed now
            It&apos;s just a spring clean for the May Queen
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={gridSubVars}
        initial="start"
        animate="end"
        className="grid gap-[1px]"
      >
        <div className="row-span-2 bg-[#F9F9F9] ">7</div>
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

export default Home;
