import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopSecPart from "../../../components/appModalTopSecPart";

export default function Twitter({ title }: IModal) {
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
        {router.asPath === `/cloneCoding/secApps/Twitter` && (
          <motion.div
            layoutId={currentLoca[3]}
            className="absolute z-10 xl:ml-9 "
          >
            <ContextPart className="fixed top-0 h-full  w-[50rem] overflow-y-scroll bg-[#F9F9F9] shadow-xl sm:ml-20 sm:w-[35rem] md:ml-40 md:w-[40rem] lg:ml-48 xl:ml-[23rem] ">
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
              <AppModalTopSecPart />
              <div className="ml-6 mt-[27.8rem] border-b-2 border-dotted sm:ml-1" />
              {more === false ? (
                <DescriotPart className="ml-5 mt-3 inline-block h-[10rem] w-[30rem] pr-3 sm:w-11/12 ">
                  <p className="line-clamp-3">
                    누구든지 쉽게 사용할 수 있는 Twitter App에서 함께 대화를
                    나눠보세요! 어디서나 트렌드에 빠르게 반응하는 소셜 미디어인
                    Twitter App인 으로 전 세계에서 일어나는 일들을 알아보고
                    소통해보세요! 이 application은 Nomad Coder의 Firebase 강의를
                    수강하며 제작한 Clone Coding Project 입니다. Front-End
                    파트를 JavaScript , React , CSS 를 활용하여 제작하였고
                    google Firebase를 활용하여 CRUD , Authentication , File
                    Upload 기능을 제작하는 방법에 대해 공부하였습니다.
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
                    className="ml-5 mt-5 w-[29rem] sm:w-[33rem] md:w-[37.5rem] "
                  >
                    누구든지 쉽게 사용할 수 있는 Twitter App에서 함께 대화를
                    나눠보세요! 어디서나 트렌드에 빠르게 반응하는 소셜 미디어인
                    Twitter App으로 전 세계에서 일어나는 일들을 알아보고
                    소통해보세요!
                    <br />
                    <br />
                    이 application은 Nomad Coder의 Firebase 강의를 수강하며
                    제작한 Clone Coding Project 입니다. Front-End 파트를
                    JavaScript , React , CSS 를 활용하여 제작하였고 google
                    Firebase를 활용하여 CRUD , Authentication , File Upload
                    기능을 제작하는 방법에 대해 공부하였습니다.
                    <br />
                    <br />
                    이 application에서 평소에 Back-End에 부담감을 느끼던
                    저로써는 Firebase라는 도구는 유용하게 다가왔습니다. 제가
                    하나하나 코드를 작성할 필요 없이 이 tool을 제대로 활용하기만
                    하여도 완성도 높은 개발을 할 수 있는 강력한 도구라는 생각이
                    들었습니다. 또한 웹, 모바일 가리지 않고 활용할 수 있다는
                    점도 초보 개발자인 저에게 꼭 필요한 기술이라는 생각이 들기도
                    하였습니다.
                    <br />
                    <br />
                    이 application을 단기간에 서둘러 만들고 배포했기 때문에
                    완성도가 낮았고 Firebase를 깊게 공부해볼 시간이 없었던 점이
                    아쉽게 다가옵니다.
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
                    // className="absolute -bottom-[29.5rem] ml-[28.5rem] h-6 w-6 cursor-pointer text-xs hover:text-indigo-700 sm:-bottom-[27.5rem] sm:ml-[32rem] md:-bottom-[25rem] md:ml-[36.5rem] xl:-bottom-[25rem] xl:ml-[36.5rem] "
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
