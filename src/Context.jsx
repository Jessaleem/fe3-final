/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";


const CharStates = createContext();

const Context = ({children}) => {

    const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];

    const [theme, setTheme] = useState();
    const [favs, setFavs] = useState(lsFavs);
    const [chars, setChars] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users/"

  useEffect(() => {
    axios(url).then((res) =>{
      console.log(res)
      setChars(res.data)
    } )
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));

  }, [favs])

 

  return (
    <CharStates.Provider value={{theme, setTheme, favs, setFavs, chars}}>
        {children}
    </CharStates.Provider>
  )
}

export default Context;

export const useCharStates = () => {
    const context = useContext(CharStates);
    if (!context) {
      throw new Error("useCharStates debe ser usado dentro de un CharStates.Provider");
    }
    return context;
}
