import { useCounterContext } from "../hooks/useCounterContext";

const ChangeContext = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};

export default ChangeContext;
