import { motion } from "framer-motion";

interface IDark {
  isDark: boolean;
}

const ProfileNavbar = ({ isDark }: IDark) => {
  return (
    <>
      <motion.div
        whileHover={{
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          backgroundColor: "rgb(148 163 184)",
        }}
        className="flex h-8 w-[90vw] items-center justify-center rounded-md bg-slate-400/25 dark:text-white sm:ml-[0.4rem] sm:w-[63vw] lg:ml-10 lg:w-[59vw] xl:ml-1 xl:w-[37.3rem] "
      >
        Look it's Glowing ✨
      </motion.div>
      <motion.div
        whileHover={{
          boxShadow: "0px 0px 8px rgb(255,255,255) ",
          backgroundColor: "rgb(148 163 184)",
        }}
        className="ml-1 -mr-5 flex h-8 w-10 items-center justify-center rounded-md bg-slate-400/25 dark:text-white "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
      </motion.div>
    </>
  );
};

export default ProfileNavbar;
