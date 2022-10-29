const SelectItem = () => {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-400 2xl:bg-pink-400">
      <span className="text-3xl font-semibold ">Select Item</span>
      <ul>
        <div className="my-2 flex justify-between  ">
          <span className="text-gray-500 ">Grey Chair</span>
          <span className=" font-semibold">$19</span>
        </div>
      </ul>
      {/* <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className=" py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul> */}
      <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
        <span>Total</span>
        <span className=" font-semibold">$99</span>
      </div>
      <button className="mx-auto mt-5 flex w-2/4 flex-col items-center justify-center rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500 hover:text-black focus:bg-red-500 active:bg-yellow-400 ">
        Check Out
      </button>
    </div>
  );
};

export default SelectItem;
