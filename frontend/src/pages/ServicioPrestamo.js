import React from "react";
import '../styles/components/pages/ServicioPrestamo.css';

const ServicioPrestamo = (props) => {
    return (
        <main>
            <div className="container-fluid">
                <div class="fondo-bibliografico">
                    <div class="fb-header">
                        <div class="fb-colors">
                            <span style={{ background: "#ff7e6b" }}></span>
                            <span style={{ background: "#a48cf0" }}></span>
                            <span style={{ background: "#3ec6e0" }}></span>
                            <span style={{ background: "#7edc8a" }}></span>
                            <span style={{ background: "#ffe07e" }}></span>
                            <span style={{ background: "#f7a6c7" }}></span>
                            <span style={{ background: "#f7b6e0" }}></span>
                        </div>
                        <h1>FONDO BIBLIOGRÁFICO</h1>
                        <h2>Servicio de Préstamos</h2>
                    </div>
                    <div class="fb-list">
                        <div class="fb-item fb-orange">
                            <div class="fb-num">1</div>
                            <div>
                                <strong>Préstamos a domicilio</strong><br />
                                <span>Podés retirar hasta 6 libros durante 7 días.</span>
                            </div>
                        </div>
                        <div class="fb-item fb-purple">
                            <div class="fb-num">2</div>
                            <div>
                                <strong>Préstamo en sala de lectura</strong><br />
                                <span>Podés consultar en sala de lectura todo material de referencia como los diccionarios, publicaciones periódicas, folletos y ejemplares únicos. Recordá que tenés que devolverlo en el día.</span>
                            </div>
                        </div>
                        <div class="fb-item fb-cyan">
                            <div class="fb-num">3</div>
                            <div>
                                <strong>Préstamo de fin de semana</strong><br />
                                <span>Podrás retirar un libro que sea de consulta a sala el día viernes con devolución el día lunes por la mañana.</span>
                            </div>
                        </div>
                        <div class="fb-item fb-green">
                            <div class="fb-num">4</div>
                            <div>
                                <strong>Préstamo in situ</strong><br />
                                <span>Se realiza cuando necesitas consultar material que no sale del fondo bibliográfico como por ejemplo seminarios de licenciatura, tesis doctorales, o libros de edición agotada.</span>
                            </div>
                        </div>
                        <div class="fb-item fb-yellow">
                            <div class="fb-num">5</div>
                            <div>
                                <strong>Préstamos especiales</strong><br />
                                <span>Para el receso de verano podrás retirar hasta 6 libros durante el mes de enero. Las fechas y horarios se informan durante el mes de diciembre. Para el receso de invierno podrás retirar la misma cantidad de libros, por las dos semanas de vacaciones.</span>
                            </div>
                        </div>
                        <div class="fb-item fb-pink">
                            <div class="fb-num">6</div>
                            <div>
                                <strong>Devolución</strong><br />
                                <span>La devolución del material debes hacerla dentro de los plazos establecidos, de lo contrario se aplicará 5 (cinco) días de suspensión por cada día de atraso y 30 (treinta) días por cada día de atraso en el caso de no devolver material que no sale a domicilio.</span>
                            </div>
                        </div>
                        <div class="fb-item fb-red">
                            <div class="fb-num">7</div>
                            <div>
                                <strong>Renovación</strong><br />
                                <span>Podrás realizar la renovación del material a través de los siguientes canales: personalmente, telefónicamente, por correo o desde tu perfil del sistema integrado.</span>
                            </div>
                        </div>
                        <div className="fb-item fb-indigo">
                            <div className="fb-num">8</div>
                            <div>
                                <strong>Reservas</strong><br />
                                <span>
                                    Podrás reservar material bibliográfico de forma presencial en el departamento de Circulación o en forma virtual a través de tu perfil en el sistema de Bibliotecas UNCuyo.
                                    <a href="https://bibliotecas.uncuyo.edu.ar/explorador3/MyResearch/UserLogin" target="_blank" rel="noopener noreferrer"> https://bibliotecas.uncuyo.edu.ar/explorador3/MyResearch/UserLogin</a>
                                </span>
                            </div>
                        </div>
                        <div class="fb-item fb-blue fb-final">
                            <div>
                                <span className="fb-final-text">
                                    PARA ACCEDER A ESTOS SERVICIOS ES NECESARIO TRAMITAR TU<br />
                                    <span style={{ fontSize: "1.25em", display: "block", marginTop: "4px" }}><a href="https://docs.google.com/forms/d/e/1FAIpQLScT-2mVrkMdnnx5k8H8j-d4qCUhNQzgWtAG2RrKmXVJyaV9bA/viewform" target="_blank" rel="noopener noreferrer">CARNET DE BIBLIOTECA</a></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    );
}

export default ServicioPrestamo;