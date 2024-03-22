import { useState } from 'react'
import './App.css'
import city from "./assets/city.jpg"
import CardDetails from './components/CardDetails'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import Data from './components/Data'
import ExecuteFunction from './components/ExecuteFunction'
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {

  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }
  return (
    <>
      <div style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* imagem em public */}
        <img src="/img1.jpg" alt="Alguma imagem" />
        {/* img em assets */}
        <img src={city} alt="Cidade" />
        <Data />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Henrique" />
        <CardDetails brand="VW" km={5000} color="Vermelho"/>
        <CardDetails brand="Gol" km={15} color="Branco"/>
        {cars.map(car => (
          <CardDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
        ))}
        <Container>
          <h2>Children de container</h2>
        </Container>
        <ExecuteFunction myFunction={() => console.log("teste")}/>
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
