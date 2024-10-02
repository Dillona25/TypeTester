import type { Meta, StoryObj } from "@storybook/react";

import { Keyboard } from "@/app/components/keyboard";

const meta = {
  component: Keyboard,
} satisfies Meta<typeof Keyboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
