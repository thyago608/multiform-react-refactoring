import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    isRow:boolean;
};

export function Input({ label, isRow, ...rest}:InputProps){
    return (
      <Container isRow={isRow}>
        <label>{label}</label>
        <input {...rest} />
      </Container>
    );
}