import { useEffect, useState } from "react";
import "./App.css";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import Board from "./components/shared/Board";
import BoardForm from "./components/forms/BoardForm";
import Modal from "./components/ui/Modal";
import TaskForm from "./components/forms/TaskForm";
import { onValue, ref } from "firebase/database";
import { database } from "./firebase";
import { BoardProps } from "./types";
import { data } from "./constants";

function App() {
  const [boards, setBoards] = useState<BoardProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedBoard, setSelectedBoard] = useState("Platform Launch");
  const [showSidebar, setShowSidebar] = useState(true);
  const [modalType, setModalType] = useState<"add-board" | "add-task" | null>(
    null
  );
  console.log(data, "data from constants");

  // fetch board data
  useEffect(() => {
    //create reference to your boards location in your firebase
    const boardsRef = ref(database, "boards");
    // listen to real time data
    const unsubscribe = onValue(
      boardsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          // we get board data as raw value from snapshot
          const boardData = snapshot.val();
          // turn that raw value in array
          const boardArray = Object.keys(boardData).map((key) => ({
            id: key,
            ...boardData[key],
          }));
          setBoards(boardArray);

          // if no board is selected choose the 1st board

          if (!selectedBoard && boardArray.length > 0) {
            setSelectedBoard(boardArray[0] || boardArray[0].id);
          }
        } else {
          setBoards([]);
        }
        setLoading(false);
      },
      (error) => {
        console.log("Error fetching boads", error);
      }
    );

    return () => unsubscribe();
  }, [selectedBoard]);
  console.log(boards, "boards data");

  return (
    <>
      <ThemeProvider>
        {/* isOpen === true and modalType !==null */}
        <Modal isOpen={modalType !== null} onClose={() => setModalType(null)}>
          {modalType === "add-board" && (
            <BoardForm onClose={() => setModalType(null)} />
          )}
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
