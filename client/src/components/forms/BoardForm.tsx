"use client";
import React, { useState, useEffect } from "react";

import Button from "../ui/Button";
import { push, ref, set } from "firebase/database";
import { database } from "@/firebase";

import { useBoardContext } from "@/context/BoardProvider";

interface BoardFormProps {
  onClose: () => void;
  mode: "create" | "edit";
}

const BoardForm = ({ onClose, mode }: BoardFormProps) => {
  const [boardName, setBoardName] = useState("");
  const [boardNameError, setBoardNameError] = useState(false);
  const [columnInputError, setColumnInputError] = useState<boolean[]>([]);
  const [columns, setColumns] = useState(["Todo"]);
  const { boards, selectedBoard } = useBoardContext();

  const board = boards.find((board) => board.name === selectedBoard);

  // pre fill the form incase of edit form

  useEffect(() => {
    if (mode === "edit" && board) {
      setBoardName(board.name);
      if (Array.isArray(board.columns)) {
        setColumns(board?.columns.map((col) => col.name));
      } else {
        setColumns([]);
      }
    }
  }, [mode, board]);

  // handling column change

  const handleColumnChange = (index: number, value: string) => {
    const newColumn = [...columns]; // pull all stored columns
    newColumn[index] = value; // update one column
    setColumns(newColumn); //update the state
  };

  // adding new column

  const addNewColumn = () => {
    setColumns([...columns, ""]); // pull all stored columns and then add one column
  };

  // Delete Column
  const deleteColumn = (index: number) => {
    const newColumn = [...columns];
    newColumn.splice(index, 1);
    setColumns(newColumn);
  };

  // create new board submit handler
  const boardFormSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const trimmedColumns = columns.map((col) => col.trim());
    const newColumnErrors = trimmedColumns.map((col) => col === "");
    const hasEmptyColumns = newColumnErrors.includes(true);

    if (!boardName.trim()) {
      setBoardNameError(true);
      return;
    } //if board name does not exist stop the function

    // if columns are empty
    if (hasEmptyColumns) {
      setColumnInputError(newColumnErrors);
      return;
    }

    setBoardNameError(false);
    setColumnInputError([]);

    const filteredColumns = columns
      .map((col) => col.trim())
      .filter((col) => col !== ""); // remove any white space or and empty string from the array

    const updatedBoard = {
      name: boardName,
      columns: filteredColumns.map((col) => ({
        name: col,
        tasks: [],
      })),
    };
    try {
      if (mode === "edit" && board?.id) {
        const boardsRef = ref(database, `boards/${board?.id}`);
        await set(boardsRef, updatedBoard);
      } else {
        const boardsRef = ref(database, "boards");
        await push(boardsRef, updatedBoard);
      }

      onClose();
    } catch (error) {
      console.log(error, "Failed to create board");
    }
  };

  return (
    <div>
      {mode === "edit" ? (
        <h3 className="h2-bold">Edit Board</h3>
      ) : (
        <h3 className="h2-bold">Add New Board</h3>
      )}

      <form onSubmit={boardFormSubmitHandler} action="">
        {/* name */}
        <div className="flex flex-col gap-2 mt-4 mb-6">
          <label className="body-bold text-light-600" htmlFor="name">
            Name
          </label>
          <input
            value={boardName}
            onChange={(e) => {
              setBoardName(e.target.value);
              if (boardNameError) setBoardNameError(false);
            }}
            placeholder="e.g. Web Design"
            className={`border paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px] 
            ${boardNameError ? "border-red-500" : ""} `}
            id="name"
            type="text"
          />
          {boardNameError ? (
            <p className="text-red-500 paragraph-medium">
              Enter Valid Board Name
            </p>
          ) : (
            ""
          )}
        </div>
        {/* columns */}
        <div className="flex flex-col gap-2 ">
          <label className="body-bold text-light-600" htmlFor="column">
            Columns
          </label>
          {columns.map((col, index) => (
            <div key={index}>
              <div className="flex gap-4 items-center justify-between">
                <input
                  onChange={(e) => {
                    handleColumnChange(index, e.target.value);
                    if (columnInputError[index]) {
                      const newErrors = [...columnInputError];
                      newErrors[index] = false;
                      setColumnInputError(newErrors);
                    }
                  }}
                  id="column"
                  className={`border w-full paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px] 
            ${columnInputError[index] ? "border-red-500" : ""} `}
                  value={col}
                  type="text"
                />

                <button
                  onClick={() => deleteColumn(index)}
                  className="cursor-pointer"
                >
                  <img
                    className="hover:fill-red-500"
                    src="/icons/icon-cross.svg"
                    alt="delete-column"
                  />
                </button>
              </div>
              {columnInputError[index] && (
                <p className="text-red-500 my-2 paragraph-medium">
                  Can't be empty
                </p>
              )}
            </div>
          ))}

          <Button
            type="button"
            onClick={addNewColumn}
            className="mt-2"
            buttonType="secondary"
            label="+ Add New Column"
          />
        </div>
        <Button
          type="submit"
          className="w-full mt-6"
          label={mode === "edit" ? "Save Changes" : "Create New Board"}
        />
      </form>
    </div>
  );
};

export default BoardForm;
