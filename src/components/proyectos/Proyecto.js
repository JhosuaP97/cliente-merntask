import React,{useContext} from "react";
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Proyecto = ({proyecto}) => {
    /* Obteneer el state de proyectos */
    const proyectosContext= useContext(ProyectoContext);
    const {proyectoActual}= proyectosContext;

    /* Obteneer la función del context de tarea */
    const tareasContext= useContext(TareaContext);
    const {obtenerTareas}= tareasContext;

    /* Función para agregar el proyecto actual */
    const seleccionarProyecto = (id)=>{
      proyectoActual(id);// Selecciona el proyecto actual
      obtenerTareas(id);//filtrar las tareas cuando se de click
      
    }
  return (
    <li className="listado-proyectos">
      <button type="button" className="btn btn-blank" onClick={()=>seleccionarProyecto(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
