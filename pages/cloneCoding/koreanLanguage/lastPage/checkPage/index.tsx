import { NextPage } from "next";
import LocalStorage from "../../../../../libs/client/utils";

const CheckPage: NextPage = () => {
  const resultCount = LocalStorage.getItem("Quiz_result");
  let correctAnss = [];
  for (let i = 0; i++; i <= 10) {
    console.log(LocalStorage.getItem(`correctAns0`));
  }
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-tl from-purple-600 to-pink-600">
      <div> This is your Score : {resultCount} / 10 </div>
    </div>
  );
};

export default CheckPage;
