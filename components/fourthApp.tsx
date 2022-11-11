import { NextPage } from "next";
import SpeachBuble from "./speachBuble";
import { animate, motion } from "framer-motion";
import KoreaFlag from "./koreaFlag";
import { useRouter } from "next/router";
import { cls } from "../libs/client/utils";

const FourthApp: NextPage = () => {
  const router = useRouter();
  const onBtnClick = () => {
    router.push("/cloneCoding/koreanLanguage", undefined, { scroll: false });
  };
  return (
    <div
      className={cls(
        "mb-[4.5rem] h-[30rem] w-full md:w-11/12 xl:w-10/12",
        router.asPath !== "/cloneCoding" ? "-z-10" : ""
      )}
    >
      <div className="ml-0 h-[25rem] w-full rounded-t-xl bg-[#66BFBF] ">
        <div className="ml-5 flex flex-col ">
          <div className="absolute h-28 w-10 border-l-[20px] border-b-[30px] border-r-[20px] border-l-transparent border-b-[#66BFBF] border-r-transparent bg-red-200  " />
          <div className="mr-10 flex h-[11.5rem] items-center justify-center pt-32 pl-0 ">
            <SpeachBuble />
          </div>
          <div className="flex items-end justify-end">
            <motion.svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -100 640 512"
              fill="transparent"
              stroke="white"
              strokeWidth={10}
              className="mr-10 h-32 w-28 "
            >
              <motion.path
                variants={svg}
                initial="start"
                animate="end"
                transition={{
                  default: { duration: 5, repeat: Infinity },
                }}
                d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4l-139 92.7L37.6 126C15.6 130.9 0 150.3 0 172.8V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V172.8c0-22.5-15.6-42-37.6-46.9L476.8 98.1 337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM408 176c0 48.6-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88zm-88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"
              />
            </motion.svg>
          </div>
          <div className="flex w-48 items-center justify-end md:relative">
            <span className="text-[2rem] leading-[2.3rem] text-white">
              Korean Ablity App
            </span>
          </div>
        </div>
        <div className="mt-[0.91rem] h-[5rem] w-full rounded-b-xl bg-gradient-to-r from-[#08D9D6] to-[#66BFBF] shadow-xl md:mt-[0.8rem] md:flex md:items-center ">
          <div className="mx-5 flex justify-start md:mr-0 md:ml-5 md:space-x-2 ">
            <KoreaFlag />
            <div className="mx-3 flex items-center justify-start">
              <div className="flex flex-col items-start justify-between md:mr-10">
                <span className="text-[#F5F5F5]">한국어 퀴즈</span>
                <span className="text-sm text-[#F5F5F5] opacity-70 md:w-40 ">
                  Let&apos;s learn Korean now!
                </span>
              </div>
              <div className="ml-32 mt-4 flex flex-col items-center justify-center sm:ml-48 md:ml-[3.4rem] md:mt-1 md:w-14 xl:ml-24">
                <motion.button
                  onClick={onBtnClick}
                  whileHover={{
                    boxShadow: "0px 0px 8px rgb(255,255,255) ",
                    backgroundColor: "rgb(148 163 184)",
                  }}
                  className="h-8 w-20 rounded-2xl bg-white "
                >
                  <span className="text-sm font-bold text-blue-600 ">받기</span>{" "}
                </motion.button>
                <span className="mt-1 w-16 text-center text-[0.3rem] text-[#F5F5F5] opacity-70">
                  앱 내 구입
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const svg = {
  start: {
    fill: "rgba(255,255,255,0",
    pathLength: 0,
  },
  end: {
    fill: "rgba(255,255,255,1",
    pathLength: 1,
    // transition: { duration: 3 }, do the same time fill the inside and stroke
  },
};

export default FourthApp;
