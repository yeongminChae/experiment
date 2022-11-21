import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { animate, motion, useAnimation } from "framer-motion";
import QuickViewIndex from "../components/quickViewIndex";

export const sleep = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="h-[89rem] w-full">
        <div className="h-[46.6rem] w-full bg-[#0c0511] ">
          <span className="text-white">PORTFOLIO</span>
        </div>
        <div className="-mt-10 flex h-[45rem] w-full items-center justify-center bg-[#FEFBF6] ">
          <QuickViewIndex />
        </div>
      </div>
    )
  );
};

export default Home;
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/MenuToggle.tsx
