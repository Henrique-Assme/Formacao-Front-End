import { useState } from "react";

function Data() {
  let someData = 10

  const [anotherNumber, setAnotherNumber] = useState(15)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>  
        <button onClick={() => someData = 15}>Mudar variável</button>
      </div>     
      <div>
        <p>Valor: {anotherNumber}</p>  
        <button onClick={() => setAnotherNumber(anotherNumber+1)}>Mudar variável</button>
      </div>     
    </div>
  )
}

export default Data
