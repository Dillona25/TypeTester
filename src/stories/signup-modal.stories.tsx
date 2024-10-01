import type { Meta, StoryObj } from "@storybook/react";

import { SignupModal } from "../app/components/signup-modal";

const meta = {
  component: SignupModal,
} satisfies Meta<typeof SignupModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
