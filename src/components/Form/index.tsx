"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWrapper, Title } from "../";
import { orderSchema, orderSchemaT } from "../../lib/types";
import { sendDataToBot } from "../../services/sendDataToBot";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast/headless";

type FormProps = {};
const Form: React.FC<FormProps> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [initialValue, setInitialValue] = React.useState("Вид транспорту");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<orderSchemaT>({ resolver: zodResolver(orderSchema) });

  const handleSelectTypeTransport = (
    value:
      | "Комфорт (від 0.8 EUR/km)"
      | "Vip (від 0.8 EUR/km)"
      | "Vip (from 1.1 EUR/km)"
      | "Comfort (from 0.8 EUR/km)"
  ) => {
    setInitialValue(value);
    setValue("typeTransport", value);
    setIsOpen(false);
  };

  const submitHandler = async (data: orderSchemaT) => {
    await sendDataToBot(data);
    toast.success("Your request sended successfully");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 1500,
          }}
        />
        <InputWrapper>
          <input
            className="input-form"
            type="text"
            {...register("name")}
            name="name"
            placeholder="Name..."
          />
          {errors.name?.message && (
            <p className=" text-red-500 mt-2 text-center">
              {"Ваше ім'я занадто коротке"}
            </p>
          )}
        </InputWrapper>
        <InputWrapper>
          <input
            className="input-form"
            type="tel"
            {...register("phone")}
            name="phone"
            placeholder="Phone number..."
          />
          {errors.phone?.message && (
            <p className=" text-red-500 mt-2 text-center">
              {
                "Ваш номер телефону неправильний, оскільки він містить більше 9 символів"
              }
            </p>
          )}
        </InputWrapper>
      </div>
      <Title tag="h4" styles="font-bold  text-white text-center my-5">
        Деталі поїздки:
      </Title>
      <div className="w-full flex justify-center gap-5">
        <InputWrapper>
          <div className="relative">
            <button className="input-form" onClick={() => setIsOpen(!isOpen)}>
              {initialValue}
            </button>
            {isOpen && (
              <div className="absolute -bottom-400 max-w-[300px] w-full z-10">
                {["Комфорт (від 0.8 EUR/km)", "Vip (від 1.1 EUR/km)"].map(
                  (item, idx) => (
                    <div
                      onClick={() =>
                        handleSelectTypeTransport(
                          item as
                            | "Комфорт (від 0.8 EUR/km)"
                            | "Vip (від 0.8 EUR/km)"
                        )
                      }
                      key={idx}
                      className="select-form"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </InputWrapper>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
        <InputWrapper>
          <input
            className="input-form"
            type="text"
            {...register("placeDeparture")}
            name="placeDeparture"
            placeholder="Enter place you are going from..."
          />
        </InputWrapper>
        <InputWrapper>
          <input
            className="input-form"
            type="text"
            {...register("placeArrival")}
            name="placeArrival"
            placeholder="Enter place you are going to..."
          />
        </InputWrapper>
        <InputWrapper>
          <input
            className="input-form"
            type="date"
            {...register("date")}
            name="date"
            placeholder="Choose date..."
          />
        </InputWrapper>
      </div>
      <button
        type="submit"
        className="text-white px-5 py-2 bg-purple-800 transition-all duration-150 hover:bg-purple-600 block m-auto mt-5 rounded-md max-w-[300px] min-w-[200px]"
      >
        Надіслати
      </button>
    </form>
  );
};
export default Form;
