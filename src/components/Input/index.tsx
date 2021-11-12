import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    asColumn?:boolean;
};

export function Input({ label, asColumn, ...rest }: InputProps) {
  return (
    <Container asColumn={asColumn ?? false}>
      <label htmlFor={rest.name}>{label}</label>
      <input id={rest.name} {...rest} />
    </Container>
  );
}