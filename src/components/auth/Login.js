import React,{useState,useContext,useEffect} from "react";
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/AlertaContext';
import AuthContext from '../../context/autenticacion/AuthContext';

const Login = (props) => {

   /* Extraer los valores del context */
   const alertaContext = useContext(AlertaContext);
   const {alerta,mostrarAlerta} = alertaContext;

   const authContext = useContext(AuthContext);
   const {mensaje,autenticado,iniciarSesion} = authContext;

   /* En caso de que el password o usuario no exista */
    /* Aquí es donde se muestra las alertas */
    useEffect(()=>{
      if(autenticado){
        props.history.push('/proyectos')
      }
      if(mensaje){
        mostrarAlerta(mensaje.msg,mensaje.categoria);
      }
      // eslint-disable-next-line
    },[mensaje,autenticado, props.history]);

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
        if(email.trim()==='' || password.trim()===''){
          mostrarAlerta('Todos los campos son obligatorios','alerta-error');
        }
        /* pasarlo al action */
        iniciarSesion({email,password});
    }

  return (
    <div className="form-usuario">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null}
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
