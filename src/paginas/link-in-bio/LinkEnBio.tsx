import React, { useEffect } from 'react';
import './LinkEnBio.css';

const LinkEnBio: React.FC = () => {
    // Al montar el componente, asegurarnos de que inicie arriba
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pagina-link-bio">
            {/* Notas musicales flotantes */}
            <div className="notas">
                <span className="nota">♩</span>
                <span className="nota">🪗</span>
                <span className="nota">♫</span>
                <span className="nota">♬</span>
                <span className="nota">♩</span>
                <span className="nota">🎵</span>
                <span className="nota">♫</span>
            </div>

            <div className="container-bio">
                {/* HEADER */}
                <div className="header-bio">
                    <div className="avatar-wrap">
                        <div className="avatar-ring2"></div>
                        <div className="avatar-ring"></div>
                        <div className="avatar"></div>
                    </div>
                    <div className="nombre">Jesús González</div>
                    <div className="nombre-sub">Acordeonero · Maestro Vallenato</div>
                    <div className="tagline">Músico · Educador · Innovador</div>
                    <div className="badges">
                        <span className="badge">🇨🇴 Vallenato</span>
                        <span className="badge">🎓 Academia</span>
                        <span className="badge">⚡ Tech</span>
                    </div>
                </div>

                {/* STATS */}
                <div className="stats">
                    <div className="stat">
                        <span className="stat-num">19.6K</span>
                        <span className="stat-lbl">Seguidores</span>
                    </div>
                    <div className="stat">
                        <span className="stat-num">400+</span>
                        <span className="stat-lbl">Estudiantes</span>
                    </div>
                    <div className="stat">
                        <span className="stat-num">575K</span>
                        <span className="stat-lbl">Vistas</span>
                    </div>
                </div>

                <div className="divider"></div>

                {/* ACADEMIA */}
                <div className="section-label">🎓 Aprende acordeón</div>

                <a href="https://academiavallenataonline.com" target="_blank" rel="noopener noreferrer" className="btn-main btn-featured">
                    <div className="btn-icon ic-academia">🎓</div>
                    <div className="btn-text">
                        <span className="btn-title">Academia Vallenata Online</span>
                        <span className="btn-sub">Aprende acordeón desde cero · 400+ estudiantes</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <div className="divider"></div>

                {/* ACORDEONES */}
                <div className="section-label">🪗 Tienda de acordeones</div>

                <a href="https://ventadeacordeones.com" target="_blank" rel="noopener noreferrer" className="btn-main btn-featured">
                    <div className="btn-icon ic-acordeon">🪗</div>
                    <div className="btn-text">
                        <span className="btn-title">Venta de Acordeones</span>
                        <span className="btn-sub">Corona III, Hohner, Gabbanelli y más</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <a href="https://wa.me/573144865310?text=Hola%20quiero%20información%20sobre%20los%20acordeones" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-whatsapp">💬</div>
                    <div className="btn-text">
                        <span className="btn-title">WhatsApp · Tienda de Acordeones</span>
                        <span className="btn-sub">+57 314 486 5310 · Cotiza ahora</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <div className="divider"></div>

                {/* ACADEMIA WA */}
                <div className="section-label">📲 Contacto Academia</div>

                <a href="https://wa.me/573144808408?text=Hola%20quiero%20información%20sobre%20la%20Academia%20Vallenata" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-whatsapp">🎓</div>
                    <div className="btn-text">
                        <span className="btn-title">WhatsApp · Academia Vallenata</span>
                        <span className="btn-sub">+57 314 480 8408 · Inscríbete hoy</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <div className="divider"></div>

                {/* VEHÍCULOS */}
                <div className="section-label">🚗 Venta de vehículos</div>

                <a href="https://mellevoesto.com" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-autos">🚗</div>
                    <div className="btn-text">
                        <span className="btn-title">Mel Le Voy a Esto · Vehículos</span>
                        <span className="btn-sub">Compra y venta de vehículos</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <a href="https://wa.me/573144096187?text=Hola%20quiero%20información%20sobre%20vehículos" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-whatsapp">💬</div>
                    <div className="btn-text">
                        <span className="btn-title">WhatsApp · Vehículos</span>
                        <span className="btn-sub">+57 314 409 6187 · Consulta disponibilidad</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <div className="divider"></div>

                {/* CONTRATACIONES */}
                <div className="section-label">🎤 Contrataciones artísticas</div>

                <a href="https://wa.me/573222312413?text=Hola%20quiero%20contratar%20a%20Jesús%20González" target="_blank" rel="noopener noreferrer" className="btn-main btn-featured">
                    <div className="btn-icon ic-mic">🎤</div>
                    <div className="btn-text">
                        <span className="btn-title">Contrataciones · Presentaciones</span>
                        <span className="btn-sub">+57 322 231 2413 · Serenatas · Shows · Eventos</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <div className="divider"></div>

                {/* CONTENIDO */}
                <div className="section-label">🎬 Mis canales</div>

                <a href="https://www.youtube.com/@AcademiaVallenataONLINE" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-youtube">▶️</div>
                    <div className="btn-text">
                        <span className="btn-title">YouTube · Academia Vallenata</span>
                        <span className="btn-sub">Tutoriales gratis de acordeón vallenato</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <a href="https://www.youtube.com/@JesusGonzalezTV" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-youtube">🎬</div>
                    <div className="btn-text">
                        <span className="btn-title">YouTube · Jesús González TV</span>
                        <span className="btn-sub">Canal personal · Música · Vida</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <a href="https://tiktok.com/@jesusgonzalezoficial7" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-tiktok">🎵</div>
                    <div className="btn-text">
                        <span className="btn-title">TikTok · @jesusgonzalezoficial7</span>
                        <span className="btn-sub">19.6K seguidores · Videos diarios</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <a href="https://instagram.com/jesusgonzalezoficial" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-instagram">📸</div>
                    <div className="btn-text">
                        <span className="btn-title">Instagram</span>
                        <span className="btn-sub">Reels · Fotos · Stories de vallenato</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <a href="https://facebook.com/jesusgonzalezoficial" target="_blank" rel="noopener noreferrer" className="btn-main">
                    <div className="btn-icon ic-facebook">👥</div>
                    <div className="btn-text">
                        <span className="btn-title">Facebook</span>
                        <span className="btn-sub">Comunidad vallenata colombiana</span>
                    </div>
                    <span className="btn-arrow">›</span>
                </a>

                <div className="divider"></div>

                {/* ACORDEÓN HERO */}
                <div className="section-label">🎮 Próximamente</div>

                <div className="btn-main btn-featured" style={{ cursor: 'default' }}>
                    <div className="btn-icon ic-hero">🎮</div>
                    <div className="btn-text">
                        <span className="btn-title">Acordeón Hero · Coming Soon</span>
                        <span className="btn-sub">El simulador de acordeón vallenato · Próximo lanzamiento</span>
                    </div>
                    <span className="btn-arrow" style={{ visibility: 'hidden' }}>›</span>
                </div>

                {/* REDES */}
                <div className="redes">
                    <a href="https://tiktok.com/@jesusgonzalezoficial7" target="_blank" rel="noopener noreferrer" className="red" title="TikTok">🎵</a>
                    <a href="https://instagram.com/jesusgonzalezoficial" target="_blank" rel="noopener noreferrer" className="red" title="Instagram">📸</a>
                    <a href="https://www.youtube.com/@AcademiaVallenataONLINE" target="_blank" rel="noopener noreferrer" className="red" title="YouTube Academia">▶️</a>
                    <a href="https://www.youtube.com/@JesusGonzalezTV" target="_blank" rel="noopener noreferrer" className="red" title="YouTube Personal">🎬</a>
                    <a href="https://facebook.com/jesusgonzalezoficial" target="_blank" rel="noopener noreferrer" className="red" title="Facebook">👥</a>
                    <a href="https://wa.me/573222312413" target="_blank" rel="noopener noreferrer" className="red" title="WhatsApp Contrataciones">💬</a>
                </div>

                {/* FOOTER */}
                <div className="footer">
                    <div className="footer-logo">Jesús González Oficial</div>
                    <div className="footer-copy">© 2026 · Bogotá, Colombia 🇨🇴</div>
                </div>
            </div>
        </div>
    );
};

export default LinkEnBio;
