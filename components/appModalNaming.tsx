import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import AppModalSvgReader from "./appModalSvgReader";

export default function AppModalNaming() {
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const onBoxClick = () => {
    router.push(
      `?appName=${currentLoca[3]}`,
      `/cloneCoding/secApps/${currentLoca[3]}`,
      {
        scroll: false,
      }
    );
  };
  return (
    <NamingPart className="ml-5 mt-5 flex space-x-7">
      <AppModalSvgReader />
      <DescriptPart className="flex flex-col">
        <div className="text-3xl">{currentLoca[3]}</div>
        <div className="text-lg font-light  text-black/40 ">Descripton</div>
        <div className="mt-[3.2rem] flex ">
          <motion.button
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
              backgroundColor: "#1F4690",
            }}
            onClick={onBoxClick}
            className="h-7 w-[4.8rem] rounded-2xl bg-[#1363DF]"
          >
            <span className="text-sm font-bold text-white ">받기</span>{" "}
          </motion.button>
          <span className="mt-[0.3rem] w-16 text-center text-[0.3rem] opacity-50">
            앱 내 구입
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1363DF"
            className="ml-28 h-6 w-6 cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
            />
          </svg>
        </div>
      </DescriptPart>
    </NamingPart>
  );
}
const NamingPart = styled(motion.div)``;
const DescriptPart = styled(motion.div)``;
