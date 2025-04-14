import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section>main content</section>
      </div>
    </>
  );
}

export default App;
