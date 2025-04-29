import React from "react";
import Button from "../ui/Button";
interface DeleteBoardProps {
  onClose: () => void;
  selectedBoard: string;
}
const DeleteBoard = ({ onClose, selectedBoard }: DeleteBoardProps) => {
  return (
    <div>
      <h2 className="h2-bold mb-4 text-red-500">Delete this board?</h2>
      <p className="paragraph-medium my-6 text-light-600">
        Are you sure you want to delete the '{selectedBoard}’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="flex justify-between gap-4">
        <Button
          className="w-full"
          type="button"
          label="Delete"
          buttonType="destruct"
        />
        <Button
          onClose={onClose}
          className="w-full"
          type="button"
          label="Cancel"
        />
      </div>
    </div>
  );
};

export default DeleteBoard;
