"use client";

import Link from "next/link";
import { Navbar, Popover, Button } from "flowbite-react";
import { Roboto_Condensed } from "next/font/google";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { MenuItems } from "./models";
import MenuItem from "./MenuItem";
import { HiPhone } from "react-icons/hi";

const CustomNavbar = {
  root: {
    base: "bg-white px-2 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-center",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  link: {
    active: {
      on: "bg-cyan-700 text-white border-b-2 border-secondary md:bg-transparent md:text-secondary text-base md:p-2",
      off: "border-b border-gray-100  text-white text-base hover:bg-gray-50  md:border-0 md:hover:bg-tertiary md:hover:bg-opacity-30 md:hover:border-b-4 md:hover:border-secondary md:p-2",
    },
  },
};
const robotoCondensed = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

const menuQuery = gql`
  {
    menu(id: "dGVybToxMg==") {
      name
      menuItems(where: { parentDatabaseId: 0 }) {
        nodes {
          id
          label
          path
          childItems {
            nodes {
              id
              label
              path
            }
          }
        }
      }
    }
  }
`;
function NavbarFB() {
  const [menuItems, setMenuItems] = useState<MenuItems>();

  const data: any = useSuspenseQuery(menuQuery).data;

  useEffect(() => {
    if (data) {
      setMenuItems(data.menu.menuItems);
    }
  }, [data]);


  return (
    <div
      className={`fixed top-0 w-full z-50 px-30 ${robotoCondensed.className}`}
    >
      <div className="bg-white hidden lg:block">
        <div className="flex flex-wrap justify-between container mx-auto pt-3 pb-2">
          <Link href="/">
            <img
              src="/images/logo/logo_trip_alpaca_black.png"
              className="h-[5.5rem]"
              alt="Logo"
            />
          </Link>
          <div className="flex flex-col gap-2">
            <div className="">
              <ul className="flex gap-5 text-sm">
                <li>
                  <Link href="/" className="border-r-2 border-black pr-4">
                    Blog de Viajes
                    
                  </Link>
                </li>
                <li>
                  <Link href="/" className="border-r-2 border-black pr-4">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="/" className="border-r-2 border-black pr-4">
                    Contáctenos
                  </Link>
                </li>
                <li>
                  <Link href="/">Idiomas</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-end items-center gap-4">
              <HiPhone className="text-2xl text-gray-700" />
              <span className="text-base ">+51 984 404 180</span>
              <Button className="bg-primary text-white ml-2">
                Contáctenos
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        className={`${robotoCondensed.className} bg-black`}
        theme={CustomNavbar}
      >
        <Navbar.Brand as={Link} href="/" className="lg:hidden">
            <img
              src="/images/logo/logo_color.jpg"
              className="h-[4.5rem]"
              alt="Logo"
            />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="md:block lg:hidden" />

        <Navbar.Collapse className="md:hidden lg:block">
          {menuItems?.nodes.map((menuItem) => (
            <MenuItem menuItem={menuItem} key={menuItem.id} />
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarFB;
