"use client";
import React from "react";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { AdditionalInformation, Title } from "../";
import { CardListT } from "../../types/card";

type CardProps = {
  title: string;
  body: string;
  list: CardListT[];
  buttonValue: string;
};

const Card: React.FC<CardProps> = ({ title, body, list, buttonValue }) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ["start end", "start start"],
  });
  const handleExtend = async () => {
    await animate("article", { x: -2000, width: "60%" });
    await animate("#close", { pointerEvents: "all", opacity: 1 });
    await animate("#extend-list", { x: "-1%", opacity: 1 });
  };
  const handleClose = () => {
    animate("article", { x: 0 });
    animate("#extend-list", { x: "100%", opacity: 0.5 });
    animate("#close", { pointerEvents: "none", opacity: 0 });
  };

  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgb(100 116 139 / 0.05)", "rgb(100 116 139 / 0.15)"]
  );

  return (
    <div
      className="w-full flex flex-col items-center gap-5 relative"
      ref={scope}
    >
      <motion.article
        ref={targetRef}
        className={`w-[90%] lg:w-[70%] min-h-[300px] md:min-h-[600px] flex flex-col items-center justify-center gap-5 text-white text-lg tracking-wider rounded-xl shadow-2xl cursor-pointer z-10 `}
        style={{ scaleX, opacity, backgroundColor }}
        // onClick={() => handleExtend()}
      >
        <Title tag="h2" styles="text-xl md:text-4xl font-bold">
          {title}
        </Title>
        <p className="text-lg text-justify  w-full p-3  md:text-2xl md:max-w-[70%] md:text-center md:font-semibold">
          {body}
        </p>
      </motion.article>
      <div className="absolute right-0 max-w-[95%] min-h-[300px] max-h-[600px] ">
        <div id="extend-list" className="w-full translate-x-[100%] opacity-50">
          <AdditionalInformation list={list} />
        </div>
        <div
          id="close"
          className="pointer-events-none absolute left-[50%] -translate-x-[50%] -bottom-[12%]   text-white uppercase font-bold  tracking-widest text-xl opacity-0 cursor-pointer transition-all duration-150  z-20 bg-gradient-to-r from-red-400 to-purple-600 p-3 rounded-xl hover:shadow-lg hover:shadow-purple-400"
          onClick={handleClose}
        >
          {buttonValue}
        </div>
      </div>
    </div>
  );
};
export default Card;
