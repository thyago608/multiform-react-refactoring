import { useState, useEffect, useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { useForm } from "hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Main, Section } from "./styles";

export function Home() {
  const navigate = useNavigate();
  const inputNameRef = useRef<HTMLInputElement>(null);
  const { name, handleSetName } = useForm();
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Main>
        <ToastContainer theme="colored" />
        <Form>
          <Section className={`${isVisible ? "visible" : ""}`}>
            <header>
              <span>Passo 1/3</span>
              <h1>Vamos começar com o seu nome</h1>
            </header>

            <p>Preencha o campo abaixo com seu nome completo:</p>

            <form onSubmit={handleSubmitFromName}>
              <Input
                name="name"
                label="Seu nome completo"
                ref={inputNameRef}
                defaultValue={name}
              />
              <Button label="Próximo" type="submit" />
            </form>
          </Section>
        </Form>
      </Main>
    </>
  );
}
