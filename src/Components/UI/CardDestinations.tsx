import { Button } from "flowbite-react";
import React from "react";

function CardDestinations() {
  return (
    <div className="w-full">
      <div className="relative h-[90vh] md:h-[70vh] rounded-md shadow-lg overflow-hidden group cursor-pointer">
        {/* Fondo con escala aumentada al hacer hover */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(/images/tours/inkatrail.jpg)` }}
        ></div>

        {/* Contenido */}
        <div className="flex flex-col justify-between h-full p-8 relative z-10">
          <div className="">
            <h3 className="text-xl font-black border-b text-white">Cusco</h3>
            <p className="text-white">12 tours</p>
            <div className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                perferendis facere quam deleniti eum sint repudiandae deserunt
                modi optio quos.
              </p>
              <div className="flex justify-center">
                <Button className="bg-primary text-white mt-2 text-sm child-p-0">
                  Ver Más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDestinations;
