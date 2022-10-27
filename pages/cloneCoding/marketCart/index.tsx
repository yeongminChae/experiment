import type { NextPage } from "next";
import LoginForm from "./components/loginForm";
import Profile from "./components/profile";
import Recoomend from "./components/recommend";
import SelectItem from "./components/seelctItem";

const MarketCart: NextPage = () => {
  return (
    <div className="dark grid min-h-screen gap-10 bg-slate-300 py-20 px-10 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center ">
      <Profile />
      <SelectItem />
      <Recoomend />
      <LoginForm />
    </div>
  );
};
// more tailwind tip : how to do a personal setting, text-[97851px] , text-[#0000] , bg-[url("/image.svg")]
export default MarketCart;
