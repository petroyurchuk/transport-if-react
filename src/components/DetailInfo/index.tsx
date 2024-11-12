import React from "react";
import { useAnimate } from "framer-motion";
import { DetailInfoT } from "../../types/detail";

type DetailInfoProps = {
  detailInfo: DetailInfoT;
};
const DetailInfo: React.FC<DetailInfoProps> = ({ detailInfo }) => {
  const [scope, animate] = useAnimate();
  const [isFull, setIsFull] = React.useState(false);

  const handleIsFull = async () => {
    setIsFull((prevState) => {
      const newState = !prevState;
      if (newState) {
        animate(scope.current, { height: "auto" });
      } else {
        animate(scope.current, { height: "50px" });
      }
      return newState;
    });
  };
  return (
    <div
      ref={scope}
      className={`border-[1px] border-gray-400 px-3 mt-5 overflow-hidden h-[50px]`}
    >
      <h3
        onClick={() => handleIsFull()}
        className="font-semibold text-slate-900 uppercase w-full flex items-center justify-between text-lg md:text-xl py-2 cursor-pointer h-[50px]"
      >
        <span>{detailInfo.mainTitle}</span>
        <span className="font-bold text-gray-400 text-3xl -mt-3">
          {isFull ? "-" : "+"}
        </span>
      </h3>

      <div>
        {detailInfo.list.map(({ id, items, title }) => (
          <div key={id} className="mb-20">
            {title ? (
              <h4 className="text-lg font-semibold text-slate-900 mb-10">
                {title}
              </h4>
            ) : null}
            <ul
              className={`${detailInfo.typeOfList === "disc" ? "list-disc" : "list-decimal"} pl-10`}
            >
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DetailInfo;
