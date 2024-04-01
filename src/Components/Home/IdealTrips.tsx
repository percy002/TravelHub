import React from "react";
import CardFB from "../UI/CardFB";

const IdealTrips = () => {
  return (
    <section className="container mx-auto">
      <div className="">
        <div className="mt-32">
          <h2 className="text-center font-semibold text-5xl my-3">
            Tours Ideales
          </h2>
          <div className="flex justify-center">

          <p className="lg:w-2/3">
            Our collection of ideal routes through Peru each offer their own
            personalized theme, route and list of attractions, often exclusive,
            put together by the expert team at Trip Alpaca Adventure.
          </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-0 sm:flex-row sm:justify-around sm:p-5">
            <CardFB/>
            <CardFB/>
            <CardFB/>
        </div>
      </div>
    </section>
  );
};

export default IdealTrips;
