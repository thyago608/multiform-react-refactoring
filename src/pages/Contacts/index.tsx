import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Main, ContainerButtons } from "./styles";

export function Contacts() {
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleGoBack() {
    navigate("/professional");
  }

  return (
    <>
      <Main>
        <Form>
          <section className="container-where-do-we-find-you">
            <header>
              <span>Passo 3/3</span>
              <h1>Legal Thyago, onde te achamos ?</h1>
            </header>

            <p>
              Preencha com seus dados para conseguirmos entrar em contato com
              você:
            </p>

            <form onSubmit={handleSubmit}>
              <Input label="Qual é o seu email ?" asColumn={true} />

              <Input label="Qual é o seu github ?" asColumn={true} />

              <ContainerButtons>
                <button type="button" className="goBack" onClick={handleGoBack}>
                  Voltar
                </button>
                <Button label="Finalizar Cadastro" type="submit" />
              </ContainerButtons>
            </form>
          </section>
        </Form>
      </Main>
    </>
  );
}
