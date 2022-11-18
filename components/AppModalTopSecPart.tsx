import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import twitterAppImg1 from "../pages/cloneCoding/image/twitterApp/twitterAppImg1.png";
import twitterAppImg2 from "../pages/cloneCoding/image/twitterApp/twitterAppImg2.png";
import twitterAppImg3 from "../pages/cloneCoding/image/twitterApp/twitterAppImg3.png";
import twitterAppImg4 from "../pages/cloneCoding/image/twitterApp/twitterAppImg4.png";
import twitterAppImg5 from "../pages/cloneCoding/image/twitterApp/twitterAppImg5.png";
import coinAppImg1 from "../pages/cloneCoding/image/coinApp/coinAppImg1.png";
import coinAppImg2 from "../pages/cloneCoding/image/coinApp/coinAppImg2.png";
import coinAppImg3 from "../pages/cloneCoding/image/coinApp/coinAppImg3.png";
import coinAppImg4 from "../pages/cloneCoding/image/coinApp/coinAppImg4.png";
import coinAppImg5 from "../pages/cloneCoding/image/coinApp/coinAppImg5.png";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AppModalTopSecPart() {
  const router = useRouter();
  const [index, setIndex] = useState(1);
  const [back, setBack] = useState(false);
  const [image, setImage] = useState<StaticImageData>();
  const [key, setKey] = useState("");
  const currentLoca = router.asPath.split("/");
  const total5 = 5;
  const onNextclick = () => {
    setBack(false);
    setIndex((prev) => (prev === total5 ? total5 : prev + 1));
  };
  const onPrevclick = () => {
    setBack(true);
    setIndex((prev) => (prev == 1 ? 1 : prev - 1));
  };
  const customValue = {
    direction: back,
  };
  const currentNum = () => {
    return (
      <div>
        {index} / {total5}
      </div>
    );
  };
  useEffect(() => {
    if (index === 1) {
      if (currentLoca[3] === "Twitter") {
        setImage(twitterAppImg1);
      } else if (currentLoca[3] === "CoinsTracker") {
        setImage(coinAppImg1);
      }
      setKey(index + "");
    } else if (index === 2) {
      if (currentLoca[3] === "Twitter") {
        setImage(twitterAppImg2);
      } else if (currentLoca[3] === "CoinsTracker") {
        setImage(coinAppImg2);
      }
      setKey(index + "");
    } else if (index === 3) {
      if (currentLoca[3] === "Twitter") {
        setImage(twitterAppImg3);
      } else if (currentLoca[3] === "CoinsTracker") {
        setImage(coinAppImg3);
      }
      setKey(index + "");
    } else if (index === 4) {
      if (currentLoca[3] === "Twitter") {
        setImage(twitterAppImg4);
      } else if (currentLoca[3] === "CoinsTracker") {
        setImage(coinAppImg4);
      }
      setKey(index + "");
    } else if (index === 5) {
      if (currentLoca[3] === "Twitter") {
        setImage(twitterAppImg5);
      } else if (currentLoca[3] === "CoinsTracker") {
        setImage(coinAppImg5);
      }
      setKey(index + "");
    }
  }, [index, image, setImage]);
  return (
    <TopPart className="ml-[5.3rem] mt-5 flex justify-between outline-none">
      <AnimatePresence mode="popLayout" custom={customValue.direction}>
        <motion.div
          whileHover={{ scale: 1.3, originX: 1, originY: 0.5 }}
          onClick={onPrevclick}
          key="prev"
          className="absolute left-2 mt-52 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-4 w-4 "
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </motion.div>
        <motion.div
          whileHover={{ scaleX: 1.25, scaleY: 1.05 }}
          className="absolute ml-9 h-[25rem] w-[30%] snap-x sm:ml-14 sm:w-[45%] md:ml-[4.5rem] lg:ml-16 xl:ml-20 "
        >
          {image && (
            <Image
              src={image}
              alt="AppImg"
              key={key}
              layout="fill"
              placeholder="blur"
              quality={100}
              onClick={() => window.open(image.src)}
              className="cursor-pointer snap-center overflow-hidden rounded-[15%] object-cover shadow-lg ease-out"
            />
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, originX: 1, originY: 0.5 }}
          onClick={onNextclick}
          key="next"
          className="absolute right-[20rem] mt-52 cursor-pointer sm:right-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512 "
            className="h-4 w-4 "
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-[1.1rem] ml-[13rem] ">{currentNum()}</div>
    </TopPart>
  );
}

const TopPart = styled(motion.div)`
  /* background-image: linear-gradient(to top, white, transparent); */
`;
