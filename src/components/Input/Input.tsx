import React from "react";
import { Controller, Control } from "react-hook-form";

import {
  InputContainer,
  InputText,
  IconContainer,
  ErrorMessage,
} from "./Input.style";

interface InputProps {
  leftIcon?: React.ReactNode;
  control: Control<LoginForm>;
  [key: string]: any;
  error?: string;
}

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

export const Input: React.FC<InputProps> = ({
  leftIcon,
  name,
  error,
  control,
  ...rest
}) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
