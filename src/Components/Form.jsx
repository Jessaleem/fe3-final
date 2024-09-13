import { useState, useEffect } from "react";
import FormStyle from "../Styles/Form.module.css";
import FormStyleDark from "../Styles/FormDark.module.css";
import { useCharStates } from "../Context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {state} = useCharStates();
  const themeStyles = state.theme == "dark" ? FormStyleDark : FormStyle;

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

    if (usuario.nombre.trim().length >= 5 && emailRegex.test(usuario.email) && usuario.comentarios.trim().length >= 5) {
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
      <form onSubmit={handleSubmit} className={themeStyles.formulario}>
        
          <label className={themeStyles.textos}>Nombre Completo:</label>
          <input className={themeStyles.entrada} placeholder="Nombre completo" type="text" name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
          ></input>
        
        
          <label className={themeStyles.textos}>Email:</label>
          <input className={themeStyles.entrada} name="email" type="email" placeholder="Email"
            value={usuario.email}
            onChange={handleChange}></input>
        
          <label className={themeStyles.textos}>Comentarios:</label>
          <textarea  className={themeStyles.entrada} name="comentarios" type="text" placeholder="Comentarios"
            value={usuario.comentarios}
            onChange={handleChange}></textarea>
        
        <button>Enviar</button>

        {error ? <p className={themeStyles.messageError}>Por favor verifique su información nuevamente</p> : (
                mostrar && <p>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</p>
            )  }
      </form>
      
    </>
  );
};

export default Form;
