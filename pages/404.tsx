/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ParamProps {
  children?: ReactNode;
}
export default function Custom404({ children }: ParamProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/cloneCoding");
  };
  return (
    <>
      <div className="flex h-[100vh] w-[100vw] items-center justify-center">
        {" "}
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span>Sorry error happened...</span>
          <button onClick={onClick}>Redirect to Home</button>
          {/* <div>Can u find this page in here? {toHome} </div> */}
        </div>
      </div>{" "}
    </>
  );
}
