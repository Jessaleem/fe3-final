/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";


const CharStates = createContext();

const Context = ({children}) => {

    const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const lsTheme = localStorage.getItem('theme') || 'light';

    const [theme, setTheme] = useState(lsTheme);
    const [favs, setFavs] = useState(lsFavs);
    const [chars, setChars] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users/"

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(favs));
    }, [favs]);

  useEffect(() => {
    axios(url).then((res) =>{
      res.data.map((char) => {
        char.isFav = favs.some((fav) => fav.id === char.id);
        return char;
      })
      setChars(res.data) 
    } )
  }, []);

  

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

  }, [theme])

  console.log('chars', chars)
  console.log('favs', favs)

  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

 

  return (
    <CharStates.Provider value={{theme, setTheme, favs, setFavs, chars, toogleTheme}}>
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
