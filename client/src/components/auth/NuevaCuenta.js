import React, { useState } from "react";
import {Link} from 'react-router-dom'

const NuevaCuenta = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: ""
  });

  //extraer el usuario
  const { nombre, email, password, confirmar } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario quiere iniciar Sesion
const onSubmit=e=>{
    e.preventDefault();


    //validar que no haya campos vacios


    //pasarle el action

}

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dar">
        <h1>Obtener una Cuenta</h1>
        <form
        onSubmit={onSubmit}
        >
             <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
               type="text"
               id="nombre"
               name="nombre"
               placeholder="Tu nombre"
               value={nombre}
               onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confrimar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">
            Volver a iniciar Sesión
        </Link>
      </div>
    </div>
  );
};
export default NuevaCuenta;