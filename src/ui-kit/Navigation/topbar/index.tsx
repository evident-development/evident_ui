import { FC, useState } from "react";
import { ITopbarProps, NavItem } from "./types/interface";
import {
  TopbarW,
  TopbarLinksW,
  TopbarLogoW,
  TopbarLink,
  TopbarAuthW,
  TopbarSearch,
  TobparSignin,
  TobparSignup,
} from "./style";

const defaultItems: NavItem[] = [
  {
    title: "Main",
    onClick: (p) => {
      console.log(p);
    },
  },
  {
    title: "About",
    onClick: (p) => {
      console.log(p);
    },
  },
  {
    title: "Content",
    onClick: (p) => {
      console.log(p);
    },
  },
];
export const Topbar: FC<ITopbarProps> = (props) => {
  const {
    bgColor,
    logo,
    isSignPanel,
    onSignin,
    onSignup,
    navitems,
    isSearchPanel,
    searchPlaceHolder,
    onSearch,
    linksColor,
    onLogo,
  } = props;

  const [navItems, setNavItems] = useState(() => navitems);

  const setActiveLink = (callback: Function, route: string, i: number) => {
    callback(route);
    const navLinksActive = navitems.map((link, ind) => {
      if (ind === i) {
        link.isActive = true;
      } else {
        link.isActive = false;
      }
      return link;
    });
    setNavItems(navLinksActive);
  };

  return (
    <TopbarW $bgColor={bgColor}>
      <TopbarLogoW onClick={onLogo}>{logo}</TopbarLogoW>
      <TopbarLinksW>
        {(navItems || defaultItems).map((item, i) => {
          return (
            <TopbarLink
              key={i}
              onClick={() => setActiveLink(item.onClick, item.route, i)}
              $isActive={item.isActive}
            >
              {item.title}
            </TopbarLink>
          );
        })}
      </TopbarLinksW>

      <TopbarAuthW $isSignPanel={isSignPanel}>
        <TopbarSearch
          $isSearchPanel={isSearchPanel}
          placeholder={searchPlaceHolder || "type to search"}
          onChange={onSearch}
        />
        <TobparSignin onClick={onSignin}>Sign in</TobparSignin>
        <TobparSignup onClick={onSignup}>Sign up</TobparSignup>
      </TopbarAuthW>
    </TopbarW>
  );
};
