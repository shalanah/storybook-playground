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
        "font-bold py-2 px-4 rounded transition-all duration-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed",
        {
          "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4":
            variant === "primary",
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-4":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
