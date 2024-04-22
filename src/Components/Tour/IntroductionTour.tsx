'use client';
import { useState, useEffect } from 'react';
import { Introduction } from "./models";
import parse from 'html-react-parser';

interface Props {
  introduction: Introduction;
}

const IntroductionTour = ({ introduction }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="mt-8 lg:h-1/2">
      <div className="flex gap-8 container mx-auto ">
        <div className="flex-1">
          <h2 className="text-gray-800 text-xl">{introduction.introductionContent.secondaryTitle}</h2>
          <span className="block border-b border-gray-300 w-11/12 my-4"></span>
          {isClient && <div>{parse(introduction?.introductionContent?.content ?? '')}</div>}
        </div>
        <div className="flex-1">
          <img src={introduction?.map?.node.sourceUrl} alt="Mapa" />
        </div>
      </div>
    </section>
  );
};

export default IntroductionTour;