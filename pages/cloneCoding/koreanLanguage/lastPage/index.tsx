import type { NextPage } from "next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const LastPage: NextPage = () => {
  const router = useRouter();
  const againClick = () => {
    router.back();
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-tl from-purple-600 to-pink-600">
      <div className="flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.3, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="flex justify-center"
        >
          hi :){" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className=""
        >
          You Done With The Quiz .. !
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 2 }}
          className="my-9"
        >
          Do u want to .. ?
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 2.5 }}
          onClick={againClick}
          className="flex cursor-pointer justify-center"
        >
          Try Again ? &rarr;{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 2.5 }}
        >
          Check Your Score ? &rarr;{" "}
        </motion.span>
      </div>
    </div>
  );
};

export default LastPage;
