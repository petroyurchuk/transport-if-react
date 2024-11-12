import React from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { dataListT } from "../../types/navigation";
import { NavigationItem } from "../";

type MobileNavigationListProps = {
  dataList: dataListT[];
};
const MobileNavigationList: React.FC<MobileNavigationListProps> = ({
  dataList,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav
        className={`md:hidden absolute top-0 w-full h-screen transition-all duration-150 bg-black/80 ${isOpen ? "translate-y-[0%]" : "translate-y-[-100%]"} `}
      >
        <button
          className="absolute right-3 top-3"
          onClick={() => setIsOpen(false)}
        >
          <IoCloseSharp fontSize={26} />
        </button>
        <ul className="h-full flex flex-col justify-center items-center gap-[50px]">
          {dataList.map((item) => (
            <NavigationItem
              key={item.id}
              linkTo={item.linkTo}
              value={item.value}
            />
          ))}
        </ul>
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <IoMenu fontSize={26} />
      </button>
    </>
  );
};
export default MobileNavigationList;
