import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useBoardData } from "@/context/BoardProvider";

interface BoardFormProps {
  mode?: string;
  closeModalHandler: () => void;
}

const BoardForm = ({ mode, closeModalHandler }: BoardFormProps) => {
  const { createBoard, selectedBoard, editBoard } = useBoardData();
  // board name state
  const [boardName, setBoardName] = useState("");

  // Column state
  const [columns, setColumns] = useState<string[]>([""]);
  const [boardNameInputError, setBoardNameInputError] = useState(false);
  const [boardColumnInputErrors, setBoardColumnInputErrors] = useState<
    boolean[]
  >([]);
  const [hasTriedSubmitting, setHasTriedSubmitting] = useState(false);

  useEffect(() => {
    if (mode === "edit" && selectedBoard) {
      setBoardName(selectedBoard?.name);
      setColumns(selectedBoard?.columns.map((column) => column.name));
      setBoardColumnInputErrors(selectedBoard?.columns.map(() => false)); //initialise false error for each column
    }
  }, [mode, selectedBoard]);

  // handle name change

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
    if (boardNameInputError && e.target.value.trim() !== "") {
      setBoardNameInputError(false);
    }
  };

  // handle column change
  const handleColumnChange = (index: number, value: string) => {
    const updatedColumns = [...columns];
    updatedColumns[index] = value;
    setColumns(updatedColumns);

    if (boardColumnInputErrors[index] && value.trim() !== "") {
      const updatedErrors = [...boardColumnInputErrors];
      updatedErrors[index] = false;
      setBoardColumnInputErrors(updatedErrors);
    }
  };

  // add column
  const addColumnHandler = () => {
    setColumns([...columns, ""]);
  };

  // remove column
  const removeColumnHandler = (index: number) => {
    const updatedColumns = columns.filter((_, i) => i !== index);
    setColumns(updatedColumns);
  };
  // handle create board form submit

  const submitBoardFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setHasTriedSubmitting(true);
    if (!boardName.trim()) {
      setBoardNameInputError(true);
      return;
    }
    const columnErrors = columns.map((column) => column.trim() === "");

    if (columnErrors.some((error) => error)) {
      setBoardColumnInputErrors(columnErrors);
      return;
    }

    if (mode === "edit" && selectedBoard) {
      editBoard(selectedBoard.id, boardName, columns);
    } else {
      createBoard(boardName, columns);
    }

    closeModalHandler();
  };

  return (
    <Card>
      {mode === "edit" ? (
        <>
          <h2 className="h2-bold">Edit Board</h2>
        </>
      ) : (
        <h2 className="h2-bold">Add New Board</h2>
      )}
      <form onSubmit={submitBoardFormHandler} className="py-4" action="submit">
        <div className="flex flex-col gap-3 mb-6">
          {" "}
          <label className="body-bold text-light-600" htmlFor="name">
            Name
          </label>
          <input
            className={`px-4 py-2 placeholder:text-[13px] focus:outline-none border rounded-[4px] ${
              boardNameInputError && hasTriedSubmitting
                ? "border-red-500 placeholder:text-red-500"
                : ""
            }`}
            placeholder={`${
              boardNameInputError && hasTriedSubmitting
                ? "Can't be empty"
                : "e.g. Web Design"
            } `}
            id="name"
            type="text"
            value={boardName ?? ""}
            onChange={nameInputHandler}
          />
        </div>
        {/* Columns */}
        <div className="w-full mb-2">
          <p className="mb-3 body-bold text-light-600">Columns</p>
          {columns.map((col, index) => (
            <div
              key={`column-${index}`}
              className="w-full flex items-center gap-4 my-4"
            >
              <input
                placeholder={`${
                  boardColumnInputErrors[index] && hasTriedSubmitting
                    ? "Can't be empty"
                    : "eg. To Do"
                }`}
                className={`${
                  boardColumnInputErrors[index] && hasTriedSubmitting
                    ? "placeholder:text-red-500 border-red-500"
                    : ""
                } px-4 placeholder:text-[13px] focus:outline-none w-full py-2 border rounded-[4px]`}
                id="subtask"
                type="text"
                value={col}
                onChange={(e) => handleColumnChange(index, e.target.value)}
              />
              <button
                className="cursor-pointer"
                onClick={() => removeColumnHandler(index)}
              >
                <img src="/icons/icon-cross.svg" alt="delete-column" />
              </button>
            </div>
          ))}

          <Button
            action="add-column"
            classname="w-full mt-4"
            buttonStyle="secondary"
            label="+ Add New Column"
            addColumnHandler={addColumnHandler}
          />
        </div>
        <Button
          action="submit-board-form"
          typeButton="submit"
          classname="w-full mt-4"
          label={mode === "edit" ? "Edit Board" : "Create New Board"}
        />
      </form>
    </Card>
  );
};

export default BoardForm;
