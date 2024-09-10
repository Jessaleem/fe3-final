/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCharStates } from "../Context";

const Card = ({ char }) => {

  const {setFavs} = useCharStates();

  const addFav = ()=>{
   setFavs((favs)=> [...favs, char]);
  };


  return (
    <>
    <div className="">
      <Link to={"/detail/"+ char.id}>
      <h2>{char.name}</h2>
      <h3>{char.username}</h3>
      </Link>
      <button onClick={addFav}>
        favorite
      </button>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
    </>
  );
};

export default Card;
