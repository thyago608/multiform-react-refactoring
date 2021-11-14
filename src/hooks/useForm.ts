import { useContext } from "react";
import { FormContext } from "context/FormContext";

export function useForm() {
  const context = useContext(FormContext);

  return context;
}
