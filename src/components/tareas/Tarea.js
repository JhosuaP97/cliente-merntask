import React,{useContext} from 'react'
import TareaContext from '../../context/tareas/TareaContext';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const Tarea =({tarea})=>{

    /* Obteneer el state de proyectos */
  const proyectosContext= useContext(ProyectoContext);
  const {proyecto}= proyectosContext;

    /* Obteneer la función del context de tarea */
  const tareasContext= useContext(TareaContext);
  const {eliminarTarea,obtenerTareas,actualizarTarea,guardarTareaActual}= tareasContext;

  /* Extraer el proyecto */
  const [proyectoActual]=proyecto;

  /* Función que se ejeecuta cuando el usuario presiona el boton eliminar tarea */
  const tareaEliminar=(id)=>{
      eliminarTarea(id,proyectoActual._id);
      obtenerTareas(proyectoActual.id);
  }

  /* Función que modifica el estado de las tareas */
  const cambiarEstado =(tarea)=>{
    if(tarea.estado){
      tarea.estado=false;
    }else{
      tarea.estado=true;
    }
    actualizarTarea(tarea);
  }

  /* Agrega una tarea actual cuando el usuario desea editarla*/
  const seleccionarTarea=(tarea)=>{
    guardarTareaActual(tarea);
  }

    return(
        <li className="tarea sombra">
        <p>{tarea.nombre}</p>

        <div className="estado">
            {tarea.estado 
            ? (
                <button
                type="button"
                className="completo"
                onClick={()=>cambiarEstado(tarea)}
                >
                Completo</button>
              )
            :(
                <button
                type="button"
                className="incompleto"
                onClick={()=>cambiarEstado(tarea)}
                >
                Incompleto</button>
              )
            }
        </div>

        <div className="acciones">
            <button
            type="button"
            className="btn btn-primario"
            onClick={()=>seleccionarTarea(tarea)}
            >Editar</button>
            <button
            type="button"
            className="btn btn-eliminar"
            onClick={()=>tareaEliminar(tarea._id)}
            >Eliminar</button>
        </div>
        </li>
    )
}

export default Tarea;