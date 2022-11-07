import { NextPage } from "next";
import LocalStorage from "../../../../../libs/client/utils";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface IAnsPage {
  children?: ReactNode | JSX.Element | JSX.Element[];
}

const CheckPage: NextPage = ({ children }: IAnsPage) => {
  const [resultOutput, setResultOutput] = useState("");
  const [ansUseResult, setAnsUseResult] = useState("");
  const [failUseResult, setFailUseResult] = useState("");
  const resultCount = LocalStorage.getItem("Quiz_result");
  const ansOutput = LocalStorage.getItem("ansCount");
  const failOutput = LocalStorage.getItem("failCount");
  const ansResult = JSON.parse(ansOutput);
  const failResult = JSON.parse(failOutput);
  useEffect(() => {
    setResultOutput(resultCount);
  }, []);
  useEffect(() => {
    setAnsUseResult(ansResult);
  }, []);
  useEffect(() => {
    setFailUseResult(failResult);
  }, []);
  const ansNames: any = ansUseResult
    .toString()
    .split(",")
    .map((i) => <span key={i}>{i} </span>);
  const failNames: any = failUseResult
    .toString()
    .split(",")
    .map((i) => <span key={i}>{i} </span>);

  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-purple-600 to-pink-600">
      <motion.div className="ml-3 pt-3 ">&larr; GO BACK ?</motion.div>
      <div className="mt-20 flex w-full flex-col items-center justify-center space-y-4">
        <span className="flex w-72 justify-center">
          {" "}
          This is your Score : {resultOutput} / 10{" "}
        </span>
        <div className="flex w-72 flex-col justify-center">
          <span>Right Answers Board &rarr; </span>
          <div className="gap-4 space-x-3 "> {ansNames} </div>
        </div>
        <div className="flex w-72 flex-col justify-center">
          <span>Wrong Answers Board : </span>
          <div className="gap-4 space-x-3 ">{failNames} </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
