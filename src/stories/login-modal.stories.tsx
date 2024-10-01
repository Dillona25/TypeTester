import type { Meta, StoryObj } from "@storybook/react";

import { LoginModal } from "../app/components/login-modal";

const meta = {
  component: LoginModal,
} satisfies Meta<typeof LoginModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
