import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import koreanAppImg1 from "../pages/cloneCoding/image/koreanApp/koreanAppImg1.png";
import koreanAppImg2 from "../pages/cloneCoding/image/koreanApp/koreanAppImg2.png";
import koreanAppImg3 from "../pages/cloneCoding/image/koreanApp/koreanAppImg3.png";
import koreanAppImg4 from "../pages/cloneCoding/image/koreanApp/koreanAppImg4.png";
import koreanAppImg5 from "../pages/cloneCoding/image/koreanApp/koreanAppImg5.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AppModalTopPart() {
  const router = useRouter();
  const [index, setIndex] = useState(1);
  const [back, setBack] = useState(false);
  const [image, setImage] = useState<StaticImageData>();
  const onNextclick = () => {
    setBack(false);
    setIndex((prev) => (prev === 5 ? 5 : prev + 1));
  };
  const onPrevclick = () => {
    setBack(true);
    setIndex((prev) => (prev == 1 ? 1 : prev - 1));
  };
  const customValue = {
    direction: back,
  };
  useEffect(() => {
    if (index === 1) {
      setImage(koreanAppImg1);
    } else if (index === 2) {
      setImage(koreanAppImg2);
    } else if (index === 3) {
      setImage(koreanAppImg3);
    } else if (index === 4) {
      setImage(koreanAppImg4);
    } else if (index === 5) {
      setImage(koreanAppImg5);
    }
  }, [index]);
  return (
    <TopPart className="ml-[1.7rem] mt-5 flex justify-between outline-none">
      <AnimatePresence mode="wait" custom={customValue.direction}>
        <motion.div
          whileHover={{ scale: 1.3, originX: 1, originY: 0.5 }}
          onClick={onPrevclick}
          className="absolute left-2 mt-20 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-4 w-4 "
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </motion.div>
        <div className="absolute h-48 w-[54%] snap-x ">
          {
            <Image
              src={image}
              alt="koreanAppImg"
              layout="fill"
              placeholder="blur"
              className="snap-center overflow-hidden rounded-3xl object-cover"
            />
          }
        </div>
        <motion.div
          whileHover={{ scale: 1.3, originX: 1, originY: 0.5 }}
          onClick={onNextclick}
          className="absolute right-[20rem] mt-20 cursor-pointer sm:right-2 "
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
    </TopPart>
  );
}

const TopPart = styled(motion.div)`
  /* background-image: linear-gradient(to top, white, transparent); */
`;
