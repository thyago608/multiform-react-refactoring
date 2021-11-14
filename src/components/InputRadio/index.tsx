import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { Container } from "./styles";

type InputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  subtitle: string;
  icon: ReactNode;
  selected: boolean;
};

export const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
  ({ title, subtitle, icon, selected, ...rest }, ref) => (
    <Container selected={selected}>
      <input type="radio" id={rest.value as string} {...rest} ref={ref} />
      <label htmlFor={rest.value as string} className="active">
        <div className="icon">{icon}</div>

        <div className="description-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </label>
    </Container>
  )
);
