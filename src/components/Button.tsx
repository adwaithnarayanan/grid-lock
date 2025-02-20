type ButtonProps = {
  type: "submit" | "button";
  variant?: "restart" | "grid";
  value?: "primary" | "selected" | "neighbour";
  children?: React.ReactNode;
  handleClick: () => void;
  className?: string;
  disabled?: boolean;
};

const Button = ({
  type,
  children,
  handleClick,
  className,
  variant,
  disabled,
  value,
}: ButtonProps) => {
  let btnStyle = "";

  if (variant === "restart") {
    btnStyle = `mx-2 my-2 text-white bg-slate-400 hover:bg-slate-500 font-dmSans text-base px-[12px] py-[8px] md:px-[24px] md:py-[16px] rounded-sm md:rounded-md`;
  } else if (variant === "grid") {
    btnStyle = `rounded-md`;
  }

  if (value === "primary") btnStyle += ` bg-primary`;
  else if (value === "neighbour") btnStyle += ` bg-neighbour`;
  else if (value === "selected") btnStyle += ` bg-selected`;

  return (
    <button
      type={type}
      onClick={handleClick}
      className={` ${className} ${btnStyle} ${
        disabled && "cursor-not-allowed"
      } `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
