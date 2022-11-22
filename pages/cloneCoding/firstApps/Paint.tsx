import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopFirstPart from "../../../components/appModalTopFirstPart";

export default function Paint({ title }: IModal) {
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
        {router.asPath === `/cloneCoding/firstApps/Paint` && (
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
                      Paint App에서 당신의 창의력을 활용하여 무한한 가능성의
                      분야로 날개를 펼쳐보세요. 세상을 놀래킬 수 있는 당신의
                      혁신적인 생각을 저희의 application과 함께 제작하고 또
                      성장해 나갔으면 좋겠습니다. 이 application은 Nomad Coder의
                      강의를 수강하며 기초적인 Html, CSS, JavaScript와
                      JavaScript의 canvas tag를 활용하여 제작한 Paint
                      application입니다.
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
                    Paint App에서 당신의 창의력을 활용하여 무한한 가능성의
                    분야로 날개를 펼쳐보세요. 세상을 놀래킬 수 있는 당신의
                    혁신적인 생각을 저희의 application과 함께 제작하고 또 성장해
                    나갔으면 좋겠습니다.
                    <br />
                    <br />
                    이 application은 Nomad Coder의 강의를 수강하며 기초적인
                    Html, CSS, JavaScript와 JavaScript의 canvas tag를 활용하여
                    제작한 Paint application입니다.
                    <br />
                    <br />
                    이 application을 개발하면서 JavaScript를 활용하여
                    interactive한 기능 개발을 다시 한번 느껴 볼 수 있었고, 당시
                    어려운 개발을 하면서 힘들었었지만 다시 한번 개발의 재미를
                    느끼는데 큰 도움이 됐었습니다.
                    <br />
                    <br />이 application은 React event-listner 코드에
                    익숙해져있다 오랜만에 JavaScript 코드를 보니 처음에는
                    당황했었다. 그러나 다시한번 JavaScript를 리마인드 할 수 있는
                    좋은 기회가 되었습니다.
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
                    className="absolute bottom-[1rem] ml-[28rem] h-6 w-6 cursor-pointer text-xs hover:text-indigo-700 sm:bottom-[2.5rem] sm:ml-[32rem] md:bottom-[4rem] md:ml-[37rem] xl:bottom-[4rem] xl:ml-[37rem] "
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
