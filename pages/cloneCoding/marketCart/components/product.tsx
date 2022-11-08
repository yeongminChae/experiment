import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export interface IProductProps {
  page: string;
  grade: number;
  name: string;
  cate: string;
  price: number;
  Images: StaticImageData;
}

const ProductBase = ({
  page,
  grade,
  name,
  cate,
  price,
  Images,
}: IProductProps) => {
  const [basicNum, setBasicNum] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const onAddBtnClick = () => {
    setIsClicked((prev) => !prev);
  };
  const onDoubleClick = () => {
    setIsDoubleClicked((prev) => !prev);
  };
  const onPluslick = () => {
    setBasicNum((prev) => prev + 1);
  };
  const onMinusclick = () => {
    setBasicNum((prev) => prev - 1);
  };
  if (basicNum === 0) {
    setBasicNum(1);
  }
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg sm:row-span-1 sm:w-[21rem] md:w-full lg:row-span-3 lg:w-full xl:col-span-1 xl:w-[27rem] ">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-2xl font-bold text-black/80 ">{page}</span>
        <div className="space-x-3 ">
          <span>⭐️{grade}</span>
          <span className="rounded-md p-2 shadow-xl">💖</span>
        </div>
      </div>
      <div className="mb-2 flex flex-col items-center justify-center">
        <Image
          src={Images}
          alt={cate + "photo"}
          width={320}
          height={400}
          placeholder="blur"
          className="object-center"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-medium">{name} </span>
        <span className="text-xs text-gray-500">{cate}</span>
        <div className="mt-3 mb-5 flex items-center justify-between">
          <div className="space-x-2">
            <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-300 ring-offset-2 transition focus:ring-2" />
            <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-300 ring-offset-2 transition focus:ring-2" />
            <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-300 ring-offset-2 transition focus:ring-2" />
          </div>
          <div className="flex items-center justify-between space-x-6">
            <button
              onClick={onMinusclick}
              className=" aspect-square w-8 items-center justify-between rounded-lg bg-blue-200 text-xl text-gray-500 hover:bg-blue-400"
            >
              -
            </button>
            <span className="flex w-4 items-center justify-center">
              {basicNum}
            </span>
            <button
              onClick={onPluslick}
              className="aspect-square w-8 items-center justify-between rounded-lg bg-blue-200 text-xl text-gray-500 hover:bg-blue-400"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-medium">${price * basicNum}</span>
          <button
            onClick={onAddBtnClick}
            className="h-8 w-32 rounded-lg bg-blue-500 py-2 px-8 text-center text-xs text-white hover:bg-blue-600"
          >
            {isClicked ? (
              <>
                <motion.div className="flex justify-start">
                  <CartIcon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [0, 1], x: [-50, 110] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.45 }}
                    className="top-1/2 -left-2.5 z-0 mb-1 h-5 w-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </CartIcon>
                  <motion.span
                    layoutId="circle"
                    animate={{ opacity: [0, 1], y: [0, 0] }}
                    transition={{ delay: 1.6 }}
                    className="absolute"
                    onClick={onDoubleClick}
                  >
                    Click Me !!
                  </motion.span>
                  {isDoubleClicked && <span>😄 DONE !</span>}
                </motion.div>
              </>
            ) : (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [0, 1] }}
              >
                Add to cart
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const CartIcon = styled(motion.svg)``;

export default ProductBase;
