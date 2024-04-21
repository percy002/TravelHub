import React from "react";
import { HiPlayCircle } from "react-icons/hi2";
import { AccomodationAndGroup, Features } from "./models";
import { BiHotel } from "react-icons/bi";
import { TiGroupOutline } from "react-icons/ti";
import { PiMountainsLight, PiChartLineUpThin  } from "react-icons/pi";

interface Props {
  featureTour: Features;
  accomodationAndGroup: AccomodationAndGroup;
}
const FeaturesTour = ({ featureTour, accomodationAndGroup }: Props) => {
  return (
    <div className="">
      <div className="flex w-full justify-between px-10 lg:px-0 h-20">
        <div className="bg-primary p-5 hidden lg:flex lg:justify-center lg:items-center">
          <a href="">
            <HiPlayCircle className="h-10 w-10 text-white" />
          </a>
        </div>
        <div className="flex-grow grid grid-cols-4">
          <div className="flex justify-center items-center gap-1">
            <BiHotel className="h-10 w-10 text-primary" />
            <div className="col-span-1 flex flex-col justify-center text-gray-600">
              <span className="text-base font-semibold">{accomodationAndGroup.accommodation}</span>
              <span className="text-sm">Alojamiento</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <TiGroupOutline  className="h-10 w-10 text-primary" />
            <div className="col-span-1 flex flex-col justify-center text-gray-600">
              <span className="text-base font-semibold">{accomodationAndGroup.groupSize}</span>
              <span className="text-sm">Tamaño del Grupo</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <PiMountainsLight  className="h-10 w-10 text-primary" />
            <div className="col-span-1 flex flex-col justify-center text-gray-600">
              <span className="text-base font-semibold">{featureTour.maxaltitude} msnm</span>
              <span className="text-sm">Altitud Maxima</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1">
            <PiChartLineUpThin className="h-10 w-10 text-primary" />
            <div className="col-span-1 flex flex-col justify-center text-gray-600">
              <span className="text-base font-semibold">{featureTour.difficulty}</span>
              <span className="text-sm">Dificultad</span>
            </div>
          </div>
          
        </div>
        <div className="p-5 flex items-center justify-center hidden lg:flex lg:justify-center lg:items-center">
          <a href="" className="bg-gray-700 text-white p-2 text-center">
            Descargar Folleto
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTour;
