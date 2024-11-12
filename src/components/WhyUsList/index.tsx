import React from "react";
import { Title, WhyUsItem } from "../";
import { whyUsList } from "../../data/whyus";

type WhyUsListProps = {};
const WhyUsList: React.FC<WhyUsListProps> = () => {
  return (
    <div id="whyUs" className="max-w-[90%] w-full m-auto mb-10 ">
      <Title tag="h4" styles="font-bold text-3xl text-white mb-5">
        Чому ми?
      </Title>
      <div className="flex justify-center md:justify-normal gap-[25px] flex-wrap">
        {whyUsList.map(({ id, title, body }) => (
          <WhyUsItem key={id} title={title} description={body} />
        ))}
      </div>
    </div>
  );
};
export default WhyUsList;
