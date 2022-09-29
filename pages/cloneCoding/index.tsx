import type { NextPage } from "next";
import Moment, { now } from "moment";

const Home: NextPage = () => {
  const todayIs = Moment().format("MM월 DD일");
  const dateIs = Moment().day();
  const dateList = ["월", "화", "수", "목", "금", "토", "일"];
  return (
    <div className="">
      <span className="mx-3 mt-5 flex text-xs opacity-50 ">
        {todayIs} {dateList[dateIs]}요일
      </span>
      <div className="mx-5">
        <div className="mt-1 flex items-center justify-between">
          <div className="text-3xl font-semibold">PORTFOLIO</div>
          <div className="h-8 w-8 rounded-full bg-red-300 " />
        </div>
        <div className="mt-3 h-96 w-full rounded-xl bg-indigo-300 shadow-2xl ">
          <div>first work. this is smth</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
