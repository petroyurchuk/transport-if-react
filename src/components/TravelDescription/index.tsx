import { TravelT } from "../../types/travel";
import { DetailInfo, ListPrice, Title } from "../";
import { detailInfo } from "../../data/detailInfo";

type TravelDescriptionProps = {
  travel: TravelT;
};
const TravelDescription: React.FC<TravelDescriptionProps> = ({ travel }) => {
  return (
    <div className="pb-10 px-3 max-w-[90%] md:max-w-[1200px] m-auto">
      <Title
        tag="h1"
        styles="text-4xl font-bold text-slate-900 text-center py-5"
      >
        {travel.travelTitle}
      </Title>

      <div className="mb-5 flex flex-col gap-2">
        {/* <h3 className="text-2xl font-bold text-slate-900">
          Таймінг одноденного туру:
        </h3> */}
        {/* { {travel.travelPlan.map(({ id, time, description }) => ( */}
        <p className="text-lg text-justify italic ">
          {/* <span className="font-bold">{time} - </span> */}
          {travel.description}
        </p>
        {/* // ))} } */}
      </div>
      <div className="space-y-4">
        {travel.listPrices[travel.id]?.map((listPrice, idx) => (
          <ListPrice
            key={idx}
            listPrice={listPrice}
            title={travel.listPricesTitles[idx]}
          />
        ))}
      </div>
      {detailInfo.map((detail) => (
        <DetailInfo key={detail.id} detailInfo={detail} />
      ))}
    </div>
  );
};
export default TravelDescription;
