import React, {useContext, useEffect} from "react";
import Proyecto from "./Proyecto";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import {TransitionGroup,CSSTransition } from "react-transition-group";
import AlertaContext from "../../context/alertas/AlertaContext"
const ListadoProyectos = () => {
  /* Extraer proyectos de state inicial*/
  const proyectosContext = useContext(ProyectoContext);
  const {mensaje,proyectos,obtenerProyectos} = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const {alerta, mostrarAlerta} = alertaContext;


  /* Obtener proyectos cuando carga el componente */
  useEffect(() => {
    /* Si hay un error */
    if(mensaje){
      mostrarAlerta(mensaje.msg,mensaje.categoria);
    }
    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);

  /* Revisar si proyectos tiene contenido */
  if (proyectos.length === 0) return <p>No hay proyectos, ¿Qué tal si creas uno?</p>;

  return (
    <ul className="listado-proyectos">
      {alerta ?(<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>):null}
        <TransitionGroup>
          {proyectos.map((proyecto) => (
            <CSSTransition key={proyecto._id}  timeout={200} classNames="proyecto">
              <Proyecto  proyecto={proyecto} />
            </CSSTransition>
          ))}
        </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
