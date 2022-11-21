import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import AppModalNaming from "../../../components/appModalNaming";
import { IModal } from "../../../components/appModals";
import AppModalTopFirstPart from "../../../components/appModalTopFirstPart";

export default function ToDo({ title }: IModal) {
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const toggleLeaving = () => {
    router.push("/cloneCoding", undefined, { scroll: false });
  };
  const toggleBefore = () => {
    router.push("/").then(() => window.scrollTo(2100, 2100));
  };
  return (
    <AnimatePresence>
      {router.asPath === `/cloneCoding/firstApps/ToDo` && (
        <motion.div
          layoutId={currentLoca[3]}
          className="absolute z-10 xl:ml-10"
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
            <AppModalTopFirstPart />
            <div className="ml-6 mt-[15rem] border-b-2 border-dotted sm:mt-[17rem] sm:ml-1 md:mt-[18rem] lg:mt-[18rem] xl:mt-[19.5rem] " />
          </ContextPart>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const ContextPart = styled(motion.div)``;
