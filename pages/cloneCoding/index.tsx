import type { NextPage } from "next";
import Moment, { now } from "moment";
import { motion } from "framer-motion";
import SpeachBuble from "../../components/speachBuble";
import Link from "next/link";
import Thumbnail from "../../components/thumbnail";
import SliderCompo from "../../components/sliderCompo";
import KoreaFlag from "../../components/koreaFlag";
import Me from "./image/me.png";
import Image from "next/image";
import Modal from "react-modal";
import ReactModal from "react-modal";
import CloneList from "../../components/cloneList";

Modal.setAppElement("#__next");

const CloneCoding: NextPage = () => {
  const todayIs = Moment().format("MM월 DD일");
  const dateIs = Moment().day();
  const dateList = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="grid max-h-[180rem] w-full max-w-full bg-[#ffffffe7] shadow-xl sm:w-full ">
      <span className="absolute mx-3 mt-5 flex text-xs opacity-50">
        {todayIs} {dateList[dateIs]}요일
      </span>
      <div className="absolute mx-5 mt-8 w-full overflow-hidden">
        <div className="mt-1 flex items-center justify-between">
          <div className="text-3xl font-semibold">PORTFOLIO</div>
          <Link href={"./cloneCoding/profile"}>
            <div className="mb-3 mr-5 h-16 w-16 cursor-pointer rounded-full ">
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
        {/*  */}
        {/*  */}
        <div className="grid grid-flow-row sm:mx-20 ">
          <div className="ml-0 mb-[4.5rem] mt-2 h-[30rem] w-11/12 rounded-xl shadow-xl ">
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
              <div className="h-14 w-14 rounded-2xl bg-orange-200 shadow-md ">
                todo
              </div>
              <div className="h-14 w-14 rounded-2xl bg-orange-300 shadow-md">
                web scrapper
              </div>
              <div className="h-14 w-14 rounded-2xl bg-orange-400 shadow-md">
                frontpage1
              </div>
              <div className="h-14 w-14 rounded-2xl bg-orange-500 shadow-md">
                frontpage2
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="mb-[4.5rem] ml-0 h-[28rem] w-11/12 rounded-xl bg-[#ffffffe7] shadow-2xl sm:bg-red-200 md:bg-white ">
            <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
              My recomandation for You !
            </div>
            <div className="ml-6 mt-1 text-2xl opacity-90 ">
              These app&apos;s will give differences
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              {/*  */}
              <div className="mx-5 mt-2 flex items-center justify-end">
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFE4C0] shadow-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-12 w-14 p-1"
                    fill="#F76E11"
                  >
                    <path d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z" />
                  </svg>
                </div>
                <CloneList
                  name="당근마켓"
                  descript="당신 근처의 동네 커뮤니티 생활"
                />
              </div>{" "}
              {/*  */}
              <div className="my-2 mx-5 flex items-center justify-end">
                <div className="mr-3 h-14 w-14 rounded-2xl bg-black shadow-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 276.742"
                    fill="#E51013"
                    className="h-14 w-14 p-1 "
                  >
                    {" "}
                    <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />{" "}
                  </svg>
                </div>
                <CloneList
                  name="Netflix"
                  descript="여기서, 지금 바로 시청하세요"
                />
              </div>
              {/*  */}
              <div className="mx-5 flex items-center justify-end">
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-transparent bg-white shadow-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#3AB0FF"
                    className="h-14 w-14 p-2 "
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </div>
                <CloneList
                  name="Twitter"
                  descript="모두와 함께 대화를 나눠보세요"
                />
              </div>
              {/*  */}
              <div className="mx-5 mt-2 flex items-center justify-end">
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-transparent shadow-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-14 w-14 p-1"
                    fill="#E51013"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </div>
                <CloneList
                  name="YouTube"
                  descript="동영상과 음악을 즐기고 공유하세요"
                />
              </div>{" "}
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="mb-[4.5rem] h-[30rem] w-full ">
            <div className="ml-0 h-[25rem] w-11/12 rounded-t-xl bg-gradient-to-b from-orange-300 via-[#faab79] to-[#FF731D] ">
              <div className="ml-5 flex flex-col ">
                <div className="absolute h-28 w-10 border-l-[20px] border-b-[30px] border-r-[20px] border-l-transparent border-b-[#faab79] border-r-transparent bg-yellow-200  " />
                <div className="mt-20 grid h-auto w-96 grid-cols-2 ">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#FAEA48"
                    variants={coinSvg}
                    initial="start"
                    animate="animate"
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    className="ml-5 mt-14 h-24 w-24"
                  >
                    <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
                  </motion.svg>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512 "
                    fill="#DFF6FF"
                    variants={coinSvg}
                    initial="start"
                    animate="animate"
                    transition={{
                      duration: 0.8,
                      delay: 1.5,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    className="ml-16 -mt-8 h-24 w-24"
                  >
                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                  </motion.svg>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    variants={coinSvg}
                    initial="start"
                    animate="animate"
                    transition={{
                      duration: 0.8,
                      delay: 2.5,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    className="ml-64 mt-2 h-28 w-28 "
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
                  </motion.svg>
                </div>
                <div className="flex items-start justify-start">
                  <span className="-mt-7 w-56 text-[2rem] leading-[2.3rem] text-white">
                    Check, various coins here!
                  </span>
                </div>
              </div>
              <div className="h-[5rem] w-full rounded-b-xl bg-[#FF731D] shadow-xl ">
                <div className="mx-5 flex items-center justify-start">
                  <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-14 w-14 p-1 "
                      fill="#ec870b"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z" />
                    </svg>
                  </div>
                  <div className="absolute mx-16 flex items-center justify-start">
                    <div className="mt-3 flex flex-col items-start justify-between ">
                      <span className="text-[#F5F5F5] ">Coins Tracker</span>
                      <span className="text-sm text-[#F5F5F5] opacity-70">
                        What is the Today&apos;s price
                      </span>
                    </div>
                    <div className="ml-[5.5rem] mt-10 flex flex-col items-center justify-center ">
                      <Link href="/cloneCoding/slider">
                        <motion.button
                          whileHover={{
                            boxShadow: "0px 0px 8px rgb(255,255,255) ",
                            backgroundColor: "rgb(148 163 184)",
                          }}
                          className="-mt-5 h-8 w-20 rounded-2xl bg-white "
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
          {/*  */}
          {/*  */}
          <div className="mb-[4.5rem] h-[30rem] w-full ">
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
          {/*  */}
          {/*  */}
          <div className="mb-20 ml-0 h-[25rem] w-11/12 rounded-xl bg-[#ffffffe7] shadow-2xl ">
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
        </div>
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

const coinSvg = {
  start: { opacity: 0, scale: 0.5 },
  animate: { opacity: [0, 1, 1], scale: 1 },
};

export default CloneCoding;
// from-[#00FFD1]
// from-[#B9FFF8] to-[#C3FF99]
// bg-gradient-to-r from-[#B9FFF8] to-[#C3FF99]
