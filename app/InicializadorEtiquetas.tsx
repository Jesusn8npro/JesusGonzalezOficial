'use client';

import { useEffect } from 'react';
import { aplicarEtiquetasGuardadas } from '../src/utilidades/etiquetas';

/**
 * Replica el `aplicarEtiquetasGuardadas()` que en la versión Vite
 * se ejecutaba en src/main.tsx. Debe correr SOLO en cliente porque
 * usa localStorage + document.
 */
export default function InicializadorEtiquetas() {
  useEffect(() => {
    aplicarEtiquetasGuardadas();
  }, []);

  return null;
}
