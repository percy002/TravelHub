import React from "react";
import Image from "next/image";
interface Props {
  urlImage: string;
  alt: string;
}
const HeroImage = ({ urlImage, alt }: Props) => {
  return (
    <div className="w-screen">
      <Image
        src={urlImage}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default HeroImage;
