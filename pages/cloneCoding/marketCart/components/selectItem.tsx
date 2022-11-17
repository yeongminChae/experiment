import { useEffect, useState } from "react";
import LocalStorage from "../../../../libs/client/utils";

const SelectItem = () => {
  return (
    <div className="flex h-56 w-full flex-col justify-between rounded-2xl bg-white p-6 shadow-xl sm:h-64 md:w-[29rem] xl:w-[25rem]">
      <span className="text-3xl font-semibold ">Select Item</span>
      <ul>
        <div className="my-2 flex justify-between  ">
          <span className="text-gray-500 ">Grey Chair</span>
          <span className=" font-semibold">$19</span>
        </div>
      </ul>
      <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
        <span>Total</span>
        <span className=" font-semibold">$99</span>
      </div>
      <button className="mx-auto mt-5 flex w-2/4 flex-col items-center justify-center rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500 hover:text-black focus:bg-red-500 active:bg-yellow-400 lg:w-4/5 xl:w-2/4 ">
        Check Out
      </button>
    </div>
  );
};

export default SelectItem;
