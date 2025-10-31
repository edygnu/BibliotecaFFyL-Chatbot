import React from 'react';
import '../styles/components/pages/ContactoPage.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faClock, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const ContactoPage = (props) => {
    return (
        <main className="contacto-page">
            <div className="contacto-container">
                <div className="contacto-grid">
                    <div className="contacto-card">
                        <div className="contacto-card-header">
                            <div className="contacto-card-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <h3>Horarios de atención</h3>
                        </div>
                        <div className="contacto-list">
                            <div className="contacto-item">
                                <strong>Préstamos:</strong>
                                <span>8:00 a 13:00 y de 15:00 a 20:00</span>
                            </div>
                            <div className="contacto-item">
                                <strong>Hemeroteca:</strong>
                                <span>8:00 a 13:00 y de 15:00 a 18:00</span>
                            </div>
                            <div className="contacto-item">
                                <strong>Sala de Lectura:</strong>
                                <span>8:00 a 20:00</span>
                            </div>
                            <div className="contacto-item">
                                <strong>Procesos Técnicos:</strong>
                                <span>8:00 a 20:45</span>
                            </div>
                        </div>
                    </div>
                    <div className="contacto-card">
                        <div className="contacto-card-header">
                            <div className="contacto-card-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <h3>Teléfonos</h3>
                        </div>
                        <p className="contacto-phone-info">Marca primero 4135000 + interno</p>
                        <div className="contacto-list">
                            <div className="contacto-item">
                                <strong>Circulación:</strong>
                                <span>2230</span>
                            </div>
                            <div className="contacto-item">
                                <strong>Hemeroteca:</strong>
                                <span>2224</span>
                            </div>
                            <div className="contacto-item">
                                <strong>Procesos Técnicos:</strong>
                                <span>2209</span>
                            </div>
                            <div className="contacto-item">
                                <strong>Dirección:</strong>
                                <span>2202</span>
                            </div>
                        </div>
                    </div>
                    <div className="contacto-card">
                        <div className="contacto-card-header">
                            <div className="contacto-card-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <h3>Email</h3>
                        </div>
                        <div className="contacto-email">
                            <a href="mailto:biblio@ffyl.uncu.edu.ar">biblio@ffyl.uncu.edu.ar</a>
                        </div>
                    </div>
                    <div className="contacto-card">
                        <div className="contacto-card-header">
                            <div className="contacto-card-icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <h3>Seguinos</h3>
                        </div>
                        <div className="contacto-redes">
                            <NavLink
                                className="contacto-red-link facebook"
                                to="https://www.facebook.com/biblioteca.ffyl.uncuyo/"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                                <span>Facebook</span>
                            </NavLink>
                            <NavLink
                                className="contacto-red-link instagram"
                                to="https://www.instagram.com/biblioteca.ffyl.uncuyo/"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                                <span>Instagram</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="contacto-ubicacion">
                    <div className="contacto-ubicacion-header">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <h3>Nuestra ubicación</h3>
                    </div>
                    <p>Facultad de Filosofía y Letras. Centro Universitario. M5502JMA. Mendoza, Argentina</p>
                    <div className="contacto-mapa">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.1563442829936!2d-68.8818831!3d-32.8786298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08488b895a21%3A0x74cf813252e20ed3!2sFacultad%20de%20Filosof%C3%ADa%20y%20Letras%20UNCuyo!5e0!3m2!1ses!2sar!4v1693847289123!5m2!1ses!2sar"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Facultad de Filosofía y Letras UNCuyo"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;