import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [sent, useSent] = useState(false);
  return (
    

    <div>
      <form>
        <div>
          <label>Nombre Completo:</label>
          <input placeholder="Nombre completo"></input>
        </div>
        <div>
          <label>Email:</label>
          <input placeholder="Email"></input>
        </div>
        <button>Enviar</button>

        {sent && (
          <div>Gracias por .....</div>
        )}
        
      </form>
    </div>
  );
};

export default Form;
