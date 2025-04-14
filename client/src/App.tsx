import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <div className="flex">
        <LeftSidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <section className="bg-light-800 w-full h-screen">
            main content
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
