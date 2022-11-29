/* eslint-disable @typescript-eslint/no-floating-promises */
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopSec from "../../../components/appModalTopSec";

export default function Carrot({ title }: IModal) {
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const [mounted, setMounted] = useState(false);
  const [more, setMore] = useState(false);
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
  };
  const toggleBefore = () => {
    router.push("/").then(() => window.scrollTo(2100, 2100));
  };
  return (
    mounted && (
      <AnimatePresence>
        {router.asPath === `/cloneCoding/secApps/Carrot` && (
          <motion.div
            layoutId={currentLoca[3]}
            className="absolute z-10 xl:ml-9 "
          >
            <ContextPart className="fixed top-0 h-full w-[50rem] overflow-y-scroll bg-[#F9F9F9] shadow-xl sm:ml-20 sm:w-[35rem] md:ml-40 md:w-[40rem] lg:ml-48 xl:ml-[23rem] ">
              <div className="mb-16 ml-3 ">
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
                <button
                  onClick={toggleBefore}
                  className="absolute top-5 ml-14 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    strokeOpacity="0.5"
                    fill="#7a8494"
                    stroke="black"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </button>
              </div>
              <AppModalNaming title={title} />
              <div className="mt-5 ml-6 border-b-2 border-dotted sm:ml-1 " />
              <AppModalTopSec></AppModalTopSec>
              <div className="ml-6 mt-[27.8rem] border-b-2 border-dotted sm:ml-1" />
              {more === false ? (
                <DescriotPart className="ml-5 mt-3 inline-block h-[10rem] w-[30rem] pr-3 sm:w-11/12 ">
                  <p className="line-clamp-3">
                    Carrot App에서 중고 개래부터 맛집을 비롯한 다양한 동네
                    정보까지, 이웃들과 서로 함께하는 가깝고 따뜻한 당신의 지역
                    생활 커뮤니티를 지금 바로, 당신 근처에서부터 만들어 나가
                    보세요! 이 application은 Nomad Coder의 NextJs 강의를
                    수강하며 제작한 Full Stack NextJs Clone Coding Project
                    입니다. React를 기반으로 만들어진 Framework 답게 오로직
                    NextJs 와 TypeScript 만으로 Front-End , Back-End 파트를
                    개발하였습니다. Front-End에서 tailwindCss를 처음으로
                    접하였고 , Back-End로 PrismaDB를 활용하는 연습을 하면서
                    server-less Database 에 대하여 학습하는 기회도 되었습니다.
                    <div
                      onClick={onMoreClick}
                      className="absolute -bottom-[6rem] left-[28.5rem] w-9 cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:-bottom-[4.7rem] sm:left-[31.7rem] md:-bottom-[4.7rem] md:left-[36rem] xl:-bottom-[4.7rem]"
                    >
                      더 보기
                    </div>
                  </p>
                </DescriotPart>
              ) : (
                <MoreDescriotPart className=" overflow-x-hidden ">
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      y: [100, -20, 0],
                      opacity: [0, 1],
                      transition: { duration: 1.25 },
                    }}
                    exit={{
                      y: [0, 100],
                    }}
                    className="ml-5 mt-5 w-[29rem] overflow-x-hidden sm:w-[33rem] md:w-[37.5rem] "
                  >
                    Carrot App에서 중고 개래부터 맛집을 비롯한 다양한 동네
                    정보까지, 이웃들과 서로 함께하는 가깝고 따뜻한 당신의 지역
                    생활 커뮤니티를 지금 바로, 당신 근처에서부터 만들어 나가
                    보세요!
                    <br />
                    <br />
                    이 application은 Nomad Coder의 NextJs 강의를 수강하며 제작한
                    Full Stack NextJs Clone Coding Project 입니다. React를
                    기반으로 만들어진 Framework 답게 오로직 NextJs 와 TypeScript
                    만으로 Front-End , Back-End 파트를 개발하였습니다.
                    Front-End에서 tailwindCss를 처음으로 접하였고 , Back-End로
                    PrismaDB를 활용하는 연습을 하면서 server-less Database 에
                    대하여 학습하는 기회도 되었습니다.
                    <br />
                    <br />
                    이 application을 제작하면서 NextJs에서 server less , server
                    side rendering 들을 다루는 방식에 대해 공부할 수 있었고 더
                    깊게 학습하고 싶은 욕심이 생겼습니다.
                    <br />
                    <br />
                    이 application을 개발하면서 Front-End 부분은 재미있었지만
                    낯설던 server less Back-End와 NextJs에 심화적인 기술, vercel
                    을 활용한 배포는 보다 프로그래밍 지식을 요구했기에 벽에
                    부딪힌 듯한 기분이 들기도 하였습니다.
                    <br />
                    <br />
                  </motion.p>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    onClick={() => setMore(false)}
                    whileHover={{
                      stroke: "blue",
                      scale: 1.3,
                    }}
                    // className="absolute -bottom-[31rem] ml-[28.5rem] h-6 w-6 cursor-pointer text-xs hover:text-indigo-700 sm:-bottom-[26.5rem] sm:ml-[32rem] md:-bottom-[23.5rem] md:ml-[36.5rem] xl:-bottom-[23.5rem] xl:ml-[36.5rem] "
                    className="fixed -bottom-1 ml-[14rem] h-12 w-12 cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:ml-[15.5rem] lg:ml-[17rem] xl:ml-[18rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </motion.svg>
                </MoreDescriotPart>
              )}
            </ContextPart>
          </motion.div>
        )}
      </AnimatePresence>
    )
  );
}

const ContextPart = styled(motion.div)``;
const DescriotPart = styled(motion.div)``;
const MoreDescriotPart = styled(motion.div)``;
