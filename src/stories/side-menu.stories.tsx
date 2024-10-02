import type { Meta, StoryObj } from "@storybook/react";

import { SideMenu } from "../app/components/side-menu";

const meta = {
  component: SideMenu,
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
