import type { NextPage } from "next";
import Moment, { now } from "moment";
import { MotionConfig, motion } from "framer-motion";
import SpeachBuble from "../../components/speachBuble";
import Link from "next/link";
import Thumbnail from "../../components/thumbnail";

const CloneCoding: NextPage = () => {
  const todayIs = Moment().format("MM월 DD일");
  const dateIs = Moment().day();
  const dateList = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="grid max-h-[180rem] max-w-full">
      <span className="mx-3 mt-5 flex text-xs opacity-50 ">
        {todayIs} {dateList[dateIs]}요일
      </span>
      <div className="mx-5">
        <div className="mt-1 flex items-center justify-between">
          <div className="text-3xl font-semibold">PORTFOLIO</div>
          <div className="h-8 w-8 rounded-full bg-red-300 " />
        </div>

        <div className="my-4 h-[30rem] w-full rounded-xl shadow-2xl ">
          <div className="h-[25rem] w-full rounded-t-xl bg-[#464646]">
            <div className="ml-5 pt-3 text-white opacity-60 ">
              Editor&apos;s Choices,{" "}
            </div>
            <div className="ml-6 mt-1 text-2xl text-white opacity-90 ">
              This week&apos;s new featured :
            </div>
            <Thumbnail />
          </div>
          <div className="my-3 mx-10 flex items-center justify-between bg-[#ffffffe7] ">
            <div className="h-14 w-14 rounded-2xl bg-orange-200 shadow-md " />
            <div className="h-14 w-14 rounded-2xl bg-orange-300 shadow-md" />
            <div className="h-14 w-14 rounded-2xl bg-orange-400 shadow-md" />
            <div className="h-14 w-14 rounded-2xl bg-orange-500 shadow-md" />
          </div>
        </div>

        <div className="mt-5 h-[28rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl  ">
          <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
            My recomandation for You !
          </div>
          <div className="ml-6 mt-1 text-2xl opacity-90 ">
            Those itesm&apos;s will give differences
          </div>
          <div className="mt-4 flex flex-col items-start justify-start">
            <div className="my-2 mx-5 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-yellow-200 shadow-md" />
              <div className="mx-3 flex items-center justify-start border-b-2 border-dashed ">
                <div className="flex flex-col items-start justify-center">
                  <span className="">Netflix clone</span>
                  <span className="text-sm text-black opacity-50 ">
                    With ReactJs and Typescript, Framer Motion
                  </span>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center ">
                  <motion.button
                    whileHover={{
                      boxShadow: "0px 0px 8px rgb(255,255,255) ",
                      backgroundColor: "rgb(148 163 184)",
                    }}
                    className="h-8 w-20 rounded-2xl bg-slate-200 opacity-80 "
                  >
                    <span className="text-sm font-bold text-blue-700 ">
                      받기
                    </span>{" "}
                  </motion.button>
                  <span className="mt-1 w-16 text-center text-[0.3rem] opacity-50">
                    앱 내 구입
                  </span>
                </div>
              </div>
            </div>
            <div className="mx-5 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-yellow-300  shadow-md" />
              <div className="mx-3 flex items-center justify-start border-b-2 border-dashed ">
                <div className="flex flex-col items-start justify-center">
                  <span className="">Bitcoin Tracker</span>
                  <span className="text-sm text-black opacity-50 ">
                    With ReactJs and Typescript (React Query)
                  </span>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center ">
                  <motion.button
                    whileHover={{
                      boxShadow: "0px 0px 8px rgb(255,255,255) ",
                      backgroundColor: "rgb(148 163 184)",
                    }}
                    className="h-8 w-20 rounded-2xl bg-slate-200 opacity-80 "
                  >
                    <span className="text-sm font-bold text-blue-700 ">
                      받기
                    </span>{" "}
                  </motion.button>
                  <span className="mt-1 w-16 text-center text-[0.3rem] opacity-50">
                    앱 내 구입
                  </span>
                </div>
              </div>
            </div>
            <div className="mx-5 mt-2 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-yellow-400 shadow-md" />
              <div className="mx-3 flex items-center justify-start border-b-2 border-dashed ">
                <div className="flex flex-col items-start justify-center">
                  <span className="">YouTube clone</span>
                  <span className="text-sm text-black opacity-50 ">
                    With Javascript and Basic NodeJs express
                  </span>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center ">
                  <motion.button
                    whileHover={{
                      boxShadow: "0px 0px 8px rgb(255,255,255) ",
                      backgroundColor: "rgb(148 163 184)",
                    }}
                    className="h-8 w-20 rounded-2xl bg-slate-200 opacity-80 "
                  >
                    <span className="text-sm font-bold text-blue-700 ">
                      받기
                    </span>{" "}
                  </motion.button>
                  <span className="mt-1 w-16 text-center text-[0.3rem] opacity-50">
                    앱 내 구입
                  </span>
                </div>
              </div>
            </div>{" "}
            <div className="mx-5 mt-2 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-yellow-500 shadow-md" />
              <div className="mx-3 flex items-center justify-start border-b-2 border-dashed ">
                <div className="flex flex-col items-start justify-center">
                  <span className="">당근마켓 clone</span>
                  <span className="text-sm text-black opacity-50 ">
                    With Javascript and Basic NodeJs express
                  </span>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center ">
                  <motion.button
                    whileHover={{
                      boxShadow: "0px 0px 8px rgb(255,255,255) ",
                      backgroundColor: "rgb(148 163 184)",
                    }}
                    className="h-8 w-20 rounded-2xl bg-slate-200 opacity-80 "
                  >
                    <span className="text-sm font-bold text-blue-700 ">
                      받기
                    </span>{" "}
                  </motion.button>
                  <span className="mt-1 w-16 text-center text-[0.3rem] opacity-50">
                    앱 내 구입
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="mt-5 h-[30rem] w-full ">
          <div className="h-[25rem] w-full rounded-t-xl bg-[#66BFBF]">
            <div className="ml-5 ">
              <div className="grid h-[19rem] ">
                <SpeachBuble />
              </div>
              <div className="flex w-48 items-center justify-end ">
                <span className="text-[2rem] leading-[2.3rem] text-white">
                  Korean Ablity App
                </span>
              </div>
            </div>
          </div>
          <div className="h-[5rem] w-full rounded-b-xl bg-gradient-to-r from-[#08D9D6] to-[#66BFBF] shadow-2xl ">
            <div className="mx-5 flex items-center justify-start">
              <div className="my-4 h-12 w-12 rounded-2xl bg-white shadow-md " />
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
        <div className="mt-5 mb-20 h-[26rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl ">
          <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
            Yeongmin&apos;s Collection
          </div>
          <div className="ml-6 mt-1 text-2xl opacity-90 ">
            So far , I made them All !
          </div>
          <div className="flex  ">
            {[...Array(10)].map((i, _) => (
              <div className="m-2 flex h-6 w-6 bg-red-200 " key={i}>
                {i}{" "}
              </div>
            ))}
          </div>
        </div>
        <span className="flex h-20 w-full items-center justify-center pb-24">
          I made this this clone coding page . Because i got impressed app store
          in iPhone.
        </span>
      </div>
    </div>
  );
};

export default CloneCoding;
// from-[#00FFD1]
