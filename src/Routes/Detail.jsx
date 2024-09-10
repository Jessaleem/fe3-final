
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {

  const [detail, setDetail] = useState({});

  const {id} = useParams();
  console.log(id)

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() =>{
    axios(url).then((res) => {
      console.log(res.data)
      setDetail(res.data)
    });
  }, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Nombre: {detail.name}</h1>
      <h3>Email: {detail.email}</h3>
      <h3>Telefono: {detail.phone}</h3>
      <h3>Sitio Web: {detail.website}</h3>
    </>
  )
}

export default Detail