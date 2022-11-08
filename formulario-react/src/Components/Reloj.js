import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';

function RelojNombre({hora}){
    return <h2>{hora}</h2>
}

export default function Reloj(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);
        
    useEffect(()=>{
        let contador;
        visible? (contador = setInterval(()=>{
            setHora(new Date().toLocaleTimeString())
        }, 1000)): clearInterval(contador);
        
    return ()=>{
        clearInterval(contador);
    };
}, [visible]);

    return(
    <>

        <h2>Reloj en React</h2>
        {visible && <RelojNombre hora={hora}/>}
        <button onClick = {() => setVisible(true)}>Mostrar</button>
        <button onClick = {() => setVisible(false)}>Ocultar</button>


    </>
);
}