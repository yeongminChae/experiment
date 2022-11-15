import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import AppModalNaming from "./appModalNaming";
import AppModalTopPart from "./appModalTopPart";

interface IModal {
  appIndex: string;
}

export default function AppModals({ appIndex }: IModal) {
  const router = useRouter();
  const { scrollY } = useScroll();
  const currentLoca = router.asPath.split("/");
  const toggleLeaving = () => {
    router.push("/cloneCoding", undefined, { scroll: false });
  };
  const scrollYIndex = scrollY.get();
  return (
    <AnimatePresence onExitComplete={toggleLeaving}>
      {router.asPath === `/cloneCoding/${appIndex}/${currentLoca[3]}` && (
        <motion.div layoutId={currentLoca[3]} className="absolute z-10">
          <Overlay
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scaleY: ["100%", "103%", "100%"],
              scaleX: ["100%", "103%", "100%"],
            }}
            exit={{
              opacity: 0,
              x: "-5%",
            }}
            transition={{
              type: "tween",
              duration: 0.7,
            }}
            className="fixed top-0 -ml-[0.6rem] flex h-full w-full flex-col items-center justify-center overflow-hidden opacity-0 backdrop-blur-sm sm:-ml-[5.3rem]"
          >
            <AppModalTopPart />
            <ContextPart className="fixed bottom-0 h-[30.1rem] w-full bg-white ">
              <AppModalNaming />
              <div className="mt-5 ml-6 w-full border-b-2 border-dotted" />
            </ContextPart>
          </Overlay>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
const Overlay = styled(motion.div)``;
const ContextPart = styled(motion.div)``;
