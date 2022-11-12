import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cls } from "../../libs/client/utils";

function Animation3() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("blue");
  const [toggleDirection, setToggleDirection] = useState(1);
  const onBtnClick = () => {
    setClicked((prev) => !prev);
  };
  useEffect(() => {
    if (clicked === true) {
      setColor("orange");
    } else if (clicked === false) {
      setColor("blue");
    }
  }, [onBtnClick]);
  const toggleOn = () => {
    setToggleDirection(toggleDirection === 1 ? 1.25 : 1);
  };
  return (
    <Wrapper className="h-full w-[100%] rounded-xl bg-gradient-to-r from-violet-400 to-fuchsia-500">
      <Grid>
        <Box
          onClick={() => setId("1")}
          layoutId="1"
          whileHover={{ scale: 1.1, originX: [1, 1], originY: [1, 1] }}
          transition={{
            type: "tween",
          }}
          variants={boxVariatns}
          initial="initial"
          animate="visible"
          exit="leaving"
          className="bg-white"
        >
          <div className="ml-5 mb-3 flex h-full w-full flex-col items-start justify-end space-y-2 ">
            <div className="h-4 w-[40%] rounded-sm bg-violet-300 opacity-50 " />
            <div className="h-4 w-[70%] rounded-sm bg-violet-300 opacity-50 " />
            <div className="h-4 w-[60%] rounded-sm bg-violet-300 opacity-50 " />
          </div>
        </Box>
        <Box layoutId="2" className="bg-white">
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box layoutId="3" className="bg-white">
          {clicked ? (
            <Circle
              layoutId="circle"
              style={{ borderRadius: 50, height: "25px", width: "25px" }}
            />
          ) : null}
        </Box>
        <Box
          onClick={() => setId("4")}
          layoutId="4"
          whileHover={{ scale: 1.1, originX: 0, originY: 0 }}
          transition={{
            type: "tween",
          }}
          variants={boxVariatns}
          initial="initial"
          animate="visible"
          exit="leaving"
          className="bg-white"
        >
          <div className="ml-5 mb-3 flex h-full w-full flex-col items-start justify-end space-y-2 ">
            <div className="h-4 w-[40%] rounded-sm bg-violet-300 opacity-50  " />
            <div className="h-4 w-[70%] rounded-sm bg-violet-300 opacity-50  " />
            <div className="h-4 w-[60%] rounded-sm bg-violet-300 opacity-50  " />
          </div>
        </Box>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            className="z-10 "
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
                backgroundColor: "rgba(255, 255, 255, 2)",
                borderRadius: "1rem ",
              }}
            >
              <div className="ml-5 flex h-full w-full flex-col items-start justify-center space-y-2 ">
                <div className="mb-2 mt-12 w-full space-y-2">
                  <div className="h-4 w-[40%] rounded-md bg-violet-300 opacity-50  " />
                  <div className="h-4 w-[90%] rounded-md bg-violet-300 opacity-50  " />
                  <div className="h-4 w-[70%] rounded-md bg-violet-300 opacity-50  " />
                </div>
                <div className="ml-0 h-0.5 w-[95%] bg-violet-300 opacity-50 " />
                <div className="-ml-[0.35rem] flex w-[98%] justify-around space-x-16 ">
                  <div className="mt-2 h-4 w-[18%] rounded-md bg-violet-300 opacity-50  " />
                  <div className="mt-2 h-4 w-[18%] rounded-md bg-violet-300 opacity-50  " />
                  <div className="mt-2 h-4 w-[18%] rounded-md bg-violet-300 opacity-50  " />
                </div>
              </div>
            </Box>
          </Overlay>
        ) : null}
        <br />
        <Button
          onClick={onBtnClick}
          onTap={toggleOn}
          animate={{
            scale: toggleDirection,
          }}
          style={{
            color: color,
          }}
          transition={{
            type: "inertia",
          }}
          className="cursor-pointer"
        >
          Switch
        </Button>
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(2, 2fr);
  width: 10vw;
  grid-gap: 5px;
`;

const Box = styled(motion.div)`
  border-radius: 4px;
  width: 230px;
  height: 120px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin-top: 6px;
  margin-bottom: -3.5px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
`;

const Button = styled(motion.div)`
  width: 50px;
  height: 30px;
  background-color: rgba(255, 255, 255, 255);
  padding: 10px 30px;
  border-radius: 2.5px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  font-size: 14px;
  font-weight: bold;
`;

const Circle = styled(motion.div)`
  background-color: #c7d2fe;
  height: 55px;
  width: 55px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariatns = {
  initial: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  leaving: {
    opacity: 1,
    scale: 0,
  },
};

export default Animation3;
