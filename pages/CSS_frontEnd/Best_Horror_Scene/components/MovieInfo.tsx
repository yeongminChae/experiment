import Image, { StaticImageData } from "next/image";
import Misery from "../image/misery.png";

interface ImovieProps {
  title: string;
  director: string;
  rating: number;
  // Images: "Misery" | "Shining" | "Lamb";
  Images: StaticImageData;
  [key: string]: any; // this is allowed to us to send any other props to my input
}

export default function MovieInfo({
  title,
  director,
  rating,
  Images,
  ...rest
}: ImovieProps) {
  return (
    <div className="w[500px] h-[600px] bg-[#e7473c] ">
      <div className="pt-16 ">
        <div className="flex items-start justify-start">
          <div className="ml-[1.8vh] mt-0 w-[500px] text-4xl font-bold text-white hover:first-letter:visible">
            <span className="invisible ml-[0.8vh] text-4xl text-slate-800 opacity-60">
              #
            </span>{" "}
            {title}
          </div>
        </div>
        <h3 className="ml-[7vh] mt-2 text-sm text-white">{director}</h3>
      </div>
      <div className="grid ">
        <div className="ml-[7vh] mt-5 flex ">
          <div className="relative px-[200px] pb-[225px]">
            {
              <Image
                src={Images}
                alt={title + "Posture"}
                layout="fill"
                placeholder="blur"
                className="object-contain "
              />
            }{" "}
          </div>
          <div className="flex h-[100px] w-[9.5vw] flex-col items-center justify-around">
            <div className="flex h-[33%] w-[9vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
            <div className="flex h-[33.33%] w-[9vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
            <div className="flex h-[33.33%] w-[9.5vw] items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg">
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
        My Rating: {rating}/10
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
      <div className="h-[600px] w-[500px] bg-gradient-to-b from-[#e7473c] to-red-700 shadow-md" />
    </div>
  );
}
