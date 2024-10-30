import React from 'react';

import ImagenFecha from '../Recursos/Foto+Fecha-01.png';
import TextoFecha from '../Recursos/Texto-01.png';

const Inicio = ({ onInscribeteClick, onFaqClick }) => {
    return (
        <div>
            <div>
                <img src={ImagenFecha} alt="Imagen de fecha" className="imagen-fecha"/>
                <br/>
                <img src={TextoFecha} alt="Texto de fecha" className="texto-fecha"/>
            </div>
        </div>
    );
};

export default Inicio;
