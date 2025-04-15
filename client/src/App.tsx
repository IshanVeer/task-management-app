import { useState } from "react";
import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import Board from "./components/shared/Board";

function App() {
  const [selectedBoard, setSelectedBoard] = useState("Platform Launch");
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <ThemeProvider>
        <div className=" background-light800_dark300">
          <Navbar
            setSelectedBoard={setSelectedBoard}
            selectedBoard={selectedBoard}
          />

          <div className="flex">
            {showSidebar ? (
              <LeftSidebar
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
                setShowSidebar={setShowSidebar}
              />
            ) : (
              <div className="bg-primary-500 px-6 py-4 rounded-r-[50%] fixed bottom-12 self-start ">
                <button
                  className="cursor-pointer"
                  onClick={() => setShowSidebar(true)}
                >
                  <img src="/icons/icon-show-sidebar.svg" alt="show-sidebar" />
                </button>
              </div>
            )}
            <section className="flex-1 h-screen overflow-x-auto w-full  border-l border-light">
              <Board selectedBoard={selectedBoard} />
            </section>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
