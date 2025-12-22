import React from 'react';
import { Link } from 'react-router-dom';
import './PieDePagina.css';
import { config } from '../../../utilidades/configuracion';

const PieDePagina: React.FC = () => {
    return (
        <footer className="pie-de-pagina">
            <div className="contenedor-footer">
                <div className="seccion-footer">
                    <div className="marca-footer">
                        <img className="logo-footer" src="/Logo Jesus Gonzalez.png" alt="Logo Jesús González" />
                        <div className="marca-textos">
                            <h3 className="titulo-footer">Jesús González</h3>
                            <div className="subtitulo-marca">Maestro del Acordeón Vallenato</div>
                        </div>
                    </div>
                    <p className="descripcion-footer">
                        Maestro del Acordeón Vallenato con más de 15 años de experiencia.
                        Llevando la música vallenata a los mejores escenarios del mundo.
                    </p>
                </div>

                <div className="seccion-footer">
                    <h4 className="subtitulo-footer">Enlaces</h4>
                    <nav className="enlaces-footer">
                        <Link to="/">Inicio</Link>
                        <Link to="/contrataciones">Contrataciones</Link>
                        <Link to="/videos">Videos</Link>
                        <Link to="/contacto">Contacto</Link>
                        <Link to="/link-in-bio">Links</Link>
                    </nav>
                </div>

                <div className="seccion-footer">
                    <h4 className="subtitulo-footer">Redes Sociales</h4>
                    <div className="redes-sociales">
                        <a href="https://youtube.com/@jesusgonzalez" target="_blank" rel="noopener noreferrer" className="red-social">
                            <span>YouTube</span>
                        </a>
                        <a href="https://instagram.com/jesusgonzalez" target="_blank" rel="noopener noreferrer" className="red-social">
                            <span>Instagram</span>
                        </a>
                        <a href={`https://wa.me/${config.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="red-social">
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Jesús González. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default PieDePagina;
