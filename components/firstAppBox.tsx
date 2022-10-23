import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

interface IAppBox {
  appName: string;
  bgColor: string;
  children?: ReactNode;
  clicked?: () => void;
}

export default function FirstAppBox({
  appName,
  children,
  bgColor,
  clicked,
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
  const onBoxClick = () => {
    router.push(`?appName=${appName}`, `/cloneCoding/firstApps/${appName}`);
    console.log(`scrollYIndex : ${scrollYIndex} `);
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
      onClick={onBoxClick}
      layoutId={appName}
      whileHover={{
        boxShadow: "0px 0px 8px rgb(255,255,255) ",
        scale: 1.25,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl shadow-lg"
      style={{
        backgroundColor: bgColor,
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
