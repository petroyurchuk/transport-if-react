import React from "react";
import { dataListT } from "../../types/navigation";
import { NavigationItem } from "../";

type NavigationListProps = {
  dataList: dataListT[];
};

const NavigationList: React.FC<NavigationListProps> = ({ dataList }) => {
  return (
    <nav className={`hidden w-auto md:block`}>
      <ul className="flex justify-center gap-5">
        {dataList.map(({ id, value, linkTo }) => (
          <NavigationItem key={id} value={value} linkTo={linkTo} />
        ))}
      </ul>
    </nav>
  );
};
export default NavigationList;
