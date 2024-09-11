
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import DetailStyle from '../Styles/Detail.module.css';

const Detail = () => {

  const [detail, setDetail] = useState({});

  const { id } = useParams();

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(url).then((res) => {
      //console.log(res.data)
      setDetail(res.data)
    });
  }, [])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={DetailStyle.master}>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail