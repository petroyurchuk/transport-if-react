import { travels } from "../data/travels";
import {
  SidebarInfo,
  TravelDescription,
  ContactButton,
  GalleryCarousel,
  HeaderTravels,
  FooterTravels,
} from "../components";
import { images } from "../data/galleryCarousel";
import { useParams } from "react-router-dom";

type TravelPageProps = {};

const TravelPage: React.FC<TravelPageProps> = () => {
  const { travelId } = useParams();
  const travel = travels.filter((travel) => travel.id === travelId)[0];
  return (
    <div className="bg-white">
      <HeaderTravels />
      <div className="max-w-[1200px] m-auto flex">
        <div className="w-full  md:max-w-[1000px]">
          <GalleryCarousel images={images[travelId!]} />
          <div className="flex flex-col items-center md:flex-row  justify-center gap-5 px-2">
            <ContactButton
              bgColor="bg-[#25D366]"
              link="https://wa.me/380684792078"
            >
              Написати у WhatsApp
            </ContactButton>
            <ContactButton bgColor="bg-sky-600" link="https://t.me/vova3s">
              Написати у Telegram
            </ContactButton>
          </div>
        </div>
        <div className="hidden ml-2 relative h-[650px] z-50 md:block">
          <div className="sticky top-5">
            <SidebarInfo label="Контакти" inputValue="+380 68 479 20 78" />
          </div>
        </div>
      </div>
      <TravelDescription travel={travel} />
      <FooterTravels />
    </div>
  );
};
export default TravelPage;
