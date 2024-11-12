import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Logo } from "../";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full border-t-[1px] border-purple-200 pt-10">
      <div className="flex-col gap-5 justify-center max-w-[1200px] m-auto text-white flex md:flex-row  md:justify-between items-center">
        <div>
          <Logo logoImage="/images/logo.png" />
        </div>
        <div className="font-semibold text-center">
          <a className="hover:underline" href="tel:+380 68 479 20 78">
            +38 (068) 479 20 78
          </a>
          <p>Обробка запитів, щоденно з 08:00-22:00</p>
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
export default Footer;
