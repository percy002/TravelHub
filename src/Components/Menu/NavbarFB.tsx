"use client";

import Link from "next/link";
import { Navbar, Popover, Button } from "flowbite-react";
import SubMenuTrekking from "./SubMenuTrekking";
import submenuDestinations from "./SubmenuDestination";
import { BiCaretDown } from "react-icons/bi";
const CustomNavbar = {
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
  },
  link: {
    active: {
      on: "bg-cyan-700 text-white border-b-2 border-secondary md:bg-transparent md:text-secondary text-base md:p-2",
      off: "border-b border-gray-100  text-gray-700 text-base hover:bg-gray-50  md:border-0 md:hover:bg-tertiary md:hover:bg-opacity-30 md:hover:text-secondary md:hover:border-b-2 md:hover:border-secondary md:p-2 md:rounded-t-xl",
    },
  },
};

const CustomThemePopover = {
  base: "absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",
  content: "z-10 overflow-hidden rounded-[7px] lg:absolute lg:left-[-32rem] xl:left-[-48rem] bg-white",
  arrow: {
    base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",
    placement: "-4px",
  },
};

function NavbarFB() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 w-full z-50 px-30"
      theme={CustomNavbar}
    >
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img
          src="/images/logo/logo_black.jpg"
          className="mr-3 h-6 sm:h-20"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Inicio
        </Navbar.Link>
        <Popover
          content={SubMenuTrekking()}
          trigger="click"
        >
          <Button className="bg-transparent text-gray-700 border-none enabled:hover:bg-transparent focus:ring-0">
            <span className="flex items-center text-base">
              Caminatas <BiCaretDown className="ml-2" />
            </span>
          </Button>
        </Popover>
        <Popover
          content={submenuDestinations()}
          trigger="click"
          theme={CustomThemePopover}
        >
          <Button className="bg-transparent text-gray-700 border-none enabled:hover:bg-transparent focus:ring-0">
            <span className="flex items-center text-base">
              Destinos <BiCaretDown className="ml-2" />
            </span>
          </Button>
        </Popover>
        <Navbar.Link href="#">Sobre Nosotros</Navbar.Link>
        <Navbar.Link href="#">Contáctenos</Navbar.Link>
        <Navbar.Link href="#">Idiomas</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarFB;
