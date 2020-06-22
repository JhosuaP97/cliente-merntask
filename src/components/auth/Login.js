import React,{useState} from "react";
import {Link} from 'react-router-dom';

const Login = () => {
    /* State para iniciar sesión */
    const [usuario,guardarUsuario]=useState({
        email:'',
        password:''
    });

    /* Extrear usuario */
    const {email,password}= usuario;

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

        /* pasarlo al action */

    }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>

        <form onSubmit={onSubmit}>
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
            <input type="submit" className="btn btn-primario btn-block" value="Ingresar" />
          </div>
        </form>
        <Link to={'/nuevaCuenta'} className="enlace-cuenta">
            Obtener cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
