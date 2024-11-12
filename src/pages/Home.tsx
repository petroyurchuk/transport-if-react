import React from "react";
import {
  BillBoard,
  TransferDescription,
  Carousel,
  OrderTransfer,
  Stages,
  WhyUsList,
  Header,
  Footer,
} from "../components";
import { cardData } from "../data/card";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen min-w-full overflow-hidden">
        <BillBoard />
        <div>
          {cardData.map((cardItem) => (
            <TransferDescription
              key={cardItem.id}
              title={cardItem.title}
              body={cardItem.body}
              list={cardItem.list}
            />
          ))}
          <Carousel />
          <OrderTransfer />
          <Stages />
          <WhyUsList />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default HomePage;
