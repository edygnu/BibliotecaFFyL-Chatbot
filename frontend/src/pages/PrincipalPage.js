import React from "react";
import '../styles/components/pages/PrincipalPage.css';
import ChatbotWidget from "../components/ChatbotWidget";

const PrincipalPage = (props) => {
    return (
        <main>
            <div className="container-fluid" style={{ backgroundColor: 'white' }}>
                <ChatbotWidget />

                <div className="btn-existencias">
                    <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        CATÁLOGO
                    </a>
                </div>
                
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Consulte el catálogo de la Biblioteca</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            Nuestro fondo bibliográfico puede ser consultado a través del Explorador de recursos de información de la UNCUYO.
                        </div>
                        <div className="dropdown mt-3">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Acceder
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://bibliotecas.uncuyo.edu.ar/explorador3/Search/Results?sort=title&filter%5B%5D=building%3A%22Fac.+de+Filosof%C3%ADa+y+Letras%22&type=AllFields" target="_blank" rel="noreferrer">Explorador UNCuyo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="fichas">
                    <p>La Biblioteca de la Facultad de Filosofía y Letras está conformada por la Dirección y cuatro departamentos: Procesos Técnicos, Referencia e Informática Documental, Circulación y Hemeroteca. Cada uno de estos departamentos es una parte integral de la Biblioteca, esto asegura su correcto funcionamiento y ofrece servicios esenciales para la comunidad académica. Este sitio web proporciona los recursos y servicios necesarios para acceder a la información contenida en el acervo bibliográfico y hemerográfico.
                    </p>
                </div>
                
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Historia
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                La Biblioteca de la Facultad de Filosofía y Letras de la Universidad Nacional de Cuyo, fundada el 21 de marzo de 1939, ha evolucionado significativamente desde su creación. Con la integración de varias colecciones especializadas y la inauguración oficial, en el actual edificio, en 1970, la biblioteca ha acumulado una extensa colección bibliográfica y hemerográfica, que incluye valiosas ediciones históricas y modernos recursos digitales. Desde 2005, se ha enfocado en la digitalización de la producción académica-científica, ampliando su accesibilidad global.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingObjetivos">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseObjetivos" aria-expanded="false" aria-controls="flush-collapseObjetivos">
                                Objetivos
                            </button>
                        </h2>
                        <div id="flush-collapseObjetivos" className="accordion-collapse collapse" aria-labelledby="flush-headingObjetivos" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <strong>Misión:</strong> Sostener, optimizar y desarrollar servicios útiles para las funciones sustantivas de la Academia.<br /><br />
                                <strong>Visión:</strong> Incrementar el rol académico de nuestra unidad desde el tratamiento de la Ciencias de la Información en sus tres ramas principales: bibliotecología, archivística y museología.<br /><br />
                                <strong>Valores:</strong>
                                <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
                                    <li>Sujeción empírica a las Ciencias de la Información</li>
                                    <li>Pragmatismo</li>
                                    <li>Identidad institucional</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                Modelo de Gestión: Nodos de Información Bibliotecológicos (NIB)
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                La Biblioteca articula sus acciones en torno a programas que se corresponden con las funciones sustantivas de la Universidad, a los cuales se integran transversalmente los servicios bibliotecarios y las tareas técnico-administrativas. Cada programa se vincula con una Secretaría específica y se alinea con los Objetivos de Desarrollo Sostenible (ODS) 2030.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix"
                                aria-expanded="false"
                                aria-controls="flush-collapseSix"
                            >
                                Programas Estratégicos
                            </button>
                        </h2>
                        <div
                            id="flush-collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSix"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <strong>Isis – Nodos para la Función Sustantiva de Enseñanza</strong><br />
                                <em>Articulado con:</em> Secretaría de Gestión Estudiantil y de Egresados<br />
                                Promueve el aprendizaje autónomo, la alfabetización informacional y la organización de actividades académicas que acompañen el proceso de enseñanza-aprendizaje.<br />
                                <b>ODS vinculados:</b> 4, 9, 16
                                <hr />
                                <strong>Seshat – Nodos para la Función Sustantiva de Investigación</strong><br />
                                <em>Articulado con:</em> Secretaría de Investigación y Secretaría de Posgrado<br />
                                Acompaña las actividades de investigación docente y estudiantil, facilitando acceso a recursos especializados, formación en herramientas y visibilidad de la producción científica. Incluye la digitalización de tesis de posgrado.<br />
                                <b>ODS vinculados:</b> 4, 9, 17
                                <hr />
                                <strong>Bastet – Nodos para la Función Sustantiva de Extensión</strong><br />
                                <em>Articulado con:</em> Secretaría de Extensión Universitaria<br />
                                Contribuye a la vinculación con la comunidad externa, fomenta la participación y organiza eventos de divulgación científica y cultural, integrando a la Biblioteca en el entorno social.<br />
                                <b>ODS vinculados:</b> 4, 11, 17
                                <hr />
                                <strong>Nodos de Información para la Gestión Documental Integral</strong><br />
                                Complementario a los anteriores, este programa busca integrar prácticas bibliotecológicas, archivísticas y museológicas bajo una concepción amplia del "documento" (Buckland, 1997; Briet, 1951). Apunta a organizar, preservar y poner en valor el patrimonio documental de la Facultad.<br />
                                <b>ODS vinculados:</b> 11, 16
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="carouselPrincipal">
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                                        aria-label="Slide 5"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="img/sala.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/2.png" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/08.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/silenciosa.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="img/07.jpg" className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PrincipalPage;