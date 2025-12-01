import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './estilos/globales.css';
import { aplicarEtiquetasGuardadas } from './utilidades/etiquetas';

aplicarEtiquetasGuardadas();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
