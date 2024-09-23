import { FC } from "react";
import { ITopbarProps, NavItem } from "./types/interface";
import {
  TopbarW,
  TopbarLinksW,
  TopbarLogoW,
  TopbarLink,
  TopbarAuthW,
  TopbarSearch,
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
  } = props;
  return (
    <TopbarW $bgColor={bgColor}>
      <TopbarLogoW>{logo}</TopbarLogoW>
      <TopbarLinksW>
        {(navitems || defaultItems).map((item, i) => {
          return <TopbarLink key={i}>{item.title}</TopbarLink>;
        })}
      </TopbarLinksW>

      <TopbarAuthW $isSignPanel={isSignPanel}>
        <TopbarSearch
          $isSearchPanel={isSearchPanel}
          placeholder={searchPlaceHolder || "type to search"}
          onChange={onSearch}
        />
        <div onClick={onSignin}>Sign in</div>
        <div onClick={onSignup}>Sign up</div>
      </TopbarAuthW>
    </TopbarW>
  );
};
