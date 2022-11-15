import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import koreanApp from "../pages/cloneCoding/image/koreanApp.png";
import { useRouter } from "next/router";

export default function AppModalTopPart() {
  const router = useRouter();
  const toggleLeaving = () => {
    router.push("/cloneCoding", undefined, { scroll: false });
  };
  return (
    <TopPart className="w-full outline-none">
      <div className="fixed top-0 h-52 w-full">
        <Image
          src={koreanApp}
          alt="exam1"
          layout="fill"
          placeholder="blur"
          className="top-0 -z-10 overflow-hidden object-fill"
        />
      </div>
      <button
        onClick={toggleLeaving}
        className="absolute top-5 ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          stroke-opacity="0.3"
          className="w-5` mr-0.5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </TopPart>
  );
}

const TopPart = styled(motion.div)`
  /* background-image: linear-gradient(to top, white, transparent); */
`;
