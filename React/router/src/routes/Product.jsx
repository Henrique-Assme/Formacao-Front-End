import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";

function Product() {
  const { id } = useParams()

  const url = "http://localhost:3000/products/" + id

  const {data: product} = useFetch(url)

  if(!product) return <p>Carregando...</p>
  return (
    <div>
      <p>ID do produto: {product.id}</p>
      <div>
        <h1>{product.name}</h1>
        <p>R${product.price}</p>
        <Link to={`/products/${id}/info`}>Mais Informações</Link>
      </div>
    </div>
  )
}

export default Product
