import Link from "next/link";
import React from "react";

interface Ifloat {
  href: string;
  children: React.ReactNode;
}

export default function FloatingBtn({ children, href }: Ifloat) {
  return (
    <div className="">
      <Link href={href}>
        <a className="fixed bottom-8 right-5 cursor-pointer rounded-full bg-indigo-500 p-4 text-white shadow-xl transition-colors hover:bg-indigo-400">
          {children}
        </a>
      </Link>
      <div className="fixed bottom-[69px] right-5 h-6 w-6 cursor-pointer rounded-full bg-lime-300 transition-colors">
        <span className="mx-1 flex items-center justify-center text-sm text-black/60">
          1
        </span>
      </div>
    </div>
  );
}
