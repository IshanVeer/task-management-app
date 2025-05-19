import "./App.css";
import Board from "./components/board/Board";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="border-t border-r flex-1">
          <Board />
        </section>
      </div>
    </>
  );
}

export default App;
