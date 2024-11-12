import React from "react";
import { Link } from "react-router-dom";

type TravelProps = {
  id: string;
  travelImage: string;
  travelTitle: string;
};
const Travel: React.FC<TravelProps> = ({ id, travelTitle, travelImage }) => {
  return (
    <Link
      to={`/travels/${id}`}
      className="max-w-[375px] w-full min-h-[420px] max-h-[520px]  shadow-md p-5 flex flex-col gap-7 cursor-pointer rounded-md transition-all duration-150 hover:-translate-y-2"
    >
      <h3 className="font-bold text-xl max-w-full max-h-[100px] overflow-hidden ">
        {travelTitle.length > 50
          ? travelTitle.substring(0, 50) + "..."
          : travelTitle}
      </h3>
      <div className="max-w-full overflow-hidden">
        <img
          width={350}
          height={220}
          src={travelImage}
          alt="image of travel"
          className="max-w-full w-full max-h-[220px] object-cover overflow-hidden transition-all duration-200 hover:scale-110"
        />
      </div>

      <button className="self-end px-5 py-2  text-purple-500 shadow-lg shadow-purple-300 rounded-md transition-all duration-150 hover:shadow-xl hover:shadow-purple-400 hover:scale-x-110 ">
        Дивитися{" "}
      </button>
    </Link>
  );
};
export default Travel;
