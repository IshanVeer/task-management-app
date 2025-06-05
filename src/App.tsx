import "./App.css";
import Board from "./components/board/Board";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import BoardProvider from "./context/BoardProvider";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <BoardProvider>
        <ThemeProvider>
          <Navbar />
          <div className="flex">
            <LeftSidebar />
            <section className="border-t background-light800_darkCustom  border-r flex-1">
              <Board />
            </section>
          </div>
        </ThemeProvider>
      </BoardProvider>
    </>
  );
}

export default App;
