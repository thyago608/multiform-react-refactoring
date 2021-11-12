import { useNavigate, useRoutes } from "react-router-dom";
import { Form } from "components/Form";
import { Button } from "components/Button";
import { InputRadio } from "components/InputRadio";
import { FaSkull, FaSkullCrossbones, FaSmile } from "react-icons/fa";

import { Main, ContainerButtons } from "./styles";

export function Professional() {
  const navigate = useNavigate();

  function handleSubmitFromLevel() {
    navigate("/contacts");
  }

  function handleGoBack() {
    navigate("/");
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

            <form>
              <InputRadio
                title="Sou iniciante"
                subtitle="Comecei a programar há menos de 2 anos"
                icon={<FaSkull />}
                name="level"
                value="iniciante"
                selected={true}
              />

              <InputRadio
                title="Sou programador"
                subtitle="Já programo há 2 anos ou mais"
                icon={<FaSmile />}
                name="level"
                value="avançado"
                selected={false}
              />
            </form>

            <ContainerButtons>
              <button type="button" className="goBack" onClick={handleGoBack}>
                Voltar
              </button>
              <Button
                label="Próximo"
                type="button"
                onClick={handleSubmitFromLevel}
              />
            </ContainerButtons>
          </section>
        </Form>
      </Main>
    </>
  );
}
