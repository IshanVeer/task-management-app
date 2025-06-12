interface ButtonProps {
  type?: string;
  label: string;
  classname?: string;
  openModalHandler?: () => void;
}

const Button = ({ type, label, classname, openModalHandler }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={openModalHandler}
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
    </div>
  );
};

export default Button;
