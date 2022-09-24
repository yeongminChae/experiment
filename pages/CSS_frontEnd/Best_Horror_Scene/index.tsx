import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Misery from "./image/misery.png";
import Shining from "./image/shining.png";
import Lamb from "./image/lamb.png";

const H1 = styled.h1``;

const Best_Horror_Scene: NextPage = () => {
  return (
    <div className="fixed grid h-full overflow-y-auto ">
      <div className=" left-0 top-0 h-[90vh] w-full flex-col justify-between bg-[#F0F0F0] pt-8 pl-[5vh] pr-0  ">
        <h1 className="mt-8 pt-[14px] font-poppins text-[50px] leading-[50px] tracking-[0.3em] text-[#e7473c] ">
          BEST
          <div className="flex">
            <span className=" " />H
            <span>
              <span className="">O</span>
            </span>
            <span />
            RR
            <span>
              {/* <svg
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
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg> */}
              O
            </span>
            <span className="" />R
          </div>
          <span className="flex" />
          SCENES
        </h1>
        <div className="relative block h-[293.234px] min-h-[auto] w-[561px] min-w-[auto] max-w-full text-justify tracking-wide ">
          <h3 className="leading-11 mt-10 block h-[57.5838px] w-[400px] text-2xl text-[#e7473c]">
            An ever growing collection featuring some of the best scenes in
            horror.
          </h3>
          <p className="text-l mt-8 block h-[57.5838px] w-[400px] text-justify leading-5 tracking-wide text-[#e7473c]  ">
            “Best Horror Scenes” is a collection of scenes I feel are some of
            the most affecting in horror. Some may be simple black cat scares,
            others may be more subdued or nuanced. Many come from films that
            aren&apos;t necessarily “horror” but have elements or threads of
            horror.
          </p>
          <nav className=" mt-24 h-[100px] w-[380px] text-sm ">
            <div className="flex flex-wrap ">
              <Link href="">
                <span className="mr-[12px] mb-2 cursor-pointer leading-3 underline underline-offset-2 opacity-60 hover:opacity-90">
                  Newsletter
                </span>
              </Link>
              <Link href="">
                <span className="mr-[12px] mb-2  cursor-pointer leading-3 underline underline-offset-2 opacity-60 hover:opacity-90">
                  Suggest a Scene
                </span>
              </Link>
              <Link href="">
                <span className="mr-[12px] mb-2  cursor-pointer leading-3 underline underline-offset-2 opacity-60 hover:opacity-90">
                  YouTube
                </span>
              </Link>
              <Link href="">
                <span className="mr-[12px] mb-2  cursor-pointer leading-3 underline underline-offset-2 opacity-60 hover:opacity-90">
                  Twitter
                </span>
              </Link>
              <Link href="">
                <span className="mr-[12px] mb-2  cursor-pointer leading-3 underline underline-offset-2 opacity-60 hover:opacity-90">
                  Contact
                </span>
              </Link>
              <Link href="">
                <span className="mr-[12px] mb-2  cursor-pointer leading-3 underline underline-offset-2 opacity-60 hover:opacity-90">
                  RSS
                </span>
              </Link>
              <Link href="">
                <span className="mr-[12px] mb-2  cursor-pointer leading-3 underline underline-offset-2 opacity-60 hover:opacity-90">
                  Letterboxd
                </span>
              </Link>
            </div>
            <p className="mt-4 flex w-[400px] items-center justify-center pb-10 text-[3px] leading-3 tracking-wide text-black text-opacity-[0.35]">
              Best Horror Scenes is a love letter to the Horror film genre by
              Brandon Durham. Most film clips contain major spoilers, and it is
              recommended you don’t watch the clip if you plan on seeing the
              film.
            </p>
          </nav>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="sticky top-0 z-10 block h-[120px] w-[500px] overflow-hidden bg-[#e7473c] tracking-[0.1em] outline-dashed outline-[0.1px]">
          <span className="block py-[32px] px-[40px] text-center text-base font-light text-white ">
            Currently viewing{" "}
            <span className="text-lg font-light text-black underline underline-offset-4 opacity-80 hover:text-white ">
              everything
            </span>{" "}
            sorted by{" "}
            <span className="text-lg font-light text-black underline underline-offset-4 opacity-80 hover:text-white ">
              random
            </span>{" "}
            .
          </span>
        </div>
        <div className="h-[600px] w-[500px] bg-[#e7473c] ">
          <div className="ml-[7vh] pt-16 ">
            <h1 className="mt-0 text-4xl font-bold text-white ">
              {/* <span className="invisible">#</span> */}
              Misery (1990)
            </h1>
            <h3 className="mt-2 text-sm text-white">Directed by Rob Reiner</h3>
          </div>
          <div className="grid ">
            <div className="ml-[7vh] mt-5 flex ">
              <div className="relative px-[200px] pb-[225px]">
                <Image
                  src={Misery}
                  alt="misery posture"
                  layout="fill"
                  placeholder="blur"
                  className="object-contain "
                />
              </div>
              <div className="flex h-[100px] w-[10vw] flex-col items-center justify-around">
                <div className="flex h-[33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
                  </svg>
                </div>
                <div className="flex h-[33.33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
                <div className="flex h-[33.33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span className="mr-[7vh] mt-9 flex justify-end text-[0.9rem] tracking-[0.1em] text-black text-opacity-60">
            My Rating: 9/10
          </span>
          <div className="mx-[7vh] mt-16 flex justify-between text-[0.9rem] tracking-[0.1em] text-black text-opacity-60">
            <span className="mt-[0.8] flex items-center justify-around">
              No Comments
            </span>
            <div className="flex items-center justify-around">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </span>
              <span className="ml-1">Leave a Comment</span>
            </div>
          </div>
          <div className="h-[150px] w-[500px] bg-gradient-to-b from-[#e7473c] to-red-700 shadow-md" />
        </div>
        <div className="h-[600px] w-[500px] bg-[#e7473c] ">
          <div className="ml-[7vh] pt-16 ">
            <h1 className="mt-0 text-4xl font-bold text-white ">
              {/* <span className="invisible">#</span> */}
              The Shining (1980)
            </h1>
            <h3 className="mt-2 text-sm text-white">
              Directed by Stanley Kubrick
            </h3>
          </div>
          <div className="grid ">
            <div className="ml-[7vh] mt-5 flex">
              <div className="relative px-[200px] pb-[225px]">
                <Image
                  src={Shining}
                  alt="shining posture"
                  layout="fill"
                  placeholder="blur"
                  className="object-contain"
                />
              </div>
              <div className="flex h-[100px] w-[10vw] flex-col items-center justify-around bg-red-600 text-white shadow-md ">
                <div className="flex h-[33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
                  </svg>
                </div>
                <div className="flex h-[33.33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
                <div className="flex h-[33.33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span className="mr-[7vh] mt-9 flex justify-end text-[0.9rem] tracking-[0.1em] text-black text-opacity-60">
            My Rating: 10/10
          </span>
          <div className="mx-[7vh] mt-16 flex justify-between text-[0.9rem] tracking-[0.1em] text-black text-opacity-60">
            <span className="mt-[0.8] flex items-center justify-around">
              No Comments
            </span>
            <div className="flex items-center justify-around">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </span>
              <span className="ml-1">Leave a Comment</span>
            </div>
          </div>
          <div className="h-[150px] w-[500px] bg-gradient-to-b from-[#e7473c] to-red-700 shadow-md" />
        </div>
        <div className="h-[600px] w-[500px] bg-[#e7473c] ">
          <div className="ml-[7vh] pt-16 ">
            <h1 className="mt-0 text-4xl font-bold text-white ">
              {/* <span className="invisible">#</span> */}
              The Silence of the Lambs (1991)
            </h1>
            <h3 className="mt-2 text-sm text-white">
              Directed by Jonathan Demme
            </h3>
          </div>
          <div className="grid">
            <div className="ml-[7vh] mt-5 flex">
              <div className="relative px-[200px] pb-[225px]">
                <Image
                  src={Lamb}
                  alt="lamb posture"
                  layout="fill"
                  placeholder="blur"
                  className=" object-contain"
                />
              </div>
              <div className="flex h-[100px] w-[10vw] flex-col items-center justify-around bg-red-600 text-white shadow-md ">
                <div className="flex h-[33.33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
                  </svg>
                </div>
                <div className="flex h-[33.33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
                <div className="flex h-[33.33%] w-[10vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span className="mr-[7vh] mt-9 flex justify-end text-[0.9rem] tracking-[0.1em] text-black text-opacity-60">
            My Rating: 9/10
          </span>
          <div className="mx-[7vh] mt-16 flex justify-between text-[0.9rem] tracking-[0.1em] text-black text-opacity-60">
            <span className="mt-[0.8] flex items-center justify-around">
              No Comments
            </span>
            <div className="flex items-center justify-around">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
              </span>
              <span className="ml-1">Leave a Comment</span>
            </div>
          </div>
          <div className="h-[150px] w-[500px] bg-gradient-to-b from-[#e7473c] to-red-600 shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Best_Horror_Scene;
