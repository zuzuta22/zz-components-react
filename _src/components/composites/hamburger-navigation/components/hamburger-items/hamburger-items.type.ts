export type HamburgerNavigationItemType = {
  url: string;
  name: string;
  order: number;
  isDisplayed?: boolean;
}

export type HamburgerNavigationItemsType = {
  linkItems: HamburgerNavigationItemType[];
  toggleIsHamburgerOpen: React.MouseEventHandler<HTMLAnchorElement>;
}