import { motion } from "framer-motion";
import { useRouter } from "next/router";
import SecAppModal from "./secAppModal";

interface ICloneList {
  name: string;
  descript: string;
}

export default function CloneList({ name, descript }: ICloneList) {
  const router = useRouter();
  const onBoxClick = () => {
    router.push(`?appName=${name}`, `/cloneCoding/secApps/${name}`, {
      scroll: false,
    });
  };
  return (
    <div className="mx-auto max-w-full overflow-hidden rounded-xl bg-white shadow-md md:mt-2 md:w-[20rem] ">
      <div className="mr-auto flex w-full items-center justify-center md:flex ">
        <div className="mx-4 mb-2 flex h-16 w-32 flex-col items-start justify-start py-2 sm:w-52 sm:justify-center">
          <div className="text-sm font-semibold uppercase tracking-tighter text-indigo-500">
            {name} clone
          </div>
          <div className="mt-1 block text-xs font-medium leading-tight text-black hover:underline">
            {descript}
          </div>
        </div>
        <motion.div
          layoutId={name}
          className="mx-auto mt-3 mr-7 flex w-1/3 flex-col items-center justify-start"
        >
          <motion.button
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
              backgroundColor: "rgb(148 163 184)",
            }}
            onClick={onBoxClick}
            className="ml-16 h-8 w-20 rounded-2xl bg-slate-200 opacity-80 "
          >
            <span className="text-sm font-bold text-blue-700 ">받기</span>{" "}
          </motion.button>
          <span className="mt-1 ml-16 w-16 text-center text-[0.3rem] opacity-50">
            앱 내 구입
          </span>
        </motion.div>
      </div>
    </div>
  );
}
