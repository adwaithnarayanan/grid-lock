type ButtonProps = {
  type: "submit" | "button";
  variant?: "restart" | "grid";
  children?: React.ReactNode;
  handleClick: (id?: number) => void;
  className?: string;
  disabled?: boolean;
  id?: number;
};

const Button = ({
  type,
  children,
  handleClick,
  className,
  variant,
  disabled,
  id,
}: ButtonProps) => {
  let btnStyle = "";

  if (variant === "restart") {
    btnStyle = `mx-2 my-2  px-3 py-2 text-white bg-slate-400 hover:bg-slate-500`;
  } else if (variant === "grid") {
    btnStyle = `rounded-md`;
  }

  return (
    <button
      type={type}
      onClick={() => handleClick()}
      className={` ${className} ${btnStyle} `}
      disabled={disabled}
      id={String(id)}
    >
      {children}
    </button>
  );
};

export default Button;
