import React from "react";
import CardDestinations from "../UI/CardDestinations";

const OurDestinations = () => {
  return (
    <section className="container mx-auto sm:px-8">
      <div className="mt-32">
        <h2 className="text-center font-semibold text-5xl my-3">
          Experiencias Únicas
        </h2>
        <div className="flex justify-center">
          <p className="lg:w-2/3">
            Especialmente seleccionadas y diseñadas por el equipo de Trip Alpaca
            Adventure, nuestras Experiencias Únicas se arman con orgullo con la
            ayuda de expertos en su campo y una atención al detalle que es
            difícil de reproducir; y las Experiencias Clásicas de Trip Alpaca
            Adventure resumen los muchos aspectos destacados de Perú, mostrando
            los mejores sitios históricos del país, paisajes imperdibles y
            lugares de interés cultural.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:gap-4 mt-20">
        <CardDestinations/>
        <CardDestinations/>
        <CardDestinations/>
        <CardDestinations/>
      </div>
    </section>
  );
};

export default OurDestinations;
