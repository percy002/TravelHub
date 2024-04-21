import React from "react";
import { Main } from "./models";

interface Props {
  main: Main;
}
const Hero = ({ main }: Props) => {
  return (
    <section>
      <div className="relative h-[90vh]">
        <img
          src={main.mainImage.node.sourceUrl}
          alt=""
          className="w-full h-full object-fit absolute top-0 left-0 filter brightness-50"
        />
        <div className="absolute left-5 xl:left-20 bottom-40">
          <h1 className="text-white text-6xl">{main.title.toUpperCase()}</h1>
          <span className="border-b-4 border-primary w-3/12 block my-4"></span>
          <p className="text-3xl text-white ">
            {main.tourDuration} | Desde{" "}
            <span className="font-semibold">US${main.tourprice}</span> por
            persona
          </p>
        </div>
      </div>
      <div className="">
        
      </div>
    </section>
  );
};

export default Hero;
