import { NextPage } from "next";
import Link from "next/link";

const Slider: NextPage = () => {
  return (
    <div>
      <div className="h-[100vh] w-full">
        <div className="h-[20vh] w-full bg-[#FFDE00] " />
        <div className="h-[20vh] w-full bg-[#FCE700] " />
        <div className="h-[20vh] w-full bg-[#FFFF00] " />
        <div className="h-[20vh] w-full bg-[#FBDF07] " />
        <div className="h-[20vh] w-full bg-[#FFEA11] " />
        <Link href="/cloneCoding/slider/wordCorrect/ ">
          <div>click me</div>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
// animate={{
//   scale: [1, 2, 2, 1, 1],
//   rotate: [0, 0, 180, 180, 0],
//   borderRadius: ["0%", "0%", "50%", "50%", "0%"]
// }}
// transition={{
//   duration: 2,
//   ease: "easeInOut",
//   times: [0, 0.2, 0.5, 0.8, 1],
//   repeat: Infinity,
//   repeatDelay: 1
// }}
