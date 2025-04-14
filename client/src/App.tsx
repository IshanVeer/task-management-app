import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="bg-light-700 w-full">main content</section>
      </div>
    </>
  );
}

export default App;
