import React from "react";
import Button from "../ui/Button";
import { useBoardContext } from "@/context/BoardProvider";
import { database } from "@/firebase";
import { remove, ref } from "firebase/database";

interface DeleteBoardProps {
  onClose: () => void;
}
const DeleteBoard = ({ onClose }: DeleteBoardProps) => {
  const { boards, selectedBoard } = useBoardContext();
  const selectedBoardData = boards.find(
    (board) => board.name === selectedBoard
  );
  console.log(selectedBoardData, "selected board data");

  const deleteBoardHandler = async (boardId: number) => {
    if (!boardId && boardId !== 0) return;
    try {
      const boardRef = ref(database, `boards/${boardId}`);
      await remove(boardRef);
      console.log("board removed");
    } catch (error) {
      console.log("Error deleting board", error);
    }
  };
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
          onClick={async () => {
            if (selectedBoardData?.id !== undefined) {
              await deleteBoardHandler(selectedBoardData.id);
              onClose();
            } else {
              console.warn("No valid board ID to delete");
            }
          }}
        />
        <Button
          onClose={onClose}
          className="w-full"
          type="button"
          label="Cancel"
          buttonType="secondary"
        />
      </div>
    </div>
  );
};

export default DeleteBoard;
