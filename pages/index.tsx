import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuickViewIndex from "../components/quickViewIndex";
import Image from "next/image";
import IndexTitle from "../components/indexTitle";
import IndexBtn from "../components/indexBtn";
import meIllust from "../pages/cloneCoding/image/meIllust.png";

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
        <div className="h-[46.6rem] w-full bg-gray-900 ">
          <IndexTitle />
        </div>
        <>
          <IndexBtn />
          <div className="absolute bottom-[0.5rem] left-[6.5rem] h-[23rem] w-[23rem] rounded-full ">
            <div className="absolute ml-12 h-80 w-80">
              {/* <Thumbnail /> */}
              <Image
                src={meIllust}
                alt="meilush"
                layout="fill"
                className="bottom-0 object-scale-down"
              />
            </div>
          </div>
        </>
        <div className="-mt-10 flex h-[45rem] w-full items-center justify-center bg-[#FEFBF6] ">
          <QuickViewIndex />
        </div>
      </div>
    )
  );
};

export default Home;
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/MenuToggle.tsx
