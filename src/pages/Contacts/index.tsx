import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { useForm } from "hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Main, ContainerButtons } from "./styles";

export function Contacts() {
  const navigate = useNavigate();
  const { handleSetEmail, handleSetGithub } = useForm();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");

    const github = formData.get("github");

    if (!email || !github) {
      return toast.error(
        "Informe o email e o seu github para entramos em contato com você"
      );
    };

    handleSetEmail(email.toString());
    handleSetGithub(github.toString());

    toast.success("Cadastro realizado com sucesso");
  }

  function handleGoBack() {
    navigate("/professional");
  }

  return (
    <>
      <Main>
        <ToastContainer theme="colored" />
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
              <Input
                label="Qual é o seu email ?"
                asColumn={true}
                name="email"
              />

              <Input
                label="Qual é o seu github ?"
                asColumn={true}
                name="github"
              />

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
