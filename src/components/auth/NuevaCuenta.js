import React,{useState, useContext,useEffect} from "react";
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/AlertaContext';
import AuthContext from '../../context/autenticacion/AuthContext';

const NuevaCuenta = (props) => {

    /* Extraer los valores del context */
    const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje,autenticado,registrarUsuario} = authContext;

    /* En caso de que el usuario se haya registrado o sea un registro duplicado */
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
        if(nombre.trim() ==='' || email.trim() ==='' || 
          password.trim() ==='' || confirmar.trim() ===''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
          }
        /* Contraseña minimo 6 caracteres */
        if(password.length < 6){
          mostrarAlerta('La contraseña debe ser minimo de 6 caracteres','alerta-error');
          return;
        }
        /* Contraseñas iguales */
        if(password!==confirmar){
          mostrarAlerta('Las contraseñas deben ser iguales','alerta-error');
          return;
        }
        /* pasarlo al action */
        registrarUsuario({
          nombre,
          email,
          password
        });

    }

  return (
    <div className="form-usuario">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null}
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
