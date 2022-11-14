import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ForthAppModal() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const currentLoca = router.asPath.split("/");
  const toggleLeaving = () => {
    router.push("/cloneCoding", undefined, { scroll: false });
  };
  const scrollYIndex = scrollY.get();
  return (
    <AnimatePresence onExitComplete={toggleLeaving}>
      {router.asPath === `/cloneCoding/forthApp/${currentLoca[3]}` && (
        <div className="absolute z-20 -ml-5 ">
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              top: 0,
            }}
            className="fixed top-0 -ml-[0.25rem] flex h-full w-full items-center justify-center opacity-0 backdrop-blur-sm sm:-ml-[5.3rem]"
          >
            <BigMovie
              layoutId={currentLoca[3]}
              className="z-10 h-[80vh] w-[80vw] overflow-hidden rounded-lg bg-[#2F2F2F] shadow-xl outline-none"
              style={{
                top: scrollYIndex,
              }}
            >
              <>
                <BigCover className="z-10 h-[70vh] w-full bg-cover bg-[center_center]">
                  <button
                    onClick={toggleLeaving}
                    className="cursor-pointer text-white"
                  >
                    X
                  </button>
                </BigCover>
              </>
            </BigMovie>
          </Overlay>
        </div>
      )}
    </AnimatePresence>
  );
}
const Overlay = styled(motion.div)``;
const BigMovie = styled(motion.div)``;
const BigCover = styled(motion.div)`
  background-image: linear-gradient(to top, orange, transparent);
`;
