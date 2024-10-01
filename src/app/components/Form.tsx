import { ChangeEventHandler, FormEventHandler, ReactNode } from "react";

type formProps = {
  children?: ReactNode;
  onSubmit?: FormEventHandler;
};

type inputProps = {
  labelText?: string;
  value?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
};

export const Form = ({ children, onSubmit }: formProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-5">
      {children}
    </form>
  );
};

Form.TextInput = ({
  labelText,
  value,
  type,
  name,
  placeholder,
  onChange,
}: inputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="mt-3">{labelText}</label>
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-gray-200 rounded-md text-black font-poppins p-3"
      ></input>
    </div>
  );
};
