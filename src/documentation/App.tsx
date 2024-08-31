import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { TopBar } from "./navigation";
import "./index.css";
import { Container } from "./style/Container";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <Container>
      <TopBar />
      <Router />
    </Container>
  );
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
