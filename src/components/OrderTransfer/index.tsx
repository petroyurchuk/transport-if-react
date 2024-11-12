import React from "react";
import { Form, Title } from "../";

type OrderTransferProps = {};

const OrderTransfer: React.FC<OrderTransferProps> = () => {
  return (
    <div id="transfer" className="py-20 h-auto">
      <Title tag="h3" styles="font-bold text-xl text-white text-center mb-5">
        Замовити трансфер
      </Title>
      <Form />
    </div>
  );
};
export default OrderTransfer;
