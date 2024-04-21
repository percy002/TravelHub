import React from "react";
import { AccordionDouble } from "../UI";

const FrecuentlyAskedQuestions = () => {
  return (
    <section className="container mx-auto mt-32">
      <h2 className="text-center font-semibold text-5xl my-3">
        Preguntas Frecuentes
      </h2>
      <div className="flex justify-center">
        <p className="lg:w-2/3 text-center">
          The Most Frecuently Asked Questions at Salkantay Trekking
        </p>
      </div>
      <div className="">
        <AccordionDouble/>
      </div>
    </section>
  );
};

export default FrecuentlyAskedQuestions;
