import type { NextPage } from "next";
import { motion } from "framer-motion";
import Thumbnail from "../components/thumbnail";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-[150rem] w-full">
      <div className="h-[50rem] w-full bg-black"></div>
      <div className="h-[50rem] w-full bg-[#FEFBF6] "></div>
    </div>
  );
};

export default Home;
