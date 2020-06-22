import React,{Fragment,useState, useContext} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';


const NuevoProyecto = () => {

    /* Obteneer el state del formulario */
    const proyectosContext= useContext(ProyectoContext);
    const {formulario,errorformulario,mostrarFormulario,agregarProyecto,mostrarError}= proyectosContext;
    /* State para el proyecto */
    const [proyecto,guardarProyecto]=useState({
        nombre:''
    });

    /* Extraer nombre del proyecto */
    const {nombre}=proyecto;


    /* Lee los contenidos del input */
    const onChangeProyecto =(e)=>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    }

    /* Cuando el usuario envía un proyecto */

    const onSubmitProyecto = (e)=>{
        e.preventDefault();

        /* Validar el proyecto */
        if(nombre === ''){
            mostrarError();
            return;
        }
        /* Agregar al state */
        agregarProyecto(proyecto);
        /* Reiniciar el form */
        guardarProyecto({
            nombre:''
        });
    }

    const onClickFormulario =()=>{
        mostrarFormulario();
    }


    return(
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickFormulario}
            >Nuevo proyecto</button>

            {
                formulario ?
                (
                    <form className="formulario-nuevo-proyecto"
                  onSubmit={onSubmitProyecto}
                    >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre del proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />

                    <input 
                        type="submit" 
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto"/>
                    </form>
                )
                :null
            }

            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}

        </Fragment>
        
    );
}

export default NuevoProyecto;
