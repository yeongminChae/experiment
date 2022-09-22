import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-300 dark py-20 px-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen xl:place-content-center ">
      <div className="flex flex-col justify-between bg-white sm:hover:bg-pink-500 sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-400 2xl:bg-pink-400 p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl ">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 odd:bg-blue-200 even:bg-yellow-200 "
              // className="flex justify-between my-2 first:bg-blue-50 last:bg-blue-50 only:bg-red-400"
            >
              <span className="text-gray-500 ">Grey Chair</span>
              <span className=" font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-500 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>
        {/* <div className="flex justify-between mb-2">
          <span className="text-gray-500">Tooly Table</span>
          <span className=" font-semibold">$80</span>
        </div> */}
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className=" font-semibold">$99</span>
        </div>
        <button className="flex flex-col justify-center items-center mt-5 bg-blue-500 text-white p-3 text-center rounded-xl mx-auto w-2/4 hover:bg-teal-500 hover:text-black active:bg-yellow-400 focus:bg-red-500 ">
          Check Out
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-40 landscape:bg-teal-500 portrait:bg-indigo-500 ">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white ">
          <div className="flex justify-between items-end relative -top-16 ">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-300 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New york , USA </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-sm lg:col-span-2 xl:col-span-1 ">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3 ">
            <span>⭐️4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-300 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-300 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-300 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" bg-blue-200 justify-between items-center aspect-square w-8 text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className=" bg-blue-200 justify-between items-center aspect-square w-8 text-xl text-gray-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center text-xs text-white rounded-lg py-2 px-8">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* <form className="flex flex-col space-y-2 bg-blue-500 p-8 rounded-2xl shadow-s focus-within:bg-blue-300"> */}
      <form className="flex flex-col space-y-2 p-8 rounded-2xl shadow-s bg-white focus-within:bg-blue-100">
        <input
          type="text"
          required
          // disabled
          placeholder="Username"
          // className="required:border-2 border-yellow-500 "
          // className="invalid:bg-red-500"
          // className="placeholder-shown:bg-teal-500 placeholder:text-red-500"
          // className="disabled:opacity-0"
          // className="required:bg-yellow-400 invalid:bg-red-500 valid:bg-teal-500"
          className="border p-1 peer border-gray-400 rounded-md"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid.
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username.
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="login" className="bg-white" />
      </form>
    </div>
  );
};
// more tailwind tip : how to do a personal setting, text-[97851px] , text-[#0000] , bg-[url("/image.svg")]
export default Home;
