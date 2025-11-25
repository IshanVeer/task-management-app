import { useBoardData } from "@/context/BoardProvider";

interface ButtonProps {
  buttonStyle?: "primary" | "secondary" | "destructive";
  typeButton?: "button" | "submit" | "reset";
  label: string;
  classname?: string;
  openModalHandler?: () => void;
  closeModalHandler?: () => void;
  addColumnHandler?: () => void;
  addSubtaskHandler?: () => void;
  action: string;
  disabled?: boolean;
}

const Button = ({
  buttonStyle,
  typeButton,
  label,
  classname,
  openModalHandler,
  closeModalHandler,
  addColumnHandler,
  addSubtaskHandler,
  action,
  disabled,
}: ButtonProps) => {
  const { selectedBoard, deleteBoard, deleteTask, selectedTask } =
    useBoardData();
  const clickHandler = () => {
    switch (action) {
      case "open-modal":
        return openModalHandler?.();
      case "close-modal":
        return closeModalHandler?.();
      case "add-column":
        return addColumnHandler?.();
      case "add-subtask":
        return addSubtaskHandler?.();
      case "delete-board":
        if (!selectedBoard?.id) {
          return;
        }

        deleteBoard(selectedBoard?.id);
        closeModalHandler?.();
        return;
      case "delete-task":
        if (!selectedTask?.id) {
          return;
        }
        deleteTask(selectedTask?.id);
        closeModalHandler?.();
    }
  };

  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      type={typeButton || "button"}
      className={` ${classname} text-center inline-block transition duration-150 cursor-pointer px-6 py-3 text-white base-bold rounded-3xl outline-0 ${
        buttonStyle === "destructive"
          ? "button-destructive"
          : buttonStyle === "secondary"
          ? "button-secondary"
          : "button-primary"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
