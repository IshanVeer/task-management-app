import NoColumnPage from "./NoColumnPage";
import Column from "./Column";
import { useBoardContext } from "@/context/BoardProvider";
import { TasksProps, ModalTypes } from "@/types";

interface Props {
  setSelectedTask: React.Dispatch<React.SetStateAction<TasksProps | null>>;

  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
}

const Board = ({ setModalType, setSelectedTask }: Props) => {
  const { selectedBoard, boards } = useBoardContext();
  const selectedBoardData = boards.find(
    (board) => board.name === selectedBoard
  );

  if (!selectedBoardData || selectedBoardData?.columns?.length === 0) {
    return (
      <div>
        <NoColumnPage />
      </div>
    );
  }

  return (
    <div className="flex p-6 gap-6">
      {selectedBoardData?.columns.map((column) => (
        <Column
          setSelectedTask={setSelectedTask}
          setModalType={setModalType}
          key={column.name}
          tasks={column?.tasks}
          taskQty={column.tasks?.length || 0}
          name={column.name}
        />
      ))}
      {selectedBoardData?.columns?.length && (
        <div
          className="light-gradient mt-7 mb-2 flex flex-col items-center h-screen justify-center w-[280px] flex-shrink-0 rounded-sm dark:bg-linear-0 dark:bg-[#353646]
"
        >
          <button
            onClick={() => setModalType("edit-board")}
            className="h1-bold hover:text-primary-500   transition duration-150 cursor-pointer text-light-600"
          >
            {" "}
            + New Column
          </button>
        </div>
      )}
    </div>
  );
};

export default Board;
