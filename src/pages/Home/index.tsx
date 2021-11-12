import { Form } from "components/Form";
import { Input } from "components/Input";
import { Main } from "./styles";

export function Home() {
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
            <Input name="name" label="Seu nome completo" />
          </section>
        </Form>
      </Main>
    </>
  );
}
