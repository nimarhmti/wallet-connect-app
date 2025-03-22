import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.tsx";
import RootProvider from "./provider/Root.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </StrictMode>
);
