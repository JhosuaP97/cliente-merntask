import React,{useContext,useState,useEffect} from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const FormTarea =()=>{

    /*Extraer si un proyecto esta activo */
  const proyectosContext= useContext(ProyectoContext);
  const {proyecto}= proyectosContext;

  /* Obteneer la función del context de tarea */
  const tareasContext= useContext(TareaContext);
  const {tareaseleccionada,errortarea,agregarTarea,validarTarea,obtenerTareas,actualizarTarea,limpiarTarea}= tareasContext;

  /* Effect que detecta si hay una tarea seleccionada */
  /* useEffect SIEMPRE es un arrow function y sus dependencias es como un arreglo */
  useEffect(()=>{
      if(tareaseleccionada !==null){
          guardarTarea(tareaseleccionada);
      }else{
          guardarTarea({
              nombre:''
          })
      }
      // eslint-disable-next-line
  },[tareaseleccionada]);

  /* State del formulario */
  const [tarea,guardarTarea] = useState({
      nombre:''
  })

  /* Extraer nombre de la tarea */
  const {nombre}=tarea;
  /* Si no hay proyecto seleccionado */
  if(!proyecto) return null

  /* array Destructuring para extraer el proyecto actual */
  const [proyectoActual]=proyecto;

  /* Leer los valores del formulario */

  const handleChange=(e)=>{
      guardarTarea({
          ...tarea,
          [e.target.name]:e.target.value
      })
  }


  const onsSubmit =(e)=>{
      e.preventDefault();
      /*  Validar*/
      if(nombre.trim()===''){
        validarTarea();
        return;
      }

      /* Si es edición o es nueva tarea */

      if(tareaseleccionada ===null){
        /* Agregar la nueva tarea al state de tareas */
        tarea.proyecto= proyectoActual._id
        agregarTarea(tarea);
      }else{
          /* Actualizar tarea existente */
          actualizarTarea(tarea);
          /* Elimina tarea seleccionada del state */
          limpiarTarea();
      }
      

      /* Obtener y filtrar las tareas del proyecto actual */
      obtenerTareas(proyectoActual.id);
      /* Reiniciar el form */
      guardarTarea({
          nombre:''
      });
  }
    return(
        <div className="formulario">
        <form onSubmit={onsSubmit}>
            <div className="contenedor-input">
                <input 
                type="text"
                className="input-text"
                placeholder="Nombre de tarea..."
                name="nombre"
                value={nombre}
                onChange={handleChange}
                />
            </div>

            <div className="contenedor-input">
                <input 
                type="submit"
                className="btn btn-primario btn-submit btn block"
                value={ tareaseleccionada ? "Editar tarea": "Agregar tarea"}
                />
            </div>
        </form>
        {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> :null}
        </div>
    )
}

export default FormTarea;