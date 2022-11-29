/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { motion } from "framer-motion";

interface ISlider {
  xInit: number | string;
  xEnd: number | string;
}
export default function SliderCompo({ xInit, xEnd }: ISlider) {
  return (
    <>
      <motion.div className="relative mx-6 flex">
        {[...Array(10)].map((i, _) => (
          <motion.div
            key={i}
            initial={{ x: xInit, opacity: 1 }}
            animate={{ x: xEnd }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            exit={{ opacity: 0 }}
            className="m-2 mb-3 mt-7 flex h-[4.5rem] w-[4.5rem] rounded-lg bg-red-200"
          >
            {i}{" "}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
