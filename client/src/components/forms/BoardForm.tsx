import React, { Dispatch, SetStateAction, useState } from "react";

import Button from "../ui/Button";

interface Board {
  name: string;
}

interface BoardFormProps {
  setBoards: Dispatch<SetStateAction<Board[]>>;
}

const BoardForm = ({ setBoards }: BoardFormProps) => {
  const [nameInput, setNameInput] = useState("");

  const boardFormSubmitHandler = (event: any) => {
    event.preventDefault();

    const newBoard = {
      name: nameInput,
    };
    setBoards((prevBoards) => [...prevBoards, newBoard]);
    console.log(newBoard, " new Board");
    setNameInput("");
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
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            placeholder="e.g. Web Design"
            className="border paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
            id="name"
            type="text"
          />
        </div>
        {/* columns */}
        <div className="flex flex-col gap-2 ">
          <label className="body-bold text-light-600" htmlFor="column">
            Columns
          </label>
          <div className="flex items-center gap-4 ">
            <input
              placeholder="e.g. Todo"
              className="border w-full paragraph-medium text-dark100_light900 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="remove-board" />
            </button>
          </div>
          <div className="flex items-center gap-4 ">
            <input
              placeholder="e.g. Doing"
              className="border w-full paragraph-medium text-dark100_light900 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="remove-board" />
            </button>
          </div>
          <Button
            type="button"
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
