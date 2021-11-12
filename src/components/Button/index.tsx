import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function Button({ label, ...rest }: ButtonProps) {
  return <Container {...rest}>{label}</Container>;
}
