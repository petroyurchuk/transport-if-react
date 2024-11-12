import React from "react";
import { animateScroll } from "react-scroll";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAppDispatch } from "../../store/hooks";
import { setSearch } from "../../store/search/slice";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderTravels: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogo = () => {
    navigate("/travels");
    animateScroll.scrollToTop({ smooth: true, duration: 500 });
  };
  return (
    <header className="w-full flex items-start flex-col md:flex-row md:items-center min-h-[80px] max-h-[120px]  bg-black/90 shadow-md shadow-purple-600 mb-5">
      <Link
        to={"/"}
        className="relative z-50 px-4 py-2 bg-pink-500 rounded-md font-semibold text-white ml-5 mt-4 md:mt-0 transition-all duration-150  hover:tracking-wide"
      >
        <span className="hidden md:inline-block">
          Повернутися до трансферів
        </span>
        <span className="md:hidden">
          <IoMdArrowRoundBack />
        </span>
      </Link>
      <div className="max-w-[1200px] w-full  m-auto flex flex-col md:flex-row -mt-11 pb-2 md:-mt-0 md:pb-0 md:pt-2 md:px-3 items-center">
        <div onClick={() => handleLogo()}>
          <img
            src={"/images/logo_tourism_company.png"}
            width={60}
            height={60}
            alt="travels logo"
            className="cursor-pointer"
          />
        </div>
        {location.pathname.split("/").length > 2 ? null : (
          <input
            type="text"
            placeholder="Введіть назву туру..."
            className="w-[90%] md:w-full md:max-w-[550px] py-2 rounded-lg pl-4 m-auto outline-none bg-gray-700 text-white placeholder:text-white"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        )}
      </div>
    </header>
  );
};
export default HeaderTravels;
