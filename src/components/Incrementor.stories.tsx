import type { Meta, StoryObj } from "@storybook/react-vite";

import { Incrementor } from "./Incrementor";

const meta = {
  component: Incrementor,
  tags: ["autodocs", "new", "beta"],
} satisfies Meta<typeof Incrementor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},

  parameters: {
    layout: "centered",
  },
};

/** Two wrongs don't make a right */
export const TwoPosNeg: Story = {
  args: {
    min: -2,
    max: 2,
    value: -2,
  },

  parameters: {
    layout: "centered",
  },
};

/** Shows stepping behavior 🚶‍♀️ */
export const StepByFive: Story = {
  args: {
    min: -10,
    max: 10,
    value: 0,
    step: 5,
  },
  parameters: {
    layout: "centered",
  },
};
