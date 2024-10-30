import React, { useState } from 'react';
import './App.css';
import Inicio from './Paginas/Inicio';
import Circuitos from './Paginas/Circuitos';
import Kit from './Paginas/Kit';
import Form from './Paginas/Form';
import PreguntasFrecuentes from './Paginas/PreguntasFrecuentes';
import Header from './Componentes/Header'; 
import LogoInicio from './Recursos/Logo Inicio.png';
import InformacionLegal from './Paginas/InformacionLegal';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const handleInscribeteClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
    setShowFAQ(false); // También ocultar PreguntasFrecuentes al regresar
  };

  const handleFAQClick = () => {
    setShowFAQ(true); 
  };

  return (
    <div className="App">
      <img src={LogoInicio} alt="Logo inicio" className="logo-inicio"/>
      {!showForm && ! showFAQ && (
        <Header 
          onFAQClick={handleFAQClick} 
          onInscribeteClick={handleInscribeteClick}
        />
      )}
      <div className="app-content">
        {!showForm && !showFAQ && (
          <>
            <Inicio onInscribeteClick={handleInscribeteClick} />
            <Circuitos />
            <Kit />
          </>
        )}
        {showForm && <Form onBackClick={handleBackClick} />}
        {showFAQ && <PreguntasFrecuentes onBackClick={handleBackClick} />}
        <InformacionLegal />
      </div>
    </div>
  );
}

export default App;
