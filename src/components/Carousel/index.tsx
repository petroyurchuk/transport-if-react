import React from "react";
import { carouselData } from "../../data/carousel";

const Carousel: React.FC = () => {
  return (
    <div
      id="avtopark"
      className="flex flex-col  md:flex-row px-10 gap-10 mt-10"
    >
      {carouselData.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-5">
          <div className="flex max-w-[300px] w-full justify-center items-center relative ">
            <img
              src={item.imageUrl}
              width={300}
              height={300}
              alt="car's image"
              className="min-h-[300px] max-h-[300px] min-w-[250px] rounded-lg object-cover shadow-md shadow-purple-600"
            />
            <div className="absolute bottom-0 bg-slate-900 px-2 text-white font-semibold  right-0 uppercase tracking-wider">
              {item.type}
            </div>
          </div>
          <p className="text-center text-white font-semibold text-lg">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Carousel;
