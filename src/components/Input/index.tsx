import { ChangeEvent } from "react";
import "../style.scss";

type Props = {
  classN: string;
  placeholder: string;
  type?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ classN, placeholder, type, handleChange }: Props) => {
  return (
    <input
      className={`inp ${classN ? classN : ""}`}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
    />
  );
};

export default Input;
