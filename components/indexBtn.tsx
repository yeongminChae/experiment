import { useEffect, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import { sleep } from "../pages";
import { cls } from "../libs/client/utils";
import { useRouter } from "next/router";
import memoji1 from "../pages/cloneCoding/image/memoji/memoji1.png";
import memoji2 from "../pages/cloneCoding/image/memoji/memoji2.png";
import memoji3 from "../pages/cloneCoding/image/memoji/memoji3.png";
import memoji4 from "../pages/cloneCoding/image/memoji/memoji4.png";
import memoji5 from "../pages/cloneCoding/image/memoji/memoji5.png";
import memoji6 from "../pages/cloneCoding/image/memoji/memoji6.png";
import memoji7 from "../pages/cloneCoding/image/memoji/memoji7.png";
import memoji8 from "../pages/cloneCoding/image/memoji/memoji8.png";
import Image from "next/image";

const IndexBtn = () => {
  const router = useRouter();
  const [clicked1, setClicked1] = useState<
    "initial" | "come" | "gone" | "reload"
  >("initial");
  const [clicked2, setClicked2] = useState<
    "initial" | "come" | "gone" | "reload"
  >("initial");
  const [clicked3, setClicked3] = useState<
    "initial" | "come" | "gone" | "reload"
  >("initial");
  const [clicked4, setClicked4] = useState<
    "initial" | "come" | "gone" | "reload"
  >("initial");

  const onToMyClick = () => {
    setClicked1("come");
    setClicked2("gone");
    setClicked3("gone");
    setClicked4("gone");
  };
  const onBtnClick = (event: any) => {
    if (event.target.innerText === "A") {
      setClicked1("come");
      setClicked2("gone");
      setClicked3("gone");
      setClicked4("gone");
    } else if (event.target.innerText === "B") {
      setClicked1("gone");
      setClicked2("come");
      setClicked3("gone");
      setClicked4("gone");
    } else if (event.target.innerText === "C") {
      setClicked1("gone");
      setClicked2("gone");
      setClicked3("come");
      setClicked4("gone");
    } else if (event.target.innerText === "D") {
      setClicked1("gone");
      setClicked2("gone");
      setClicked3("gone");
      setClicked4("come");
    }
  };
  const onBoxChoose = () => {
    return (
      <motion.button
        whileHover={{
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          transition: {
            duration: 1.2,
          },
        }}
        onClick={toggleLeaving}
        className="absolute -top-28 -right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          strokeOpacity="0.3"
          className="mr-0.5 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </motion.button>
    );
  };
  const toggleLeaving = () => {
    // router.reload();
    setClicked1("reload");
    setClicked2("reload");
    setClicked3("reload");
    setClicked4("reload");
  };
  useEffect(() => {
    variants1;
    variants2;
    variants3;
    variants4;
    sleep;
  }, [sleep, variants1, variants2, variants3, variants4]);
  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key="aaqqqqq"
          animate={{
            x: [-50, 10, 0],
            opacity: [0, 1],
            rotateY: 180,
            transition: { delay: 0.5, duration: 1.5 },
          }}
          className="absolute top-[10rem] left-[42.2rem] h-3 w-3 rounded-full bg-white"
        />
        <motion.div
          key="sdhsldsssss"
          animate={{
            x: [-50, 10, 0],
            opacity: [0, 1],
            rotateY: 180,
            transition: { delay: 0.8, duration: 1.5 },
          }}
          className="absolute bottom-[17.3rem] left-[42.2rem] h-3 w-3 rounded-full bg-white"
        />
        <motion.div
          key="dsqslqjdsqq"
          animate={{
            x: [-50, 10, 0],
            opacity: [0, 1],
            rotateY: 180,
            transition: { delay: 0.8, duration: 1.5 },
          }}
          className="absolute bottom-[0.85rem] left-[42.2rem] h-3 w-3 rounded-full bg-white"
        />
        <motion.div className="absolute top-[7.8rem] right-[45rem] flex flex-col items-center justify-center space-y-20 ">
          <motion.div
            key="zzzopzozpzoozp"
            animate={{
              y: [-300, 0],
              opacity: [0, 1],
              transition: { duration: 1.3 },
            }}
            className="absolute top-9 h-[16.5rem] w-[0.01rem] flex-col bg-white"
          />
          <motion.div
            key="nmnmnmnmnm"
            animate={{
              y: [200, 0],
              opacity: [0, 1],
              transition: { duration: 1.3 },
            }}
            className="absolute -bottom-10 h-[16.5rem] w-[0.01rem] flex-col bg-white"
          />
          <motion.button
            variants={variants1}
            key="A_sdhkfdshfl"
            animate={
              clicked1 === "come"
                ? "animate1"
                : clicked1 === "gone"
                ? "animate2"
                : clicked1 === "initial"
                ? "animate0"
                : clicked1 === "reload" && "animateRe"
            }
            onClick={onBtnClick}
            className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-yellow-300 ring-offset-2 transition focus:ring-2"
          >
            <div
              key="aaaaaaa"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-200 text-yellow-600 shadow-md"
            >
              A
            </div>
          </motion.button>
          <motion.button
            variants={variants2}
            key="B_fdshflsssas"
            animate={
              clicked2 === "come"
                ? "animate1"
                : clicked2 === "gone"
                ? "animate2"
                : clicked2 === "initial"
                ? "animate0"
                : clicked2 === "reload" && "animateRe"
            }
            onClick={onBtnClick}
            className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-indigo-300 ring-offset-2 transition focus:ring-2"
          >
            <div
              key="bbbbbbb"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-200 text-indigo-600 shadow-md"
            >
              B
            </div>
          </motion.button>
          <motion.button
            variants={variants3}
            key="C_kjqupuoqqq"
            animate={
              clicked3 === "come"
                ? "animate1"
                : clicked3 === "gone"
                ? "animate2"
                : clicked3 === "initial"
                ? "animate0"
                : clicked3 === "reload" && "animateRe"
            }
            onClick={onBtnClick}
            className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-teal-300 ring-offset-2 transition focus:ring-2"
          >
            <div
              key="ccccccc"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-200 text-teal-600 shadow-md"
            >
              C
            </div>
          </motion.button>
          <motion.button
            variants={variants4}
            key="D_sja;jdsal"
            animate={
              clicked4 === "come"
                ? "animate1"
                : clicked4 === "gone"
                ? "animate2"
                : clicked4 === "initial"
                ? "animate0"
                : clicked4 === "reload" && "animateRe"
            }
            onClick={onBtnClick}
            className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-fuchsia-300 ring-offset-2 transition focus:ring-2"
          >
            <div
              key="ddddddd"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-200 text-fuchsia-600 shadow-md"
            >
              D
            </div>
          </motion.button>
        </motion.div>
      </AnimatePresence>

      <div
        className={cls(
          "",
          clicked1 === "come" ||
            clicked2 === "come" ||
            clicked3 === "come" ||
            clicked4 === "come"
            ? "hidden"
            : ""
        )}
      >
        <motion.button
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            transition: {
              duration: 1.2,
            },
          }}
          onClick={toggleLeaving}
          className="absolute top-20 right-14 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            strokeOpacity="0.3"
            className="mr-0.5 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </motion.button>
        <motion.div
          animate={{
            opacity: [0, 0, 1],
            y: [-50, 0],
            transition: {
              duration: 1.2,
              delay: 4,
            },
          }}
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 1.1,
            transition: {
              duration: 1.5,
            },
          }}
          onClick={() => window.scrollTo(2100, 2100)}
          className="absolute right-[15rem] top-[20rem] flex h-20 w-60 items-center justify-center rounded-xl text-3xl text-white shadow-xl"
        >
          To QUick View &rarr;
        </motion.div>
        <motion.div
          animate={{
            opacity: [0, 0, 1],
            y: [-50, 0],
            transition: {
              duration: 1.5,
              delay: 4.2,
            },
          }}
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 1.1,
            transition: {
              duration: 1.2,
            },
          }}
          onClick={onToMyClick}
          className={cls(
            "absolute right-[15rem] top-[28rem] flex h-20 w-60 items-center justify-center rounded-xl text-3xl text-white shadow-xl"
          )}
        >
          To My Bio &rarr;
        </motion.div>
      </div>
      <motion.div
        variants={detailVars}
        initial="initial"
        animate="animate"
        className={cls(
          "absolute top-[12rem] right-20 flex h-[30rem] w-[30rem] rounded-2xl",
          clicked1 === "come" ? "" : "hidden"
        )}
      >
        <div className="">
          <Image
            src={memoji8}
            alt="memoji8"
            width="100px"
            height="165px"
            className="z-20 object-scale-down"
          />
        </div>
        <div className="absolute top-10 -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-yellow-100 pl-2 font-semibold shadow-md">
            성명 : 채영민
          </span>
          <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-yellow-100 pl-2 font-semibold shadow-md ">
            생년월일 : 1998년 07월 09일
          </span>
        </div>
        <div className="absolute top-[19rem] ">
          <Image
            src={memoji1}
            alt="memoji1"
            width="100px"
            height="100px"
            className="z-20 object-scale-down "
          />
        </div>
        <div className="absolute top-[19rem] -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <div className="flex items-center justify-center">
            <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-yellow-100 pl-2 font-semibold shadow-md ">
              연락처 📞 : 010-9040-5753
            </span>
            <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-yellow-100 pl-2 font-semibold shadow-md ">
              연락처 💌 : codudals98@naver.com
            </span>
          </div>
        </div>
        {onBoxChoose()}
      </motion.div>

      <motion.div
        variants={detailVars}
        initial="initial"
        animate="animate"
        className={cls(
          "absolute top-[12rem] right-20 h-[30rem] w-[30rem] rounded-2xl",
          clicked2 === "come" ? "" : "hidden"
        )}
      >
        {" "}
        <div className="">
          <Image
            src={memoji6}
            alt="memoji6"
            width="110px"
            height="160px"
            className="top-0 z-20 object-scale-down"
          />
        </div>
        <div className="absolute top-10 -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-indigo-100 pl-2 font-semibold shadow-md ">
            희망진로1 : FrontEnd, Full Stack 개발자
          </span>
          <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-indigo-100 pl-2 font-semibold shadow-md ">
            희망진로2 : Mobile App 개발자
          </span>
        </div>
        <div className="absolute top-[19rem] ">
          <Image
            src={memoji4}
            alt="memoji4"
            width="100px"
            height="100px"
            className="z-20 object-scale-down "
          />
        </div>
        <div className="absolute top-[19rem] -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <div className="flex items-center justify-center">
            <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-indigo-100 pl-2 font-semibold shadow-md">
              좋아하는👨🏻‍💻 : React, TypeScript, NextJs, Python
            </span>
            <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-indigo-100 pl-2 font-semibold shadow-md ">
              관심있는👨🏻‍💻 : Swift, React-Native, GoLang, flutter
            </span>
          </div>
        </div>
        {onBoxChoose()}
      </motion.div>

      <motion.div
        variants={detailVars}
        initial="initial"
        animate="animate"
        className={cls(
          "absolute top-[12rem] right-20 h-[30rem] w-[30rem] rounded-2xl",
          clicked3 === "come" ? "" : "hidden"
        )}
      >
        {" "}
        <div className="">
          <Image
            src={memoji3}
            alt="memoji3"
            width="100px"
            height="170px"
            className="z-20 object-scale-down"
          />
        </div>
        <div className="absolute top-10 -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-teal-100 pl-2 font-semibold shadow-md ">
            React 숙련도 :{" "}
            <div className="ml-4 flex h-4 w-[15rem] rounded-r-md rounded-l-lg bg-gray-700">
              <span className="flex w-[11rem] items-center justify-center rounded-l-md bg-teal-400 text-sm "></span>
            </div>
          </span>
          <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-teal-100 pl-2 font-semibold shadow-md ">
            <span className="text-sm"> JavaScript 숙련도 : </span>
            <div className="ml-2 flex h-4 w-[15rem] rounded-r-md rounded-l-lg bg-gray-700">
              <span className="flex w-[10rem] items-center justify-center rounded-l-md bg-teal-400 text-sm "></span>
            </div>
          </span>
        </div>
        <div className="absolute top-[18.5rem] ">
          <Image
            src={memoji5}
            alt="memoji5"
            width="100px"
            height="100px"
            className="z-20 object-scale-down "
          />
        </div>
        <div className="absolute top-[19rem] -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <div className="flex items-center justify-center">
            <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-teal-100 pl-2 font-semibold shadow-md ">
              <span className="text-sm"> TypeScript 숙련도 : </span>
              <div className="ml-2 flex h-4 w-[15rem] rounded-r-md rounded-l-lg bg-gray-700">
                <span className="flex w-[8.5rem] items-center justify-center rounded-l-md bg-teal-400 text-sm "></span>
              </div>
            </span>
            <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-teal-100 pl-2 font-semibold shadow-md ">
              Swift 숙련도 :{" "}
              <div className="ml-4 flex h-4 w-[15rem] rounded-r-md rounded-l-lg bg-gray-700">
                <span className="flex w-[6.5rem] items-center justify-center rounded-l-md bg-teal-400 text-sm "></span>
              </div>
            </span>
          </div>
        </div>
        {onBoxChoose()}
      </motion.div>

      <motion.div
        variants={detailVars}
        initial="initial"
        animate="animate"
        className={cls(
          "absolute top-[12rem] right-20 h-[30rem] w-[30rem] rounded-2xl",
          clicked4 === "come" ? "" : "hidden"
        )}
      >
        {" "}
        <div className="">
          <Image
            src={memoji2}
            alt="memoji2"
            width="100px"
            height="165px"
            className="top-0 z-20 object-scale-down"
          />
        </div>
        <div className="absolute top-10 -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-fuchsia-100 pl-2 text-sm font-semibold shadow-md">
            저는 T자형 인재가 될 수 있도록 질문하는 것을 주저하지 않겠습니다.
          </span>
          <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-fuchsia-100 pl-2 text-sm font-semibold shadow-md ">
            호기심을 가지고 항상 탐구하고 고민하는 개발자가 되겠습니다.
          </span>
        </div>
        <div className="absolute top-[19rem] ">
          <Image
            src={memoji7}
            alt="memoj7"
            width="110px"
            height="110px"
            className="z-20 object-scale-down "
          />
        </div>
        <div className="absolute top-[19rem] -right-6 flex h-28 w-[28rem] items-center rounded-l-xl rounded-r-md bg-white ">
          <div className="flex items-center justify-center">
            <span className="absolute top-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-fuchsia-100 pl-2 text-sm font-semibold shadow-md">
              저는 Apple Developer Academy 에서 변화할 제 모습이 기대됩니다.
            </span>
            <span className="absolute bottom-3 left-8 flex h-7 w-[24rem] items-center justify-start rounded-md bg-fuchsia-100 pl-2 text-sm font-semibold shadow-md">
              저뿐만 아니라 동기, 멘토분들과 성장하는 개발자가 되고 싶습니다.
            </span>
          </div>
        </div>
        {onBoxChoose()}
      </motion.div>
    </>
  );
};

const detailVars = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 2,
    },
  },
};

const variants1 = {
  animate1: {
    y: [0, 200],
    opacity: [1, 1],
    scale: [1, 2.5],
    rotateZ: [90, 180, 270, 360],
    transition: { duration: 1.3 },
  },
  animate2: {
    x: [0, -100],
    opacity: [1, 0],
    transition: { duration: 1 },
  },
  animate0: {
    opacity: [0, 0, 1],
    rotateZ: [180, 360],
    transition: { duration: 1.5, delay: 1 },
  },
  animateRe: {
    opacity: [0, 0, 1],
    rotateZ: [180, 0],
    transition: { duration: 1.3, delay: 0 },
  },
};
const variants2 = {
  animate1: {
    y: [0, 65],
    opacity: [1, 1],
    scale: [1, 2.5],
    rotateZ: [90, 180, 270, 360],
    transition: { duration: 1.5 },
  },
  animate2: {
    x: [0, -100],
    opacity: [1, 0],
    transition: { duration: 1 },
  },
  animate0: {
    opacity: [0, 0, 1],
    rotateZ: [180, 360],
    transition: { duration: 1.5, delay: 2 },
  },
  animateRe: {
    opacity: [0, 0, 1],
    rotateZ: [180, 0],
    transition: { duration: 1.3, delay: 0 },
  },
};
const variants3 = {
  animate1: {
    y: [0, -65],
    opacity: [1, 1],
    scale: [1, 2.5],
    rotateZ: [90, 180, 270, 360],
    transition: { duration: 1.5 },
  },
  animate2: {
    x: [0, -100],
    opacity: [1, 0],
    transition: { duration: 1 },
  },
  animate0: {
    opacity: [0, 0, 1],
    rotateZ: [180, 360],
    transition: { duration: 1.5, delay: 3 },
  },
  animateRe: {
    opacity: [0, 0, 1],
    rotateZ: [180, 0],
    transition: { duration: 1.3, delay: 0 },
  },
};
const variants4 = {
  animate1: {
    y: [0, -200],
    opacity: [1, 1],
    scale: [1, 2.5],
    rotateZ: [90, 180, 270, 360],
    transition: { duration: 1.3 },
  },
  animate2: {
    x: [0, -100],
    opacity: [1, 0],
    transition: { duration: 1 },
  },
  animate0: {
    opacity: [0, 0, 1],
    rotateZ: [180, 360],
    transition: { duration: 1.5, delay: 4 },
  },
  animateRe: {
    opacity: [0, 0, 1],
    rotateZ: [180, 0],
    transition: { duration: 1.3, delay: 0 },
  },
};

export default IndexBtn;
