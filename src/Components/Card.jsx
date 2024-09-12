/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";
import CardStyle from '../Styles/Card.module.css';
import dentistImage from '../../public/images/doctor.jpg';

const Card = ({ char }) => {
  const {state, dispatch} = useCharStates();

  // const addFav = () => {
  //   if (!favs.some((fav) => fav.id === char.id)) {
  //     char.isFav = true;
  //     setFavs((favs) => [...favs, char]);
  //     setIsFav(true);
  //   } else {
  //     setFavs(favs.filter((fav) => fav.id !== char.id));
  //     setChars((chars) => chars.map((c) => {
  //       if (c.id === char.id) {
  //         c.isFav = false;
  //       }
  //       return c;
  //     }));

  //     setIsFav(false);
  //   }
  // };

  const addFav = () => {
    if(!state.favs.some((fav) => fav.id === char.id)){
      dispatch({type: "ADD_FAVS", payload: char});
    } else {
      dispatch({type: "REMOVE_FAVS", payload: char.id});
    }
  }

  const isFav = state.favs.some((fav) => fav.id === char.id);

  return (
    <div className={CardStyle.card}>
      <Link to={"/detail/" + char.id}>
        <div className={CardStyle.imagediv}>
          <img src={dentistImage} className={CardStyle.imagendent} />
        </div>
        <h4>{char.name}</h4>
        <p>{char.username}</p>
      </Link>
      <button onClick={addFav} className={isFav ? CardStyle.btnFavorite : CardStyle.btnNotFavorite} >{isFav ?  "⭐":"Favorite"}</button>
    </div>
  );
};

export default Card;
