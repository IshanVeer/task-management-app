"use client";
import React, { useState } from "react";

import Button from "../ui/Button";
import { push, ref } from "firebase/database";
import { database } from "@/firebase";

interface BoardFormProps {
  onClose: () => void;
}

const BoardForm = ({ onClose }: BoardFormProps) => {
  const [boardName, setBoardName] = useState("");
  const [columns, setColumns] = useState(["Todo"]);

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

    if (!boardName.trim()) {
      return;
    } //if board name does not exist stop the function
    const filteredColumns = columns
      .map((col) => col.trim())
      .filter((col) => col !== ""); // remove any white space or and empty string from the array

    const newBoard = {
      name: boardName,
      columns: filteredColumns.map((col) => ({
        name: col,
        tasks: [],
      })),
    };
    try {
      const boardsRef = ref(database, "boards");
      await push(boardsRef, newBoard);
      onClose();
    } catch (error) {
      console.log(error, "Failed to create board");
    }
  };

  return (
    <div>
      <h3 className="h2-bold">Add New Board</h3>

      <form onSubmit={boardFormSubmitHandler} action="">
        {/* name */}
        <div className="flex flex-col gap-2 mt-4 mb-6">
          <label className="body-bold text-light-600" htmlFor="name">
            Name
          </label>
          <input
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            placeholder="e.g. Web Design"
            className={`border paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px] 
            `}
            id="name"
            type="text"
          />
        </div>
        {/* columns */}
        <div className="flex flex-col gap-2 ">
          <label className="body-bold text-light-600" htmlFor="column">
            Columns
          </label>
          {columns.map((col, index) => (
            <div
              className="flex gap-4 items-center justify-between"
              key={index}
            >
              <input
                onChange={(e) => handleColumnChange(index, e.target.value)}
                id="column"
                className={`border w-full paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px] 
            `}
                value={col}
                type="text"
              />
              <button
                onClick={() => deleteColumn(index)}
                className="cursor-pointer"
              >
                <img src="/icons/icon-cross.svg" alt="delete-column" />
              </button>
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
          label="Create New Board"
        />
      </form>
    </div>
  );
};

export default BoardForm;
