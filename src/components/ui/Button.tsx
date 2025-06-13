interface ButtonProps {
  type?: string;
  label: string;
  classname?: string;
  openModalHandler?: () => void;
  closeModalHandler?: () => void;
  action: string;
}

const Button = ({
  type,
  label,
  classname,
  openModalHandler,
  closeModalHandler,
  action,
}: ButtonProps) => {
  const clickHandler = () => {
    switch (action) {
      case "open-modal":
        return openModalHandler?.();
      case "close-modal":
        return closeModalHandler?.();
    }
  };
  return (
    <button
      onClick={clickHandler}
      className={`${classname} text-center inline-block transition duration-150 cursor-pointer px-6 py-3 text-white base-bold rounded-3xl outline-0 ${
        type === "destructive"
          ? "button-destructive"
          : type === "secondary"
          ? "button-secondary"
          : "button-primary"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
