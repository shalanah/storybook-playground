import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-blue-500 text-white font-bold py-2 px-4 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
