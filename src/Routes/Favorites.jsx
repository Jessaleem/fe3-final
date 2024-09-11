// import Card from "../Components/Card";

import { useCharStates } from "../Context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favorites = () => {
  const {favs} = useCharStates();
  return (
    <>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favs.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default Favorites;
