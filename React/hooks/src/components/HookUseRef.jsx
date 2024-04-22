import React, { useState, useRef, useEffect } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current += 1;
  });

  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current}</p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <p>Counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>+1</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default HookUseRef;
