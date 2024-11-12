import React from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const FooterTravels: React.FC = () => {
  return (
    <footer className="w-full bg-black/90 border-t-2 border-purple-600 pt-10 pb-2">
      <div className="flex-col gap-5 justify-center max-w-[1200px] m-auto text-white flex md:flex-row  md:justify-between items-center">
        <div className="flex items-center">
          <img
            src={"/images/logo_tourism_company.png"}
            width={60}
            height={60}
            alt="travels logo"
            className="cursor-pointer"
          />
        </div>
        <div className="font-semibold text-center">
          <a className="hover:underline" href="tel:+380 68 479 20 78">
            +38 (068) 479 20 78
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href="https://t.me/vova3s"
            target="_blank"
            className="transition-all duration-100 hover:-translate-y-1"
          >
            <FaTelegram fontSize={25} />
          </a>
          <a
            href="https://wa.me/380684792078"
            target="_blank"
            className="transition-all duration-100 hover:-translate-y-1"
          >
            <FaWhatsapp fontSize={25} />
          </a>
        </div>
        <a
          className="hover:underline font-semibold"
          href="mailto:petroyurchuk66@gmail.com"
        >
          petroyurchuk66@gmail.com
        </a>
      </div>
    </footer>
  );
};
export default FooterTravels;
