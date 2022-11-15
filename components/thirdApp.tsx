import { NextPage } from "next";
import { animate, motion } from "framer-motion";
import { useRouter } from "next/router";
import { cls } from "../libs/client/utils";
import AppModals from "./appModals";

const ThirddApp: NextPage = () => {
  const router = useRouter();
  // const onBtnClick = () => {
  //   router.push("/cloneCoding/slider", undefined, { scroll: false });
  // };
  const onBtnClick = () => {
    router.push(`?appName=ThirdApp`, `/cloneCoding/thirdApp/ThirdApp`, {
      scroll: false,
    });
  };
  return (
    <div
      className={cls(
        "mb-[4.5rem] h-[30rem] w-full md:w-11/12 xl:w-10/12",
        router.asPath !== "/cloneCoding/thirdApp" ? "" : "-z-10"
      )}
    >
      <div className="ml-0 h-[25rem] w-full rounded-t-xl bg-gradient-to-b from-orange-300 via-[#faab79] to-[#FF731D] xl:-mx-16 ">
        <div className="ml-5 flex flex-col ">
          <div className="absolute h-28 w-10 border-l-[20px] border-b-[30px] border-r-[20px] border-l-transparent border-b-[#faab79] border-r-transparent bg-yellow-200  " />
          <div className="mt-20 ml-8 grid h-auto w-96 grid-cols-2 sm:ml-16 md:ml-0 ">
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
              fill="#a0def6"
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
            <span className="-mt-7 w-56 text-[2rem] leading-[2.3rem] text-white md:-mt-10">
              Track coins here! :)
            </span>
          </div>
        </div>
        <div className="h-[5.1rem] w-full rounded-b-xl bg-[#FF731D] shadow-xl md:mt-3">
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
            <div className="absolute mx-16 mr-10 flex items-center justify-center">
              <div className="mt-3 flex flex-col items-start justify-between ">
                <span className="text-[#F5F5F5] ">Coins Tracker</span>
                <span className="text-sm text-[#F5F5F5] opacity-70">
                  What is the Today&apos;s price
                </span>
              </div>
              <motion.div
                layoutId="ThirdApp"
                className="ml-32 mt-4 flex flex-col items-center justify-center sm:ml-44 md:ml-20 xl:ml-[7.5rem] "
              >
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
              </motion.div>
            </div>
          </div>
          <AppModals appIndex="thirdApp" />
        </div>
      </div>
    </div>
  );
};

const coinSvg = {
  start: { opacity: 0, scale: 0.5 },
  animate: { opacity: [0, 1, 1], scale: 1 },
};

export default ThirddApp;
