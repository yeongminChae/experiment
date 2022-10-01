import type { NextPage } from "next";
import Moment, { now } from "moment";

const Home: NextPage = () => {
  const todayIs = Moment().format("MM월 DD일");
  const dateIs = Moment().day();
  const dateList = ["월", "화", "수", "목", "금", "토", "일"];
  return (
    <div className="grid max-h-[180rem] max-w-full">
      <span className="mx-3 mt-5 flex text-xs opacity-50 ">
        {todayIs} {dateList[dateIs]}요일
      </span>
      <div className="mx-5">
        <div className="mt-1 flex items-center justify-between">
          <div className="text-3xl font-semibold">PORTFOLIO</div>
          <div className="h-8 w-8 rounded-full bg-red-300 " />
        </div>
        <div className="mt-3 h-[30rem] w-full rounded-xl shadow-2xl ">
          <div className="h-[25rem] w-full rounded-t-xl bg-indigo-300">
            <div className="ml-5 pt-3 text-white opacity-60 ">
              Editor&apos;s Choices,{" "}
            </div>
            <div className="ml-6 mt-1 text-2xl text-white opacity-90 ">
              This week&apos;s new featured :
            </div>
          </div>
          <div className="my-3 mx-10 flex items-center justify-between bg-[#ffffffe7] ">
            <div className="h-14 w-14 rounded-2xl bg-orange-200 " />
            <div className="h-14 w-14 rounded-2xl bg-orange-300" />
            <div className="h-14 w-14 rounded-2xl bg-orange-400" />
            <div className="h-14 w-14 rounded-2xl bg-orange-500" />
          </div>
        </div>
        <div className="mt-5 h-[26rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl  ">
          <div className="ml-5 pt-3 text-slate-400 opacity-60 ">
            My recomandation for You !
          </div>
          <div className="ml-6 mt-1 text-2xl opacity-90 ">
            Those itesm&apos;s will give differences
          </div>
          <div className="mt-4 flex flex-col items-start justify-start">
            <div className="my-2 ml-6 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-yellow-200" />
              <div className="ml-3 flex items-center justify-start border-b-2 border-dashed ">
                <div className="flex flex-col">
                  <span className="">my work 1</span>
                  <span className="text-sm text-black opacity-50 ">
                    Javascript work work dfsa
                  </span>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center ">
                  <button className=" ml-20 h-8 w-20 rounded-2xl bg-slate-200 opacity-80 ">
                    <span className="text-sm font-bold text-blue-700 ">
                      받기
                    </span>{" "}
                  </button>
                  <span className="ml-20 mt-1 w-16 text-center text-[0.3rem] opacity-50">
                    앱 내 구입
                  </span>
                </div>
              </div>
            </div>
            <div className="my-2 ml-6 flex items-center justify-end ">
              <div className="h-14 w-14 rounded-2xl bg-yellow-300" />
              <div className="ml-3 flex flex-col items-start justify-start border-b-2 border-dashed ">
                <span className="">my work 2</span>
                <span className="text-sm text-black opacity-50">
                  Javascript work NodeJs work
                </span>
              </div>
            </div>
            <div className="my-2 ml-6 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-yellow-400" />
              <div className="ml-3 flex flex-col items-start justify-start border-b-2 border-dashed ">
                <span className="">my work 3</span>
                <span className="text-sm text-black opacity-50">
                  Javascript work NodeJs work
                </span>
              </div>
            </div>
            <div className="my-2 ml-6 flex items-center justify-end">
              <div className="h-14 w-14 rounded-2xl bg-yellow-500" />
              <div className="ml-3 flex flex-col items-start justify-start border-b-2 border-dashed ">
                <span className="">my work 4</span>
                <span className="text-sm text-black opacity-50">
                  Javascript work NodeJs work
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 h-[26rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl ">
          <div></div>
        </div>
        <div className="mt-5 mb-20 h-[26rem] w-full rounded-xl bg-[#ffffffe7] shadow-2xl "></div>
        <span className="flex h-20 w-full items-center justify-center pb-24">
          I made this this clone coding page . Because i got impressed app store
          in iPhone.
        </span>
      </div>
    </div>
  );
};

export default Home;
