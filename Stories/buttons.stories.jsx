import { Button } from "./buttons";

const meta = {
  component: Button,
  title: "Buttons",
};

export default meta;

export const Primary = {
  args: {
    variant: "primary",
    text: "Login",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    text: "Signup",
  },
};

export const Logout = {
  args: {
    variant: "logout",
    text: "Logout",
  },
};
