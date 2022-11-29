import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import LoginForm from "../components/loginForm";
import Profile from "../components/profile";
import Recoomend from "../components/recommend";
import SelectItem from "../components/selectItem";
import RecomImage from "../Images/chair1.png";

const PersonalCart: NextPage = () => {
  const router = useRouter();
  const onHomeClick = () => {
    router.push("/cloneCoding/marketCart");
  };
  return (
    <div className="grid min-h-screen gap-y-14 bg-slate-300 py-16 px-6 sm:grid-cols-1 md:place-content-center md:px-0 ">
      <div className="-my-8 md:pl-3 lg:pl-10 ">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={onHomeClick}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6 cursor-pointer "
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
      <div className="grid h-full w-full space-y-10 sm:justify-center md:grid-cols-2 md:space-y-0 md:space-x-2 lg:space-x-10 xl:grid-cols-3 ">
        <LoginForm />
        <Profile />
        <SelectItem />
        <Recoomend
          page="Recommend"
          grade={4.9}
          name="Swoon Chair"
          cate="Chair"
          price={450}
          Images={RecomImage}
        />
      </div>
    </div>
  );
};
// more tailwind tip : how to do a personal setting, text-[97851px] , text-[#0000] , bg-[url("/image.svg")]
export default PersonalCart;
