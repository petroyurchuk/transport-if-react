import React from "react";
import { Card } from "../";
import { CardListT } from "../../types/card";

type TransferDescriptionProps = {
  title: string;
  body: string;
  list: CardListT[];
};

const TransferDescription: React.FC<TransferDescriptionProps> = ({
  title,
  body,
  list,
}) => {
  return (
    <section className="w-full flex justify-center items-center min-h-screen ">
      <Card body={body} title={title} list={list} buttonValue={"Закрити"} />
    </section>
  );
};
export default TransferDescription;
