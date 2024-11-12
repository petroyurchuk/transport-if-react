export type CardListT = {
  id: number;
  value: string;
};

export type CardT = {
  id: number;
  title: string;
  body: string;
  list: CardListT[];
};
