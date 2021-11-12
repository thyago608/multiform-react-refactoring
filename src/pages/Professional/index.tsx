import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Main } from "./styles";

export function Professional() {
  const navigate = useNavigate();

  function handleSubmitFromName(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate("/contacts");
  }

  return (
    <>
      <Main>
        <Form>
          <section className="container-knowledge-level">
            <header>
              <span>Passo 2/3</span>
              <h1>Thyago, qual é o seu nível de conhecimento ?</h1>
            </header>

            <p>Selecione uma opção abaixo:</p>

            <Button label="Próximo" type="submit" />
          </section>
        </Form>
      </Main>
    </>
  );
}
