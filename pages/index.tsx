import type { NextPage } from "next";
import { motion } from "framer-motion";
import Thumbnail from "../components/thumbnail";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Thumbnail />
      </div>
      <div className="mb-3 flex items-start justify-start">
        <span className="mx-2 mt-1 flex">Come To Check My front end Works</span>
        <Link href="/CSS_frontEnd">
          <div className="mx-2 flex items-start justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="flex h-8 w-8 items-center justify-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
