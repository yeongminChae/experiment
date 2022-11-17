import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

interface IAppBox {
  appName?: string;
  bgColor?: string;
  children?: ReactNode;
  clicked?: () => void;
  widValue: string;
  heiValue: string;
  roundVal: string;
}

export default function FirstAppBox({
  appName,
  children,
  bgColor,
  clicked,
  widValue,
  heiValue,
  roundVal,
}: IAppBox) {
  const router = useRouter();
  const [isHover, setIsHover] = useState(true);
  const [scrollYIndex, setScrollYIndex] = useState(0);
  const enterHover = () => {
    if (isHover) {
      setIsHover((prev) => !prev);
    }
  };
  const leaveHover = () => {
    if (!isHover) {
      setIsHover((prev) => !prev);
    }
  };
  const handleScroll = () => {
    setScrollYIndex(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <motion.div
      onMouseEnter={enterHover}
      onMouseLeave={leaveHover}
      onClick={clicked}
      layoutId={appName}
      whileHover={{
        boxShadow: "0px 0px 8px rgb(255,255,255) ",
        scale: 1.25,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex flex-col items-center justify-center shadow-lg"
      style={{
        backgroundColor: bgColor,
        width: widValue,
        height: heiValue,
        borderRadius: roundVal,
      }}
    >
      {children}
      {isHover ? (
        ""
      ) : (
        <motion.span
          variants={appNameMotion}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.5,
          }}
          className="flex text-xs font-semibold text-black/70"
        >
          {appName}
        </motion.span>
      )}
    </motion.div>
  );
}

const appNameMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
