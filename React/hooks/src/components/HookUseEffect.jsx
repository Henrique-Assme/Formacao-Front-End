import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  // sem array de dependências, roda sempre que componente atualiza algo
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  // com array vazio, executa só uma vez com componente criado
  useEffect(() => {
    console.log("Estou sendo executado uma única vez");
  }, []);

  // array com valores
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando muda o anotherNumber");
    }
  }, [anotherNumber]);

  //cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello World");
      setAnotherNumber(anotherNumber + 1);
    }, 2000);
    return () => clearTimeout(timer)
  }, [anotherNumber]);
  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>useEffect</h2>
      <p>number: {number}</p>
      <button onClick={changeNumber}>+1</button>
      <p>another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>+1</button>
    </div>
  );
};

export default HookUseEffect;
