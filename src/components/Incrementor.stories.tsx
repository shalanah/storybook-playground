import { userEvent, within } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Incrementor } from "./Incrementor";

const meta = {
  component: Incrementor,
  tags: ["autodocs"],
} satisfies Meta<typeof Incrementor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},

  parameters: {
    layout: "centered",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(
      await canvas.findByRole("button", { name: "Add 1 to 10" })
    );
    await userEvent.click(
      await canvas.findByRole("button", { name: "Subtract 1 from 11" })
    );
    await userEvent.click(await canvas.findByText("10", { exact: true }));
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
