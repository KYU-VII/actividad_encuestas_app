import React from 'react';

function Encuestas({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <ul key={encuesta.id}>

                        <li id='tituloEncuesta'>{encuesta.pregunta}</li> 
                        
                        <ul key={encuesta.opciones}> 
                        {encuesta.opciones.map(opciones =>(
                            <li id='tituloOpcion'>{opciones}</li> ))}
                        </ul>
                        
                    </ul>
                ))}
            </ul>
        </div>
    );
}
export default Encuestas;