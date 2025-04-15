import { useState } from "react";
import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import Board from "./components/shared/Board";

function App() {
  const [selectedBoard, setSelectedBoard] = useState("Platform Launch");
  return (
    <>
      <ThemeProvider>
        <div className=" background-light800_dark300">
          <Navbar selectedBoard={selectedBoard} />

          <div className="flex">
            <LeftSidebar
              selectedBoard={selectedBoard}
              setSelectedBoard={setSelectedBoard}
            />
            <section className="flex-1 h-screen border-l border-light">
              <Board selectedBoard={selectedBoard} />
            </section>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
