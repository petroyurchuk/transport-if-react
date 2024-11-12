export type listPricesT = {
  [id: string]: listPriceT[][];
};

export type listPriceT = {
  id: string;
  quantity: string;
  generalPrice: string;
};
