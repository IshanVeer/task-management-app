import { useState } from "react";
import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import Board from "./components/shared/Board";
import BoardForm from "./components/forms/BoardForm";
import Modal from "./components/ui/Modal";
import TaskForm from "./components/forms/TaskForm";

import { TasksProps } from "./types";

import DeleteBoard from "./components/shared/DeleteBoard";
import TaskDetails from "./components/shared/TaskDetails";
import DeleteTask from "./components/shared/DeleteTask";
import BoardProvider from "./context/BoardProvider";

function App() {
  const [selectedTask, setSelectedTask] = useState<TasksProps | null>(null);

  const [showSidebar, setShowSidebar] = useState(true);
  const [modalType, setModalType] = useState<
    | "add-board"
    | "add-task"
    | "delete-board"
    | "task-details"
    | "delete-task"
    | "edit-board"
    | null
  >(null);

  return (
    <>
      <ThemeProvider>
        <BoardProvider>
          {/* isOpen === true and modalType !==null */}
          <Modal isOpen={modalType !== null} onClose={() => setModalType(null)}>
            {modalType === "add-board" && (
              <BoardForm mode="create" onClose={() => setModalType(null)} />
            )}
            {modalType === "edit-board" && (
              <BoardForm mode="edit" onClose={() => setModalType(null)} />
            )}
            {modalType === "add-task" && (
              <TaskForm onClose={() => setModalType(null)} />
            )}
            {modalType === "delete-board" && (
              <DeleteBoard onClose={() => setModalType(null)} />
            )}
            {modalType === "task-details" && (
              <TaskDetails task={selectedTask} setModalType={setModalType} />
            )}
            {modalType === "delete-task" && (
              <DeleteTask
                selectedTask={selectedTask}
                onClose={() => setModalType(null)}
              />
            )}
          </Modal>

          <div className=" background-light800_dark300">
            <Navbar setModalType={setModalType} />

            <div className="flex">
              {showSidebar ? (
                <LeftSidebar
                  setShowSidebar={setShowSidebar}
                  setModalType={setModalType}
                />
              ) : (
                <div className="bg-primary-500 px-6 py-4 rounded-r-[50%] fixed bottom-12 self-start ">
                  <button
                    className="cursor-pointer"
                    onClick={() => setShowSidebar(true)}
                  >
                    <img
                      src="/icons/icon-show-sidebar.svg"
                      alt="show-sidebar"
                    />
                  </button>
                </div>
              )}
              <section className="flex-1 h-screen overflow-x-auto w-full  border-l border-light">
                <Board
                  setModalType={setModalType}
                  setSelectedTask={setSelectedTask}
                />
              </section>
            </div>
          </div>
        </BoardProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
