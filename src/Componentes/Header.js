import React, { useState, useEffect } from 'react';
import LogoInicio from '../Recursos/Logo Inicio.png';
import Comollegar from '../Recursos/Comollegar.jpeg';
import ComollegarMobile from '../Recursos/ComollegarMobil.jpeg';
import Modal from './ModalHeader'; 
import '../App.css';

const Header = ({ onFAQClick, onInscribeteClick }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isMobileMenuFixed, setIsMobileMenuFixed] = useState(false);
    const [showModal, setShowModal] = useState(false); 
    const [modalContent, setModalContent] = useState(null); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsHeaderFixed(true);
                setIsMobileMenuFixed(true);
            } else {
                setIsHeaderFixed(false);
                setIsMobileMenuFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleFAQClick = () => {
        //onFAQClick();
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleComoLlegarClick = (isMobile) => {
        //setModalContent(isMobile ? ComollegarMobile : Comollegar);
        //setShowModal(true);
    };

    return (
        <div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <img src={modalContent} alt="¿Cómo llegar?" className='Modalh' />
            </Modal>

            <div className={`header-container desktop-menu ${isHeaderFixed ? 'fixed' : ''}`}>
                <div className="header-links">
                    <a href="#">INICIO</a>
                    <a href="#" onClick={() => handleComoLlegarClick(false)}><p>INFORMACION</p><p> CARRERA</p></a>
                    <a className="inscripciones-link" href="https://www.ticketmaster.cl/event/barbie-run-2024-home">INSCRIPCIONES</a>
                    <a href="#" download>BASES</a>
                    <a href="#" onClick={handleFAQClick}>FAQ</a>
                    <a href="#" onClick={onInscribeteClick}>CONTACTO</a>
                </div>
            </div>

            <div className={`header-container mobile-menu ${showMenu ? 'active' : ''} ${isMobileMenuFixed ? 'fixed' : ''}`}>
                <div className="header-links">
                    <a href="#" onClick={toggleMenu}>Menú</a>
                    {showMenu && (
                        <div className="mobile-menu-content">
                        <a className="header-mobile-links" href="#">INICIO</a>
                        <a className="header-mobile-links" href="#" onClick={() => handleComoLlegarClick(true)}>
                            <div className="info-carrera-text">
                                <p>INFORMACION</p>
                                <p>CARRERA</p>
                            </div>
                        </a>
                        <a className="inscripciones-link header-mobile-links" href="https://www.ticketmaster.cl/event/barbie-run-2024-home">INSCRIPCIONES</a>
                        <a className="header-mobile-links" href="#">BASES</a>
                        <a className="header-mobile-links" href="#" onClick={handleFAQClick}>FAQ</a>
                        <a className="header-mobile-links" href="#" onClick={onInscribeteClick}>CONTACTO</a>
                    </div>
                    
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
