const Recoomend = () => {
  return (
    <div className="rounded-2xl bg-white p-10 shadow-sm lg:col-span-2 xl:col-span-1 ">
      <div className="mb-5 flex items-center justify-between">
        <span>⬅️</span>
        <div className="space-x-3 ">
          <span>⭐️4.9</span>
          <span className="rounded-md p-2 shadow-xl">💖</span>
        </div>
      </div>
      <div className="mb-5 h-72 bg-zinc-400" />
      <div className="flex flex-col">
        <span className="text-xl font-medium">Swoon Lounge</span>
        <span className="text-xs text-gray-500">Chair</span>
        <div className="mt-3 mb-5 flex items-center justify-between">
          <div className="space-x-2">
            <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-300 ring-offset-2 transition focus:ring-2" />
            <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-300 ring-offset-2 transition focus:ring-2" />
            <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-300 ring-offset-2 transition focus:ring-2" />
          </div>
          <div className="flex items-center space-x-5">
            <button className=" aspect-square w-8 items-center justify-between rounded-lg bg-blue-200 text-xl text-gray-500">
              -
            </button>
            <span>1</span>
            <button className=" aspect-square w-8 items-center justify-between rounded-lg bg-blue-200 text-xl text-gray-500">
              +
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-medium">$450</span>
          <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recoomend;
