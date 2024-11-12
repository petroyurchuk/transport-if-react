import { z } from "zod";

const transportEnum = z.enum([
  "Комфорт (від 0.8 EUR/km)",
  "Vip (від 0.8 EUR/km)",
  "Vip (from 1.1 EUR/km)",
  "Comfort (from 0.8 EUR/km)",
]);

export const orderSchema = z.object({
  name: z.string().min(3, "Your name is too short"),
  phone: z
    .string()
    .max(
      9,
      "Your phone number is not correct because it is over than 9 symbols"
    ),
  typeTransport: transportEnum,
  placeDeparture: z.string().min(3),
  placeArrival: z.string().min(3),
  date: z.string(),
});

export type orderSchemaT = z.infer<typeof orderSchema>;
