import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";

const svgVars = {
  start: { pathLength: 0, opacity: 0 },
  end: {
    opacity: 1,
    fill: "white",
    pathLength: 1,
    boxShadow: "10px 10px 8px rgb(255,255,255) ",
  },
  whileHover: {
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    fill: "black",
  },
};

const exitVars = {
  start: { pathLength: 0, opacity: 0 },
  end: {
    opacity: 1,
    fill: "white",
    pathLength: 1,
    boxShadow: "10px 10px 8px rgb(255,255,255) ",
  },
  whileHover: {
    textShadow: "0px 0px 8px rgb(255,255,255) ",
    color: "#562B08",
  },
};

const menuBox = {
  start: {
    opacity: 1,
    x: [-10, 0, 0],
  },
  end: {
    opacity: 0,
    x: [100, 100, 100],
    transition: { duration: 5 },
  },
};

const Home: NextPage = () => {
  return (
    <motion.div
      variants={menuBox}
      initial="start"
      animate="stop"
      className="h-screen w-screen overflow-x-hidden bg-[#af7732] pt-4"
    >
      <div className="flex items-center justify-between">
        <span className="ml-48 w-1/2 text-xl text-white ">
          <motion.svg
            variants={svgVars}
            initial="start"
            animate="end"
            whileHover="whileHover"
            transition={{
              default: { duration: 3 },
              fill: { duration: 3, delay: 3 },
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="h-6 w-6 stroke-black stroke-2 "
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </motion.svg>{" "}
        </span>
        <motion.span
          variants={exitVars}
          whileHover="whileHover"
          className="-mr-[475px] w-1/2 text-xl text-white "
        >
          <Link href={"../10x19"}>CLOSE</Link>
        </motion.span>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Home;
