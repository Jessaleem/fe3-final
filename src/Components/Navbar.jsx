//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <div>
      <button>Change theme</button>
      <div className="">
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/favorites">
        <h4>Favorites</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      </div>
    </div>
  )
}

export default Navbar