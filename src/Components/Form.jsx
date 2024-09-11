import { useState } from "react";
import FormStyle from "../Styles/Form.module.css";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [sent, useSent] = useState(false);

  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    comentarios: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (usuario.nombre.trim().length >= 5 && emailRegex.test(usuario.email)) {
      setError(false);
      setMostrar(true);
    } else {
      setError(true);
    }
  };

  const handleChange = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={FormStyle.formulario}>
        
          <label className={FormStyle.textos}>Nombre Completo:</label>
          <input className={FormStyle.entrada} placeholder="Nombre completo" type="text" name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
          ></input>
        
        
          <label className={FormStyle.textos}>Email:</label>
          <input className={FormStyle.entrada} name="email" type="email" placeholder="Email"
            value={usuario.email}
            onChange={handleChange}></input>
        
          <label className={FormStyle.textos}>Comentarios:</label>
          <textarea  className={FormStyle.entrada} name="comentarios" type="text" placeholder="Comentarios"
            value={usuario.comentarios}
            onChange={handleChange}></textarea>
        
        <button>Enviar</button>

        {error ? <p className={FormStyle.messageError}>Por favor verifique su información nuevamente</p> : (
                mostrar && <p>Gracias [nombre del usuario], te contactaremos cuando antes vía mail</p>
            )  }
      </form>
      
    </>
  );
};

export default Form;
