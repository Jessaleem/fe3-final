/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";
import CardStyle from '../Styles/Card.module.css';
import dentistImage from '../../public/images/doctor.jpg';

const Card = ({ char }) => {
  
  const { setFavs } = useCharStates();

  const addFav = () => {
    setFavs((favs) => [...favs, char]);
  };


  return (
      <div className={CardStyle.card}>
        <Link to={"/detail/" + char.id}>
          <div className={CardStyle.imagediv}>
            <img src={dentistImage} className={CardStyle.imagendent} />
          </div>
          <h4>{char.name}</h4>
          <p>{char.username}</p>
        </Link>
        <button className="favButton" onClick={addFav}>⭐</button>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      </div>
  );
};

export default Card;
