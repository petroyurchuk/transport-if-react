import {
  HeaderTravels,
  FooterTravels,
  FilterTypes,
  Travels,
} from "../components";

type Props = {};
const TravelsPage = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderTravels />
      <main className="flex-grow">
        <div className="flex flex-col pb-10">
          <FilterTypes />
          <Travels />
        </div>
      </main>
      <FooterTravels />
    </div>
  );
};
export default TravelsPage;
