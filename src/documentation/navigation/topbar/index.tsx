import { useNavigate } from "react-router-dom";
import { Topbar } from "@/ui-kit/Navigation";
import { HeaderW } from "./style/HeaderW";

export const TopBar = () => {
  const navigate = useNavigate();
  const onlink = (route?: string) => {
    navigate(route);
  };
  const navLinks = [
    {
      title: "About",
      onClick: onlink,
      isActive: true,
      route: "/",
    },
    {
      title: "Docs",
      onClick: onlink,
      isActive: false,
      route: "/docs",
    },
  ];

  return (
    <HeaderW $gridArea={"topbar"}>
      <Topbar navitems={navLinks} blured />
    </HeaderW>
  );
};
