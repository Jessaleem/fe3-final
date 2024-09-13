/* eslint-disable react/prop-types */
import { createContext, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducers/reducers";


const CharStates = createContext();

const Context = ({children}) => {

    const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const lsTheme = localStorage.getItem("theme") || "light";
    const initialState = {
      chars: [],
      favs: lsFavs,
      theme: lsTheme
    }

    const url = "https://jsonplaceholder.typicode.com/users/"

    const [state, dispatch] = useReducer(reducer, initialState );

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(state.favs));
    }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) =>{
      res.data.map((char) => {
        char.isFav = state.favs.some((fav) => fav.id === char.id);
        return char;
      })
      dispatch({type: "GET_CHARS", payload: res.data});
    } )
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);

    if (state.theme === "dark") {
        document.body.classList.add("dark");
        /*document.querySelectorAll('*').forEach((element) => {
          element.classList.add('dark');
        });*/
    } else {
        document.body.classList.remove("dark");
    }
  }, [state.theme])

 
  return (
    <CharStates.Provider value={{state, dispatch} }>
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
