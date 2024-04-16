
interface MenuData {
  menu: Menu;
}

interface Menu {
  name: string;
  menuItems: MenuItems;
}

export interface MenuItems {
  nodes: MenuItem[];
}

export interface MenuItem {
  id: string;
  label: string;
  childItems: SubMenuItems;
}

export interface SubMenuItems {
  nodes: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
}