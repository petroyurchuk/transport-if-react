"use client";
import { animateScroll } from "react-scroll";

type LogoProps = {
  logoImage: string;
};

const Logo: React.FC<LogoProps> = ({ logoImage }) => {
  return (
    <img
      className="rounded-full cursor-pointer"
      width={100}
      height={100}
      src={logoImage}
      alt="logo"
      onClick={() => {
        animateScroll.scrollToTop({
          smooth: true,
          duration: 500,
        });
      }}
    />
  );
};
export default Logo;
