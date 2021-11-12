import { ReactChild } from "react";
import { Aside } from "components/Aside";
import { Container } from "./styles";

type FormProps = {
  children: ReactChild;
};

export function Form({ children }: FormProps) {
  return (
    <Container>
      <Aside />
      {children}
    </Container>
  );
}
