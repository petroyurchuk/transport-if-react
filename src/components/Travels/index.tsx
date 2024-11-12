import { useAppSelector } from "../../store/hooks";
import { Travel } from "../";
import { travels } from "../../data/travels";

const Travels: React.FC = () => {
  const { searchInput } = useAppSelector((state) => state.search);
  const { filter } = useAppSelector((state) => state.filter);

  return (
    <div className="w-full px-10 flex flex-col items-center md:items-baseline  md:flex-row gap-10 flex-wrap ">
      {travels
        .filter((travel) => travel.type === filter)
        .filter((travel) =>
          travel.travelTitle.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map(({ id, travelTitle, travelImage }) => (
          <Travel
            key={id}
            id={id}
            travelTitle={travelTitle}
            travelImage={travelImage}
          />
        ))}
    </div>
  );
};
export default Travels;
