import { IoCloseOutline } from "react-icons/io5";
import { Form } from "./Form";
import { Modal } from "./modal";
import { Button } from "./buttons";

type Props = {
  closeModal?: () => void;
};

export const SignupModal = ({ closeModal }: Props) => {
  return (
    <Modal>
      <Form>
        <h2>Signup</h2>
        <IoCloseOutline
          onClick={closeModal}
          className="text-4xl font-extrabold hover:scale-125 ease-in-out duration-75 cursor-pointer absolute top-5 right-5"
        />
        <Form.TextInput labelText="Email" placeholder="Email" />
        <Form.TextInput labelText="Username" placeholder="Username" />
        <Form.TextInput
          labelText="Password"
          placeholder="Password"
          type="password"
        />
        <Form.TextInput labelText="Profile Photo" placeholder="Image Url" />
        <Button className="mt-5" text="Login" />
      </Form>
    </Modal>
  );
};
