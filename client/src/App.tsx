import { useState } from "react";
import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  const [selectedBoard, setSelectedBoard] = useState("Platform Launch");
  return (
    <>
      <ThemeProvider>
        <div className=" background-light800_dark300">
          <Navbar selectedBoard={selectedBoard} />

          <div className="flex">
            <LeftSidebar setSelectedBoard={setSelectedBoard} />
            <section className="flex-1 border-l border-light">
              main content
            </section>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
