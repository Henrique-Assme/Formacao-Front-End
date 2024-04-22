import React, { useState } from "react";

const HookUseState = () => {
  const [name, setName] = useState("Henrique");
  const [age, setAge] = useState(21);

  const changeNames = () => {
    setName("Henrique de Andrade Assme");
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(age)
  };
  return (
    <div>
      <h2>useState</h2>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nome </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Possui {age} anos</p>
      <hr />
    </div>
  );
};

export default HookUseState;
