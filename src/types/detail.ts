export type DetailInfoT = {
  id: string;
  mainTitle: string;
  typeOfList: "decimal" | "disc";
  list: List[];
};

type List = {
  id: string;
  title?: string;
  items: string[];
};
