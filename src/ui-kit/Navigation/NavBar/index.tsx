import { FC } from "react";
import { NavW } from "./style";
import { NavLogo } from "./style/NavLogo";
import { NavContent } from "./style/NavContent";
import { NavItems } from "./style/NavItems";

export interface INavBarProps {
  bgrnd?: string;
  clr?: string;
  wdth?: string;
  hgth?: string;
  navIcon?: string;
  navItems?: NavItem[];
  gridArea?: string;
}
export interface NavItem {
  title: string;
  onClick: () => void;
}

export const NavBar: FC<INavBarProps> = (props) => {
  const { navIcon, bgrnd, clr, wdth, navItems, hgth, gridArea } = props;

  const defaultItems: NavItem[] = [
    { title: "Main", onClick: () => {} },
    { title: "About", onClick: () => {} },
    { title: "Content", onClick: () => {} },
  ];
  return (
    <NavW $bgrnd={bgrnd} $clr={clr} $wdth={wdth} $hgth={hgth}>
      <NavLogo>
        <i className="material-icons">{navIcon || "water_drop"}</i>
      </NavLogo>
      <NavContent>
        {(navItems || defaultItems).map((item: NavItem) => {
          return (
            <NavItems key={item.title} onClick={item.onClick}>
              {item.title}
            </NavItems>
          );
        })}
      </NavContent>
    </NavW>
  );
};
