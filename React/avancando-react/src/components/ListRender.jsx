import { useState } from "react"

function ListRender() {
  const [list] = useState(["Matheus", "Pedro", "Josias"])
  
  const [users, setUsers] = useState([
    {id: 0, name: "Henrique", age: 20},
    {id: 1, name: "Bruna", age: 19},
    {id: 2, name: "Felipe", age: 22},
  ])

  const deleteRandom = () => {
    const id = Math.floor(Math.random() * 3)
    setUsers(prevUsers => 
      prevUsers.filter(user => id !== user.id)
    )
  }

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.age} anos</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender
