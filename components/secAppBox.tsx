import { animate, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import CloneList from "./cloneList";

interface ISecAppBox {
  bgColor?: string;
  children: ReactNode;
  name: string;
  descript: string;
}

export default function SecAppBox({
  children,
  bgColor,
  name,
  descript,
}: ISecAppBox) {
  const router = useRouter();
  const onIconClick = () => {
    router.push(`?appName=${name}`, `/cloneCoding/secApps/${name}`, {
      scroll: false,
    });
  };
  return (
    <div className="mx-5 my-2 flex items-center justify-end">
      <motion.div
        whileHover={{
          boxShadow: "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px ",
          scale: 1.25,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-transparent shadow-md "
        style={{
          backgroundColor: bgColor,
        }}
        onClick={onIconClick}
      >
        {children}
      </motion.div>
      <CloneList name={name} descript={descript} />
    </div>
  );
}
