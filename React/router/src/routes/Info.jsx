import { useParams } from "react-router-dom";

function Info() {
  const { id } = useParams() 
  return (
    <div>
      {id}
    </div>
  )
}

export default Info
