interface ButtonProps {
  buttonStyle?: "primary" | "secondary" | "destructive";
  typeButton?: "button" | "submit" | "reset";
  label: string;
  classname?: string;
  openModalHandler?: () => void;
  closeModalHandler?: () => void;
  addColumnHandler?: () => void;

  action: string;
}

const Button = ({
  buttonStyle,
  typeButton,
  label,
  classname,
  openModalHandler,
  closeModalHandler,
  addColumnHandler,
  action,
}: ButtonProps) => {
  const clickHandler = () => {
    switch (action) {
      case "open-modal":
        return openModalHandler?.();
      case "close-modal":
        return closeModalHandler?.();
      case "add-column":
        return addColumnHandler?.();
    }
  };

  return (
    <button
      onClick={clickHandler}
      type={typeButton || "button"}
      className={`${classname} text-center inline-block transition duration-150 cursor-pointer px-6 py-3 text-white base-bold rounded-3xl outline-0 ${
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
