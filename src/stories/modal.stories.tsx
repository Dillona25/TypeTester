import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../app/components/modal";

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
