import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cls } from "../../libs/client/utils";

function Animation2() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("blue");
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
  const [toggleDirection, setToggleDirection] = useState(1);
  const toggleOn = () => {
    setToggleDirection(toggleDirection === 1 ? 1.25 : 1);
  };
  return (
    <Wrapper>
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
        ></Box>
        <Box layoutId="2">
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box layoutId="3">
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
        ></Box>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            className="z-10"
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
                backgroundColor: "rgba(255, 255, 255, 2)",
              }}
            />
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
          className="cursor-pointer "
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
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  width: 230px;
  height: 120px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin-top: 8px;
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
  background-color: whitesmoke;
  height: 50px;
  width: 50px;
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

export default Animation2;
