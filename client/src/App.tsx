import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className=" background-light800_dark300">
          <Navbar />

          <div className="flex">
            <LeftSidebar />
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
