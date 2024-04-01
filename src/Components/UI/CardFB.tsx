"use client";

import { Card, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

function CardFB() {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => (
        <Image
          width={400}
          height={500}
          src="/images/tours/inkatrail.jpg"
          alt="inkatrail"
          className="object-cover w-full"
        />
      )}
    >
      <div className="">
        <p className="mt-1">4 dias / 3 noches</p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          InkaTrail
        </h5>
        <div className="flex justify-end">
          <Link href={"#"}>
            <Button className="bg-cyan-900">Reservar</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default CardFB;
