import axios from "axios";
import { orderSchemaT } from "../lib/types";

export const sendDataToBot = async (data: orderSchemaT) => {
  try {
    const chat_id = process.env.NEXT_PUBLIC_KEY_USER_ID;
    if (!chat_id) return;

    const params = new URLSearchParams({
      chat_id,
      text: `Name of customer: ${data.name}`,
    });

    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_API_KEY}/sendMessage?${params}`
    );
  } catch (error) {
    console.log(error);
  }
};
