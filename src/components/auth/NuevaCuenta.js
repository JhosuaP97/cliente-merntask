import React,{useState} from "react";
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    /* State para iniciar sesión */
    const [usuario,guardarUsuario]=useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    /* Extrear usuario */
    const {nombre,email,password,confirmar}= usuario;

    const onChange = (e) => {
        guardarUsuario({
            /* Hacemos una copia del usuario para que no se reeescriba */
            ...usuario,
            [e.target.name]:e.target.value
        });
    };

    /* Cuando el usuario quiere iniciar sesión */
    const onSubmit = (e) =>{
        e.preventDefault();

        /* Validar que no haya campos vacíos */

        /* Contraseña minimo 6 caracteres */

        /* Contraseñas iguales */

        /* pasarlo al action */

    }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear cuenta</h1>

        <form onSubmit={onSubmit}>
        <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tú nombre"
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
              placeholder="Tú correo electrónico"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tú Contraseña"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tú Contraseña"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Registrar" />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">
           Volver al inicio de sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
