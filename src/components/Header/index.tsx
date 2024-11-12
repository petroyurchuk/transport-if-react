import React from "react";
import { Logo, NavigationList, MobileNavigationList } from "../";
import { navigationData } from "../../data/navigation";

type HeaderProps = {};
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full fixed text-white flex justify-center items-center min-h-16 gap-10 z-10">
      <Logo logoImage="/images/logo.png" />
      <NavigationList dataList={navigationData} />
      <MobileNavigationList dataList={navigationData} />
    </header>
  );
};
export default Header;
