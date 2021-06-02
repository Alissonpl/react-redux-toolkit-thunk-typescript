import React from "react";

import { InputStyles } from "./styles";
import { Props } from "../../../../../@types/input";

const Input: React.FC<Props> = ({ type, variant, value, onChange }: Props) => {
  return (
    <InputStyles
      value={value}
      type={type}
      variant={variant}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
