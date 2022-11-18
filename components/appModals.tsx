import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import AppModalNaming from "./appModalNaming";
import AppModalTopFirstPart from "./appModalTopFirstPart";
import AppModalTopSecPart from "./AppModalTopSecPart";

export interface IModal {
  appIndex: string;
  title?: string;
}

export default function AppModals({ appIndex, title }: IModal) {
  const router = useRouter();
  const { scrollY } = useScroll();
  const currentLoca = router.asPath.split("/");
  const toggleLeaving = () => {
    router.push("/cloneCoding", undefined, { scroll: false });
  };
  const scrollYIndex = scrollY.get();
  return (
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
            className="fixed top-0 -ml-[0.5rem] flex h-full w-[50rem] flex-col items-center justify-center overflow-hidden opacity-0 shadow-xl backdrop-blur-sm sm:-ml-24 md:-ml-10 md:w-[59rem] lg:-ml-[5rem] lg:w-[65rem] xl:-ml-32 xl:w-full "
          >
            <ContextPart className="fixed top-0 h-full w-full bg-[#F9F9F9] sm:mr-16 sm:w-[35rem] md:-mr-10 md:w-[40rem] lg:-mr-0 ">
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
              {currentLoca[3] === "Twitter" ||
              currentLoca[3] === "CoinsTracker" ? (
                <AppModalTopSecPart />
              ) : (
                <AppModalTopFirstPart />
              )}
              {currentLoca[3] === "Twitter" ||
              currentLoca[3] === "CoinsTracker" ? (
                <div className="ml-6 mt-[27rem] border-b-2 border-dotted sm:ml-1" />
              ) : (
                <div className="ml-6 mt-[13.5rem] border-b-2 border-dotted sm:mt-[15.5rem] sm:ml-1 md:mt-[16.5rem] xl:mt-[17.5rem] " />
              )}
            </ContextPart>
          </Overlay>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
const Overlay = styled(motion.div)``;
const ContextPart = styled(motion.div)``;
