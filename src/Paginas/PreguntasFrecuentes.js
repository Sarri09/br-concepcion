import React, { useState } from 'react';
import preguntasYRespuestas from '../Recursos/FAQ/PreguntasFrecuentes.json'; 
import Faqimage from '../Recursos/FAQ/PREGUNTASFRECUENTESIMG.png';

const PreguntasFrecuentes = ({onBackClick}) => {
  const [expanded, setExpanded] = useState(Array(preguntasYRespuestas.length).fill(false));

  const toggleContent = (index) => {
    setExpanded(prevExpanded =>
      prevExpanded.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div>
      <h1 className='Texto-Preguntas-frecuentes'>PREGUNTAS</h1>
      <h1 className='Texto-Preguntas-frecuentes'>FRECUENTES</h1>
      <img src={Faqimage} alt="Preguntas Frecuentes" className='faqimage' />
      <button onClick={onBackClick} className='close-button'>×</button>
      <button onClick={onBackClick} className='back-button'>×</button>
      {preguntasYRespuestas.map((item, index) => (
        <div key={index} className="container-padre">
          <div className="container-calipso">
            <div className="title-preguntas-frecuentes">{item.pregunta}</div>
            <button className="button-preguntas-frecuentes" onClick={() => toggleContent(index)}>
              {expanded[index] ? '-' : '+'}
            </button>
            {expanded[index] && (
              <div className="content-preguntas-frecuentes expanded">
                <p>{item.respuesta}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreguntasFrecuentes;
