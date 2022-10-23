import type { NextPage } from "next";
import Moment, { now } from "moment";
import Link from "next/link";
import SliderCompo from "../../components/sliderCompo";
import Me from "./image/me.png";
import Image from "next/image";
import FirstApp from "../../components/firstApp";
import SecondApp from "../../components/secApp";
import ThirddApp from "../../components/thirdApp";
import ForthApp from "../../components/fortsApp";

const CloneCoding: NextPage = () => {
  const todayIs = Moment().format("MM월 DD일");
  const dateIs = Moment().day();
  const dateList = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div className="z-0 grid max-h-[180rem] w-full max-w-full bg-[#ffffffe7] shadow-xl sm:w-full ">
      <span className="absolute mx-3 mt-5 flex text-xs opacity-50">
        {todayIs} {dateList[dateIs]}요일
      </span>
      <div className="absolute mx-5 mt-8 w-full overflow-hidden">
        <div className="mt-1 flex items-center justify-between">
          <div className="text-3xl font-semibold">PORTFOLIO</div>
          <Link href={"./cloneCoding/profile"}>
            <div className="mb-3 mr-5 h-16 w-16 cursor-pointer rounded-full ">
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
        <div className="grid grid-flow-row sm:mx-20 ">
          <FirstApp />
          {/*  */}
          <SecondApp />
          {/*  */}
          <ThirddApp />
          {/*  */}
          <ForthApp />
          {/*  */}
          <div className="mb-20 ml-0 h-[25rem] w-11/12 rounded-xl bg-[#ffffffe7] shadow-2xl ">
            <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
              Yeongmin&apos;s Collection
            </div>
            <div className="ml-6 mt-1 text-2xl opacity-90 ">
              So far , I made them All !
            </div>
            <div className="absolute overflow-hidden">
              <div className="flex ">
                <SliderCompo xInit={"300%"} xEnd={"-1700%"} />
              </div>
              <div className="flex ">
                <SliderCompo xInit={"500%"} xEnd={"-1500%"} />
              </div>
              <div className="flex ">
                <SliderCompo xInit={"700%"} xEnd={"-1300%"} />
              </div>
            </div>
          </div>{" "}
        </div>
        {/* <span className="flex h-20 w-full items-center justify-center pb-24">
          I made this this clone coding page . Because i got impressed app store
          in iPhone.
        </span> */}
      </div>
    </div>
  );
};

export default CloneCoding;
// from-[#00FFD1]
// from-[#B9FFF8] to-[#C3FF99]
// bg-gradient-to-r from-[#B9FFF8] to-[#C3FF99]
