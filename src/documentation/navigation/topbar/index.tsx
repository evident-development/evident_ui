import { useNavigate } from "react-router-dom";
import { Topbar } from "@/ui-kit/Navigation";
import { HeaderW } from "./style/HeaderW";
import { title } from "process";

export const TopBar = () => {
  const navigate = useNavigate();
  const navItems = [
    { title: "About", onClick: () => navigate("/") },
    { title: "Docs", onClick: () => navigate("/docs") },
  ];

  return (
    <HeaderW $gridArea={"topbar"}>
      <Topbar navitems={navItems} />
    </HeaderW>
  );
};
