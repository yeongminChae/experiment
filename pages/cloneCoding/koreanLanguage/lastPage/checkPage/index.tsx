/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { NextPage } from "next";
import LocalStorage from "../../../../../libs/client/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CheckPage: NextPage = () => {
  const router = useRouter();
  const [resultOutput, setResultOutput] = useState("");
  const [ansUseResult, setAnsUseResult] = useState("");
  const [failUseResult, setFailUseResult] = useState("");
  const [isHovering, setIsHovering] = useState("");
  const resultCount = LocalStorage.getItem("Quiz_result");
  const ansOutput = LocalStorage.getItem("ansCount");
  const failOutput = LocalStorage.getItem("failCount");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ansResult = JSON.parse(ansOutput);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const failResult = JSON.parse(failOutput);
  const animalsImg = [
    "🐅",
    "🐳",
    "🦒",
    "🐑",
    "🐕",
    "🐉",
    "🧸",
    "🐈",
    "🐇",
    "🐎",
  ];
  const animalsName = [
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
  useEffect(() => {
    setResultOutput(resultCount);
  }, [resultCount]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setAnsUseResult(ansResult);
  }, [ansResult]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setFailUseResult(failResult);
  }, [failResult]);
  const ansNames: any = String(ansUseResult)
    .toString()
    .split(",")
    .map((i) => <span key={i}>{i} </span>);
  /* tslint:disable */
  const failNames: any = String(failUseResult)
    .toString()
    .split(",")
    .filter((element, index) => {
      if (failUseResult !== null) {
        return failUseResult.indexOf(element) === index;
      } else if (failUseResult === null) {
        router.push("/cloneCoding/koreanLanguage");
      }
    })
    .map((i) => <span key={i}>{i} </span>);
  const onGoBackClick = () => {
    router.push("/cloneCoding/koreanLanguage/");
    LocalStorage.removeItem("Quiz_result");
    LocalStorage.removeItem("ansCount");
    LocalStorage.removeItem("failCount");
  };
  return (
    <AnimatePresence>
      <div className="h-screen w-screen bg-gradient-to-tl from-purple-600 to-pink-600 ">
        <motion.div
          onClick={onGoBackClick}
          className="ml-3 cursor-pointer pt-3 text-white/80 "
        >
          &larr; To Home
        </motion.div>
        <div className="mt-[55px] flex w-full flex-col items-center justify-center space-y-4 sm:mt-20">
          <span className="flex w-72 justify-center text-white/80">
            {" "}
            This is your Score : {resultOutput} / 10{" "}
          </span>
          <div className="flex w-full flex-col items-center justify-center text-white/80">
            <span>Right Answers Board &rarr; </span>
            <div className="gap-4 space-x-3 "> {ansNames} </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center text-white/80">
            <span>Wrong Answers Board &rarr; </span>
            <div className="gap-4 space-x-3 ">{failNames} </div>
          </div>
          <div className="grid h-full w-[90%] grid-flow-row grid-cols-3 gap-2 sm:w-[99%] sm:grid-flow-col sm:grid-rows-2 sm:gap-y-5 sm:pt-7 md:w-[97%] xl:w-[91.25%] xl:pt-5 ">
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[0])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64"
            >
              {isHovering === animalsName[0] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1,
                    duration: 1.5,
                  }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[0]}
                </motion.span>
              ) : (
                animalsImg[0]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[1])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[1] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[1]}
                </motion.span>
              ) : (
                animalsImg[1]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[2])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" cursor-pointerl flex h-24 w-36 items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[2] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[2]}
                </motion.span>
              ) : (
                animalsImg[2]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[3])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[3] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[3]}
                </motion.span>
              ) : (
                animalsImg[3]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[4])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[4] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[4]}
                </motion.span>
              ) : (
                animalsImg[4]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[5])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[5] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[5]}
                </motion.span>
              ) : (
                animalsImg[5]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[6])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[6] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[6]}
                </motion.span>
              ) : (
                animalsImg[6]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[7])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[7] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[7]}
                </motion.span>
              ) : (
                animalsImg[7]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[8])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className=" flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[8] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[8]}
                </motion.span>
              ) : (
                animalsImg[8]
              )}
            </motion.div>
            <motion.div
              onMouseOver={() => setIsHovering(animalsName[9])}
              onMouseOut={() => setIsHovering("")}
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255) ",
                rotateY: 180,
              }}
              transition={{
                duration: 1.5,
              }}
              className="ml-[9.55rem] flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:ml-0 sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64 "
            >
              {isHovering === animalsName[9] ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="flex justify-center text-2xl"
                >
                  {animalsName[9]}
                </motion.span>
              ) : (
                animalsImg[9]
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
export default CheckPage;
