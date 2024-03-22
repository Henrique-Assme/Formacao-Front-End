import React from 'react'

function Container({children}) {
  return (
    <div>
      <h1>Conteúdo do pai</h1>
      {children}
    </div>
  )
}

export default Container
