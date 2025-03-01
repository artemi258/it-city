export interface IMenu {
 title: string;
 href: string;
}

export interface IMenuWithSubMenu extends IMenu {
 subMenu: {
  title: string;
  href: string;
 }[];
}

export interface IMenuFetch {
 latin: string;
 ru: string;
}
