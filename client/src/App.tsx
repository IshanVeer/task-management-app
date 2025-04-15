import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className=" bg-light-800">
          <Navbar />

          <div className="flex">
            <LeftSidebar />
            <section className="flex-1 border-l border-light-700">
              main content
            </section>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
