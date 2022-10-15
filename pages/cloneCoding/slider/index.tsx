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
