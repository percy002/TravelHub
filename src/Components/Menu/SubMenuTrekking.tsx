import { FaArrowRight } from "react-icons/fa";
import OptionsSubMenu from "./OptionsSubMenu";
import { useEffect, useState } from "react";
import { SubMenuItem } from "./models";
import Link from "next/link";
interface Props {
  subMenuItems: SubMenuItem[];
  title: string;
}
const SubMenuTrekking = ({ subMenuItems, title }: Props) => {
  const [optionsTrekking, setOptionsTrekking] = useState<string[]>();

  return (
    <div className="w-[100vw] px-6 mt-14">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 border-r border-gray-200 p-2">
          <h3 className="flex flex-col">
            Tours a {title}
            <span className="border-b-2 border-primary pb-3 w-1/3"></span>
          </h3>
          <ul className="flex flex-col gap-4 text-base">
            {subMenuItems &&
              subMenuItems.map((subMenuItem) => (
                <Link
                  href={`${subMenuItem.path.toLowerCase()}`}
                  key={subMenuItem.id}
                >
                  <li
                    key={subMenuItem.id}
                    className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200 group"
                  >
                    {subMenuItem.label}{" "}
                    <FaArrowRight className="text-primary hidden group-hover:block" />
                  </li>
                </Link>
              ))}
            <li className="cursor-pointer flex justify-between items-center p-3 border-b border-gray-200 group text-primary">
              Ver todos los tours a {title}
              <FaArrowRight className="text-primary hidden group-hover:block" />
            </li>
          </ul>
        </div>
        <div className="col-span-1 border-r border-gray-200 p-2">
          <h3 className="flex flex-col">
            {title}
            <span className="border-b-2 border-primary pb-3 w-1/3"></span>
          </h3>
          <p className="pt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            ullam expedita illum at voluptatem. Commodi sit mollitia illum
            porro, sapiente aspernatur deleniti ab, quis laudantium temporibus
            deserunt culpa harum, non quae earum voluptas doloribus.
            Reprehenderit quia cumque possimus nesciunt a.
          </p>
          <OptionsSubMenu items={optionsTrekking ? optionsTrekking : []} />
        </div>
        <div className="col-span-1 p-5 flex justify-center">
          <img
            src="/images/tours/inkatrail.jpg"
            className="w-8/12 rounded-lg"
            alt="image sub menu"
          />
        </div>
      </div>
    </div>
  );
};

export default SubMenuTrekking;
