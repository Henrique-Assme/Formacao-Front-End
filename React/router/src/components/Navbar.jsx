import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/contact" >Contatos</NavLink>
    </div>
  )
}
export default Navbar
