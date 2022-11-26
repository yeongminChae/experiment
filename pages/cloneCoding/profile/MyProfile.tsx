import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";

export default function MyProfile({ title }: IModal) {
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleLeaving = () => {
    router.push("/cloneCoding/profile", undefined, { scroll: false });
  };
  const toggleBefore = () => {
    router.push("/").then(() => window.scrollTo(2100, 2100));
  };
  return (
    mounted && (
      <AnimatePresence>
        {router.asPath === `/cloneCoding/profile/MyProfile` && (
          <motion.div
            layoutId={currentLoca[3]}
            className="absolute z-10 xl:ml-9 "
          >
            <ContextPart className="fixed top-0 h-full w-[50rem] overflow-y-hidden bg-[#F9F9F9] shadow-xl sm:ml-20 sm:w-[35rem] md:ml-40 md:w-[40rem] lg:ml-48 xl:ml-[23rem] ">
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
              <div className="ml-6 mt-4 border-b-2 border-dotted sm:ml-1" />
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
                  이 페이지는 제가 tailwindCss에 익숙해지위해 또 css 제작
                  프로젝트 연습 또한 해보기 위해 nextJs(react) 와 TypeScript를
                  사용해서 instagram profile 페이지처럼 만들어 보았습니다.
                  생각보다 완성도가 마음에 들어서 저의 포트폴리오에도 profile
                  페이지로 사용하기로 했습니다. tailwindCss를 사용하면 코드가
                  길어진다는 것이 아쉽긴 하지만 저에게 css작업에 즐거움을
                  주었습니다.
                  <br />
                  <br />
                  이 페이지를 만들면서 힘들었던 것은 반응형 앱을 구현하는 것이
                  생각보다 어려웠습니다. 생각보다 부드럽게 넘어가지 못하는게
                  너무나도 아쉬웠고, 더 나은 Front-End 개발자 혹은 , UI/UX
                  디자이너가 되기 위해서는 tailwindCss를 이용한 반응형 앱 제작을
                  공부해야겠다고 생각했습니다.
                  <br />
                  <br />
                  이 페이지를 만들면서 tailwindCss를 사용해서 다크모드를 구현해
                  보았는데 , localstroage를 사용하여 구현하는 방식은 수업을
                  들으면서 react-coil , atoms를 이용해 구현해본 것과는 다른
                  재미가 있었습니다.
                  <br />
                  <br />
                  다음에는 tailwindCss & framer-motion을 사용하여 다양한
                  에니메이션 구현을 위한 공부를 해보고싶습니다.
                </motion.p>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  whileHover={{
                    stroke: "blue",
                    scale: 1.3,
                  }}
                  onClick={toggleLeaving}
                  // className="absolute bottom-[0rem] ml-[28.5rem] h-6 w-6 cursor-pointer text-xs hover:text-indigo-700 sm:-bottom-[0rem] sm:ml-[32rem] md:-bottom-[25rem] md:ml-[36.5rem] xl:-bottom-[25rem] xl:ml-[0rem] "
                  className="fixed -bottom-1 ml-[14rem] h-12 w-12 cursor-pointer text-xs transition-opacity ease-out hover:text-indigo-700 sm:ml-[15.5rem] lg:ml-[17rem] xl:ml-[18rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </motion.svg>
              </MoreDescriotPart>
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
