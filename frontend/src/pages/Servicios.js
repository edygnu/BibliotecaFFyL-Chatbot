import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/pages/Servicios.css';

const servicios = [
    {
        img: "img/carnet.jpg",
        alt: "Carnet",
        titulo: "Carnet",
        texto: "¡Tu llave al conocimiento! Un carnet. Todas las bibliotecas. ¡Tramitá el tuyo hoy!",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScT-2mVrkMdnnx5k8H8j-d4qCUhNQzgWtAG2RrKmXVJyaV9bA/viewform",
        linkText: "Quiero mi carnet",
        external: true
    },
    {
        img: "img/prestamos.jpg",
        alt: "Préstamos",
        titulo: "Préstamos",
        texto: "Conoce nuestros servicios de préstamos y los requisitos para retirar libros.",
        link: "/ServicioPrestamo",
        linkText: "Información",
        external: false
    },
    {
        img: "img/sala.jpg",
        alt: "Salas de Lectura",
        titulo: "Salas de Lectura",
        texto: "Contamos con una Sala Parlante y una Sala Silenciosa para que puedas trabajar en grupo o estudiar en silencio.",
        link: "#",
        linkText: "Reglamento",
        external: false
    },
    {
        img: "img/Tesis.jpg",
        alt: "Tesis",
        titulo: "Tesis",
        texto: "Autorización excepcional por el decano de la facultad para el acceso a tesis doctorales.",
        link: "files/DDJJ_Tesis.pdf",
        linkText: "Descargar formulario",
        external: true
    },
    {
        img: "img/alfin.png",
        alt: "ALFIN",
        titulo: "ALFIN",
        texto: "La Alfabetización Informacional tiene como objetivo desarrollar en los usuarios habilidades para la búsqueda, acceso y uso de la información.",
        link: "https://bibliodigital.ffyl.uncu.edu.ar/",
        linkText: "Aula virtual",
        external: true
    },
    {
        img: "img/malvinas.jpg",
        alt: "Nodo Malvinas",
        titulo: "Nodo Malvinas",
        texto: "Material impreso y digital sobre la Cuestión Malvinas en las bibliotecas de la UNCUYO.",
        link: "https://malvinas.ffyl.uncu.edu.ar/",
        linkText: "Acceder",
        external: true
    },
    {
        img: "img/bibliografia.jpg",
        alt: "Solicitud de Bibliografía",
        titulo: "Solicitud de Bibliografía",
        texto: "Pedinos nueva bibliografía que necesites que incorporemos en nuestro acervo.",
        link: "https://docs.google.com/forms/d/17ascQCW_Yp8aQEKPqGbnGeHd46WbcG3eSIKVzOvX0FM/viewform?edit_requested=true&fbzx=-3015868566828932580",
        linkText: "Solicitar compra",
        external: true
    }
];

const Servicios = () => {
    return (
        <main>
            <div className="servicios-container">
                <div className="servicios-grid">
                    {servicios.map((serv, idx) => (
                        <div className="servicios-card" key={idx}>
                            <img src={serv.img} className="servicios-img" alt={serv.alt} />
                            <div className="servicios-card-body">
                                <h5 className="servicios-card-title">{serv.titulo}</h5>
                                <p className="servicios-card-text">{serv.texto}</p>
                                <div className="servicios-card-btn">
                                    {serv.external ? (
                                        <a href={serv.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{serv.linkText}</a>
                                    ) : serv.link.startsWith("/") ? (
                                        <Link to={serv.link} className="btn btn-primary">{serv.linkText}</Link>
                                    ) : (
                                        <button className="btn btn-primary" type="button">{serv.linkText}</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Servicios;