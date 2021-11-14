import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { useForm } from "hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Main } from "./styles";

export function Home() {
  const navigate = useNavigate();
  const inputNameRef = useRef<HTMLInputElement>(null);
  const { handleSetName } = useForm();

  function handleSubmitFromName(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = inputNameRef.current?.value;

    if (name) {
      handleSetName(name);
      navigate("/professional");
      return;
    }

    toast.error("Por favor, informe o seu nome");
  }
  return (
    <>
      <Main>
        <ToastContainer theme="colored" />
        <Form>
          <section className="container-lets-start">
            <header>
              <span>Passo 1/3</span>
              <h1>Vamos começar com o seu nome</h1>
            </header>

            <p>Preencha o campo abaixo com seu nome completo:</p>

            <form onSubmit={handleSubmitFromName}>
              <Input name="name" label="Seu nome completo" ref={inputNameRef} />
              <Button label="Próximo" type="submit" />
            </form>
          </section>
        </Form>
      </Main>
    </>
  );
}
