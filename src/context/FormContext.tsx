import { createContext, ReactNode, useState } from "react";

type FormContextProviderProps = {
  children: ReactNode;
};

type FormContextProps = {
  name: string;
  handleSetName: (name: string) => void;
  level: string;
  handleSetLevel: (level: string) => void;
  email: string;
  handleSetEmail: (email: string) => void;
  github: string;
  handleSetGithub: (github: string) => void;
};

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");
  const [github, setGithub] = useState("");

  const handleSetName = (name: string) => setName(name);

  const handleSetEmail = (email: string) => setEmail(email);

  const handleSetLevel = (level: string) => setLevel(level);

  const handleSetGithub = (github: string) => setGithub(github);

  return (
    <FormContext.Provider
      value={{
        name,
        handleSetName,
        email,
        handleSetEmail,
        level,
        handleSetLevel,
        github,
        handleSetGithub,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
