import { FC } from "react";
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
  { title: "Main", onClick: () => {} },
  { title: "About", onClick: () => {} },
  { title: "Content", onClick: () => {} },
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
  return (
    <TopbarW $bgColor={bgColor}>
      <TopbarLogoW onClick={onLogo}>{logo}</TopbarLogoW>
      <TopbarLinksW>
        {(navitems || defaultItems).map((item, i) => {
          return (
            <TopbarLink key={i} $linksColor={linksColor} onClick={item.onClick}>
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
