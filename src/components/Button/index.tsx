"use client";

import React from "react";
// import { scroller } from "react-scroll";

type ButtonProps = {
  children: React.ReactNode;
  pathScroll: string;
  styles?: string;
};

const Button: React.FC<ButtonProps> = ({ children, pathScroll, styles }) => {
  // const handleScroll = () => {
  //   scroller.scrollTo(pathScroll, {
  //     smooth: true,
  //     duration: 500,
  //   });
  // };

  return (
    <a
      className={`text-xl px-4 py-2  flex justify-center items-center bg-gradient-to-b from-green-600 min-w-[300px] md:text-2xl uppercase font-semibold tracking-widest rounded-xl cursor-pointer transition-all duration-150 hover:bg-gradient-to-t hover:tracking-[2px] outline-none ${styles}`}
      href="tel:+380 68 479 20 78"
      // onClick={handleScroll}
    >
      {children}
    </a>
  );
};
export default Button;
