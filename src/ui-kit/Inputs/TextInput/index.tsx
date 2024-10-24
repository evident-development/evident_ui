import { FC } from "react";
import { InputF, InputW, LabelW, InputM } from "./style";
import { IInputProps } from "./types";

export const Input: FC<IInputProps> = (props) => {
  const { label, message, id, placeholder } = props;
  return (
    <InputW>
      <LabelW htmlFor={id}>{label}</LabelW>
      <InputF id={id} placeholder={placeholder} />
      <InputM>{message}</InputM>
    </InputW>
  );
};
