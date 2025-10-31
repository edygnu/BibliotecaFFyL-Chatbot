import React from "react";
import '../styles/components/pages/Hemeroteca.css';

const Hemeroteca = (props) => {
    return (
        <main>
            <div className="container-fluid">
                <div className="hemeroteca-main">
                    <br />
                    <p>
                        El vocablo "Hemeroteca" proviene del griego Ἡμέρα "Hēméra" (día) y θήκη "thēkē" (caja), es decir, la caja que alberga las publicaciones que aparecen en el día. Con el tiempo, este término ha evolucionado para referirse al recinto que guarda publicaciones con distintas periodicidad. El material hemerográfico presente en la Hemeroteca de la Biblioteca de la Facultad de Filosofía y Letras está especializado en humanidades y ha sido obtenido principalmente a través de intercambios con diversas universidades nacionales e internacionales, así como con organismos internacionales.
                    </p>
                    <p>
                        El fondo hemerográfico está compuesto por revistas, periódicos, boletines, anales y otros. En la actualidad, posee más de 6800 títulos de publicaciones periódicas, entre los que podemos encontrar revistas académicas, científicas y de divulgación, especializadas en humanidades.
                    </p>
                    <h3 className="hemeroteca-section-title">Acceso a portadas e índices de las publicaciones</h3>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="hemeroteca-card hemeroteca-card-small h-100">
                                <img src="img/periodicos.jpg" className="hemeroteca-card-img-top" alt="" />
                                <div className="hemeroteca-card-body">
                                    <h5 className="hemeroteca-card-title">
                                        <a href="https://drive.google.com/drive/u/2/folders/13MPJ-kwPJHGSquPsiFsVTr9zoqMH-vac" target="_blank" rel="noreferrer">Periódicos</a>
                                    </h5>
                                    <h6 className="hemeroteca-card-text">Contamos con periódicos nacionales y provinciales publicados a partir del siglo XIX.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hemeroteca-card hemeroteca-card-small h-100">
                                <img src="img/revistas.jpg" className="hemeroteca-card-img-top" alt="..." />
                                <div className="hemeroteca-card-body">
                                    <h5 className="hemeroteca-card-title">
                                        <a href="https://drive.google.com/drive/folders/1D2U2CRNolcXaDIYHwwRFvF5mi4igno_s?usp=drive_link" target="_blank" rel="noreferrer">Revistas</a>
                                    </h5>
                                    <h6 className="hemeroteca-card-text">Nos especializamos en revistas sobre humanidades.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hemeroteca-card hemeroteca-card-small h-100">
                                <img src="img/joyas.jpg" className="hemeroteca-card-img-top" alt="..." />
                                <div className="hemeroteca-card-body">
                                    <h5 className="hemeroteca-card-title">
                                        <a href="https://drive.google.com/drive/u/2/folders/1fNIA1B14j2gHJolfcYMOE0yI8z6Vtv22" target="_blank" rel="noreferrer">Joyas Hemerográficas</a>
                                    </h5>
                                    <h6 className="hemeroteca-card-text">Integran nuestro fondo publicaciones antiguas, raras, con valor patriomonial.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="hemeroteca-card hemeroteca-card-small h-100">
                                <img src="img/organismos.jpg" className="hemeroteca-card-img-top" alt="..." />
                                <div className="hemeroteca-card-body">
                                    <h5 className="hemeroteca-card-title">
                                        <a href="https://drive.google.com/drive/u/2/folders/11X1sThmPEax-1GbznWeeBIoWrCv6m9Fc" target="_blank" rel="noreferrer">Organismos Internacionales</a>
                                    </h5>
                                    <h6 className="hemeroteca-card-text">Las publicaciones periódicas sobre esta temática son clave para el estudio de las Relaciones Internacionales.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="hemeroteca-section-title">Consulta los listados de las publicaciones</h3>
                    <div className="container-fluid">
                        <div className="hemeroteca-titulos">
                            <div className="hemeroteca-titulos-lista">
                                <div className="hemeroteca-card mb-4">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="img/tema.jpg" className="img-fluid rounded-start" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="hemeroteca-card-body">
                                                <h5 className="hemeroteca-card-title">Listado por orden alfabético</h5>
                                                <div className="hemeroteca-button-listado">
                                                    <a href="https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vTT6rJ2FMYnvRsNxmWXtdDpbh62RSGHBkKHQIOqMQUF9D0yI5TtmDXMpnrg17BeTzBl7FsVml3uOGVN/pubhtml?pli=1#" target="_blank" rel="noreferrer" className="btn btn-primary enabled" tabIndex="-1" role="button" aria-disabled="true">acceder</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hemeroteca-card mb-4">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="img/alfabetico.jpg" className="img-fluid rounded-start" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="hemeroteca-card-body">
                                                <h5 className="hemeroteca-card-title">Listado por orden temático</h5>
                                                <div className="hemeroteca-button-listado">
                                                    <a href="https://docs.google.com/spreadsheets/d/10gYBpSUBX8YSTfeLZ4jM_aN2XTDoR8Ks--hwFNAEPgI/edit?pli=1#gid=380117057" target="_blank" rel="noreferrer" className="btn btn-primary enabled" tabIndex="-1" role="button" aria-disabled="true">acceder</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hemeroteca-card mb-4">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="img/analiticas.jpg" className="img-fluid rounded-start" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="hemeroteca-card-body">
                                                <h5 className="hemeroteca-card-title">Analíticas de publicaciones</h5>
                                                <div className="hemeroteca-button-listado">
                                                    <a href="https://drive.google.com/drive/folders/1U_8bkAiSARpXzc2cSlV1rt9gAA_3WV9k" target="_blank" rel="noreferrer" className="btn btn-primary enabled" tabIndex="-1" role="button" aria-disabled="true">acceder</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                        crossOrigin="anonymous"></script>
                </div>
            </div>
        </main>
    );
}

export default Hemeroteca;
