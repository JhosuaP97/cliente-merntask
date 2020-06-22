import React,{useReducer} from 'react'

/* import {v4 as uuid} from 'uuid'; */

import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from'../../types/';



const ProyectoState = props =>{

    const proyectos =[
        {id:1 ,nombre:'Tienda virtual'},
        {id:2 ,nombre:'Internet'},
        {id:3 ,nombre:'Diseño de sitio web'}
    ]

    const initialState ={
        proyectos:[],
        formulario:false,
        errorformulario:false,
        proyecto:null
    }

    /* Dispatch para ejecutar las acciones */
    /* Dispatch ejecuta los diferentes types */
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    /* Serie de funciones del CRUD */

    const mostrarFormulario =()=>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }

    /* Obtener proyectos */

    const obtenerProyectos=()=>{
        dispatch({
            type:OBTENER_PROYECTOS,
            payload:proyectos
        })
    }

    /* Agregar nuevo proyecto */

    const agregarProyecto=(proyecto)=>{
        proyecto.id=Date.now();
        console.log(proyecto);
        
        /* Insertar el proyecto en el state*/
        dispatch({
            type:AGREGAR_PROYECTO,
            payload:proyecto
        })
    }

    /* Validar formulario por errores  */
    const mostrarError =()=>{
        dispatch({
            type:VALIDAR_FORMULARIO
        })
    }

    /* Selecciona el proyecto que el usuario dió click */
    const proyectoActual = (proyectoId) =>{
        dispatch({
            type:PROYECTO_ACTUAL,
            payload:proyectoId
        })
    }

    /* Elimina un proyecto */
    const eliminarProyecto =(proyectoId)=>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:proyectoId
        })
    }


    return(
        <ProyectoContext.Provider
            value={{
                proyectos:state.proyectos,
                formulario:state.formulario,
                errorformulario:state.errorformulario,
                proyecto:state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;
