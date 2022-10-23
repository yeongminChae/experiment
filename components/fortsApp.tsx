import { NextPage } from "next";
import SpeachBuble from "./speachBuble";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import KoreaFlag from "./koreaFlag";

const ForthApp: NextPage = () => {
  return (
    <div className="-z-50 mb-[4.5rem] h-[30rem] w-full ">
      <div className=" ml-0 h-[25rem] w-11/12 rounded-t-xl bg-[#66BFBF]">
        <div className="ml-5  ">
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
          <div className="absolute flex w-48 items-center justify-end">
            <span className="text-[2rem] leading-[2.3rem] text-white">
              Korean Ablity App
            </span>
          </div>
        </div>
        <div className="mt-[5.5rem] h-[5rem] w-full rounded-b-xl bg-gradient-to-r from-[#08D9D6] to-[#66BFBF] shadow-xl ">
          <div className="mx-5 flex items-center justify-start">
            <KoreaFlag />
            <div className="mx-3 flex items-center justify-start ">
              <div className="flex flex-col items-start justify-between">
                <span className="text-[#F5F5F5]">한국어 능력</span>
                <span className="text-sm text-[#F5F5F5] opacity-70 ">
                  Let&apos;s learn Korean now!
                </span>
              </div>
              <div className="ml-24 mt-4 flex flex-col items-center justify-center ">
                <Link href="/cloneCoding/slider">
                  <motion.button
                    whileHover={{
                      boxShadow: "0px 0px 8px rgb(255,255,255) ",
                      backgroundColor: "rgb(148 163 184)",
                    }}
                    className="h-8 w-20 rounded-2xl bg-white "
                  >
                    <span className="text-sm font-bold text-blue-600 ">
                      받기
                    </span>{" "}
                  </motion.button>
                </Link>
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

export default ForthApp;
