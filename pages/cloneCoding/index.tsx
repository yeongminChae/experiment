import type { NextPage } from "next";
import Moment, { now } from "moment";
import { MotionConfig, motion } from "framer-motion";
import SpeachBuble from "../../components/speachBuble";
import Link from "next/link";
import Thumbnail from "../../components/thumbnail";
import SliderCompo from "../../components/sliderCompo";
import KoreaFlag from "../../components/koreaFlag";
import Me from "./image/me.png";
import Image from "next/image";
import Modal from "react-modal";
import ReactModal from "react-modal";

Modal.setAppElement("#__next");

const CloneCoding: NextPage = () => {
  const todayIs = Moment().format("MM월 DD일");
  const dateIs = Moment().day();
  const dateList = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="grid max-h-[180rem] max-w-full bg-[#ffffffe7] shadow-xl ">
      <span className="absolute mx-3 mt-7 flex text-xs opacity-50">
        {todayIs} {dateList[dateIs]}요일
      </span>
      <div className="absolute mx-5 mt-8 overflow-hidden ">
        <div className="mt-1 flex items-center justify-between">
          <div className="text-3xl font-semibold">PORTFOLIO</div>
          <Link href={"./cloneCoding/profile"}>
            <div className="mb-3 h-16 w-16 cursor-pointer rounded-full ">
              <Image
                src={Me}
                alt="profile"
                width={55}
                height={55}
                placeholder="blur"
                className="rounded-full object-fill "
              />
              <span className="-mt-1 mr-2 flex justify-center text-sm ">
                Profile&rarr;
              </span>
            </div>
          </Link>
        </div>
        <div className="mb-[4.5rem] mt-2 h-[30rem] w-full rounded-xl shadow-xl ">
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
        <div className="mb-[4.5rem]  h-[28rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl  ">
          <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
            My recomandation for You !
          </div>
          <div className="ml-6 mt-1 text-2xl opacity-90 ">
            Those itesm&apos;s will give differences
          </div>
          <div className="mt-4 flex flex-col items-start justify-start">
            <div className="my-2 mx-5 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-black shadow-md ">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 276.742"
                  fill="#E51013"
                  className="h-14 w-14 p-1 "
                >
                  {" "}
                  <motion.path
                    stroke="white"
                    strokeWidth={3}
                    d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
                  />{" "}
                </motion.svg>
              </div>
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-transparent shadow-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-14 w-14 p-1 "
                  fill="#ec870b"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
                </svg>
              </div>
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-transparent shadow-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-14 w-14 p-1"
                  fill="#E51013"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </div>
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFE4C0] shadow-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-12 w-14 p-1 "
                  fill="#F76E11"
                >
                  <path d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z" />
                </svg>
              </div>
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
        <div className="mb-[4.5rem] h-[30rem] w-full ">
          <div className=" h-[25rem] w-full rounded-t-xl bg-[#66BFBF]">
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
          </div>
          <div className="h-[5rem] w-full rounded-b-xl bg-gradient-to-r from-[#08D9D6] to-[#66BFBF] shadow-xl ">
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
        <div className="mb-20 h-[25rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl ">
          <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
            Yeongmin&apos;s Collection
          </div>
          <div className="ml-6 mt-1 text-2xl opacity-90 ">
            So far , I made them All !
          </div>
          <div className="absolute overflow-hidden">
            <div className="flex ">
              <SliderCompo xInit={"300%"} xEnd={"-1700%"} />
            </div>
            <div className="flex ">
              <SliderCompo xInit={"500%"} xEnd={"-1500%"} />
            </div>
            <div className="flex ">
              <SliderCompo xInit={"700%"} xEnd={"-1300%"} />
            </div>
          </div>
        </div>{" "}
        {/* <span className="flex h-20 w-full items-center justify-center pb-24">
          I made this this clone coding page . Because i got impressed app store
          in iPhone.
        </span> */}
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

export default CloneCoding;
// from-[#00FFD1]
