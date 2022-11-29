/* eslint-disable @typescript-eslint/no-floating-promises */
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopFirstPart from "../../../components/appModalTopFirstPart";

export default function Netflix({ title }: IModal) {
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const [more, setMore] = useState(false);
  const [mounted, setMounted] = useState(false);
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
        {router.asPath === `/cloneCoding/secApps/Netflix` && (
          <motion.div
            layoutId={currentLoca[3]}
            className="absolute z-10 xl:ml-10 "
          >
            <ContextPart className="fixed top-0 h-full w-[50rem] bg-[#F9F9F9] shadow-xl sm:ml-20 sm:w-[35rem] md:ml-40 md:w-[40rem] lg:ml-48 xl:ml-[23rem] ">
              <div className="mb-16 ml-3">
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
              <div className="mt-5 ml-6 border-b-2 border-dotted sm:ml-1" />
              {more === false ? (
                <>
                  <AppModalTopFirstPart />
                  <div className="ml-6 mt-[13.5rem] border-b-2 border-dotted sm:mt-[15.5rem] sm:ml-1 md:mt-[18rem] lg:mt-[18rem] " />
                  <DescriotPart className="ml-5 mt-3 inline-block h-[10rem] w-[30rem] pr-3 sm:w-11/12 ">
                    <p className="line-clamp-3 ">
                      오늘도 다음 작품을 고르시고 계신가요? Netflix App에서 수
                      많은 영화 , TV Series에 관한 추천을 받으시고 선택하신
                      작품을 즐겨보세요. 또한 추천 받으신 작품에 대한 정보뿐만
                      아니라 호기심이 있으신 작품에 대하여도 알아가 봐요. 이
                      application은 Nomad Coder의 강의를 수강하며 제작한 Clone
                      Coding Project 중 하나 로 TypeScript , React를 활용하여
                      제작한 Front-End application입니다. 또한 Framer Motion
                      수업을 진행하며 제작 했기에 Framer Motion을 활용한
                      에니메이션 효과를 공부하는 기회가 되었습니다.
                      <div
                        onClick={onMoreClick}
                        className="absolute bottom-[8rem] left-[28.5rem] cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:bottom-[7.4rem] sm:left-[32.4rem] md:bottom-[4.9rem] md:left-[37.3rem] xl:bottom-[4.9rem]"
                      >
                        더 보기
                      </div>
                    </p>
                  </DescriotPart>
                </>
              ) : (
                <MoreDescriotPart>
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
                    className="absolute ml-5 mt-5 w-[29rem] sm:w-[33rem] md:w-[37.5rem] "
                  >
                    오늘도 다음 작품을 고르시고 계신가요? Netflix App에서 수
                    많은 영화 , TV Series에 관한 추천을 받으시고 선택하신 작품을
                    즐겨보세요. 또한 추천 받으신 작품에 대한 정보뿐만 아니라
                    호기심이 있으신 작품에 대하여도 알아가 봐요.
                    <br />
                    <br />
                    이 application은 Nomad Coder의 Clone Coding TypeScript,
                    React강의를 활용하여 제작한 Front-End application을 참고하여
                    NextJs으로 스스로 개발한 Project입니다.
                    <br />
                    <br />
                    이 application은 movie API 서버에서 정보를 받아 오기 위한
                    query 들을 생성하고 코드를 작성하는 방식에 대하여 배웠고
                    또한 이 서버 state에서 데이터를 fetching , caching,
                    synchronizing, updating 를 관히하기 위한 React Query에
                    관하여 공부 할 수 있는 기회가 되었습니다.
                    <br />
                    <br />
                    기억에 남는 점은 데이터를 받아오는 코드들을 작성 후에
                    깔끔하게 정리하기 위한 ReFactoring 과정에서 코드를 작성하는
                    것 보다 더 오랜 시간을 소모했었던 기억이 납니다. 그러나
                    고생을 한번 해보니 지금은 수월하게 코드를 정리하고 있습니다.
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
                    // className="absolute bottom-[1rem] ml-[28rem] h-6 w-6 cursor-pointer text-xs hover:text-indigo-700 sm:bottom-[2.5rem] sm:ml-[32rem] md:bottom-[4rem] md:ml-[37rem] xl:bottom-[4rem] xl:ml-[37rem] "
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
