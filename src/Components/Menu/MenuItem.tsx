"use client";
import { Button, Navbar, Popover } from "flowbite-react";
import React, { useEffect, useMemo, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import SubMenuTrekking from "./SubMenuTrekking";

interface Props {
  menuItem: any;
}

const PopoverCustomTheme = {
  base: "absolute z-20 inline-block w-max max-w-[99vw] bg-white outline-none border border-gray-200 shadow-sm popover_custom",
  content: "z-10 overflow-hidden bg-white",
  arrow: {
    base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200",
    placement: "-4px",
  },
};

const ButtonCustomTheme = {
  size: {
    xs: "px-0 py-1 xl:px-2 text-xs",
  },
};
function MenuItem({ menuItem }: Props) {
  const [nodes, setNodes] = useState(menuItem.childItems.nodes);
  const [openPopover, setOpenPopover] = useState(false);
  useEffect(() => {
    setNodes(menuItem.childItems.nodes);
  }, [menuItem]);

  const subMenuComponent = useMemo(() => {
    return (
      <SubMenuTrekking
        subMenuItems={menuItem.childItems.nodes}
        title={menuItem.label}
        updateOpenPopover={setOpenPopover}
        openPopover={openPopover}
      />
    );
  }, [menuItem.childItems.nodes, menuItem.label]);

  if (nodes.length > 0) {
    return (
      <Popover
        key={nodes.length}
        content={subMenuComponent}
        trigger="click"
        theme={PopoverCustomTheme}
        onOpenChange={setOpenPopover}
        open={openPopover}
      >
        <Button
          theme={ButtonCustomTheme}
          size={"xs"}
          className="bg-transparent text-white border-none enabled:hover:bg-transparent focus:ring-0"
        >
          <span className="flex items-center text-sm md:text-base whitespace-nowrap">
            {menuItem.label} <BiCaretDown className="ml-2" />
          </span>
        </Button>
      </Popover>
    );
  } else {
    return (
      <Navbar.Link href={`/${menuItem.label.toLowerCase()}`} key={menuItem.id}>
        {menuItem.label}
      </Navbar.Link>
    );
  }
}

export default MenuItem;
