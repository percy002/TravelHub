import React from "react";

function CardDestinations() {
  return (
    <div className="w-full">
      <div
        className="h-[90vh] md:h-[70vh] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
        style={{ backgroundImage: `url(/images/tours/inkatrail.jpg)` }}
      >
        <div className="flex flex-col justify-between h-full p-8">
          <div className="">
            <p className="border-2 border-black inline-block rounded-xl px-2 py-1 bg-white">
              Cusco
            </p>
          </div>
          <p className="text-white">12 tours</p>
        </div>
      </div>
    </div>
  );
}

export default CardDestinations;
