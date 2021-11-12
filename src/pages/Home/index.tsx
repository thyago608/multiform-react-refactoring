import { Form } from "components/Form";
import { Main } from "./styles";

export function Home() {
  return (
    <>
      <Main>
        <Form>
          <section>
            <header>
              <span>Passo 1/3</span>
              <h1>Vamos começar com o seu nome</h1>
            </header>

            <p>Preencha o campo abaixo co seu nome completo:</p>
            <label></label>
          </section>
        </Form>
      </Main>
    </>
  );
}
