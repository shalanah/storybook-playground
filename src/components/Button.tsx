import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** An optional variant */
  variant?: "primary" | "secondary";
};

export const Button = ({
  children = "Button",
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "font-bold py-2 px-4 rounded",
        {
          "bg-blue-500 text-white": variant === "primary",
          "bg-gray-200 text-gray-800": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
