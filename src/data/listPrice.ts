import { listPriceT, listPricesT } from "../types/listPrice";

const listPrice: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "12 000 грн",
  },
];

const listPrice2: listPriceT[] = [
  {
    id: "1",
    quantity: "за 1 особу",
    generalPrice: "900 грн",
  },
  {
    id: "2",
    quantity: "діти з 6 до 14 років",
    generalPrice: "900 грн./особу",
  },
];
const listPrice3: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "7000 грн",
  },
  {
    id: "2",
    quantity: "від 9 до 16 осіб",
    generalPrice: "9000 грн.",
  },
  {
    id: "3",
    quantity: "більше 16 осіб",
    generalPrice: "прораховується персонально",
  },
];
const listPrice4: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "13 000 грн",
  },
];
const listPrice5: listPriceT[] = [
  {
    id: "1",
    quantity: "дорослі",
    generalPrice: "1000 грн./особа",
  },
  {
    id: "2",
    quantity: "діти від 6 до 14 років",
    generalPrice: "800 грн./особа",
  },
];
const listPrice6: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "4 500 грн.",
  },
  {
    id: "2",
    quantity: "до 16 осіб",
    generalPrice: "5 500 грн.",
  },
];
const listPrice7: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "6 700 грн",
  },
];
const listPrice8: listPriceT[] = [
  {
    id: "1",
    quantity: "4-5 осіб",
    generalPrice: "2 500 грн",
  },
  {
    id: "2",
    quantity: "Важливо! Цінова політика, може змінюватись.",
    generalPrice:
      "Тому пишіть на Telegram або телефонуйте Ми надамо детальну інформацію! ",
  },
];
const listPrice9: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "12 500 грн",
  },
];
const listPrice10: listPriceT[] = [
  {
    id: "1",
    quantity: "дорослі",
    generalPrice: "900 грн./особа",
  },
  {
    id: "2",
    quantity: "діти від 6 до 14 років",
    generalPrice: "800 грн./особа",
  },
];
const listPrice11: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "7 500 грн./похід",
  },
  {
    id: "2",
    quantity: "від 8 до 16 осіб",
    generalPrice: "9 500 грн./похід",
  },
  {
    id: "3",
    quantity: "більше 16 осіб ",
    generalPrice: "прораховується персонально",
  },
];
const listPrice12: listPriceT[] = [
  {
    id: "1",
    quantity: "4-5 осіб",
    generalPrice: "3 000 грн./похід",
  },
  {
    id: "2",
    quantity: "Важливо! Цінова політика, може змінюватись.",
    generalPrice:
      "Тому пишіть на Telegram або телефонуйте Ми надамо детальну інформацію! ",
  },
];
const listPrice13: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "4 500 грн.",
  },
  {
    id: "2",
    quantity: "до 16 осіб",
    generalPrice: "5 500 грн.",
  },
];
const listPrice14: listPriceT[] = [
  {
    id: "1",
    quantity: "Важливо! Ціна залежить від місця відбуття.",
    generalPrice:
      "Тому пишіть на Telegram  або телефонуйте Ми надамо детальну інформацію! ",
  },
];
const listPrice15: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "8 000 грн./похід",
  },
  {
    id: "2",
    quantity: "від 8 до 16 осіб",
    generalPrice: "10 000 грн./похід",
  },
  {
    id: "3",
    quantity: "більше 16 осіб ",
    generalPrice: "прораховується персонально",
  },
];
const listPrice16: listPriceT[] = [
  {
    id: "1",
    quantity: "Важливо! Ціна залежить від місця.",
    generalPrice:
      "Тому пишіть на Telegram  або телефонуйте Ми надамо детальну інформацію! ",
  },
];

export const listPrices: listPricesT = {
  "1": [listPrice9, listPrice10, listPrice13, listPrice11],
  "2": [listPrice4, listPrice5, listPrice6, listPrice15],
  "3": [listPrice7, listPrice8],
  "4": [listPrice9, listPrice10, listPrice13, listPrice11],
  "5": [listPrice13],
  "6": [listPrice12],
  "7": [listPrice12],
  "8": [listPrice8],
  "9": [listPrice9, listPrice10, listPrice13, listPrice11],
  "10": [listPrice14],
  "11": [listPrice8],
  "12": [listPrice12],
  "13": [listPrice16],
  "14": [listPrice14],
  "15": [listPrice9, listPrice10, listPrice13, listPrice11],
  "16": [listPrice13],
};
