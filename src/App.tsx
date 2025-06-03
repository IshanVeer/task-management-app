import "./App.css";
import Board from "./components/board/Board";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <div className="flex">
          <LeftSidebar />
          <section className="border-t border-r flex-1">
            <Board />
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
