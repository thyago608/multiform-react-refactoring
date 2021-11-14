import { FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "components/Form";
import { Button } from "components/Button";
import { InputRadio } from "components/InputRadio";
import { FaSkull, FaSkullCrossbones, FaSmile } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "hooks/useForm";

import { Main, ContainerButtons } from "./styles";

export function Professional() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { name, level, handleSetLevel } = useForm();

  function handleSubmitFromLevel(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const input = document.querySelector<HTMLInputElement>(
      `.input-radio-${level}`
    );

    if (!input) {
      return toast.error("Por favor, informe o seu nível de conhecimento!");
    }

    navigate("/contacts");
  }

  function handleGoBack() {
    navigate("/");
  }

  return (
    <>
      <ToastContainer theme="colored" />
      <Main>
        <Form>
          <section className="container-knowledge-level">
            <header>
              <span>Passo 2/3</span>
              <h1>{name}, qual é o seu nível de conhecimento ?</h1>
            </header>

            <p>Selecione uma opção abaixo:</p>

            <form onSubmit={handleSubmitFromLevel}>
              <InputRadio
                title="Sou iniciante"
                subtitle="Comecei a programar há menos de 2 anos"
                icon={<FaSkull />}
                name="level"
                value="iniciante"
                selected={level === "iniciante"}
                onClick={() => handleSetLevel("iniciante")}
                className="input-radio-iniciante"
              />

              <InputRadio
                title="Sou programador"
                subtitle="Já programo há 2 anos ou mais"
                icon={<FaSmile />}
                name="level"
                value="avançado"
                selected={level === "avançado"}
                onClick={() => handleSetLevel("avançado")}
                className="input-radio-avançado"
              />

              <ContainerButtons>
                <button type="button" className="goBack" onClick={handleGoBack}>
                  Voltar
                </button>
                <Button label="Próximo" type="submit" />
              </ContainerButtons>
            </form>
          </section>
        </Form>
      </Main>
    </>
  );
}
