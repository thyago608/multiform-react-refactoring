import { useNavigate, useRoutes } from "react-router-dom";
import { Form } from "components/Form";
import { Button } from "components/Button";
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
