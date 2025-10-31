import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/pages/TitulosPage.css';

const TitulosPage = (props) => {
    return (
        <main>
            <div className="container-fluid">

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/carnet.jpg" className="card-img-top" alt="Card 1" />
                            <div className="card-body">
                                <h5 className="card-title">Carnet</h5>
                                <p className="card-text">¡Tu llave al conocimiento! Un carnet. Todas las bibliotecas. ¡Tramitá el tuyo hoy!</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScT-2mVrkMdnnx5k8H8j-d4qCUhNQzgWtAG2RrKmXVJyaV9bA/viewform" target="blank" className="btn btn-primary">Quiero mi carnet</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/prestamos.jpg" className="card-img-top" alt="Card 3" />
                            <div className="card-body">
                                <h5 className="card-title">Préstamos</h5>
                                <p className="card-text">Busca el libro de tu interés en la colección de la Biblioteca FFyL.</p>
                                <Link to="/ServicioPrestamo" className="btn btn-primary">Información</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/sala.jpg" className="card-img-top" alt="Card 2" />
                            <div className="card-body">
                                <h5 className="card-title">Salas de Lectura</h5>
                                <p className="card-text">Contamos con una Sala Parlante y una Sala Silenciosa para que puedas trabajar en grupo o estudiar en silencio.</p>
                                <a href="#" className="btn btn-primary">Reglamento</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/DSI.jpg" className="card-img-top" alt="Card 4" style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">DSI</h5>
                                <p className="card-text">Mediante la Diseminación Selectiva de la Información atendemos las necesidades específicas de bibliografía de nuestros usuarios.</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScT-2mVrkMdnnx5k8H8j-d4qCUhNQzgWtAG2RrKmXVJyaV9bA/viewform" target="blank" className="btn btn-primary">Quiero mi carnet</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/referencia.jpg" className="card-img-top" alt="Card 5" style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Referencia Bibliográfica</h5>
                                <p className="card-text">Te ayudamos a identificar y localizar los materiales bibliográficos que necesites para tus estudios e investigaciones.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/alfin.png" className="card-img-top" alt="Card 6" style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">ALFIN</h5>
                                <p className="card-text">La Alfabetización Informacional tiene como objetivo desarrollar en los usuarios habilidades para la búsqueda, acceso y uso de la información.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>
                    Carnet de Biblioteca
                    Requisitos para alta y/o renovación del carnet de Biblioteca:
                    Alumnos de grado:

                    A distancia: Completá el formulario con los datos que te solicitamos (debés tener una cuenta de correo en GMail). Todo el trámite podrás hacerlo desde tu teléfono. Te pediremos fotos de tu DNI, rostro y el PDF del certificado de alumno/a regular emitido por el SIU/Guaraní.

                    Presencial: En Procesos Técnicos; 1er. piso frente a Sala de Lectura. Procurá concurrir con el certificado del SIU/Guaraní descargado en tu teléfono y tu DNI físico. Solo tomaremos foto de tu rostro.

                    Docentes:

                    En Procesos Técnicos; 1er. piso frente a Sala de Lectura. Deberá concurrir con el certificado de designación emitido por la oficina de RRHH y el DNI físico.

                    El certificado de designación puede solicitarlo presencialmente en la Oficina de RR.HH. o por correo a personal@ffyl.uncu.edu.ar.

                    Socios externos (egresados):

                    1-Obtener el certificado de egreso enviando la solicitud a la Coordinación de Egresados (egresados-ffyl@ffyl.uncu.edu.ar).
                    2-Una vez obtenido el certificado, completar el formulario de actualización de datos.
                    3-Esperar la confirmación de alta (por correo).

                    En todos los casos, luego de haber respondido a los requerimientos, la Biblioteca informará al email del solicitante la confirmación de la gestión concluida o bien otros datos que pudiesen precisarse para tal fin.

                    Gracias por formar parte de nuestra Biblioteca.

                    http://ffyl1.uncu.edu.ar/guarani3w/

                    https://docs.google.com/forms/d/e/1FAIpQLScT-2mVrkMdnnx5k8H8j-d4qCUhNQzgWtAG2RrKmXVJyaV9bA/viewform






                </p> */}
            </div>

        </main>

    );
}

export default TitulosPage;