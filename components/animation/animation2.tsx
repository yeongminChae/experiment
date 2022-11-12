import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../use-follow-pointer";
import { element } from "prop-types";

export default function Animation2() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
    const element = ref.current!;
    const x = clientX - element.offsetLeft - element.offsetWidth / 2;
    const y = clientY - element.offsetTop - element.offsetHeight / 2;
    setPoint({ x, y });
    return point;
  };
  useEffect(() => {
    if (!ref.current) return;
    // const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
    //   const element = ref.current!;
    //   const x = clientX - element.offsetLeft - element.offsetWidth / 2;
    //   const y = clientY - element.offsetTop - element.offsetHeight / 2;
    //   setPoint({ x, y });
    // };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove]);
  return (
    <div className="flex h-full w-[100%] items-center justify-center rounded-xl bg-black">
      <motion.div className="absolute">
        <motion.div
          ref={ref}
          animate={{ x: point.x, y: point.y }}
          transition={{
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
          }}
          className="h-16 w-16 rounded-[50%] bg-[#ff0066]"
        ></motion.div>
      </motion.div>
    </div>
  );
}
