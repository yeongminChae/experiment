import { NextPage } from "next";
import LocalStorage from "../../../../../libs/client/utils";
import { motion } from "framer-motion";

const CheckPage: NextPage = () => {
  const resultCount = LocalStorage.getItem("Quiz_result");
  const ansOutput = LocalStorage.getItem("ansCount");
  const failOutput = LocalStorage.getItem("failCount");
  const ansResult = JSON.parse(ansOutput);
  const failResult = JSON.parse(failOutput);
  console.log("ansResult");
  console.log(ansResult);
  console.log("failResult");
  console.log(failResult);
  for (let i = 0; i++; i <= 10) {
    console.log(LocalStorage.getItem(`correctAns0`));
  }
  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-purple-600 to-pink-600">
      <motion.div className="ml-3 pt-3 hover:text-clip">
        &larr; GO BACK ?
      </motion.div>
      <div>
        <div> This is your Score : {resultCount} / 10 </div>
      </div>
    </div>
  );
};

export default CheckPage;
