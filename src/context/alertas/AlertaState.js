import React,{useReducer} from 'react';
import alertaReducer from './AlertaReducer';
import alertContext from './AlertaContext';
import {MOSTRAR_ALERTA,OCULTAR_ALERTA} from '../../types/';


const AlertaState =(props)=>{
    const initialState= {
        alerta:null
    }

    const [state,dispatch] = useReducer(alertaReducer,initialState);

    /* Funciones */
    const mostrarAlerta = (msg,categoria)=>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload:{
                msg,
                categoria
            }
        });
        /* Despues de 5 segundos limpiar la alerta */
        setTimeout(()=>{
            dispatch({
                type:OCULTAR_ALERTA
            })
        },5000)
    }

    return(
        <alertContext.Provider
        value={{
            alerta:state.alerta,
            mostrarAlerta
        }}
        >
        {props.children}
        </alertContext.Provider>
    )

}

export default AlertaState;


