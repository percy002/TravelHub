import { FaArrowRight } from "react-icons/fa";
import OptionsSubMenu from "./OptionsSubMenu";
import { useState } from "react";

const SubMenuTrekking = () => {
  const [optionsTrekking, setOptionsTrekking] = useState<string[]>();
  const HandleClick = () => {
    setOptionsTrekking(["Camino Inca 2 Dias", "Camino Inca 4 Dias"]);
  };
  return (
    <div className="w-[80vw] p-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 border-r border-gray-200 p-2">
          <ul className="flex flex-col gap-4 text-base">
            <li
              className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200"
              onClick={HandleClick}
            >
              Camino Inca <FaArrowRight className="text-primary" />
            </li>
            <li className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200">
              Choquequirao <FaArrowRight />
            </li>
            <li className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200">
              Valle Lares <FaArrowRight />
            </li>
            <li className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200">
              Ausangate <FaArrowRight />
            </li>
            <li className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200">
              Salkantay <FaArrowRight />
            </li>
            <li className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200">
              Ver todo <FaArrowRight />
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <OptionsSubMenu
            items={optionsTrekking ? optionsTrekking : []}
          />
        </div>
        <div className="col-span-1">
          <img src="images/tours/inkatrail.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SubMenuTrekking;
