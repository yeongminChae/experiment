import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Ifloat {
  href?: string;
  children: React.ReactNode;
}

export default function FloatingBtn({ children, href }: Ifloat) {
  return (
    <motion.div className="">
      <Link href={href}>
        <a className="fixed bottom-8 right-5 cursor-pointer rounded-full bg-indigo-500 p-4 text-white shadow-xl transition-colors hover:bg-indigo-400">
          {children}
        </a>
      </Link>
    </motion.div>
  );
}
