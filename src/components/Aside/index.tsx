import { Link, useLocation } from "react-router-dom";
import { SmileIcon, CoffeIcon, MailIcon } from "./styles";

import { Container } from "./styles";

export function Aside() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to="/" className={pathname === "/" ? "active" : ""}>
        <div className="description">
          <h1>Pessoal</h1>
          <span>Se identifique</span>
        </div>
        <SmileIcon />
      </Link>

      <Link
        to="/professional"
        className={pathname === "/professional" ? "active" : ""}
      >
        <div className="description">
          <h1>Profissional</h1>
          <span>Seu nível</span>
        </div>
        <CoffeIcon />
      </Link>

      <Link to="/contacts" className={pathname === "/contacts" ? "active" : ""}>
        <div className="description">
          <h1>Contatos</h1>
          <span>Como te achar</span>
        </div>
        <MailIcon />
      </Link>
    </Container>
  );
}
