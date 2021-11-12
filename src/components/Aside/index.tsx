import { Link } from "react-router-dom";
import { SmileIcon, CoffeIcon, MailIcon } from "./styles";

import { Container } from "./styles";

export function Aside() {
  return (
    <Container>
      <Link to="/">
        <div className="description">
          <h1>Pessoal</h1>
          <span>Se identifique</span>
        </div>
        <SmileIcon />
      </Link>

      <Link to="/professional">
        <div className="description">
          <h1>Profissional</h1>
          <span>Seu nível</span>
        </div>
        <CoffeIcon />
      </Link>

      <Link to="/contacts">
        <div className="description">
          <h1>Contatos</h1>
          <span>Como te achar</span>
        </div>
        <MailIcon />
      </Link>
    </Container>
  );
}
