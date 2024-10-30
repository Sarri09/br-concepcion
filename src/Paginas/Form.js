import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import CuadroForm from '../Recursos/Formulario Contacto/Back Cuadro Contacto-01.png';
import TituloContacto from '../Recursos/Formulario Contacto/Titulo contacto-01.png';
import SubtituloContacto from '../Recursos/Formulario Contacto/Subtitulo Formulario Contacto-01.png';
import BotonEnviar from '../Recursos/Formulario Contacto/Boton Enviar-01.png';
import SubtituloBotonEnviar from '../Recursos/Formulario Contacto/Subtitulo boton enviar-01.png';

const Form = ({ onBackClick }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAsuntoChange = (event) => {
        setAsunto(event.target.value);
    };

    const handleMensajeChange = (event) => {
        setMensaje(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            form: 'barbierun',
        };

        emailjs.send('service_urv6c2q', 'template_7rslm2z', templateParams, 'eiYNDxW4fyXp2qpw8')
            .then((result) => {
                console.log(result.text);
                setFormSubmitted(true);
                setIsSubmitting(false);
                // Reset form fields
                setNombre('');
                setEmail('');
                setAsunto('');
                setMensaje('');
            }, (error) => {
                console.error(error.text);
                setIsSubmitting(false);
            });
    };

    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <button onClick={onBackClick} className='form-back-button'>x</button>
                <div className='form-images-container'>
                    <img src={TituloContacto} alt='Titulo Contacto' className='form-imagen form-titulo'/>
                    <img src={SubtituloContacto} alt='Subtitulo Contacto' className='form-imagen form-subtitulo'/>
                    <form onSubmit={handleSubmit} className='inputs-container'>
                        <div className='form-group'>
                            <label htmlFor="nombre">*NOMBRE</label>
                            <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} className='form-input'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">*EMAIL</label>
                            <input type="email" id="email" value={email} onChange={handleEmailChange} className='form-input'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="asunto">*ASUNTO</label>
                            <input type="text" id="asunto" value={asunto} onChange={handleAsuntoChange} className='form-input'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="mensaje">*MENSAJE</label>
                            <textarea id="mensaje" value={mensaje} onChange={handleMensajeChange} className='form-input form-textarea'/>
                        </div>
                        <button type="submit" className='form-button'>
                            <img src={BotonEnviar} alt='Boton Enviar'/>
                        </button>
                        <div className='form-button-subtitulo-container'>
                            <img src={SubtituloBotonEnviar} alt='Subtitulo Boton Enviar' className='form-button-subtitulo'/>
                        </div>
                    </form>
                    {isSubmitting && <p>Cargando...</p>}
                    {formSubmitted && <p>Mensaje correctamente enviado</p>}
                </div>
            </div>
        </div>
    );
};

export default Form;
