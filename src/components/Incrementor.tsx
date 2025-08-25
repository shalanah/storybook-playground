import { useState, type PropsWithChildren } from "react";
import { Button } from "./Button";

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

type IncButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const IncButton = ({ children, ...props }: IncButtonProps) => {
  return (
    <Button
      className="select-none w-[2em] h-[2em] justify-center items-center !p-0"
      {...props}
      variant="primary"
    >
      {children}
    </Button>
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
      <IncButton
        aria-label={`Subtract ${step} from ${count}`}
        disabled={count - step < min}
        onClick={() => setCount((prev) => clamp(prev - step, min, max))}
      >
        -
      </IncButton>
      <p className="min-w-[3ch] flex justify-center whitespace-nowrap">
        {count}
      </p>
      <IncButton
        aria-label={`Add ${step} to ${count}`}
        disabled={count + step > max}
        onClick={() => setCount((prev) => clamp(prev + step, min, max))}
      >
        +
      </IncButton>
    </div>
  );
};
