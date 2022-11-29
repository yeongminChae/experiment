/* eslint-disable @typescript-eslint/no-floating-promises */
import { NextPage } from "next";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import banana1 from "./image/banana1.png";
import banana2 from "./image/banana2.png";
import { useState } from "react";

const KoreanLanguage: NextPage = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <div className="h-[105vh] w-full overflow-y-hidden bg-gradient-to-r from-[#FFFF00] via-[#FFEA11] to-[#FFFF00] ">
        <AnimatePresence>
          <div className="flex flex-col items-center justify-center">
            <div className="mt-20 flex h-40 w-full items-center justify-center text-2xl font-bold">
              Korean Quiz Theme 1
            </div>
            <div className="flex h-full w-[80%] cursor-pointer items-center justify-center">
              <Link href={"/cloneCoding"}>
                <motion.div
                  variants={startBox}
                  initial="entry"
                  animate="center"
                  whileHover={{
                    boxShadow: "0px 0px 8px white",
                    scale: 1.25,
                  }}
                  className="ml-20 flex h-[5rem] w-[15rem] flex-col items-center rounded-full bg-[#C3FF99] shadow-xl hover:bg-[#00ffd1] "
                >
                  <h4 className="mt-7 flex items-center justify-center text-xl font-bold text-teal-700 ">
                    To Home
                  </h4>
                </motion.div>
              </Link>
              <Link href="/cloneCoding/koreanLanguage/wordCorrect/ ">
                <motion.div className="relative mt-10 h-[25rem] w-[20rem]">
                  <motion.div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    variants={bananaBox}
                  >
                    {isHover === false ? (
                      <Image
                        src={banana2}
                        alt="banana2"
                        layout="fill"
                        placeholder="blur"
                        className=" object-fill "
                      />
                    ) : (
                      <Image
                        src={banana1}
                        alt="banana1"
                        layout="fill"
                        placeholder="blur"
                        className=" object-contain "
                      />
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={0.3}
                      stroke="currentColor"
                      className="absolute left-[12rem] z-0 ml-0 -mt-16 h-64 w-64 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      />
                      {isHover === false ? (
                        <>
                          <text x="5" y="13" fontSize="3">
                            Let&apos;s Go?
                          </text>
                        </>
                      ) : (
                        <>
                          <text x="5" y="13" fontSize="3">
                            Let&apos;s Go!
                          </text>
                        </>
                      )}
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </div>
          </div>
        </AnimatePresence>
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
const bananaBox = {
  animate: {
    scale: [1, 1.5, 1.3, 1.1, 1],
    rotate: [0, 0, 180, 180, 0],
    // borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export default KoreanLanguage;
