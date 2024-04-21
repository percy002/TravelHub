"use client";

import { Card, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const CardCustomTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md",
    children: "flex h-full flex-col justify-center gap-4 p-2",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
function CardFB() {
  return (
    <Card
      theme={CardCustomTheme}
      className="max-w-sm"
      renderImage={() => (
        <Image
          width={400}
          height={500}
          src="/images/tours/inkatrail.jpg"
          alt="inkatrail"
          className="object-cover w-full rounded-t-md"
        />
      )}
    >
      <div className="">
        <p className="mb-1">4 dias / 3 noches</p>
        <h3 className="text-2xl font-black tracking-tight text-gray-900">
          InkaTrail
        </h3>
        <div className="flex justify-end">
          <Link href={"#"}>
            <Button className="bg-primary text-white enabled:hover:bg-secondary">
              Reservar
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default CardFB;
