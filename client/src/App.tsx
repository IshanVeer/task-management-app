import { useState } from "react";
import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import Board from "./components/shared/Board";
import BoardForm from "./components/forms/BoardForm";
import Modal from "./components/ui/Modal";
import TaskForm from "./components/forms/TaskForm";
import { data as initialData } from "./constants";

function App() {
  const [selectedBoard, setSelectedBoard] = useState("Platform Launch");
  const [showSidebar, setShowSidebar] = useState(true);
  const [modalType, setModalType] = useState<"add-board" | "add-task" | null>(
    null
  );

  // data for boards
  const [boards, setBoards] = useState(initialData.boards);

  return (
    <>
      <ThemeProvider>
        {/* isOpen === true and modalType !==null */}
        <Modal isOpen={modalType !== null} onClose={() => setModalType(null)}>
          {modalType === "add-board" && <BoardForm setBoards={setBoards} />}
          {modalType === "add-task" && <TaskForm />}
        </Modal>

        <div className=" background-light800_dark300">
          <Navbar
            setSelectedBoard={setSelectedBoard}
            selectedBoard={selectedBoard}
            openModalHandler={setModalType}
          />

          <div className="flex">
            {showSidebar ? (
              <LeftSidebar
                boards={boards}
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
                setShowSidebar={setShowSidebar}
                openModalHandler={setModalType}
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
              <Board boards={boards} selectedBoard={selectedBoard} />
            </section>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
