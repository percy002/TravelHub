import React from "react";

const HeroVideo = () => {
  return (
    <div className="relative h-0 pb-[56.25%] transform -z-20">
      <iframe
        className="absolute inset-0 w-full h-full border-0 transform"
        src="//www.youtube.com/embed/NkJUx2fJZ6s?wmode=transparent&autoplay=1&controls=0&showinfo=0&rel=0&enablejsapi=1&loop=1&playlist=NkJUx2fJZ6s&mute=1"
        title="Trip Alpaca Adventure"
        allowFullScreen
      />
      <div className="absolute inset-0 bg-black bg-opacity-10">
        <div className="">
          <img
            src="images/logo/logo_blanco.png"
            alt="Descripción de la imagen"
            width={200}
            height={200}
            className="w-2/6 ml:10 mt-24 md:p-4"
          />
        </div>
        <div className="flex justify-center items-center md:mt-10">
          <h1 className="text-white text-2xl md:text-6xl mb-4 font-semibold">
            Historias para contar
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
