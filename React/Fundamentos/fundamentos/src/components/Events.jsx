const Events = () => {

  const handleClick = (e) => {
    console.log("executou", e)
  }

  const renderSomething = x => {
    if(x) {
      return <h1>Renderizando isso</h1>
    }
    else {
      return <h1>Renderizando outra coisa</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => console.log("testando click")}>Clique aqui</button>
      </div>
      <div>
        <button onClick={handleClick}>Clique aqui com função</button>
      </div>
      {renderSomething(true)}
      {renderSomething()}
      {10 > 2 && <p>carregando...</p>}
    </div>
  )
}

export default Events
