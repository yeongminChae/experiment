/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";

const LoginForm = () => {
  const [userInput, setUserInput] = useState("");
  const [login, setLogin] = useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const userName = event.target.value;
    if (typeof window !== "undefined") {
      localStorage.setItem("username", userName);
    }
    setUserInput(event.target.value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickSubmit = (event: any) => {
    event.preventDefault();
    if (userInput !== "") {
      setLogin((prev) => !prev);
    } else if (userInput === "") {
      alert("Please Input your form");
    }
  };
  const onLogOutBtn = () => {
    setLogin((prev) => !prev);
  };
  return (
    <div className="-mb-1 -mt-5 md:mt-0.5 md:mb-4 md:ml-2 lg:ml-10">
      {login ? (
        <form className="flex h-56 flex-col justify-center space-y-3 rounded-2xl bg-white/80 px-5 py-8 shadow-md focus-within:bg-blue-100 md:h-64 md:w-[29rem] xl:w-[25rem] ">
          <div className="flex flex-col items-center justify-between">
            <div className="flex w-full items-center justify-around rounded-lg bg-white shadow-inner">
              HI !{" "}
              <span className="mt-1 justify-center pb-2 text-xl font-bold text-yellow-500 hover:underline hover:underline-offset-2	 ">
                {userInput}{" "}
              </span>
              👋🏻 How Are You Today??
            </div>
            <div
              onClick={onLogOutBtn}
              className="mt-7 flex h-11 w-56 items-center justify-center rounded-lg bg-[#4ade80] shadow-md hover:bg-lime-400 hover:text-white sm:w-80"
            >
              <span className="mr-1">❎</span>
              <span className="text-black/60">Log Out </span>
            </div>
          </div>
        </form>
      ) : (
        <form className="flex h-56 flex-col justify-center space-y-3 rounded-2xl bg-white p-8 shadow-md focus-within:bg-blue-100 sm:h-60 md:h-64 md:w-[29rem] xl:w-[25rem] ">
          <input
            type="text"
            required
            placeholder="Username"
            onChange={handleChange}
            className="peer rounded-md border border-gray-400 p-1"
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            This input is invalid.
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">
            Awesome username.
          </span>
          <div className="flex items-center justify-center ">
            <input
              type="submit"
              value="login"
              onClick={onClickSubmit}
              className="h-11 w-56 cursor-pointer justify-center rounded-xl bg-indigo-300 shadow-lg hover:bg-indigo-400 sm:w-80 "
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
{
  /* <span className="hidden peer-hover:block peer-hover:text-amber-500">
  Hello
</span> */
}
