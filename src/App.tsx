import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BarraNavegacion from './componentes/comunes/BarraNavegacion/BarraNavegacion';
import PieDePagina from './componentes/comunes/PieDePagina/PieDePagina';
import BotonWhatsappFlotante from './componentes/contrataciones/BotonWhatsappFlotante';
import ModalReserva from './componentes/contrataciones/ModalReserva';

// Páginas
import Inicio from './paginas/inicio/Inicio';
import Contacto from './paginas/contacto/Contacto';
import Videos from './paginas/videos/Videos';
import LinkEnBio from './paginas/link-in-bio/LinkEnBio';
import Contrataciones from './paginas/contrataciones/Contrataciones';


function App() {
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    return (
        <Router>
            <div className="app-container">
                <BarraNavegacion />
                <main>
                    <Routes>
                        {/* Ruta principal - Inicio */}
                        <Route path="/" element={<Inicio />} />

                        {/* Contacto */}
                        <Route path="/contacto" element={<Contacto />} />

                        {/* Videos */}
                        <Route path="/videos" element={<Videos />} />

                        {/* Link en Bio */}
                        <Route path="/link-in-bio" element={<LinkEnBio />} />

                        {/* Contrataciones (Landing principal) */}
                        <Route path="/contrataciones" element={<Contrataciones onAbrirModal={abrirModal} />} />

                        {/* Redirect de ruta antigua */}
                        <Route path="/jesus-gonzalez" element={<Navigate to="/contrataciones" replace />} />
                    </Routes>
                </main>
                {/* Widget global de WhatsApp + Modal global */}
                <BotonWhatsappFlotante onAbrirModal={abrirModal} />
                <ModalReserva abierto={modalAbierto} alCerrar={cerrarModal} />
                <PieDePagina />
            </div>
        </Router>
    );
}

export default App;
