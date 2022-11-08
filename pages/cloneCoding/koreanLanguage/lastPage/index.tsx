import type { NextPage } from "next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import LocalStorage from "../../../../libs/client/utils";

const LastPage: NextPage = () => {
  const router = useRouter();
  const onAgainClick = () => {
    router.back();
    LocalStorage.removeItem("Quiz_result");
  };
  const onCheckClick = () => {
    router.push("/cloneCoding/koreanLanguage/lastPage/checkPage");
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-tl from-purple-600 to-pink-600">
      <div className="flex flex-col items-center justify-center text-white/90">
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
          transition={{ delay: 1, duration: 1.5 }}
          className=""
        >
          You Done With The Quiz ..!
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 2 }}
          className="my-9"
        >
          Do u want to ...
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 2.5 }}
          onClick={onAgainClick}
          className="flex cursor-pointer justify-center hover:text-indigo-900"
        >
          Try Again ? &rarr;{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 2.5 }}
          onClick={onCheckClick}
          className="cursor-pointer hover:text-indigo-900"
        >
          Check Your Score ? &rarr;{" "}
        </motion.span>
      </div>
    </div>
  );
};

export default LastPage;
