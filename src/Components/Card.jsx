/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";
import CardStyle from '../Styles/Card.module.css';
import CardStyleDark from '../Styles/CardDark.module.css';

import dentistImage from '../../public/images/doctor.jpg';

import starImage from '../../public/images/start_empty.png';
import starImageDark from '../../public/images/start_empty_dark.png';
import starSelectedImage from '../../public/images/start_filled.png';


const Card = ({ char }) => {
  const {state, dispatch} = useCharStates();
  const isFav = state.favs.some((fav) => fav.id === char.id);

  const themeStyles = state.theme == "dark" ? CardStyleDark : CardStyle;
  const imageStar = state.theme == "dark" ? starImageDark : starImage;

  const addFav = () => {
    if(!state.favs.some((fav) => fav.id === char.id)){
      dispatch({type: "ADD_FAVS", payload: char});
    } else {
      dispatch({type: "REMOVE_FAVS", payload: char.id});
    }
  }

  return (
    <div className={themeStyles.card}>
      <Link to={"/detail/" + char.id} className={themeStyles.link}>
        <div className={themeStyles.imagediv}>
          <img src={dentistImage} className={themeStyles.imagendent} />
        </div>
        <h4>{char.name}</h4>
        <p>{char.username}</p>
      </Link>
      <button onClick={addFav} 
              className={isFav ? themeStyles.btnFavorite : themeStyles.btnNotFavorite} >
                {isFav ? <img className={themeStyles.imgStar} src={starSelectedImage}></img> : <img className={themeStyles.imgStar} src={imageStar}></img>}
                </button>
    </div>
  );
};

export default Card;
