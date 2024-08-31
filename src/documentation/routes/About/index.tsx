import toast, { Toaster } from "react-hot-toast";

export const About = () => {
  const notify = () => toast.success("Hello World");
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
