import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import LeftSidebar from "./components/shared/LeftSidebar";
import Navbar from "./components/shared/Navbar";
import MobileNavbar from "./components/shared/MobileNavbar";
import Modal from "./components/ui/Modal";
import TaskForm from "./components/form/TaskForm";
import { useBoardData } from "./context/BoardProvider";
import type { ModalType } from "@/types";
import BoardForm from "./components/form/BoardForm";
import DeleteEvent from "./components/board/DeleteEvent";
import TaskDetail from "./components/board/TaskDetail";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [openModal, setOpenModal] = useState<ModalType>(null);
  const { selectedBoard } = useBoardData();

  const hideSidebarHandler = () => {
    setShowSidebar(false);
  };
  const showSideBarHandler = () => {
    setShowSidebar(true);
  };

  const openModalHandler = (modalType: ModalType) => {
    setOpenModal(modalType);
  };
  const closeModalHandler = () => setOpenModal(null);

  const renderModalContent = () => {
    if (!openModal) return null;

    switch (openModal) {
      case "add-task":
        return selectedBoard ? (
          <TaskForm selectedBoard={selectedBoard} />
        ) : null;

      case "edit-task":
        return selectedBoard ? (
          <TaskForm selectedBoard={selectedBoard} mode="edit" />
        ) : null;

      case "add-board":
        return <BoardForm />;
      case "edit-board":
        return <BoardForm mode="edit" />;

      case "delete-board":
        return <DeleteEvent />;
      case "delete-task":
        return <DeleteEvent />;
      case "task-detail":
        return <TaskDetail />;
    }
  };

  return (
    <>
      {openModal && (
        <Modal closeModalHandler={closeModalHandler}>
          {renderModalContent()}
        </Modal>
      )}
      <Navbar openModalHandler={openModalHandler} />
      <MobileNavbar />

      <div className="flex">
        <LeftSidebar
          openModalHandler={openModalHandler}
          showSidebar={showSidebar}
          hideSidebarHandler={hideSidebarHandler}
        />
        <section className="border-t background-light800_darkCustom overflow-x-auto  border-r flex-1">
          <Board
            openModalHandler={openModalHandler}
            showSidebar={showSidebar}
            showSideBarHandler={showSideBarHandler}
          />
        </section>
      </div>
    </>
  );
}

export default App;
