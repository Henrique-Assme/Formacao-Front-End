import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 91
  const redTitle = false

  return (
    <>
      <div>
        <h1>CSS no React</h1>
        {/* CSS de componente */}
        <MyComponent />
        <p>Pegou o CSS do componente</p>
        {/* inline style */}
        <p style={{ color: "blue", padding: "3px", borderBottom: "none"}}>Este elemento tem estilo inline</p>
        {/* inline style dinâmico */}
        <h2 style={n > 10 ? {color: "purple"} : {color: "orange"}}>
          CSS dinâmico
        </h2>
        {/* classes dinâmicas */}
        <h2 className={redTitle ? "red-title" : "title"}>Classe dinâmica</h2>
        {/* css module */}
        <Title />
      </div>
    </>
  )
}

export default App
