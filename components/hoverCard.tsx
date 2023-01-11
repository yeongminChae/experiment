import { motion } from "framer-motion";
import { useState } from "react";

interface IAniCard {
  aniNumber: number;
}

const HoverCard = ({ aniNumber }: IAniCard) => {
  const [isHovering, setIsHovering] = useState("");
  const animalsImg = [
    "🐅",
    "🐳",
    "🦒",
    "🐑",
    "🐕",
    "🐉",
    "🧸",
    "🐈",
    "🐇",
    "🐎",
  ];
  const animalsName = [
    "호랑이",
    "고래",
    "기린",
    "양",
    "강아지",
    "용",
    "곰",
    "고양이",
    "토끼",
    "말",
  ];
  return (
    <>
      <motion.div
        onMouseOver={() => setIsHovering(animalsName[aniNumber])}
        onMouseOut={() => setIsHovering("")}
        whileHover={{
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          rotateY: 180,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex h-24 w-36 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-6xl shadow-xl  sm:h-36 sm:w-[8.5rem] md:w-[11.2rem] md:text-7xl lg:w-48 lg:text-8xl xl:h-44 xl:w-64"
      >
        {isHovering === animalsName[aniNumber] ? (
          <motion.span
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1.5,
            }}
            className="flex justify-center text-2xl"
          >
            {animalsName[aniNumber]}
          </motion.span>
        ) : (
          animalsImg[aniNumber]
        )}
      </motion.div>
    </>
  );
};

export default HoverCard;
