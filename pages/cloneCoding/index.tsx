import type { NextPage } from "next";
import Moment, { now } from "moment";
import Link from "next/link";
import Me from "./image/me.png";
import Image from "next/image";
import FirstApp from "../../components/firstApp";
import SecondApp from "../../components/secApp";
import ThirddApp from "../../components/thirdApp";
import FourthApp from "../../components/fourthApp";
import FifthApp from "../../components/fifthApp";
import { useScroll } from "framer-motion";

const CloneCoding: NextPage = () => {
  const todayIs = Moment().format("MM월 DD일");
  const dateIs = Moment().day();
  const dateList = ["일", "월", "화", "수", "목", "금", "토"];
  const { scrollY } = useScroll();
  return (
    <div className="z-0 grid max-h-[180rem] w-full max-w-full bg-[#ffffffe7] shadow-xl sm:w-full">
      <span className="absolute mx-3 mt-5 flex text-xs opacity-50 xl:ml-14">
        {todayIs} {dateList[dateIs]}요일
      </span>
      <div className="absolute mx-5 mt-8 ml-2 w-full overflow-hidden ">
        <div className="mt-1 flex items-center justify-between xl:ml-11 xl:w-11/12 ">
          <div className="text-3xl font-semibold ">PORTFOLIO</div>
          <Link href={"./cloneCoding/profile"}>
            <div className="mb-3 mr-5 h-16 w-16 cursor-pointer rounded-full xl:mr-0 ">
              <Image
                src={Me}
                alt="profile"
                width={55}
                height={55}
                placeholder="blur"
                className="rounded-full object-fill "
              />
              <span className="-mt-1 mr-2 flex justify-center text-sm ">
                Profile&rarr;
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        <div className="grid grid-flow-row gap-4 sm:mx-20 md:mx-0 md:ml-6 md:grid-cols-2 xl:mx-32 xl:grid-rows-3 xl:space-x-16 xl:space-y-10 ">
          <FirstApp />
          {/*  */}
          <SecondApp />
          {/*  */}
          <ThirddApp />
          {/*  */}
          <FourthApp />
          {/*  */}
          <FifthApp />
        </div>
      </div>
    </div>
  );
};

export default CloneCoding;
// from-[#00FFD1]
// bg-gradient-to-r from-[#B9FFF8] to-[#C3FF99]
