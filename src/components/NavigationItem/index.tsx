import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { dataListT } from "../../types/navigation";

type NavigationItemProps = Omit<dataListT, "id">;

const NavigationItem: React.FC<NavigationItemProps> = ({ value, linkTo }) => {
  return (
    <li className="cursor-pointer font-semibold tracking-widest transition-all duration-150 hover:tracking-[3px]">
      {linkTo.includes("travels") ? (
        <Link
          className="bg-pink-500 text-white py-2 px-5 text-center rounded-xl"
          to={linkTo}
        >
          {value}
        </Link>
      ) : linkTo.includes("tel:") ? (
        <a href={linkTo}>{value}</a>
      ) : (
        <ScrollLink smooth to={linkTo}>
          {value}
        </ScrollLink>
      )}
    </li>
  );
};
export default NavigationItem;
