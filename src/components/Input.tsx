import * as React from "react";

type InputProps = {
  title: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
const Input = ({ title, checked, onChange }: InputProps) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label className="ml-2 text-sm">{title}</label>
    </div>
  );
};
export default Input;
