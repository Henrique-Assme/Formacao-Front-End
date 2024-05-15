import partyFetch from "../axios/config"

import { useEffect, useState } from "react"

import { Link, useNavigate, useParams } from "react-router-dom"

import "./Party.css"
import useToast from "../hooks/useToast"

const Party = () => {
  const { id } = useParams()

  const [party, setParty] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const loadParty = async () => {
      const res = await partyFetch.get(`/parties/${id}`)
      setParty(res.data)
    } 
    loadParty()
  }, [])
  
  const handleDelete = async () => {
    const res = await partyFetch.delete(`/parties/${id}`)
    if(res.status === 200){
      navigate("/")
      useToast(res.data.msg)
    }
  }

  if(!party) return <p>Carregando...</p>

  return (
    <div className="party">
      <h1>{party.title}</h1>
      <div className="actions-container">
        <Link to={`/party/edit/${party._id}`} className="btn">Editar</Link>
        <button className="btn-secondary" onClick={handleDelete}>Excluir</button>
        <p>Orçamento: R${party.budget}</p>
        <h3>Serviçoes contratados:</h3>
        <div className="services-container">
          {party.services.map(service => (
            <div className="service" key={service._id}>
              <img src={service.image} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Party
