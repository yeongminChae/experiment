import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AppModalLink = () => {
  const [link, setLink] = useState("");
  const router = useRouter();
  const currentLoca = router.asPath.split("/");
  const detectFunc = () => {
    currentLoca[3] === "Jobs" &&
      setLink(
        "https://replit.com/@yeongminChae/Day-Thirteen-and-Fourteen#scrapper.py"
      );
    currentLoca[3] === "ToDo" &&
      setLink("https://yeongminChae.github.io/todosApp");
    currentLoca[3] === "Paint" &&
      setLink("https://yeongminchae.github.io/paintingJsV2/");
    currentLoca[3] === "Cart" && setLink("/cloneCoding/marketCart");
    currentLoca[3] === "Twitter" &&
      setLink("https://yeongminchae.github.io/twitter-clone/");
    currentLoca[3] === "YouTube" &&
      setLink("https://wetube-reloaded-yeongmin.herokuapp.com/");
    currentLoca[3] === "CoinsTracker" &&
      setLink("https://yeongminchae.github.io/React-Masterclass/");
    currentLoca[3] === "KoreanLanguage" &&
      setLink("/cloneCoding/koreanLanguage");
  };
  useEffect(() => {
    detectFunc();
  }, [detectFunc, link]);

  return (
    <>
      <Link href={link} passHref>
        <a target="_blank" rel="noreferrer">
          <motion.button
            whileHover={{
              boxShadow: "0px 0px 8px rgb(255,255,255) ",
              backgroundColor: "#1F4690",
            }}
            className="h-7 w-[4.8rem] rounded-2xl bg-[#1363DF]"
          >
            <span className="text-sm font-bold text-white ">받기</span>{" "}
          </motion.button>
        </a>
      </Link>
    </>
  );
};

export default AppModalLink;
