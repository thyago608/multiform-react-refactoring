import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Main } from "./styles";

export function Home() {
  const navigate = useNavigate();

  function handleSubmitFromName(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate("/professional");
  }

  return (
    <>
      <Main>
        <Form>
          <section className="container-lets-start">
            <header>
              <span>Passo 1/3</span>
              <h1>Vamos começar com o seu nome</h1>
            </header>

            <p>Preencha o campo abaixo com seu nome completo:</p>

            <form onSubmit={handleSubmitFromName}>
              <Input name="name" label="Seu nome completo" />
              <Button label="Próximo" type="submit" />
            </form>
          </section>
        </Form>
      </Main>
    </>
  );
}
