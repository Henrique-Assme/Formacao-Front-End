// 1 - criando o contexto
import { createContext, useState } from "react";

export const CounterContext = createContext()

// 2 - criando provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5)

  return (
    <CounterContext.Provider value={{ counter, setCounter}}>
      {children}
    </CounterContext.Provider>
  )
}