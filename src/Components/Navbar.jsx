//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link, useNavigate } from "react-router-dom"
import { routes } from "../utils/routes";
import { useCharStates } from "../Context";

const Navbar = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useCharStates();

  const toogleTheme = () => {
    dispatch({type: "TOGGLE_THEME", payload: state.theme === "light" ? "dark" : "light"});
  }


  return (
    <nav className="navbar">
      <div className="navbar-title">
        <span className="navbar-titleI">DH</span>
        <span className="navbar-titleII">Odonto</span>
      </div>
      <div className="navbar-links">
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contact</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favorites</h4>
      </Link>
      <button className="navbar-button" onClick={toogleTheme}>{state.theme === 'light' ? '🌞' : '🌚'}</button>
      <button onClick={() => navigate(-1)}>🔙</button>
      </div>
    </nav>
  )
}

export default Navbar