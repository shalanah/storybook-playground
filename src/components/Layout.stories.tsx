import type { Meta, StoryObj } from "@storybook/react-vite";

import { Layout } from "./Layout";

const meta = {
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Main",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Page1: Story = {
  args: {
    children: "Page 1",
  },
  parameters: {
    layout: "fullscreen",
  },
};
