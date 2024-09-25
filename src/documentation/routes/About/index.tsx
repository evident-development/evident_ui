import toast, { Toaster } from "react-hot-toast";

import { Topbar } from "@/ui-kit/Navigation";

export const About = () => {
  const notify = () => toast.success("Hello World");
  return (
    <div style={{ position: "relative", top: "200px" }}>
      <Toaster />
    </div>
  );
};
