import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import LoginForm from "../components/loginForm";
import Profile from "../components/profile";
import Recoomend from "../components/recommend";
import SelectItem from "../components/selectItem";

const PersonalCart: NextPage = () => {
  return (
    <div className="dark grid min-h-screen gap-10 bg-slate-300 py-20 px-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center ">
      <Link href={"/cloneCoding/marketCart"}>
        <div className="-my-8 cursor-pointer">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
              scale: 1.5,
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </motion.svg>
        </div>
      </Link>
      <LoginForm />
      <Profile />
      <SelectItem />
      <Recoomend />
    </div>
  );
};
// more tailwind tip : how to do a personal setting, text-[97851px] , text-[#0000] , bg-[url("/image.svg")]
export default PersonalCart;
