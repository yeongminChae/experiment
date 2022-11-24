import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopFirstPart from "../../../components/appModalTopFirstPart";

export default function Cart({ title }: IModal) {
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
        {router.asPath === `/cloneCoding/firstApps/Cart` && (
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
                      모바일 혹은 웹 어디에서 든지 Cart App과 함께 수 많은
                      가구들과 홈 데코레이션 제품들을 비교해 보시고 본인 또는
                      친구의 집에 가장 어울리는 최적의 아이템을 찾아 보세요 !! !
                      이 application은 TailwindCss를 공부하기 위해 TypeScript와
                      NextJs(React) 를 활용하여 만들어본 Front-End
                      application입니다. TailwindCss를 선택한 이유는
                      TailwindCss만에 직관적인 Css Tag에서 오는 장점때문도 있고,
                      무엇보다 반응형 앱 , 다양한 에니메이션 제작에 기존 CSS와
                      비교했을때 오는 용이성 때문입니다. <br />
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
                    모바일 혹은 웹 어디에서 든지 Cart App과 함께 수 많은
                    가구들과 홈 데코레이션 제품들을 비교해 보시고 본인 또는
                    친구의 집에 가장 어울리는 최적의 아이템을 찾아 보세요 !!{" "}
                    <br />
                    <br /> 이 application은 TailwindCss를 공부하기
                    위해 TypeScript와 NextJs(React) 를 활용하여 만들어본
                    Front-End application입니다. TailwindCss를 선택한 이유는
                    TailwindCss만에 직관적인 Css Tag에서 오는 장점때문도 있고,
                    무엇보다 반응형 앱 , 다양한 에니메이션 제작에 기존 CSS와
                    비교했을때 오는 용이성 때문입니다. <br />
                    <br /> 이 application을 제작하면서 단순한 작업 외엔
                    할수없었던 CSS 작업이 정말 혁신적으로 재미있게 다가왔고,
                    새로운 눈으로 Front-End에 임할 수 있게 되었습니다.
                    <br />
                    <br />
                    하지만 사용한 지 얼마 안되었을 때에는 계속해서 공식문서를
                    참고해서 공부해야 했고 몇몇 Tag들은 아직도 낯섭니다.
                    그럼에도 TailwindCss에 익숙해졌을 때에 올 편의성을 생각
                    해보면, 이렇게 애를 먹어가며 공부하는 과정이 너무나도 즐겁게
                    다가왔습니다.
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
