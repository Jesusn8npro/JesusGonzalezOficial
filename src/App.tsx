import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BarraNavegacion from './componentes/comunes/BarraNavegacion/BarraNavegacion';
import PieDePagina from './componentes/comunes/PieDePagina/PieDePagina';
import BotonWhatsappFlotante from './componentes/contrataciones/BotonWhatsappFlotante';

// Páginas
import Inicio from './paginas/inicio/Inicio';
import Contacto from './paginas/contacto/Contacto';
import Videos from './paginas/videos/Videos';
import LinkEnBio from './paginas/link-in-bio/LinkEnBio';
import Contrataciones from './paginas/contrataciones/Contrataciones';
import EtiquetasAdmin from './paginas/admin/EtiquetasAdmin';


function App() {
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
                        <Route path="/contrataciones" element={<Contrataciones />} />

                        {/* Admin Etiquetas */}
                        <Route path="/admin/etiquetas" element={<EtiquetasAdmin />} />

                        {/* Redirect de ruta antigua */}
                        <Route path="/jesus-gonzalez" element={<Navigate to="/contrataciones" replace />} />
                    </Routes>
                </main>
                {/* Widget global de WhatsApp - Directo sin modal */}
                <BotonWhatsappFlotante />
                <PieDePagina />
            </div>
        </Router>
    );
}

export default App;
