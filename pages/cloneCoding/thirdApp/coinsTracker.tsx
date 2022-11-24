import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopSecPart from "../../../components/appModalTopSecPart";

export default function CoinsTracker({ title }: IModal) {
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
        {router.asPath === `/cloneCoding/thirdApp/CoinsTracker` && (
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
                    CoinsTracker App에서 매일매일 변하는 코인들에 변동성을
                    확인해보세요! 저희는 Bitcoin , Ethereum 을 비롯한 수 많은
                    코인들을 체크하고 있습니다. 저희에 깔끔하게 정리된 앱을 지금
                    바로 사용해보세요. 이 application은 Nomad Coder의 React
                    강의를 수강 후 Challenge를 하며 제작한 Project입니다. React
                    , TypeScript 와 css 를 통해 제작한 Front-End
                    application입니다.
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
                    CoinsTracker App에서 매일매일 변하는 코인들에 변동성을
                    확인해보세요! 저희는 Bitcoin , Ethereum 을 비롯한 수 많은
                    코인들을 체크하고 있습니다. 저희에 깔끔하게 정리된 앱을 지금
                    바로 사용해보세요.
                    <br />
                    <br />
                    이 application은 Nomad Coder의 React 강의를 수강 후
                    Challenge를 하며 제작한 Project입니다. React , TypeScript 와
                    css 를 통해 제작한 Front-End application입니다.
                    <br />
                    <br />
                    이 application은 React Query 를 이용하여 Crypto Price API 의
                    데이터를 Fetching하는 연습과 recoil , atom을 활용한 다크모드
                    구현 법, Apex Charts 를 활용하여 암호화폐 시세 변화 데이터를
                    시각화를 위한 다양한 그래픽 구현등에 대한 코드를
                    제작하였습니다
                    <br />
                    <br />
                    기억에 남는 점은 처음 다크모드를 구현할 때 Recoil , Atom을
                    사용하지 않고 제작하였었는데 오류 투성이었기에 정말 힘들게
                    제작했던 기억이 나는데 atom을 활용하여 간편하게 제작할 수
                    있던 점이 충격으로 다가왔던 기억이 남습니다.
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
                    className="absolute -bottom-[26.5rem] ml-[28rem] h-6 w-6 cursor-pointer text-xs hover:text-indigo-700 sm:-bottom-[25rem] sm:ml-[32rem] md:-bottom-[22rem] md:ml-[37rem] xl:-bottom-[22rem] xl:ml-[37rem] "
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
