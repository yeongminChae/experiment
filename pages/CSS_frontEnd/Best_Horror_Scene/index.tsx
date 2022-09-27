import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Misery from "./image/misery.png";
import Shining from "./image/shining.png";
import Lamb from "./image/lamb.png";
import { motion } from "framer-motion";
import MovieInfo from "./components/MovieInfo";

const Best_Horror_Scene: NextPage = () => {
  return (
    <div className="grid max-w-3xl sm:h-screen sm:max-w-5xl md:max-w-6xl md:grid-cols-7 md:divide-y-2 md:overflow-x-hidden lg:max-w-7xl xl:max-w-full ">
      <div className="top-0 h-[90vh] bg-[#F0F0F0] pt-8 pl-[5vh] pr-0 sm:h-[101vh] sm:pl-[9vh] md:col-start-1 md:col-end-4 md:h-[125vh] md:overflow-scroll md:overflow-x-hidden md:pl-[11vh] ">
        <h1 className="mt-8 pt-[14px] font-poppins text-5xl leading-[50px] tracking-[0.3em] text-[#e7473c] sm:text-7xl md:text-5xl lg:text-7xl ">
          BEST
          <div className="flex">
            <span className=" " />H<span className="">O</span>
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
        <div className="relative block h-[293.234px] w-[400px] text-justify sm:w-[500px] md:w-[400px] ">
          <h3 className="mt-10 block h-[57.5838px] text-2xl leading-10 text-[#e7473c] sm:mt-14 md:h-[62px] md:w-[180px] md:text-2xl md:tracking-tighter lg:w-[300px]">
            An ever growing collection featuring some of the best scenes in
            horror.
          </h3>
          <p className="mt-8 block h-[57.5838px] text-justify leading-5 tracking-wide text-[#e7473c] md:mt-24 md:w-[250px] md:leading-[1.35rem] md:tracking-normal lg:mt-14 lg:w-[400px] ">
            “Best Horror Scenes” is a collection of scenes I feel are some of
            the most affecting in horror. Some may be simple black cat scares,
            others may be more subdued or nuanced. Many come from films that
            aren&apos;t necessarily “horror” but have elements or threads of
            horror.
          </p>
          <nav className=" mt-24 h-[100px] text-sm sm:mt-20 md:mt-40 md:w-[250px] md:leading-snug lg:mt-24 lg:w-[300px]">
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
            <p className="mt-4 flex items-center justify-center pb-10 text-[3px] leading-3 tracking-wide text-black text-opacity-[0.35] sm:mt-6 lg:w-[350px] ">
              Best Horror Scenes is a love letter to the Horror film genre by
              Brandon Durham. Most film clips contain major spoilers, and it is
              recommended you don’t watch the clip if you plan on seeing the
              film.
            </p>
          </nav>
        </div>
      </div>
      <div className="h-[90vh] md:col-start-4 md:col-end-8">
        <div className="sticky top-0 z-10 h-[120px] bg-[#e7473c] tracking-[0.1em] outline-dashed outline-[0.1px] sm:h-[105px] md:h-[160px] md:px-2 lg:h-[140px]">
          <div className="block px-12 py-8 text-center text-base font-light text-white md:py-16 lg:py-14 ">
            Currently viewing{" "}
            <span className="text-lg font-light text-black underline underline-offset-4 opacity-80 hover:text-white ">
              everything
            </span>{" "}
            sorted by{" "}
            <span className="text-lg font-light text-black underline underline-offset-4 opacity-80 hover:text-white ">
              random
            </span>{" "}
            .
          </div>
        </div>
        <div>
          <MovieInfo
            title="Misery (1990)"
            director="Directed by Rob Reiner"
            rating={9}
            Images={Misery}
          />
          <MovieInfo
            title="The Shining (1980)"
            director=" Directed by Stanley Kubrick"
            rating={10}
            Images={Shining}
          />
          <MovieInfo
            title=" The Silence of the Lambs (1991)"
            director=" Directed by Jonathan Demme"
            rating={9}
            Images={Lamb}
          />
        </div>
      </div>
    </div>
  );
};

export default Best_Horror_Scene;
