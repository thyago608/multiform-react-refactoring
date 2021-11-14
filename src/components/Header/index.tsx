import { useState, useEffect } from "react";
import { Container, Content } from "./styles";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container>
      <Content className={`${isVisible ? "visible" : ""}`}>
        <h1>Cadastro de Desenvolvedor</h1>
        <p>Faça seu cadastro na lista e receba um emprego imediatamente</p>
      </Content>
    </Container>
  );
}
