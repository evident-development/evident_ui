// import toast, { Toaster } from "react-hot-toast";

import {
  AboutAdTextW,
  AboutAdW,
  AboutColoboratorW,
  AboutW,
} from "./style/style";

// import { Topbar } from "@/ui-kit/Navigation";

export const About = () => {
  // const notify = () => toast.success("Hello World");
  return (
    <AboutW>
      <AboutColoboratorW>
        <div>Collaborators:</div>
        <div>Edgar Hovhannisyan</div>
      </AboutColoboratorW>
      <AboutAdW>
        <AboutAdTextW $fontSize={32} $color={"#c5d3ff"}>
          simple
        </AboutAdTextW>
        <AboutAdTextW $fontSize={34} $color={"#8fa8f9"}>
          beautiful
        </AboutAdTextW>
        <AboutAdTextW $fontSize={36} $color={"#7494fc"}>
          mighty
        </AboutAdTextW>
        <AboutAdTextW $fontSize={38} $color={"#577eff"}>
          rich
        </AboutAdTextW>
        <AboutAdTextW $fontSize={40} $color={"#3866ff"}>
          flexible
        </AboutAdTextW>
        <AboutAdTextW $fontSize={42} $color={"#2457ff"}>
          expandable
        </AboutAdTextW>
        <AboutAdTextW $fontSize={70} $color={"#033dff"}>
          evident - ui
        </AboutAdTextW>
      </AboutAdW>
    </AboutW>
  );
};
