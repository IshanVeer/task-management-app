import Card from "../ui/Card";
import { useBoardData } from "@/context/BoardProvider";
import Button from "../ui/Button";

interface DeleteEventProps {
  mode?: string;
  closeModalHandler: () => void;
}

const DeleteEvent = ({ mode, closeModalHandler }: DeleteEventProps) => {
  const { selectedBoard, selectedTask } = useBoardData();

  return (
    <Card>
      {mode === "task" ? (
        <h2 className="text-red-500 h2-bold">Delete this task?</h2>
      ) : (
        <h2 className="text-red-500 h2-bold">Delete this board?</h2>
      )}
      {mode === "task" ? (
        <p className="my-6 text-light-600 paragraph-medium">{`Are you sure you want to delete the '${selectedTask?.title}' board? This action will remove all columns and tasks and cannot be reversed.`}</p>
      ) : (
        <p className="my-6 text-light-600 paragraph-medium">{`Are you sure you want to delete the '${selectedBoard?.name}' board? This action will remove all columns and tasks and cannot be reversed.`}</p>
      )}
      <div className="flex w-full gap-4  items-center">
        <Button
          action={mode === "task" ? "delete-task" : "delete-board"}
          classname="w-full"
          label="Delete"
          buttonStyle="destructive"
          closeModalHandler={closeModalHandler}
        />
        <Button
          action="close-modal"
          closeModalHandler={closeModalHandler}
          classname="w-full"
          label="Cancel"
          buttonStyle="secondary"
        />
      </div>
    </Card>
  );
};

export default DeleteEvent;
