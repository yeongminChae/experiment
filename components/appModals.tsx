/* eslint-disable @typescript-eslint/no-floating-promises */
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { cls } from "../libs/client/utils";
import AppModalNaming from "./appModalNaming";
import AppModalTopFirstPart from "./appModalTopFirstPart";
import AppModalTopSec from "./appModalTopSec";

import ModalDescriptionOne from "./modalDescriptionOne";

export interface IModal {
  appIndex?: string;
  title?: string;
}

export default function AppModals({ appIndex, title }: IModal) {
  const router = useRouter();
  const [more, setMore] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const currentLoca = router.asPath.split("/");
  const onMoreClick = () => {
    setMore(true);
  };
  useEffect(() => {
    if (more) {
      onMoreClick();
    }
  }, [more]);
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleLeaving = () => {
    router.push("/cloneCoding", undefined, { scroll: false });
    setMore(false);
  };
  const scrollYIndex = scrollY.get();
  return (
    mounted && (
      <AnimatePresence mode="sync" onExitComplete={toggleLeaving}>
        {router.asPath === `/cloneCoding/${appIndex}/${currentLoca[3]}` && (
          <motion.div layoutId={currentLoca[3]} className="absolute z-10 ">
            <Overlay
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scaleY: ["100%", "105%", "100%"],
                scaleX: ["100%", "105%", "100%"],
                transition: {
                  type: "tween",
                  duration: 0.7,
                },
              }}
              exit={{
                opacity: [0.8, 0.4, 0],
                rotateY: 180,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                },
              }}
              className={cls(
                "fixed top-0 -ml-[0.5rem] flex w-[50rem] flex-col items-center justify-center opacity-0 shadow-xl backdrop-blur-sm sm:-ml-24 md:-ml-10 md:w-[61rem] lg:-ml-[11rem] lg:w-[80rem] xl:-ml-56 xl:w-[100rem] ",
                currentLoca[3] === "Twitter" ||
                  currentLoca[3] === "CoinsTracker" ||
                  currentLoca[3] === "Carrot"
                  ? "h-[46rem] "
                  : "h-full"
              )}
            >
              <ContextPart className="fixed top-0 h-full w-full overflow-x-hidden overflow-y-scroll bg-[#F9F9F9] sm:mr-16 sm:w-[35rem] md:-mr-10 md:w-[40rem] lg:-mr-0 ">
                <button
                  onClick={toggleLeaving}
                  className="absolute top-5 ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    strokeOpacity="0.3"
                    className="mr-0.5 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <AppModalNaming title={title} />
                <div className="mt-5 ml-6 border-b-2 border-dotted sm:ml-1" />
                {more === false ? (
                  <>
                    {currentLoca[3] === "Twitter" ||
                    currentLoca[3] === "Carrot" ||
                    currentLoca[3] === "CoinsTracker" ? (
                      <AppModalTopSec></AppModalTopSec>
                    ) : (
                      <AppModalTopFirstPart />
                    )}
                    {currentLoca[3] === "Twitter" ||
                    currentLoca[3] === "Carrot" ||
                    currentLoca[3] === "CoinsTracker" ? (
                      <>
                        <div className=" ml-6 mt-[27.5rem] border-b-2 border-dotted sm:ml-1" />
                        <DescriptPart className="ml-5 mt-3 inline-block">
                          <p className="h-[8rem] w-[28rem] line-clamp-3 sm:w-[32rem] md:w-[36rem] ">
                            <ModalDescriptionOne />
                          </p>
                          <div
                            onClick={onMoreClick}
                            className="absolute -bottom-[1.8rem] left-[26.5rem] cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:left-[31rem] md:left-[34.7rem]"
                          >
                            더 보기
                          </div>
                        </DescriptPart>
                      </>
                    ) : (
                      <>
                        <div className="ml-6 mt-[13.5rem] border-b-2 border-dotted sm:mt-[17rem] sm:ml-1 md:mt-[18rem] lg:mt-[18rem] xl:mt-[19.5rem] " />
                        <DescriptPart className="ml-5 mt-3 inline-block h-[13.55rem] w-[30rem] pr-3 sm:w-11/12 ">
                          <p className="h-[4.5rem] w-[96%] line-clamp-3 ">
                            <ModalDescriptionOne />
                          </p>
                          <div
                            onClick={onMoreClick}
                            className="relative bottom-[0rem] left-[25.6rem] cursor-pointer overflow-x-hidden text-xs transition-opacity ease-out hover:text-indigo-700 sm:bottom-[1rem] sm:left-[26.5rem] md:bottom-[1.2rem] md:left-[31.3rem] lg:bottom-[1.4rem]"
                          >
                            더 보기
                          </div>
                        </DescriptPart>
                      </>
                    )}
                  </>
                ) : (
                  <MoreDeptriotPart className="h-[35rem] ">
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        y: [100, -40, 0],
                        opacity: [0, 1],
                        transition: { duration: 1.25 },
                      }}
                      exit={{
                        y: [0, 100],
                      }}
                      className="absolute ml-5 mt-5 h-[20rem] w-[27rem] sm:w-[32rem] md:w-[36rem] lg:w-[37rem] xl:w-[37.5rem]"
                    >
                      <ModalDescriptionOne />
                    </motion.p>
                    {currentLoca[3] === "Twitter" ||
                    currentLoca[3] === "Carrot" ||
                    currentLoca[3] === "CoinsTracker" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => setMore(false)}
                        // className="absolute bottom-[1rem] left-[27rem] h-6 w-6 cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:bottom-[4rem] sm:left-[31.5rem] md:bottom-[6.9rem] md:left-[35.7rem] lg:left-[36rem] lg:bottom-[11em] xl:left-[37rem] xl:bottom-[11em] "
                        className="fixed bottom-10 ml-[14rem] h-12 w-12 cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:ml-[15.5rem] lg:ml-[17rem] xl:ml-[18rem]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => setMore(false)}
                        // className="absolute bottom-[1rem] left-[26rem] h-6 w-6 cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:bottom-[2.5rem] sm:left-[31.5rem] md:bottom-[6.8rem] md:left-[35.7rem] lg:left-[36rem] lg:bottom-[9em] xl:left-[37rem] "
                        className="fixed bottom-0 ml-[14rem] h-12 w-12 cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:ml-[15.5rem] lg:ml-[17rem] xl:ml-[18rem]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    )}
                  </MoreDeptriotPart>
                )}
              </ContextPart>
            </Overlay>
          </motion.div>
        )}
      </AnimatePresence>
    )
  );
}
const Overlay = styled(motion.div)``;
const ContextPart = styled(motion.div)``;
const DescriptPart = styled(motion.div)``;
const MoreDeptriotPart = styled(motion.div)``;
