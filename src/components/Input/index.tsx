import { InputHTMLAttributes, forwardRef } from "react";
import { Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  asColumn?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, asColumn, ...rest }, ref) => (
    <Container asColumn={asColumn ?? false}>
      <label htmlFor={rest.name}>{label}</label>
      <input id={rest.name} {...rest} ref={ref} />
    </Container>
  )
);
