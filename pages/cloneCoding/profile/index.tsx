import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cls } from "../../../libs/client/utils";
import Me from "../image/me.png";

const Profile: NextPage = () => {
  const { reset } = useForm();
  const [tab, setTab] = useState<"menu" | "bio">("menu");
  const [isDark, setIsDark] = useState(false);
  const onMenuClick = () => {
    reset();
    setTab("menu");
  };
  const onBioClick = () => {
    reset();
    setTab("bio");
  };
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <div className="ml-3 mt-5">
      <div className="mt-2 flex items-center justify-between ">
        <div className="flex items-center justify-start sm:mr-56 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span className="mb-[0.5px] flex items-center justify-start text-xl font-bold ">
            {" "}
            Yeongmin Chae{" "}
          </span>
        </div>
        <div className="mr-2 flex items-center justify-between sm:mr-5 ">
          <div
            onClick={toggleDark}
            className="flex h-7 w-7 cursor-pointer items-center justify-around"
          >
            {!isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </div>
          <div className="ml-4 flex h-7 w-7 cursor-pointer items-center justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <div className="ml-4 flex h-8 w-7 cursor-pointer items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 -1 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-3 mt-6 h-16 w-36 cursor-pointer rounded-full ">
        <div className="flex h-[7.5rem] w-36 items-center justify-around">
          <div className="absolute -mt-8 h-[7.5rem] w-1/2 px-14">
            <Image
              src={Me}
              alt="profile"
              width={150}
              height={150}
              placeholder="blur"
              className="absolute rounded-full object-fill "
            />
          </div>
          <div className="ml-72 flex h-28 w-28 items-center justify-between">
            <div className="mx-12 flex w-1 flex-col items-center justify-center">
              <span className="font-bold opacity-80 ">10</span>
              <span className="text-black/60">Posts</span>
            </div>
            <div className="mx-14 flex w-1 flex-col items-center justify-center">
              <span className="font-bold opacity-80 ">370</span>
              <span className="text-black/60">Followers</span>
            </div>
            <div className="mx-14 flex w-1 flex-col items-center justify-center">
              <span className="font-bold opacity-80 ">500</span>
              <span className="text-black/60">Followings</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <span className="mt-1 mr-2 flex text-sm ">채영민</span>
          <span className="mt-[0.5] mr-2 flex w-44 text-[0.5rem] opacity-60 ">
            🎵 Oasis - Champagne Supernova
          </span>
        </div>
        <div className="mt-3 flex w-[95vw] items-start justify-end ">
          <motion.div
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
              backgroundColor: "rgb(148 163 184)",
            }}
            className="flex h-8 w-[90vw] items-center justify-center rounded-md bg-slate-400/25 "
          >
            Edit Profile
          </motion.div>
          <motion.div
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
              backgroundColor: "rgb(148 163 184)",
            }}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-md bg-slate-400/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
          </motion.div>
        </div>
        <div className="mt-6 flex h-auto w-[95vw] items-center justify-around ">
          <div className="h-20 w-20 rounded-full bg-red-200 "></div>
          <div className="h-20 w-20 rounded-full bg-red-200 "></div>
          <div className="h-20 w-20 rounded-full bg-red-200 "></div>
          <div className="h-20 w-20 rounded-full bg-red-200 "></div>
          <div className="h-20 w-20 rounded-full bg-red-200 "></div>
        </div>
        <div className="my-6 grid h-10 w-[95vw] grid-cols-2 ">
          <motion.div
            className={cls(
              "flex h-12 w-full justify-center border-b ease-in ",
              tab === "menu" ? "border-gray-400 " : "border-transparent  "
            )}
            onClick={onMenuClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </motion.div>
          <motion.div
            className={cls(
              "flex h-12 w-full justify-center border-b ease-in ",
              tab === "bio" ? "border-gray-400 " : "border-transparent "
            )}
            onClick={onBioClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
