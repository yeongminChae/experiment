import { motion } from "framer-motion";

const ProfileMenuBar = () => {
  return (
    <div className="-ml-3 mt-[0.01rem] flex w-[31rem] border-t transition-colors duration-200 ease-in-out sm:ml-24 md:ml-32 md:w-[41rem] lg:ml-44 xl:ml-[22rem] xl:w-[40rem]">
      <div className="grid h-[60vh] w-full grid-flow-row grid-cols-3 grid-rows-3 md:h-[80vh] ">
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: 105,
            y: 95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="mr-[0.05rem] bg-red-300"
        >
          1
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: 105,
            y: 95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className=" bg-red-300"
        >
          2
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: -105,
            y: 95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="ml-[0.05rem] bg-red-300"
        >
          3
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: 105,
            y: 95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="mt-[0.05rem] mr-[0.05rem] bg-violet-300"
        >
          4
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            // x: 105,
            // y: 95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="mt-[0.05rem] bg-violet-300"
        >
          5
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: -105,
            y: 95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="mt-[0.05rem] ml-[0.05rem] bg-violet-300"
        >
          6
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: 105,
            y: -95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="mt-[0.05rem] mr-[0.05rem] bg-violet-300"
        >
          7
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: 105,
            y: -95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="mt-[0.05rem] mr-[0.01rem] bg-violet-300"
        >
          8
        </motion.div>
        <motion.div
          whileHover={{
            boxShadow: "0px 0px 8px rgb(255,255,255) ",
            scale: 2,
            x: -105,
            y: -95,
            transition: {
              delay: 0.3,
              type: "tween",
            },
          }}
          className="mt-[0.05rem] ml-[0.01rem] bg-violet-300"
        >
          9
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileMenuBar;
