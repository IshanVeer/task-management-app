import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import BoardProvider from "./context/BoardProvider";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const hideSidebarHandler = () => {
    setShowSidebar(false);
  };
  const showSideBarHandler = () => {
    setShowSidebar(true);
  };
  return (
    <>
      <BoardProvider>
        <ThemeProvider>
          <Navbar />
          <div className="flex">
            <LeftSidebar
              showSidebar={showSidebar}
              hideSidebarHandler={hideSidebarHandler}
            />
            <section className="border-t background-light800_darkCustom  border-r flex-1">
              <Board
                showSidebar={showSidebar}
                showSideBarHandler={showSideBarHandler}
              />
            </section>
          </div>
        </ThemeProvider>
      </BoardProvider>
    </>
  );
}

export default App;
