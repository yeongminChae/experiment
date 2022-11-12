import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import * as React from "react";
import { Refresh } from "../refresh";

function Animation4() {
  const [count, setCount] = useState(0);
  return (
    <Wrapper
      key={count}
      className="h-full w-[100%] flex-col rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500"
    >
      <Box
        variants={boxVariants}
        initial="start"
        animate="end"
        className="mt-6"
      >
        <Circle className="bg-white" variants={cicleVariants} />
        <Circle className="bg-white" variants={cicleVariants} />
        <Circle className="bg-white" variants={cicleVariants} />
        <Circle className="bg-white" variants={cicleVariants} />
      </Box>
      <div className="mt-6 flex h-6 w-6 cursor-pointer items-center justify-center border border-red-200 text-white shadow-lg">
        <Refresh onClick={() => setCount(count + 1)} />
      </div>
    </Wrapper>
  );
}

const cicleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};
export default Animation4;
