import { useNavigate } from "react-router-dom";
import { NavBar } from "@/ui-kit/Navigation";
import { HeaderW } from "./style/HeaderW";

export const TopBar = () => {
  const navigate = useNavigate();
  const navItems = [
    { title: "About", onClick: () => navigate("/") },
    { title: "Docs", onClick: () => navigate("/docs") },
  ];

  return (
    <HeaderW $gridArea={"topbar"}>
      <NavBar navItems={navItems} />
    </HeaderW>
  );
};
