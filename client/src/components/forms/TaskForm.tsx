import React from "react";
import Button from "../ui/Button";

const TaskForm = () => {
  return (
    <div>
      <h3 className="h2-bold">Add New Board</h3>
      <form action="">
        {/* name */}
        <div className="flex flex-col gap-2 mt-4 mb-6">
          <label className="body-bold text-light-600" htmlFor="title">
            Title
          </label>
          <input
            placeholder="e.g. Take a coffee break"
            className="border paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
            id="title"
            type="text"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-2 mt-4 mb-6">
          <label className="body-bold text-light-600" htmlFor="description">
            Title
          </label>
          <textarea
            rows={3}
            className="border paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
            id="description"
          />
        </div>

        {/* columns */}
        <div className="flex flex-col gap-2 ">
          <label className="body-bold text-light-600" htmlFor="column">
            Subtasks
          </label>
          <div className="flex items-center gap-4 ">
            <input
              placeholder="e.g. Todo"
              className="border w-full paragraph-medium text-dark100_light900 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="remove-tasks" />
            </button>
          </div>
          <div className="flex items-center gap-4 ">
            <input
              placeholder="e.g. Doing"
              className="border w-full paragraph-medium text-dark100_light900 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="remove-tasks" />
            </button>
          </div>
          <Button className="mt-2" type="secondary" label="+ Add New Subtask" />
        </div>
        <Button className="w-full mt-6" label="Create Task" />
      </form>
    </div>
  );
};

export default TaskForm;
