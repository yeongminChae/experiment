import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

function Animation5() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 400], [-180, 180]);
  const gradient = useTransform(
    x,
    [-600, 0, 600],
    [
      "linear-gradient(135deg,rgb(0, 238, 214),rgb(18, 70, 240))",
      "linear-gradient(135deg,rgb(115, 231, 121),rgb(237, 233, 16))",
      "linear-gradient(135deg,rgb(238,0,153),rgb(221,0,238))",
    ]
  );
  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <Wrapper
      style={{ background: gradient, scaleX: scrollYProgress }}
      className="overflow-y-scroll rounded-xl"
    >
      <span className="mt-10 flex w-full justify-center">Scroll Me</span>
      <div className="flex h-[80vh] items-center justify-center">
        <Box
          style={{ x, rotateZ, scale }}
          drag="x"
          dragSnapToOrigin
          className="mb-16 flex items-center justify-center"
        >
          <span className="text-xs ">Click Me</span>
        </Box>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default Animation5;
