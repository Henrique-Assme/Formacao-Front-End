// 3 - alterando valor
import { useContext } from "react";
import { CounterContext } from "../context/CunterContext";
import ChangeContext from "../components/ChangeContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

function Contact() {
  const { counter } = useContext(CounterContext);
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Página de contato</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeContext />
    </div>
  );
}

export default Contact;
