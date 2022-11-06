import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

const KoreanLanguage: NextPage = () => {
  return (
    <div>
      <div className="h-[100vh] w-full bg-gradient-to-r from-[#FFFF00] via-[#FFEA11] to-[#FFFF00] ">
        <div className="grid h-full w-full grid-flow-col grid-cols-3">
          <div className="grid grid-flow-row grid-rows-6 items-center justify-center">
            <div className="h-1/6 w-full">a</div>
            <div className="h-1/6 w-full">b</div>
            <div className="h-1/6 w-full">c</div>
            <div className="h-1/6 w-full">d</div>
            <div className="h-1/6 w-full">e</div>
            <div className="h-1/6 w-full">f</div>
          </div>
          <div className="grid grid-flow-row grid-rows-3 items-center justify-center">
            <div className="mb-10 ml-7 justify-center text-2xl font-bold ">
              Korean Quiz Theme 1
            </div>
            <div className="ml-10 mt-24 h-full w-full cursor-pointer items-center justify-center">
              <Link href="/cloneCoding/koreanLanguage/wordCorrect/ ">
                <motion.div
                  variants={startBox}
                  initial="entry"
                  animate="center"
                  whileHover={{
                    boxShadow: "0px 0px 8px white",
                    scale: 1.25,
                  }}
                  className="flex h-24 w-52 flex-col items-center rounded-full bg-[#C3FF99] shadow-xl hover:bg-[#00ffd1] "
                >
                  <h4 className="mt-9 flex items-center justify-center text-xl font-bold text-teal-700 ">
                    START
                  </h4>
                </motion.div>
              </Link>
            </div>
          </div>
          <div className="grid grid-flow-row grid-rows-5 items-center justify-center">
            <div className="h-1/6 w-full">1</div>
            <div className="h-1/6 w-full">2</div>
            <div className="h-1/6 w-full">3</div>
            <div className="h-1/6 w-full">4</div>
            <div className="h-1/6 w-full">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const startBox = {
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
};

export default KoreanLanguage;
// animate={{
//   scale: [1, 2, 2, 1, 1],
//   rotate: [0, 0, 180, 180, 0],
//   borderRadius: ["0%", "0%", "50%", "50%", "0%"]
// }}
// transition={{
//   duration: 2,
//   ease: "easeInOut",
//   times: [0, 0.2, 0.5, 0.8, 1],
//   repeat: Infinity,
//   repeatDelay: 1
// }}
// <div className="h-[20vh] w-full bg-[#FFDE00] " />
// <div className="h-[20vh] w-full bg-[#FCE700] " />
// <div className="h-[20vh] w-full bg-[#FBDF07] " />
