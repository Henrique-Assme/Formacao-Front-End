import { useContext } from "react";
import { CounterContext } from "../context/CunterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if(!context) {
    console.log("Contexto não encontrado!")
    return
  }

  console.log(context);
  return context
};
