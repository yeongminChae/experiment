import { animate, motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface IAppBox {
  appName: string;
  bgColor: string;
  children?: ReactNode;
}

export default function FirstAppBox({ appName, children, bgColor }: IAppBox) {
  const [isHover, setIsHover] = useState(true);
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
  return (
    <motion.div
      onMouseEnter={enterHover}
      onMouseLeave={leaveHover}
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
