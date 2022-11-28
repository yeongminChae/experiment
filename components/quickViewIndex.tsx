import { animate, motion, useAnimation } from "framer-motion";
import IndexWrapper1 from "../components/indexWrapper1";
import IndexWrapper2 from "../components/indexWrapper2";
import { useEffect, useState } from "react";
import IndexExtraWrap from "../components/indexExtraWrap";
import { sleep } from "../pages";

const QuickViewIndex = () => {
  const [mounted, setMounted] = useState(false);
  const [sharedParent, setSharedParent] = useState<string>("");
  const [engrave, setEngrave] = useState("...");
  const engraving = async () => {
    if (sharedParent === undefined) {
      setEngrave("...");
    } else if (sharedParent === engrave) {
      setEngrave("...");
    } else if (sharedParent !== engrave) {
      setEngrave(sharedParent);
      await sleep(5000);
      setEngrave("...");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    sharedParent;
  }, [setSharedParent, sharedParent]);
  useEffect(() => {
    engraving();
  }, [sharedParent, setSharedParent]);
  return (
    mounted && (
      <>
        <div className="flex h-full flex-col justify-between " id="bottom">
          <div className="ml-20 mt-8 flex h-full flex-col justify-start text-9xl font-thin ">
            Quick
            <span className="flex">
              View{" "}
              <motion.span
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute left-[18rem] ml-10 mt-7 h-24 w-[7rem] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="-mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </motion.span>
            </span>
          </div>
          <IndexExtraWrap setSharedParent={setSharedParent} />
          <div className="ml-24 mb-8 flex flex-col ">
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#f4e994"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                strokeOpacity={0.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-2 font-medium">: codudals98@naver.com</span>
            </span>
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#fee630"
                strokeWidth={2}
                strokeOpacity={1}
                stroke="black"
                className="h-6 w-6"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <span className="ml-2 font-medium ">: codudals98</span>
            </span>
          </div>
        </div>
        <div className="mr-20 ml-40 h-full w-1 border-r-2 border-dotted border-teal-600 " />
        <div className="-ml-32 flex w-4/5 items-center justify-center ">
          <div className="mt-5 ml-10 h-[40rem] w-[40rem] rounded-full bg-teal-900 shadow-2xl">
            <IndexWrapper1 setSharedParent={setSharedParent} />
            <div className="mt-5 flex h-0 flex-col items-center justify-center text-7xl text-white ">
              <motion.span
                variants={engraveVars}
                initial={{ opacity: 0 }}
                animate="animate"
                exit="exit"
                className="justify-center shadow-xl"
              >
                TIME FOR{" "}
              </motion.span>
              <motion.span className="mt-10 shadow-xl ease-out">
                {engrave}{" "}
              </motion.span>
            </div>
            <IndexWrapper2 setSharedParent={setSharedParent} />
          </div>
        </div>
      </>
    )
  );
};

const engraveVars = {
  animate: {
    opacity: [0, 1],
    x: [-500, 200, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatDelay: 10,
    },
  },
  exit: {
    opacity: 0,
    x: [0, -500],
    transition: {
      duration: 1,
    },
  },
};

export default QuickViewIndex;
