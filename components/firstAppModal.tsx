import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FirstAppBox from "./firstAppBox";

export default function FirstAppModal() {
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState<boolean>(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  //   if (leaving) return;
  //   toggleLeaving();
  //   setBack(false);
  return (
    <AnimatePresence onExitComplete={toggleLeaving}>
      {router.asPath === `/cloneCoding/firstApps/${currentLoca[3]}` && (
        <div className="relative">
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              top: 0,
            }}
            className="fixed top-0 flex h-full w-full items-center justify-center opacity-0"
          >
            <BigMovie
              layoutId={currentLoca[3]}
              className="absolute z-[100] -ml-24 mr-24 h-[60vh] w-[80vw] overflow-hidden rounded-lg bg-[#2F2F2F] shadow-xl outline-none "
            >
              <>
                <BigCover className="h-[350px] w-full bg-cover bg-[center_center] ">
                  <button onClick={toggleLeaving} className="text-white">
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
const BigTitle = styled(motion.div)``;
const BigOverview = styled(motion.div)``;
