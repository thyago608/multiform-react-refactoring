import { InputHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

type InputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  subtitle: string;
  icon: ReactNode;
  selected: boolean;
};

export function InputRadio({
  title,
  subtitle,
  icon,
  selected,
  ...rest
}: InputRadioProps) {
  return (
    <Container selected={selected}>
      <input type="radio" id={rest.value as string} {...rest} />
      <label htmlFor={rest.value as string}>
        <div className="icon">{icon}</div>

        <div className="description-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </label>
    </Container>
  );
}
