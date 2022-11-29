import { motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LocalStorage, { cls } from "../../../libs/client/utils";
import ProfileBio from "./components/profileBio";
import ProfileBottom from "./components/profileBottom";
import ProfileCircle from "./components/profileCircle";
import ProfileNavbar from "./components/profileNavbar";
import ProfileTopPart from "./components/profileTopPart";
import ProfileMenuBar from "./components/profileMenuBar";
import ProfileBioBar from "./components/profileBioBar";

// const ProfileMenuBar = dynamic(() => import("./components/profileMenuBar"), {
//   ssr: false,
// });
// const ProfileBioBar = dynamic(() => import("./components/profileBioBar"), {
//   ssr: false,
// });

export interface IIsDark {
  isDark: boolean;
}

const Profile: NextPage = () => {
  const { reset } = useForm();
  const currentTheme = LocalStorage.getItem("theme");
  const [tab, setTab] = useState<"menu" | "bio">("menu");
  const [isDarkClicked, setIsDarkClicked] = useState(currentTheme);
  const [mounted, setMounted] = useState<boolean>(false);
  const toggleDarkAtom = () => {
    if (isDarkClicked === "light") {
      setIsDarkClicked("dark");
      LocalStorage.setItem("theme", "dark");
    } else if (isDarkClicked === "dark") {
      setIsDarkClicked("light");
      LocalStorage.setItem("theme", "light");
    }
  };
  const onMenuClick = () => {
    reset();
    setTab("menu");
    LocalStorage.setItem("page", "menu");
  };
  const onBioClick = () => {
    reset();
    setTab("bio");
    LocalStorage.setItem("page", "bio");
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div
        className={cls(
          "w-full",
          LocalStorage.getItem("theme") === "dark" ? "dark" : ""
        )}
      >
        <div className="h-[47rem] w-full pt-[0.01rem] pl-3 dark:-z-20 dark:bg-black sm:h-[50rem] md:h-[60rem]">
          <div className="mt-2 ml-3 mr-3 flex items-center justify-between sm:ml-1 sm:mr-0 sm:justify-around xl:mr-52 xl:ml-40  ">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-4 w-4 dark:text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span className="mb-[0.5px] flex items-center justify-start text-xl font-bold dark:text-white ">
                {" "}
                Yeongmin Chae{" "}
              </span>
            </div>
            <div className="mr-2 flex items-center justify-between sm:mr-5 ">
              <div
                onClick={toggleDarkAtom}
                className="flex h-7 w-7 cursor-pointer items-center justify-around"
              >
                {isDarkClicked === "light" ? (
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
                    className="h-6 w-6 dark:text-white "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </div>
              <ProfileTopPart />
            </div>
          </div>
          <div className="mb-3 mt-6 h-16 w-36 cursor-pointer rounded-full ">
            <ProfileBio />
            <div className="w-full sm:ml-[5.8rem] md:ml-[8rem] lg:ml-[11rem] xl:ml-[22rem] ">
              <span className="-mt-8 ml-1 mr-2 flex text-sm dark:text-white ">
                채영민
              </span>
              <span className="mt-[0.5] ml-1 mr-2 flex w-44 text-[0.5rem] opacity-60 dark:text-white ">
                🎵 Oasis - Champagne Supernova
              </span>
            </div>
            <div className="mt-2 flex w-[92vw] items-start justify-end sm:justify-center ">
              <ProfileNavbar isDark={false} />
            </div>
            <ProfileCircle isDark={false} />
            <div className="mt-2 grid h-10 w-[100vw] grid-cols-2 sm:ml-[6.8rem] sm:w-[68.8vw] md:ml-[8.8rem] md:w-[40.9rem] lg:ml-[11.8rem] xl:ml-[22.75rem] xl:w-[40rem] ">
              <motion.div
                className={cls(
                  "-ml-3 flex h-10 w-full justify-center border-b-2  ",
                  tab === "menu"
                    ? "border-gray-400 duration-300 ease-out dark:border-white"
                    : "border-transparent duration-300 ease-in"
                )}
                onClick={onMenuClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className={cls(
                    "h-8 w-8 dark:text-white",
                    tab === "menu" ? "" : "text-black/30 dark:text-white/50"
                  )}
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
                  "-ml-3 flex h-10 w-full justify-center border-b-2 ",
                  tab === "bio"
                    ? "border-gray-400 duration-300 ease-out dark:border-white"
                    : "border-transparent duration-300 ease-in"
                )}
                onClick={onBioClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className={cls(
                    "h-8 w-8 dark:text-white",
                    tab === "bio" ? "" : "text-black/30 dark:text-white/50 "
                  )}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </motion.div>
            </div>
            {tab === "menu" ? <ProfileMenuBar /> : null}
            {tab === "bio" ? <ProfileBioBar /> : null}
            <ProfileBottom />
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
