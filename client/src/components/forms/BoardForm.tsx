import React from "react";

import Button from "../ui/Button";

interface BoardFormProps {
  onClose: () => void;
}

const BoardForm = ({ onClose }: BoardFormProps) => {
  const boardFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onClose();
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
