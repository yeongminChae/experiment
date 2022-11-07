import type { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import arrayShuffle from "array-shuffle";
import LocalStorage, { cls } from "../../../../libs/client/utils";
import { useRouter } from "next/router";

export interface ITimer {
  seconds: number;
  completed: any;
}

const WordCorrect: NextPage = () => {
  const router = useRouter();
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
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const [animalIndex, setAnimalIndex] = useState(0);
  const [forUseEffect, setForUseEffect] = useState([]);
  const [markCorrectAns, setMarkCorrectAns] = useState(false);
  const [markWrongAns, setMarkWrongAns] = useState(false);
  const [checkAns, setCheckAns] = useState(false);
  const [answerCount, setAnswerCount] = useState(0);
  const [ansHistory, setAnsHistory] = useState([]);
  const [failHistory, setFailHistory] = useState([]);
  const nextPls = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setAnimalIndex((prev) => prev + 1);
    setMarkCorrectAns(false);
    setMarkWrongAns(false);
    if (visible >= 10) {
      router.push("/cloneCoding/koreanLanguage/lastPage");
      LocalStorage.setItem("Quiz_result", answerCount + "");
    }
  };
  const prevPls = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setAnimalIndex((prev) => prev - 1);
  };
  const customValue = {
    direction: back,
  };
  const chosenIndex = animalsImg.indexOf(animalsImg[animalIndex]);
  let answerName: string[] = [];
  answerName.push(animalsName[chosenIndex]);
  const animalPickFunc = () => {
    for (let i = 1; i <= 3; i++) {
      let number = animalsName[Math.floor(Math.random() * animalsName.length)];
      if (!sameNum(number)) {
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
  useEffect(() => {
    if (visible) {
      setForUseEffect(() => animalPickFunc());
    }
  }, [visible]);
  const shuffleAns = arrayShuffle(forUseEffect);
  useEffect(() => {
    shuffleAns;
  }, [visible]);
  const onAnsClick = async (event: any) => {
    const originAns = animalsName[chosenIndex];
    const chosenAns = event.target.innerText;
    if (originAns === chosenAns) {
      setMarkCorrectAns(true);
      setAnswerCount((prev) => prev + 1);
      setAnsHistory((ansHistory) => [...ansHistory, originAns]);
    } else {
      setMarkWrongAns(true);
      setFailHistory((failHistory) => [...failHistory, originAns]);
    }
  };
  useEffect(() => {
    console.log("ansHistory");
    console.log(ansHistory);
    console.log("failHistory");
    console.log(failHistory);
    LocalStorage.setItem("ansCount", JSON.stringify(ansHistory));
    LocalStorage.setItem("failCount", JSON.stringify(failHistory));
  }, [onAnsClick]);
  const indexName = animalsName[chosenIndex];
  const onReTryClick = () => {
    setMarkWrongAns(false);
  };
  const onCheckClick = () => {
    setCheckAns(true);
  };
  const Completionist = () => <span> {indexName}</span>;
  const renderer = ({ seconds, completed }: ITimer) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span>{seconds}</span>;
    }
  };
  return (
    <motion.div className="flex h-screen w-screen items-center justify-around bg-gradient-to-tl from-purple-600 to-pink-600">
      <div className="flex w-11/12 justify-around">
        {markCorrectAns ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#A8E890"
            className={cls(
              "absolute z-[2] h-96 w-96",
              markCorrectAns ? "" : "hidden"
            )}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1],
              scale: 1,
              transition: { duration: 1.8 },
              y: -70,
            }}
            // exit={{ rotateX: 180, transition: { delay: 1.5 }, opacity: 0 }}
          >
            <path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z" />
          </motion.svg>
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#E0144C"
            className={cls(
              "absolute z-[2] h-96 w-96 ",
              markWrongAns ? "" : "hidden"
            )}
            initial={{ opacity: 0, y: -60 }}
            animate={{
              opacity: 1,
              scale: [0, 1],
              transition: { duration: 1.8, delay: 1.2 },
            }}
            // exit={{ rotateX: 180, transition: { delay: 1.5 }, opacity: 0 }}
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </motion.svg>
        )}
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
                  transition={{ duration: 1.6 }}
                  className=""
                >
                  {visible}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1.5 }}
                  className="absolute left-20 top-5 text-8xl"
                >
                  {animalsImg[animalIndex]}
                </motion.span>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mr-10 h-full">
            <div className="mx-5 mt-44 flex h-36 w-full items-center justify-between ">
              <motion.div
                whileHover={{
                  scale: 1.25,
                  boxShadow: "0px 0px 8px rgb(255,255,255) ",
                }}
                className="flex h-24 w-32 items-center justify-center rounded-lg bg-red-200 text-xl font-bold text-black/70 shadow-xl "
                onClick={onAnsClick}
              >
                {markCorrectAns ? (
                  <span> 🙌 🙌 </span>
                ) : markWrongAns ? (
                  "😭 😢"
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.1 } }}
                  >
                    {shuffleAns[0]}
                  </motion.span>
                )}
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.25,
                  boxShadow: "0px 0px 8px rgb(255,255,255) ",
                }}
                className="flex h-24 w-32 items-center justify-center rounded-lg bg-red-200  text-xl font-bold text-black/70 shadow-xl"
                onClick={onAnsClick}
              >
                {markCorrectAns ? (
                  <span> 🙌 🙌 </span>
                ) : markWrongAns ? (
                  "😭 😢"
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.1 } }}
                  >
                    {shuffleAns[1]}
                  </motion.span>
                )}
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.25,
                  boxShadow: "0px 0px 8px rgb(255,255,255) ",
                }}
                className="flex h-24 w-32 items-center justify-center rounded-lg bg-red-200  text-xl font-bold text-black/70 shadow-xl"
                onClick={onAnsClick}
              >
                {markCorrectAns ? (
                  <span> 🙌 🙌 </span>
                ) : markWrongAns ? (
                  "😭 😢"
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.1 } }}
                  >
                    {shuffleAns[2]}
                  </motion.span>
                )}
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.25,
                  boxShadow: "0px 0px 8px rgb(255,255,255) ",
                }}
                className="flex h-24 w-32 items-center justify-center rounded-lg bg-red-200  text-xl font-bold text-black/70 shadow-xl"
                onClick={onAnsClick}
              >
                {markCorrectAns ? (
                  <span> 🙌 🙌 </span>
                ) : markWrongAns ? (
                  "😭 😢"
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.1 } }}
                  >
                    {shuffleAns[3]}
                  </motion.span>
                )}
              </motion.div>
            </div>
            <div className="ml-5 flex w-full items-center justify-around text-sm font-bold">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5, duration: 1.5 },
                }}
                whileHover={{
                  scale: 1.25,
                  boxShadow: "0px 0px 8px rgb(255,255,255) ",
                }}
                className={cls(
                  "mt-1 flex h-16 w-32 cursor-pointer items-center justify-center rounded-lg bg-yellow-100 shadow-lg",
                  markWrongAns ? "" : "hidden"
                )}
                onClick={onReTryClick}
              >
                RETRY
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5, duration: 1.5 },
                }}
                whileHover={{
                  scale: 1.25,
                  boxShadow: "0px 0px 8px rgb(255,255,255) ",
                }}
                className={cls(
                  "mt-1 flex h-16 w-32 cursor-pointer items-center justify-center rounded-lg bg-yellow-100 shadow-lg",
                  markWrongAns ? "" : "hidden"
                )}
                onClick={onCheckClick}
              >
                {checkAns ? (
                  <Countdown date={Date.now() + 3000} renderer={renderer} />
                ) : (
                  "Check Answer?"
                )}
              </motion.div>
            </div>
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
        <div className="absolute top-10 right-16">
          <div>{`current : ${answerCount} / 10`} </div>
        </div>
      </div>
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
