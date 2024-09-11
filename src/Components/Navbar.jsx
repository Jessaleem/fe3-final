//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link, useNavigate } from "react-router-dom"
import { routes } from "../utils/routes";
import { useCharStates } from "../Context";

const Navbar = () => {
  const navigate = useNavigate();
  const {theme, toogleTheme} = useCharStates();

  return (
    <nav className="navbar">
      <button onClick={toogleTheme}>{theme === 'light' ? '🌞' : '🌚'}</button>
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favorites</h4>
      </Link>
    </nav>
  )
}

export default Navbar