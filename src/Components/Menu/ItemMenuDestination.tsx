import { Card } from "flowbite-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  imagenURL: string;
  title: string;
}

const ItemMenuDestination = ({ imagenURL, title }: Props) => {
  return (
    <div className="col-span-1 group cursor-pointer">
      <div
        className="bg-cover bg-center h-[50vh] w-full transform group-hover:scale-105 transition-transform duration-200"
        style={{ backgroundImage: `url(${imagenURL})` }}
      >
        <div className="flex justify-end items-end h-full w-full bg-opacity-30 bg-black p-4">
          <div className="flex flex-col h-full justify-between ">
            <FaArrowRight className="h-10 w-10 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
            <h1
              className="block text-2xl font-semibold text-white flex-grow uppercase cursor-pointer transform rotate-180 transition-all duration-300 ease-in-out group-hover:text-center"
              style={{ writingMode: "vertical-lr" }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemMenuDestination;
