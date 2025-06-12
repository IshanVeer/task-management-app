import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BoardProvider from "./context/BoardProvider.tsx";
import ThemeProvider from "./context/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BoardProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BoardProvider>
  </StrictMode>
);
