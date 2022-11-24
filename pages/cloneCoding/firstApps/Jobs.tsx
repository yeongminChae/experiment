import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopFirstPart from "../../../components/appModalTopFirstPart";

export default function Jobs({ title }: IModal) {
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
        {router.asPath === `/cloneCoding/firstApps/Jobs` && (
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
                      현재 구직중이신가요 이직을 고려중이신가요 ? 저희 Jobs앱과
                      함께 그 고민을 해결하세요! 키워드를 입력하면 관련된 수많은
                      채용공고를 보여드립니다! 이 application은 Nomad Coder의
                      python 강의를 수강하며 진행한 challenge 에서 제작한 web
                      scrapping application 입니다.
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
                    현재 구직중이신가요 이직을 고려중이신가요? 저희 Jobs앱과
                    함께 그 고민을 해결하세요! 원하시는 구직 정보를 와 관련되는
                    키워드를 입력하시면 관련된 수많은 채용공고를 보여드립니다!
                    <br />
                    <br />
                    이 application은 Nomad Coder의 python 강의를 수강하며 진행한
                    challenge에 졸업 과제로써 제출한 web scrapping application
                    입니다.
                    <br />
                    python을 공부하면서 주로 기초적인 문법 위주에 공부만
                    해왔었지만 실제로 프로젝트를 진행하면서 프로그램을 제작하여
                    개발을 해본 적이 처음이었기에 어려웠지만 막상 프로그램을
                    배포해보니 python을 활용하여 코드를 작성하는 과정이 재미있게
                    다가왔었습니다.
                    <br />
                    <br />
                    이 application 코드를 작성하면서 어려웠던 점은, scrapping을
                    시도했던 사이트들 마다 정보를 처리하는 방법이 달라서 매번
                    scrapping 코드를 새로 작성해야 했었어서 꽤나 애먹었었던
                    기억이 남습니다.
                    <br />
                    <br />
                    현재는 scrapping 데이터를 얻기위해 참고했었던 페이지 정보가
                    변경되면서 더 이상 scrapping이 가능하지 않습니다.
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
