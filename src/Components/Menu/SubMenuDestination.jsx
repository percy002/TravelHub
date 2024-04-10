"use client";
import React from "react";
import { Card } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";
import ItemMenuDestination from "./ItemMenuDestination";

const ThemeCustomCard = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
const SubMenuDestination = () => {
  return (
    <div className="w-[90vw]">
      <div className="flex flex-col">
        <div className="grid grid-cols-6">
          <ItemMenuDestination
            imagenURL="/images/tours/inkatrail.jpg"
            title="Cusco"
          />
          <ItemMenuDestination
            imagenURL="/images/tours/inkatrail.jpg"
            title="Arequipa"
          />
          <ItemMenuDestination
            imagenURL="/images/tours/inkatrail.jpg"
            title="Lima"
          />
          <ItemMenuDestination
            imagenURL="/images/tours/inkatrail.jpg"
            title="Ica"
          />
          <ItemMenuDestination
            imagenURL="/images/tours/inkatrail.jpg"
            title="Puerto Maldonado"
          />
          <ItemMenuDestination
            imagenURL="/images/tours/inkatrail.jpg"
            title="Puno"
          />
        </div>
        
      </div>
    </div>
  );
};

export default SubMenuDestination;
