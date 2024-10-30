import React from 'react';
import Kits from '../Recursos/Kit de Competencia/Kit de competencia-01.png';
import Logosponsors from "../Recursos/Datos + logos-01.png";

const Kit = () => {
  return (
    <div>
      <img src={Kits} alt="Kit" className='Kit'/>
      <img src={Logosponsors} alt="Logosponsors" className='logo-sponsors'/>
    </div>
  );
};

export default Kit;
