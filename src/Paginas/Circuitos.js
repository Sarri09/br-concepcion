import React, { useState } from 'react';
import Circuito from '../Recursos/Circuitos/Circuito-01.png';
import TituloCircuito from '../Recursos/Circuitos/Texto-01.png';
import Agenda from '../Recursos/Agenda/Landing BR Concepción-01.png';

const Circuitos = () => {

    return (
        <div>
            <img src={TituloCircuito} alt="Imagen de fecha" className="Titulo-Circuito"/>
            <img src={Circuito} alt="Imagen de fecha" className="Circuito"/>
            <img src={Agenda} alt="Imagen Agenda" className='Agenda'/>
        </div>
    );
};

export default Circuitos;
