/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import eu1 from "../../image/profile2/eu1.png";
import eu2 from "../../image/profile2/eu2.png";
import eu3 from "../../image/profile2/eu3.png";
import eu4 from "../../image/profile2/eu4.png";
import eu5 from "../../image/profile2/eu5.png";
import eu6 from "../../image/profile2/eu6.png";
import eu7 from "../../image/profile2/eu7.png";
import eu8 from "../../image/profile2/eu8.png";
// import eu9 from "../../image/profile2/eu9.png";
import eu10 from "../../image/profile2/eu10.png";
import { debounce } from "lodash";

const ProfileBioBar = () => {
  const [onEnter, setOnEnter] = useState("");
  const [nowWidth, setNowWidth] = useState(window.innerWidth);
  const currentWidth = debounce(() => {
    setNowWidth(window.innerWidth);
  }, 1000);
  useEffect(() => {
    window.addEventListener("resize", currentWidth);
    return () => {
      window.removeEventListener("resize", currentWidth);
    };
  }, []);
  return (
    <div className="-ml-3 mt-[0.01rem] flex w-[31rem] border-t transition-colors duration-200 ease-in-out sm:ml-24 md:ml-32 md:w-[41rem] lg:ml-44 xl:ml-[22rem] xl:w-[40rem]">
      <div className="grid h-[60vh] w-full grid-flow-row grid-cols-3 grid-rows-3 dark:z-10 md:h-[80vh] ">
        <motion.div
          onMouseEnter={() => setOnEnter("aaa")}
          onMouseLeave={() => setOnEnter("false")}
          variants={variants1}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className="relative mr-[0.05rem]"
        >
          {onEnter === "aaa" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu1}
            alt="eu1"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("bbb")}
          onMouseLeave={() => setOnEnter("")}
          variants={variants2}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className=" relative "
        >
          {onEnter === "bbb" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu7}
            alt="eu7"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("ccc")}
          onMouseLeave={() => setOnEnter("")}
          variants={variants3}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className="relative ml-[0.05rem] "
        >
          {onEnter === "ccc" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu3}
            alt="eu3"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("ddd")}
          onMouseLeave={() => setOnEnter("")}
          variants={variants4}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className="relative mt-[0.05rem] mr-[0.05rem]"
        >
          {onEnter === "ddd" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu4}
            alt="eu4"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("eee")}
          onMouseLeave={() => setOnEnter("")}
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="relative mt-[0.05rem]"
        >
          {onEnter === "eee" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu2}
            alt="eu2"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("fff")}
          onMouseLeave={() => setOnEnter("")}
          variants={variants6}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className="relative mt-[0.05rem] ml-[0.05rem]"
        >
          {onEnter === "fff" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu6}
            alt="eu6"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("ggg")}
          onMouseLeave={() => setOnEnter("")}
          variants={variants7}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className="relative mt-[0.05rem] mr-[0.05rem]"
        >
          {onEnter === "ggg" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu10}
            alt="eu10"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("hhh")}
          onMouseLeave={() => setOnEnter("")}
          variants={variants8}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className="relative mt-[0.05rem] mr-[0.01rem]"
        >
          {onEnter === "hhh" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu5}
            alt="eu5"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setOnEnter("iii")}
          onMouseLeave={() => setOnEnter("")}
          variants={variants9}
          whileHover={
            nowWidth <= 500
              ? "hover500"
              : nowWidth > 500 && nowWidth <= 720
              ? "hover720"
              : nowWidth > 720 && nowWidth <= 960
              ? "hover960"
              : "hover1440"
          }
          className="relative mt-[0.05rem] ml-[0.01rem]"
        >
          {onEnter === "iii" && (
            <motion.svg
              animate={{
                opacity: [0, 1],
                fill: "red",
                transition: { duration: 1.3 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="white"
              className="absolute top-0 right-0 z-10 h-6 w-6 shadow-inner "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </motion.svg>
          )}
          <Image
            src={eu8}
            alt="eu8"
            layout="fill"
            placeholder="blur"
            className="-z-10 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

const variants1 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 110,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 105,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
const variants2 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 110,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 105,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
const variants3 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -110,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -105,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
const variants4 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: 70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 110,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 105,
    y: 95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
const variants6 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -110,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -105,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
const variants7 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 110,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: 105,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
const variants8 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -110,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -105,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};
const variants9 = {
  hover500: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover720: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -85,
    y: -70,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover960: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -110,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
  hover1440: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    scale: 2,
    x: -105,
    y: -95,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};

export default ProfileBioBar;
