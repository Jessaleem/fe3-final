/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";
import CardStyle from '../Styles/Card.module.css';
import dentistImage from '../../public/images/doctor.jpg';
import { useEffect, useState } from "react";

const Card = ({ char }) => {
  const { favs, setFavs } = useCharStates();
  const [ isfav, setIsFav] = useState(char.isFav);

  const addFav = () => {
    if (!favs.some((fav) => fav.id === char.id)) {
      char.isFav = true;
      setFavs((favs) => [...favs, char]);
      setIsFav(true);
    } else {
      setFavs(favs.filter((fav) => fav.id !== char.id));
      setIsFav(false);
    }
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
      <button onClick={addFav} className={isfav ? CardStyle.btnFavorite : CardStyle.btnNotFavorite} >{isfav ?  "⭐":"Favorite"}</button>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

    </div>
  );
};

export default Card;
