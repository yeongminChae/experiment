import { ComponentProps, useState } from "react";

const LoginForm = () => {
  const [userInput, setUserInput] = useState("");
  const [login, setLogin] = useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("username", event.target.value);
    }
    setUserInput(event.target.value);
  };
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
  if (typeof window !== "undefined") {
    console.log(localStorage.getItem("username"));
  }
  return (
    <div className="mb-5">
      {login ? (
        <form className="flex flex-col space-y-2 rounded-2xl bg-white px-5 py-8 shadow-md focus-within:bg-blue-100">
          <div className="flex flex-col items-center justify-between">
            <div className="flex w-full justify-around shadow-inner">
              HI !{" "}
              <span className="mb-3 text-xl font-bold text-yellow-500 hover:underline hover:underline-offset-2	 ">
                {userInput}{" "}
              </span>
              👋🏻 How Are You Today??
            </div>
            <div
              onClick={onLogOutBtn}
              className="flex h-8 w-56 items-center justify-center rounded-md bg-[#4ade80] shadow-md hover:bg-lime-400 hover:text-white"
            >
              <span className="mr-1">❎</span>
              <span className="text-black/60">Log Out </span>
            </div>
          </div>
        </form>
      ) : (
        <form className="flex flex-col space-y-2 rounded-2xl bg-white p-8 shadow-md focus-within:bg-blue-100">
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
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="login"
              onClick={onClickSubmit}
              className="h-8 w-56 cursor-pointer justify-center rounded-xl bg-indigo-300 hover:bg-indigo-400"
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
