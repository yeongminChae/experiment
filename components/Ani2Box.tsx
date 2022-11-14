import { useRef } from "react";
import { motion } from "framer-motion";
import { useState, RefObject, useEffect } from "react";
import { element } from "prop-types";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      const x = clientX - element.offsetLeft;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      console.log(`x ${x} `);
      console.log(`y ${y} `);
      console.log(`element.offsetWidth ${element.offsetWidth} `);
      console.log(`element.offsetHeight ${element.offsetHeight} `);
      setPoint({ x, y });
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);
  return point;
}
export default function Ani2Box() {
  const ref = useRef();
  const { x, y } = useFollowPointer(ref);

  return (
    <div ref={ref} className="h-full w-full rounded-xl bg-black">
      <motion.div
        className="absolute -bottom-[120rem] md:-bottom-[50rem] xl:bottom-[15rem] xl:-left-[22.5rem] "
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#ff0066",
        }}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </div>
  );
}
