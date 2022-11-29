/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState, SetStateAction } from "react";
import styled from "styled-components";
import FirstAppBox from "./firstAppBox";
import { IToParent } from "./indexExtraWrap";
import KoreaFlag from "./koreaFlag";

export default function IndexWrapper2({ setSharedParent }: IToParent) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [sharedState, setSharedState] = useState<SetStateAction<string>>();
  useEffect(() => {
    setSharedParent(sharedState);
  }, [setSharedParent, setSharedParent, sharedState]);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <>
        <AnimatePresence>
          <Wrapper2 className="flex w-full flex-col items-center">
            <WrapPart4 className="mt-14 flex items-center justify-between space-x-[30rem] ">
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Netflix"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/secApps/Netflix`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  className="h-5 w-12 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  strokeWidth={50}
                >
                  <path d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z" />
                </svg>
              </FirstAppBox>
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Twitter"
                bgColor="#eab308"
                clicked={() =>
                  router.push(`/cloneCoding/secApps/Twitter`, undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#3C4048"
                  className="h-7 w-9 "
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </FirstAppBox>
            </WrapPart4>
            <WrapPart5 className="mt-14 flex items-center justify-between space-x-[22rem] ">
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Youtube"
                bgColor="#eab308"
                clicked={() =>
                  router.push("/cloneCoding/secApps/YouTube", undefined, {
                    scroll: false,
                  })
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-7 w-10"
                  fill="#3C4048"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </FirstAppBox>
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="KoreanQuiz"
                bgColor="#eab308"
                clicked={() =>
                  router.push(
                    "/cloneCoding/forthApp/KoreanLanguage",
                    undefined,
                    { scroll: false }
                  )
                }
                setSharedState={setSharedState}
              >
                <KoreaFlag
                  width="3rem"
                  height="2.5rem"
                  fill1="#b7c1d6"
                  fill2="#304f91"
                  fill3="#b85760"
                />
              </FirstAppBox>
            </WrapPart5>
            <WrapPart6 className="mt-5 flex items-center justify-between space-x-[6rem] ">
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Animations"
                bgColor="#eab308"
                clicked={() =>
                  router
                    .push("/cloneCoding", undefined, { scroll: false })
                    .then(() => window.scrollTo(2100, 2100))
                }
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                  />
                </svg>
              </FirstAppBox>
              <FirstAppBox
                widValue="4rem"
                heiValue="4rem"
                roundVal="100%"
                appName="Profile"
                bgColor="#eab308"
                clicked={() => router.push("/cloneCoding/profile")}
                setSharedState={setSharedState}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.9}
                  stroke="currentColor"
                  className="h-9 w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </FirstAppBox>
            </WrapPart6>
          </Wrapper2>
        </AnimatePresence>
      </>
    )
  );
}

const Wrapper2 = styled.div``;
const WrapPart4 = styled.div``;
const WrapPart5 = styled.div``;
const WrapPart6 = styled.div``;
