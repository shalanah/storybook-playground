import { useState } from "react";

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="select-none bg-blue-500 text-white font-bold min-w-[2em] min-h-[2em] rounded flex justify-center items-center leading-0 hover:bg-blue-600 transition-colors duration-200 focus:outline-2 focus:outline-offset-3 focus:outline-dashed focus:outline-color-[currentColor] disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-600"
      {...props}
    >
      <span
        // This font's metrics don't seem to be friendly to aligning these glyphs - let's just add the right padding below for now and use svgs in future :)
        className="pb-[.1em]"
      >
        {children}
      </span>
    </button>
  );
};

type IncrementorProps = {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
};

export const Incrementor = ({
  min = 0,
  max = Infinity,
  value = 10,
  step = 1,
}: IncrementorProps) => {
  const [count, setCount] = useState(clamp(value, min, max));

  return (
    <div className="flex gap-2 text-xl tabular-nums items-center">
      <Button
        aria-label={`Subtract ${step} from ${count}`}
        disabled={count - step < min}
        onClick={() => setCount((prev) => clamp(prev - step, min, max))}
      >
        -
      </Button>
      <p className="min-w-[3ch] flex justify-center whitespace-nowrap">
        {count}
      </p>
      <Button
        aria-label={`Add ${step} to ${count}`}
        disabled={count + step > max}
        onClick={() => setCount((prev) => clamp(prev + step, min, max))}
      >
        +
      </Button>
    </div>
  );
};
